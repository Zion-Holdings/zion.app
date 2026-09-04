'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white mb-3">Low-Latency Observability & Edge Monitoring</h1>
        <p className="text-slate-400 mb-6">Monitoring patterns for distributed IT teams that require fast signal-to-noise and edge-aware alerts.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Signal Design</h2>
            <p className="text-slate-300 text-sm">Reduce alert fatigue with SLO-based thresholds and smart grouping.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Edge Telemetry</h2>
            <p className="text-slate-300 text-sm">Collect lightweight metrics at the edge with backend correlation.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Runbooks</h2>
            <p className="text-slate-300 text-sm">Actionable remediation steps tied directly to detected failure modes.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/contact/" className="text-purple-400 hover:text-purple-300">Talk to observability experts →</Link>
        </div>
      </div>
    </div>
  );
}
