"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [workspaces, setWorkspaces] = useState(0);

  async function loadStats() {
    const { count } = await supabase
      .from("workspaces")
      .select("*", { count: "exact", head: true });

    setWorkspaces(count || 0);
  }

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        Command Center
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl">
          <p className="text-slate-400">
            Workspaces
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {workspaces}
          </h2>
        </div>

      </div>
    </main>
  );
}