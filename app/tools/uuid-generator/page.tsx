'use client';

import { useState } from 'react';

export default function UUIDTool() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(5);

  const generate = () => {
    const out: string[] = [];
    for (let i = 0; i < count; i++) {
      out.push('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }));
    }
    setUuids(out);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">UUID/GUID Generator</h1>
        <p className="text-slate-400 mb-6">Generate RFC 4122 compliant UUIDs.</p>

        <label className="block text-sm font-medium text-slate-300 mb-2">Count</label>
        <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-40 rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 focus:border-purple-500 focus:outline-none" />
        <button onClick={generate} className="ml-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Generate</button>

        <div className="mt-6 space-y-2">
          {uuids.map((u, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm font-mono text-slate-200 break-all">{u}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
