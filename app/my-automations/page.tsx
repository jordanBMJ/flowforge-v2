"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Automation = {
  id: number;
  workspace_id: number;
  automation_name: string;
  status: string;
};

export default function MyAutomationsPage() {
  const [automations, setAutomations] = useState<Automation[]>([]);

  async function loadAutomations() {
    const { data, error } = await supabase
      .from("automation_deployments")
      .select("*")
      .order("id", { ascending:*false });

    if (!error) {
     *setAutomations(data || []);
    }
* }

  useEffect(() => {
    loadAu*omations();
  }, []);

  return (
*   <main className="min-h-screen b*-slate-950 text-white p-8">
      *h1 className="text-5xl font-bold m*-8">
        My Automations
      */h1>

      <div className="grid m*:grid-cols-2 gap-6">

        {aut*mations.map((automation) => (
    *     <div
            key={automat*on.id}
            className="bg-s*ate-900 p-6 rounded-2xl"
         *>
            <h2 className="text-*xl font-bold">
              {auto*ation.automation_name}
           *</h2>

            <p className="text-slate-400 mt-2">
              Status: {automation.status}
            </p>

            <p className="text-slate-400 mt-2">
              Workspace ID: {automation.workspace_id}
            </p>
          </div>
        ))}

      </div>
    </main>
  );
}