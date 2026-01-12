import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || ""),
      at: new Date().toISOString(),
    };

    console.log("[CONTACT]", JSON.stringify(payload));
    return NextResponse.redirect(new URL("/?sent=1", req.url), { status: 303 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
