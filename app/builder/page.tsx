export default function BuilderPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        AI Builder
      </h1>

      <div className="bg-slate-900 p-6 rounded-2xl">

        <textarea
          placeholder="Describe what you want your AI system to do..."
          className="w-full h-48 bg-slate-800 p-4 rounded"
        />

        <button className="mt-4 bg-blue-600 px-6 py-3 rounded">
          Generate Workflow
        </button>

      </div>

    </main>
  );
}