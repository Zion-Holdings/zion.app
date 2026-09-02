'use client';

import { useEffect } from 'react';
import Link from 'next/link';


export default function ReleaseNotesGenerator() {
  useEffect(() => {
    const btn = document.getElementById('generate');
    const out = document.getElementById('output');
    if (!btn || !out) return;
    btn.onclick = () => {
      const title = (document.getElementById('title') as HTMLInputElement).value || 'New Release';
      const changes = (document.getElementById('changes') as HTMLInputElement).value || '';
      const items = changes.split(/\n+/).map(s => s.trim()).filter(Boolean);
      const fixes = items.filter(i => /fix|bug|patch|issue/i.test(i));
      const features = items.filter(i => !/fix|bug|patch|issue/i.test(i));
      const date = new Date().toISOString().slice(0,10);
      out.textContent = `# ${title}\nReleased: ${date}\n\n## What's new\n${features.map(i => `- ${i}`).join('\n') || '- -'}\n\n## Bug fixes\n${fixes.map(i => `- ${i}`).join('\n') || '- -'}\n\n## Upgrade notes\n- Review affected integrations before deploying.\n- Roll back target: previous stable tag.`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Release Notes Generator</h1>
        <p className="mt-2 text-slate-400">Paste change items and generate clean user-facing release notes.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Release title</label>
              <input id="title" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., v2.4.0" />
            </div>
            <div>
              <label className="block text-sm font-medium">Changes</label>
              <textarea id="changes" className="mt-2 w-full min-h-[260px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="One change per line, for example:\nAdded dark mode toggle\nFixed checkout timeout\nImproved search ranking" />
            </div>
            <button id="generate" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Generate</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Notes</label>
            <div id="output" className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[360px] whitespace-pre-wrap">Output appears here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
