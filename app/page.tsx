export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">

          <div className="inline-flex px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
            FlowForge AI
          </div>

          <h1 className="text-7xl font-bold leading-tight">
            Turn Your Business Into
            <span className="text-blue-500">
              {" "}An AI Powered Business
            </span>
          </h1>

          <p className="text-slate-400 text-xl mt-8 max-w-2xl">
            Generate Leads. Collect Reviews.
            Automate Tasks. Grow Faster.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-blue-600 px-6 py-3 rounded-xl">
              Start Free
            </button>

            <button className="border border-slate-700 px-6 py-3 rounded-xl">
              Watch Demo
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}