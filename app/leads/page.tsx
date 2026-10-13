"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LeadsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function addLead() {
    const { error } = await supabase
      .from("leads")
      .insert([
        {
          name,
          email,
        },
      ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Lead Added Successfully");
      setName("");
      setEmail("");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Leads CRM
      </h1>

      <div className="bg-slate-900 p-6 rounded-2xl max-w-xl">
        <input
          placeholder="Customer Name"
          className="w-full p-3 mb-4 rounded bg-slate-800"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Customer Email"
          className="w-full p-3 mb-4 rounded bg-slate-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={addLead}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Add Lead
        </button>
      </div>
    </main>
  );
}