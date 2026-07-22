'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CloudCostEstimator() {
  const providerRef = useRef(null);
  const instancesRef = useRef(null);
  const hourlyRef = useRef(null);
  const storageRef = useRef(null);
  const egressRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    const btn = document.getElementById('estimate');
    const out = document.getElementById('result') || outputRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const provider = providerRef.current?.value || 'AWS';
      const instances = Number(instancesRef.current?.value || 0);
      const hourly = Number(hourlyRef.current?.value || 0);
      const storage = Number(storageRef.current?.value || 0);
      const egress = Number(egressRef.current?.value || 0);
      const storageRate = provider === 'AWS' ? 0.023 : provider === 'GCP' ? 0.02 : 0.018;
      const compute = instances * hourly * 730;
      const storageCost = storageRate * storage;
      const egressCost = provider === 'AWS' ? 0.09 * egress : provider === 'GCP' ? 0.085 * egress : 0.08 * egress;
      const total = compute + storageCost + egressCost;
      const tips = [];
      if (instances > 5) tips.push('Consider reserved/savings plans or committed use discounts.');
      if (storage > 1000) tips.push('Use cold storage tiers for infrequently accessed data.');
      if (egress > 5000) tips.push('Review CDN and egress topology; consider in-region delivery.');
      out.textContent = `Provider: ${provider}\nCompute: $${compute.toFixed(2)}\nStorage: $${storageCost.toFixed(2)}\nEgress: $${egressCost.toFixed(2)}\nTotal: $${total.toFixed(2)}\n\nTips:\n- ${tips.join('\n- ') || 'No tips for this profile.'}`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Cloud Cost Estimator</h1>
        <p className="mt-2 text-slate-400">Enter workload parameters to compare cloud costs and get optimization tips.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div>
            <label className="block text-sm font-medium">Provider</label>
            <select ref={providerRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
              <option>AWS</option>
              <option>GCP</option>
              <option>Azure</option>
            </select>
            <label className="mt-4 block text-sm font-medium">Instances</label>
            <input ref={instancesRef} type="number" min="0" defaultValue="3" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            <label className="mt-4 block text-sm font-medium">Avg instance hourly $</label>
            <input ref={hourlyRef} type="number" min="0" step="0.01" defaultValue="0.12" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            <label className="mt-4 block text-sm font-medium">Monthly storage (GB)</label>
            <input ref={storageRef} type="number" min="0" defaultValue="250" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            <label className="mt-4 block text-sm font-medium">Egress (GB)</label>
            <input ref={egressRef} type="number" min="0" defaultValue="800" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            <button id="estimate" className="mt-4 w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Estimate</button>
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium">Estimate</label>
            <div id="result" className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[260px] whitespace-pre-wrap">
              Adjust inputs and click estimate...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
