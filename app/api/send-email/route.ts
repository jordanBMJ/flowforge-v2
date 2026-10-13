import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, subject, message } =
    await req.json();

  const data = await resend.emails.send({
    from: "FlowForge <onboarding@yourdomain.com>",
    to: email,
    subject,
    html: `<p>${message}</p>`,
  });

  return NextResponse.json(data);
}