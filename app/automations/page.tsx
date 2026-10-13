export default function WorkspacePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        Business Workspace
      </h1>

      <div className="bg-slate-900 p-6 rounded-2xl max-w-3xl">

        <h2 className="text-2xl font-bold mb-6">
          Business Profile
        </h2>

        <input
          placeholder="Business Name"
          className="w-full mb-4 p-3 rounded-lg bg-slate-800"
        />

        <input
          placeholder="Industry"
          className="w-full mb-4 p-3 rounded-lg bg-slate-800"
        />

        <input
          placeholder="Website"
          className="w-full mb-4 p-3 rounded-lg bg-slate-800"
        />

        <input
          placeholder="Business Phone"
          className="w-full mb-4 p-3 rounded-lg bg-slate-800"
        />

        <button className="bg-blue-600 px-6 py-3 rounded-lg">
          Save Workspace
        </button>

      </div>

    </main>
  );
}