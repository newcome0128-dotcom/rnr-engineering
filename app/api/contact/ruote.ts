import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const email = body?.email?.toString().trim();
  const message = body?.message?.toString().trim();

  if (!email || !message) {
    return NextResponse.json(
      { ok: false, error: "Email and message are required." },
      { status: 400 }
    );
  }

  // TODO (later): send via Zoho SMTP using Nodemailer
  // For now, return success so the frontend works.
  return NextResponse.json({ ok: true });
}
