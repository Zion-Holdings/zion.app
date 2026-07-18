'use client';

import { useState } from 'react';

export default function UrlEncoderTool() {
  const [text, setText] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');

  const encode = () => setEncoded(encodeURIComponent(text));
  const decode = () => {
    try { setDecoded(decodeURIComponent(text)); } catch { setDecoded('Invalid encoded URL'); }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">URL Encoder/Decoder</h1>
        <p className="text-slate-400 mb-6">Safely encode and decode URL parameters.</p>

        <label className="block text-sm font-medium text-slate-300 mb-2">Input</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Hello World" className="w-full h-40 rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono text-slate-100 focus:border-purple-500 focus:outline-none" />

        <div className="mt-3 flex gap-3">
          <button onClick={encode} className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Encode</button>
          <button onClick={decode} className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold hover:bg-slate-700">Decode</button>
        </div>

        <label className="block text-sm font-medium text-slate-300 mt-8 mb-2">Result</label>
        <pre className="w-full h-40 overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono whitespace-pre-wrap text-slate-200">{encoded || decoded || 'Output'}</pre>
      </div>
    </main>
  );
}
