import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION;
  return NextResponse.json(
    { version: version ?? null },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
