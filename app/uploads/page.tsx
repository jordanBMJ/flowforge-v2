"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UploadsPage() {
  const [file, setFile] = useState<File | null>(null);

  async function upload() {
    if (!file) return;

    const { error } = await supabase.storage
      .from("knowledge-files")
      .upload(
        `${Date.now()}-${file.name}`,
        file
      );

    if (error) {
      alert(error.message);
    } else {
      alert("Uploaded");
    }
  }

  return (
    <main className="p-8 bg-slate-950 min-h-screen text-white">

      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files?.[0] || null
          )
        }
      />

      <button
        onClick={upload}
        className="bg-blue-600 px-6 py-3 rounded mt-4"
      >
        Upload
      </button>

    </main>
  );
}