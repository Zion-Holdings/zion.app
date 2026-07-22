'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function DemoHub() {
  useEffect(() => {
    const btn = document.getElementById('summarize');
    const out = document.getElementById('summary');
    if (!btn || !out) return;
    btn.addEventListener('click', () => {
      const textInput: HTMLTextAreaElement | null = document.getElementById('text') as HTMLTextAreaElement | null;
      const text = textInput?.value || '';
      const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
      const picked = sentences.slice(0, 3);
      out.textContent = picked.join(' ') || 'Paste text to generate an extractive summary.';
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="mb-2 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Home</Link>
        <h1 className="text-3xl font-bold">Interactive Demos</h1>
        <p className="mt-2 text-slate-400">Preview lightweight versions of Zion capabilities.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium">Input text</label>
            <textarea id="text" className="mt-2 w-full min-h-[220px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="Paste a paragraph or article..." />
            <button id="summarize" className="mt-4 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Run Demo</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Output</label>
            <div id="summary" className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[220px] whitespace-pre-wrap">
              Output appears here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
