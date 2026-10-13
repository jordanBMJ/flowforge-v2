export default function ReportsPage() {
  return (
    <main className="text-white">

      <h1 className="text-5xl font-bold mb-8">
        Reports
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
          Automation Runs
        </div>

      </div>

    </main>
  );
}