import { NextResponse } from "next/server";
import { createAdminToken } from "@/lib/admin-auth";

export const runtime = "nodejs";

const COOKIE_NAME = "solvex_admin";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function getRedirectUrl(requestUrl: string, nextPath: string | null) {
  const fallback = new URL("/admin", requestUrl);
  if (!nextPath) {
    return fallback;
  }
  try {
    return new URL(nextPath, requestUrl);
  } catch {
    return fallback;
  }
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");
  const nextPath = String(formData.get("next") || "/admin");

  const expectedUser = process.env.ADMIN_USER;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!expectedUser || !expectedPassword || !secret) {
    return NextResponse.json({ ok: false, error: "admin_credentials_missing" }, { status: 500 });
  }

  if (username !== expectedUser || password !== expectedPassword) {
    const url = new URL("/admin/login", req.url);
    url.searchParams.set("error", "1");
    url.searchParams.set("next", nextPath);
    return NextResponse.redirect(url, { status: 303 });
  }

  const token = await createAdminToken({
    username,
    secret,
    issuedAt: Date.now(),
  });
  const response = NextResponse.redirect(getRedirectUrl(req.url, nextPath), { status: 303 });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_TTL_SECONDS,
    path: "/admin",
  });
  return response;
}
