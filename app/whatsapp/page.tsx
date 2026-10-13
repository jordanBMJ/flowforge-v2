"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function WhatsAppPage() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function saveMessage() {
    const { error } = await supabase
      .from("whatsapp_messages")
      .insert([
        {
          phone_number: phone,
          message,
        },
      ]);

    if (error) {
      alert(error.message);
    } else {
      alert("WhatsApp Message Saved");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        WhatsApp Campaigns
      </h1>

      <input
        placeholder="Phone Number"
        className="w-full bg-slate-800 p-3 rounded mb-4"
        onChange={(e) => setPhone(e.target.value)}
      />

      <textarea
        placeholder="Message"
        className="w-full h-40 bg-slate-800 p-4 rounded"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={saveMessage}
        className="mt-4 bg-green-600 px-6 py-3 rounded"
      >
        Save WhatsApp Message
      </button>

    </main>
  );
}