"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AgentsPage() {
  const [workspaceId, setWorkspaceId] = useState("");

  async function deployAgent(name: string) {
    const { error } = await supabase
      .from("ai_agents")
      .insert([
        {
          workspace_id: Number(workspaceId),
          agent_name: name,
        },
      ]);

    if (error) {
      alert(error.message);
    } else {
      alert(`${name} Created`);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        AI Agents
      </h1>

      <input
        placeholder="Workspace ID"
        className="w-full max-w-sm p-3 rounded bg-slate-800 mb-8"
        onChange={(e) => setWorkspaceId(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-6">

        <button
          onClick={() => deployAgent("AI Receptionist")}
          className="bg-slate-900 p-6 rounded-2xl"
        >
          AI Receptionist
        </button>

        <button
          onClick={() => deployAgent("Sales Agent")}
          className="bg-slate-900 p-6 rounded-2xl"
        >
          Sales Agent
        </button>

        <button
          onClick={() => deployAgent("Customer Support")}
          className="bg-slate-900 p-6 rounded-2xl"
        >
          Customer Support
        </button>

        <button
          onClick={() => deployAgent("Review Agent")}
          className="bg-slate-900 p-6 rounded-2xl"
        >
          Review Agent
        </button>

      </div>

    </main>
  );
}