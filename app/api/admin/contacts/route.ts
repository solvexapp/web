import { cookies } from "next/headers";
import { Client } from "pg";
import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-auth";

export const runtime = "nodejs";

const COOKIE_NAME = "solvex_admin";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function getBaseUrl(req: Request) {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "localhost:3000";
  const proto = req.headers.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

async function ensureTable(client: Client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      message TEXT NOT NULL,
      ip TEXT,
      user_agent TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}

async function requireAdmin(req: Request) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    return false;
  }
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) {
    return false;
  }
  const payload = await verifyAdminToken({
    token,
    secret,
    maxAgeSeconds: SESSION_TTL_SECONDS,
  });
  return Boolean(payload);
}

export async function POST(req: Request) {
  const baseUrl = getBaseUrl(req);
  if (!(await requireAdmin(req))) {
    return NextResponse.redirect(new URL("/admin/login", baseUrl), { status: 303 });
  }

  const formData = await req.formData();
  const action = String(formData.get("action") || "");
  const id = Number(formData.get("id") || 0);

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return NextResponse.redirect(new URL("/admin?error=database_unavailable", baseUrl), { status: 303 });
  }

  const client = new Client({
    connectionString,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
  });
  await client.connect();

  try {
    await ensureTable(client);
    if (action === "clear") {
      await client.query("TRUNCATE contact_messages;");
    } else if (action === "delete" && Number.isFinite(id) && id > 0) {
      await client.query("DELETE FROM contact_messages WHERE id = $1;", [id]);
    }
  } finally {
    await client.end();
  }

  return NextResponse.redirect(new URL("/admin", baseUrl), { status: 303 });
}
