'use client';

import Link from 'next/link';

export default function PartnerPortalPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-white mb-3">Partner Portal</h1>
        <p className="text-slate-400 mb-6">Exclusive partner resources, co-selling materials, and enablement.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4">
            <h2 className="text-white font-semibold mb-2">Co-Selling Playbooks</h2>
            <p className="text-slate-400 text-sm">Curated resources for joint go-to-market programs.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4">
            <h2 className="text-white font-semibold mb-2">Operations</h2>
            <p className="text-slate-400 text-sm">Service health and deal support integrations.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/contact/" className="text-purple-400 hover:text-purple-300">Contact Partner Team →</Link>
        </div>
      </div>
    </div>
  );
}
