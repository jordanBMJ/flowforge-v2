import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { phone, message } =
    await req.json();

  const response = await fetch(
    `https://graph.facebook.com/v21.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process