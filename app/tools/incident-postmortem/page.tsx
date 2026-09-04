'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function IncidentPostmortem() {
  useEffect(() => {
    const btn = document.getElementById('generate');
    const out = document.getElementById('output');
    if (!btn || !out) return;
    btn.onclick = () => {
      const title = (document.getElementById('title') as HTMLInputElement).value || 'Untitled incident';
      const impact = (document.getElementById('impact') as HTMLInputElement).value || 'Impact unknown';
      const root = (document.getElementById('root') as HTMLInputElement).value || 'Root cause pending';
      const timeline = (document.getElementById('timeline') as HTMLInputElement).value || 'Timeline pending';
      const actions = (document.getElementById('actions') as HTMLInputElement).value || 'No action items';
      const date = new Date().toISOString().slice(0, 10);
      out.textContent = `Postmortem Draft — ${title}\nDate: ${date}\n\nSummary\n- Incident: ${title}\n- Impact: ${impact}\n- Root cause: ${root}\n\nTimeline\n- ${timeline.replace(/\n/g, '\n- ')}\n\nAction Items\n- ${actions.replace(/\n/g, '\n- ')}\n\nNext Steps\n- Review action owners and due dates\n- Add pre-deploy checks and runbook updates`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Incident Postmortem</h1>
        <p className="mt-2 text-slate-400">Enter incident inputs to generate a structured postmortem draft.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input id="title" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="API latency spike during deploy" />
            </div>
            <div>
              <label className="block text-sm font-medium">Impact</label>
              <input id="impact" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="20% checkout failures, 4m duration" />
            </div>
            <div>
              <label className="block text-sm font-medium">Root cause</label>
              <textarea id="root" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="Misconfigured connection pool after schema migration" />
            </div>
            <div>
              <label className="block text-sm font-medium">Timeline</label>
              <textarea id="timeline" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="14:02 - alert fired; 14:10 - rollback; 14:25 - verified recovery" />
            </div>
            <div>
              <label className="block text-sm font-medium">Action items</label>
              <textarea id="actions" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="Add connection-pool validation in deploy pipeline" />
            </div>
            <button id="generate" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Generate Draft</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Draft</label>
            <div id="output" className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[440px] whitespace-pre-wrap">Output will appear here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
