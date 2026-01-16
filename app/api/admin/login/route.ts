import { Client } from "pg";
import { NextResponse } from "next/server";
import { createAdminToken } from "@/lib/admin-auth";

export const runtime = "nodejs";

const COOKIE_NAME = "solvex_admin";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const LOGIN_RATE_LIMIT_MAX = Number(process.env.ADMIN_LOGIN_RATE_LIMIT_MAX ?? "10");
const LOGIN_RATE_LIMIT_WINDOW_SECONDS = Number(process.env.ADMIN_LOGIN_RATE_LIMIT_WINDOW_SECONDS ?? "600");

function getClientIp(req: Request) {
  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

async function ensureLoginRateLimitTable(client: Client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS admin_login_rate_limits (
      ip TEXT PRIMARY KEY,
      window_start TIMESTAMPTZ NOT NULL,
      count INTEGER NOT NULL DEFAULT 0
    );
  `);
}

async function applyLoginRateLimit(client: Client, ip: string) {
  const result = await client.query(
    `
      INSERT INTO admin_login_rate_limits (ip, window_start, count)
      VALUES ($1, NOW(), 1)
      ON CONFLICT (ip)
      DO UPDATE SET
        count = CASE
          WHEN admin_login_rate_limits.window_start < NOW() - make_interval(secs => $2)
            THEN 1
          ELSE admin_login_rate_limits.count + 1
        END,
        window_start = CASE
          WHEN admin_login_rate_limits.window_start < NOW() - make_interval(secs => $2)
            THEN NOW()
          ELSE admin_login_rate_limits.window_start
        END
      RETURNING count;
    `,
    [ip, LOGIN_RATE_LIMIT_WINDOW_SECONDS],
  );

  const count = Number(result.rows[0]?.count ?? 0);
  return count <= LOGIN_RATE_LIMIT_MAX;
}

function getBaseUrl(req: Request) {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "localhost:3000";
  const proto = req.headers.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

function getRedirectUrl(baseUrl: string, nextPath: string | null) {
  const fallback = new URL("/admin", baseUrl);
  if (!nextPath) {
    return fallback;
  }
  try {
    return new URL(nextPath, baseUrl);
  } catch {
    return fallback;
  }
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");
  const nextPath = String(formData.get("next") || "/admin");
  const ip = getClientIp(req);
  const baseUrl = getBaseUrl(req);

  const expectedUser = process.env.ADMIN_USER;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!expectedUser || !expectedPassword || !secret) {
    return NextResponse.json({ ok: false, error: "admin_credentials_missing" }, { status: 500 });
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ ok: false, error: "database_unavailable" }, { status: 500 });
    }
  } else {
    const client = new Client({
      connectionString,
      ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
    });
    await client.connect();
    try {
      await ensureLoginRateLimitTable(client);
      const allowed = await applyLoginRateLimit(client, ip);
      if (!allowed) {
        const url = new URL("/admin/login", baseUrl);
        url.searchParams.set("error", "rate_limited");
        url.searchParams.set("next", nextPath);
        return NextResponse.redirect(url, { status: 303 });
      }
    } finally {
      await client.end();
    }
  }

  if (username !== expectedUser || password !== expectedPassword) {
    const url = new URL("/admin/login", baseUrl);
    url.searchParams.set("error", "1");
    url.searchParams.set("next", nextPath);
    return NextResponse.redirect(url, { status: 303 });
  }

  const token = await createAdminToken({
    username,
    secret,
    issuedAt: Date.now(),
  });
  const response = NextResponse.redirect(getRedirectUrl(baseUrl, nextPath), { status: 303 });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_TTL_SECONDS,
    path: "/",
  });
  return response;
}
