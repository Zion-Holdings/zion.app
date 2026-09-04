'use client';

import { useState } from 'react';

export default function RegexBuilderTool() {
  const [pattern, setPattern] = useState('');
  const [text, setText] = useState('');
  const [matches, setMatches] = useState<string[]>([]);

  const run = () => {
    try {
      const re = new RegExp(pattern, 'g');
      const m = text.match(re);
      setMatches(m ? [...m] : []);
    } catch (e) {
      setMatches(['Invalid regex: ' + ((e as Error).message || String(e))]);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Tools</a>
        <h1 className="text-3xl font-bold mb-2">Regex Builder</h1>
        <p className="text-slate-400 mb-6">Test regular expressions with live results.</p>
        <label className="block text-sm font-medium text-slate-300 mb-2">Pattern</label>
        <input value={pattern} onChange={e=>setPattern(e.target.value)} placeholder="[a-z]+" className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-slate-100 focus:border-purple-500 focus:outline-none" />
        <label className="block text-sm font-medium text-slate-300 mt-4 mb-2">Text</label>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste text..." className="w-full h-40 rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono text-slate-100 focus:border-purple-500 focus:outline-none" />
        <button onClick={run} className="mt-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Run</button>
        <pre className="mt-6 h-40 overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono whitespace-pre-wrap text-slate-200">{matches.join('\n') || 'No results'}</pre>
      </div>
    </main>
  );
}
