'use client';
import { useState } from 'react';
export default function ToolPage() {
  const [value, setValue] = useState('');
  const [out, setOut] = useState('');
  const action = () => setOut(value || 'Output will appear here');
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
        <p className="text-slate-400 mb-6">Interactive utility.</p>
        <textarea value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Paste or type input..." className="w-full h-40 rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono text-slate-100 focus:border-purple-500 focus:outline-none" />
        <button onClick={action} className="mt-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Run</button>
        <pre className="mt-6 h-40 overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono whitespace-pre-wrap text-slate-200">{out}</pre>
      </div>
    </main>
  );
}
