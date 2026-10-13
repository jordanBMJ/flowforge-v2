export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-8">
        Grow Your Business
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            More Leads
          </h2>
          <p className="text-slate-400 mt-2">
            AI qualifies leads automatically.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            More Reviews
          </h2>
          <p className="text-slate-400 mt-2">
            Automatically collect Google reviews.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            More Bookings
          </h2>
          <p className="text-slate-400 mt-2">
            AI books appointments while you sleep.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            AI Customer Support
          </h2>
          <p className="text-slate-400 mt-2">
            Answer customer questions instantly.
          </p>
        </div>

      </div>
    </main>
  );
}