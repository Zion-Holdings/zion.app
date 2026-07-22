'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';


export default function MarkdownTableGenerator() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = document.getElementById('generate');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const text = inputRef.current?.value || '';
      const lines = text.split(/\n+/).map(l => l.trim()).filter(Boolean);
      if (!lines.length) { out.textContent = 'Enter rows of text or comma-separated values.'; return; }
      const rows = lines.map(line => line.split(',').map(cell => cell.trim()));
      const cols = Math.max(...rows.map(r => r.length));
      const padded = rows.map(r => { const row = [...r]; while(row.length < cols) row.push(''); return row; });
      const widths = padded.reduce((acc, row) => row.map((cell, i) => Math.max(acc[i] || 0, cell.length)), [] as number[]);
      const format = (row: string[]) => '| ' + row.map((cell, i) => cell.padEnd(widths[i])).join(' | ') + ' |';
      const sep = '| ' + widths.map(w => '-'.repeat(w)).join(' | ') + ' |';
      out.textContent = [format(padded[0]), sep, ...padded.slice(1).map(format)].join('\n');
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Markdown Table Generator</h1>
        <p className="mt-2 text-slate-400">Paste CSV-like text and get a markdown table.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Input</label>
            <textarea ref={inputRef} className="mt-2 w-full min-h-[220px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="Name,Role,Team\nAlex,DevOps,Platform\nSam,SRE,Infrastructure" />
            <button id="generate" className="mt-4 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Generate</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Markdown</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[220px] whitespace-pre-wrap">Output appears here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
