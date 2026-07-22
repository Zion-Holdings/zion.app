'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function IncidentSeverityCalculator() {
  const userRef = useRef<HTMLInputElement>(null);
  const revenueRef = useRef<HTMLInputElement>(null);
  const dataRef = useRef<HTMLInputElement>(null);
  const slaRef = useRef<HTMLInputElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = document.getElementById('calc');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const user = Number(userRef.current?.value || 0);
      const revenue = Number(revenueRef.current?.value || 0);
      const data = Number(dataRef.current?.value || 0);
      const sla = Number(slaRef.current?.value || 0);
      const score = user + revenue + data + sla;
      const sev = score >= 15 ? 'SEV1' : score >= 10 ? 'SEV2' : score >= 5 ? 'SEV3' : 'SEV4';
      const color = score >= 15 ? 'text-red-400' : score >= 10 ? 'text-amber-400' : score >= 5 ? 'text-blue-400' : 'text-slate-400';
      out.textContent = `Severity: ${sev}\nScore: ${score}/20\n\nUser impact: ${user}/5\nRevenue risk: ${revenue}/5\nData sensitivity: ${data}/5\nSLA urgency: ${sla}/5\n\nResponse guidance:\n- SEV1: page all on-call, war room, executive updates every 15m\n- SEV2: senior eng lead, update every 30m\n- SEV3: standard incident, update hourly\n- SEV4: backlog/normal queue, next business day`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Incident Severity Calculator</h1>
        <p className="mt-2 text-slate-400">Score impact dimensions to derive a reproducible incident severity.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">User impact (1-5)</label>
              <input ref={userRef} type="number" min="1" max="5" defaultValue="1" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">Revenue risk (1-5)</label>
              <input ref={revenueRef} type="number" min="1" max="5" defaultValue="1" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">Data sensitivity (1-5)</label>
              <input ref={dataRef} type="number" min="1" max="5" defaultValue="1" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">SLA urgency (1-5)</label>
              <input ref={slaRef} type="number" min="1" max="5" defaultValue="1" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            </div>
            <button id="calc" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Calculate</button>
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium">Result</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[260px] whitespace-pre-wrap">Adjust inputs and click calculate.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
