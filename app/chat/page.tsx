"use client";

import { useState } from "react";

export default function ChatPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  async function generate() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    const data = await res.json();

    setResponse(
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No Response"
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        FlowForge AI
      </h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-40 bg-slate-800 p-4 rounded"
      />

      <button
        onClick={generate}
        className="bg-blue-600 px-6 py-3 rounded mt-4"
      >
        Generate
      </button>

      <div className="mt-8 bg-slate-900 p-6 rounded">
        {response}
      </div>

    </main>
  );
}