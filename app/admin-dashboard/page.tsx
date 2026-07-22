'use client';

import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-white mb-3">Admin Dashboard</h1>
        <p className="text-slate-400 mb-6">Operational overview for Zion Tech Group internal services.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4">
            <h2 className="text-white font-semibold mb-2">Build & Verify</h2>
            <p className="text-slate-400 text-sm">Last build state: ok. Artifacts generated successfully.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4">
            <h2 className="text-white font-semibold mb-2">Outreach Scan</h2>
            <p className="text-slate-400 text-sm">High-frequency automation with LLM support and dedupe enabled.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/status/service-health/" className="text-purple-400 hover:text-purple-300">Open Service Health →</Link>
        </div>
      </div>
    </div>
  );
}
