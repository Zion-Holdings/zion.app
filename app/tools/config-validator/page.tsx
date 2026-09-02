'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ConfigValidator() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = document.getElementById('validate');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const text = inputRef.current?.value || '';
      const issues: string[] = [];
      if (!text.trim()) issues.push('Empty config');
      if (/^\s*[^#\s].*:.*;/.test(text)) issues.push('Likely semicolon ending; YAML/JSON usually does not use ;');
      const opens = (text.match(/{/g) || []).length;
      const closes = (text.match(/}/g) || []).length;
      if (opens !== closes) issues.push(`Mismatched braces: {=${opens}, }=${closes}`);
      const brackets = (text.match(/\[/g) || []).length;
      const bcloses = (text.match(/\]/g) || []).length;
      if (brackets !== bcloses) issues.push(`Mismatched brackets: [=${brackets}, ]=${bcloses}`);
      const quoted = (text.match(/"([^"]*)"/g) || []).length;
      const singles = (text.match(/'([^']*)'/g) || []).length;
      out.textContent = issues.length
        ? `Issues:\n- ${issues.join('\n- ')}`
        : `No obvious issues detected.\nQuoted strings: ${quoted}\nSingle quoted: ${singles}\nBraces balanced: ${opens}\nBrackets balanced: ${brackets}`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Config Validator</h1>
        <p className="mt-2 text-slate-400">Paste a YAML-like or JSON-like config and get basic sanity checks.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Config</label>
            <textarea ref={inputRef} className="mt-2 w-full min-h-[320px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="service:\n  port: 8080\n  replicas: 3" />
            <button id="validate" className="mt-4 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Validate</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Result</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[320px] whitespace-pre-wrap">Paste a config and click validate.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
