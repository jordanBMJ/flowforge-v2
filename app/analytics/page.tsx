"use client";

import { useState } from "react";

export default function TemplatesPage() {
  const [workspaceId, setWorkspaceId] = useState("");

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-8">
        Templates
      </h1>

      <input
        value={workspaceId}
        onChange={(e) => setWorkspaceId(e.target.value)}
        placeholder="Workspace ID"
        className="w-full max-w-sm p-3 bg-slate-800 rounded"
      />
    </main>
  );
}