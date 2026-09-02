'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function APIResponseVisualizerPage() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = document.getElementById('viz');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const raw = inputRef.current?.value || '';
      let data: any = null;
      try { data = JSON.parse(raw); } catch (e) { out.textContent = 'Invalid JSON'; return; }
      const keys: string[] = [];
      const size = raw.length;
      const maxDepth = (() => { const seen = new Set<any>(); const f=(v:any,d:number)=>{if(!v||typeof v!=='object')return d;if(seen.has(v))return d;seen.add(v);return Math.max(d,...Object.keys(v).map(k=>f((v as any)[k],d+1)));}; return f(data,1); })();
      const collect = (o: any, depth=0) => { if(!o||typeof o!=='object') return; Object.keys(o).forEach(k => { if(keys.length < 40) keys.push(`${'  '.repeat(depth)}${k}`); if((o as any)[k] && typeof (o as any)[k] === 'object') collect((o as any)[k], depth+1); }); };
      collect(data);
      out.textContent = `Keys:\n- ${keys.join('\n- ') || 'None'}\n\nSize: ${size} chars\nMax depth: ${maxDepth}`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">API Response Visualizer</h1>
        <p className="mt-2 text-slate-400">Paste JSON to inspect keys, nesting depth, and payload size.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">JSON response</label>
            <textarea ref={inputRef} className="mt-2 w-full min-h-[320px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-xs text-white focus:border-emerald-500 focus:outline-none" placeholder='{"data": {"items": [...]}}' />
            <button id="viz" className="mt-4 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Visualize</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Analysis</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[320px] whitespace-pre-wrap">Paste JSON and click visualize.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
