"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Document = {
  id: number;
  workspace_id: number;
  document_name: string;
  document_type: string;
};

export default function KnowledgePage() {
  const [workspaceId, setWorkspaceId] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [documents, setDocuments] = useState<Document[]>([]);

  async function loadDocuments() {
    const { data } = await supabase
      .from("knowledge_documents")
      .select("*")
      .order("id", { ascending: false });

    setDocuments(data || []);
  }

  async function saveDocument() {
    const { error } = await supabase
      .from("knowledge_documents")
      .insert([
        {
          workspace_id: Number(workspaceId),
          document_name: documentName,
          document_type: "PDF",
        },
      ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Document Added");
      loadDocuments();
    }
  }

  useEffect(() => {
    loadDocuments();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        Knowledge Base
      </h1>

      <input
        placeholder="Workspace ID"
        className="w-full max-w-md p-3 rounded bg-slate-800 mb-4"
        onChange={(e) => setWorkspaceId(e.target.value)}
      />

      <input
        placeholder="Document Name"
        className="w-full max-w-md p-3 rounded bg-slate-800 mb-4"
        onChange={(e) => setDocumentName(e.target.value)}
      />

      <button
        onClick={saveDocument}
        className="bg-blue-600 px-6 py-3 rounded"
      >
        Add Document
      </button>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-slate-900 p-6 rounded-2xl"
          >
            <h2 className="text-xl font-bold">
              {doc.document_name}
            </h2>

            <p className="text-slate-400 mt-2">
              Workspace: {doc.workspace_id}
            </p>
          </div>
        ))}

      </div>

    </main>
  );
}