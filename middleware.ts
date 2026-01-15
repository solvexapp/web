import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAdminToken } from "./lib/admin-auth";

const ADMIN_PATH_PREFIX = "/admin";
const LOGIN_PATH = "/admin/login";
const COOKIE_NAME = "solvex_admin";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL(LOGIN_PATH, request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith(ADMIN_PATH_PREFIX)) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === LOGIN_PATH) {
    return NextResponse.next();
  }

  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      return new NextResponse("ADMIN_SESSION_SECRET missing", { status: 500 });
    }
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return redirectToLogin(request);
  }

  const payload = await verifyAdminToken({
    token,
    secret,
    maxAgeSeconds: SESSION_TTL_SECONDS,
  });
  if (!payload) {
    return redirectToLogin(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
