export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        Results Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl">
          Leads Generated
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          Reviews Collected
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          Appointments Booked
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          AI Conversations
        </div>

      </div>

    </main>
  );
}