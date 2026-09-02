'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function JWTInspector() {
  useEffect(() => {
    const btn = document.getElementById('decode');
    const h = document.getElementById('header');
    const p = document.getElementById('payload');
    if (!btn || !h || !p) return;
    function b64urlDecode(s) {
      let r = s.replace(/-/g, '+').replace(/_/g, '/');
      while (r.length % 4) r += '=';
      try { return decodeURIComponent(atob(r).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')); } catch (e) { return atob(r); }
    }
    btn.onclick = () => {
      const raw = (document.getElementById('token') as HTMLInputElement).value.trim();
      const parts = raw.split('.');
      try {
        h.textContent = JSON.stringify(JSON.parse(b64urlDecode(parts[0])), null, 2);
        p.textContent = JSON.stringify(JSON.parse(b64urlDecode(parts[1])), null, 2);
      } catch (e) {
        h.textContent = 'Invalid JWT';
        p.textContent = 'Invalid JWT';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">JWT Inspector</h1>
        <p className="mt-2 text-slate-400">Paste a JWT to decode header and payload locally in your browser.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">JWT</label>
            <textarea id="token" className="mt-2 w-full min-h-[180px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-xs text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." />
            <button id="decode" className="mt-4 w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Inspect</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Header</label>
            <pre id="header" className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-3 font-mono text-xs text-slate-200 min-h-[180px] whitespace-pre-wrap">—</pre>
            <label className="mt-4 block text-sm font-medium">Payload</label>
            <pre id="payload" className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-3 font-mono text-xs text-slate-200 min-h-[260px] whitespace-pre-wrap">—</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
