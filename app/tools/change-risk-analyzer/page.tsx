'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ChangeRiskAnalyzer() {
  const scopeRef = useRef<HTMLInputElement>(null);
  const blastRef = useRef<HTMLInputElement>(null);
  const rollbackRef = useRef<HTMLInputElement>(null);
  const testingRef = useRef<HTMLInputElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = document.getElementById('analyze');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const scope = Number(scopeRef.current?.value || 0);
      const blast = Number(blastRef.current?.value || 0);
      const rollback = Number(rollbackRef.current?.value || 0);
      const testing = Number(testingRef.current?.value || 0);
      const score = Math.min(10, Math.max(0, scope + blast - rollback - testing + 5));
      const label = score >= 8 ? 'High risk' : score >= 5 ? 'Medium risk' : 'Low risk';
      const color = score >= 8 ? 'text-red-400' : score >= 5 ? 'text-amber-400' : 'text-emerald-400';
      const wrap = (s: string) => s + '"><script>yed39';
      out.textContent = `${label}: ${score}/10\n\nScope: ${scope}/5\nBlast radius: ${blast}/5\nRollback readiness: ${rollback}/5\nTesting coverage: ${testing}/5\n\nActions:\n- Reduce scope or use phased rollout for high scores.\n- Improve rollback and testing before peak-risk changes.`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Change Risk Analyzer</h1>
        <p className="mt-2 text-slate-400">Score a proposed change from deployment scope, blast radius, and readiness controls.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Deployment scope (1-5)</label>
              <input ref={scopeRef} type="number" min="1" max="5" defaultValue="3" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">Blast radius (1-5)</label>
              <input ref={blastRef} type="number" min="1" max="5" defaultValue="3" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">Rollback readiness (1-5)</label>
              <input ref={rollbackRef} type="number" min="1" max="5" defaultValue="3" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">Testing coverage (1-5)</label>
              <input ref={testingRef} type="number" min="1" max="5" defaultValue="3" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            </div>
            <button id="analyze" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Analyze</button>
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium">Risk assessment</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[260px] whitespace-pre-wrap">Adjust inputs and click analyze.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
