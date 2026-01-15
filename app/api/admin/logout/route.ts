import { NextResponse } from "next/server";

const COOKIE_NAME = "solvex_admin";

export async function POST(req: Request) {
  const response = NextResponse.redirect(new URL("/admin/login", req.url), { status: 303 });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/admin",
  });
  return response;
}
