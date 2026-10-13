export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        Team Members
      </h1>

      <input
        placeholder="Invite Email"
        className="w-full max-w-md bg-slate-800 p-3 rounded mb-4"
      />

      <button
        className="bg-blue-600 px-6 py-3 rounded"
      >
        Invite
      </button>

    </main>
  );
}