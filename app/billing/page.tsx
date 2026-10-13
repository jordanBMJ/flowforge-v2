export default function BillingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        Billing
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Starter
          </h2>
          <p>R499/month</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Growth
          </h2>
          <p>R999/month</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Pro
          </h2>
          <p>R1999/month</p>
        </div>

      </div>

    </main>
  );
}