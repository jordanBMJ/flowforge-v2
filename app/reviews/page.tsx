"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function ReviewPage() {
  const [link, setLink] = useState("");
  const [qr, setQr] = useState("");

  async function generateQR() {
    const qrCode = await QRCode.toDataURL(link);
    setQr(qrCode);
  }

  return (
    <main className="p-8 min-h-screen bg-slate-950 text-white">

      <input
        placeholder="Google Review Link"
        onChange={(e) => setLink(e.target.value)}
        className="w-full p-3 bg-slate-800 rounded"
      />

      <button
        onClick={generateQR}
        className="mt-4 bg-blue-600 px-6 py-3 rounded"
      >
        Generate QR
      </button>

      {qr && (
        <img
          src={qr}
          alt="QR Code"
          className="mt-8"
        />
      )}

    </main>
  );
}