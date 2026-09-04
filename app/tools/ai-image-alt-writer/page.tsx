'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AIImageAltWriter() {
  const descRef = useRef<HTMLTextAreaElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = document.getElementById('write');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const desc = descRef.current?.value.trim() || '';
      if (!desc) { out.textContent = 'Enter a short description of the image.'; return; }
      const short = desc.length > 125 ? desc.slice(0, 122) + '...' : desc;
      out.textContent = `Short alt:\n${short}\n\nLong alt:\n${desc}\n\nTips:\n- Keep short alt concise and functional.\n- Use long alt only when image conveys essential information.\n- Avoid "image of" or "picture of" prefixes.`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">AI Image Alt Writer</h1>
        <p className="mt-2 text-slate-400">Paste a short image description and get accessible alt text suggestions.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Image description</label>
            <textarea ref={descRef} className="mt-2 w-full min-h-[180px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="A dashboard showing CPU, memory, and disk usage over time" />
            <button id="write" className="mt-4 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Write Alt Text</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Suggested alt text</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[220px] whitespace-pre-wrap">Output appears here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
