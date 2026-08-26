'use client';

import { useState } from 'react';

export const metadata = {
  title: 'QR Code Generator — Zion Tech Group',
  description: 'Generate QR codes instantly from text or URLs. Download PNG directly in your browser.',
  alternates: { canonical: '/tools/qr-code-generator/' },
};

export default function QrCodeGeneratorPage() {
  const [text, setText] = useState('');
  const [qrUrl, setQrUrl] = useState('');

  const generate = () => {
    if (!text.trim()) return;
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(text)}`;
    setQrUrl(api);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">QR Code Generator</h1>
      <p className="mt-2 text-slate-300">
        Create a QR code from any text or URL.
      </p>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="https://ziontechgroup.com"
          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200"
        />
        <button
          onClick={generate}
          className="mt-3 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-500"
        >
          Generate
        </button>
      </div>

      {qrUrl && (
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
          <img src={qrUrl} alt="QR Code" className="mx-auto h-64 w-64 object-contain" />
          <a
            href={qrUrl}
            download="qr-code.png"
            className="mt-4 block text-center text-sm text-purple-300 hover:text-purple-200"
          >
            Download PNG
          </a>
        </div>
      )}
    </div>
  );
}
