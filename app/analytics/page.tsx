"use client";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-8">
        Analytics
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl">
          Workspaces
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          Automations
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          AI Agents
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          Reviews
        </div>

      </div>
    </main>
  );
}