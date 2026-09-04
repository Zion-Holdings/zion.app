
'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white mb-3">Low-Code Workflow Automation for Brazilian IT in 2026</h1>
        <p className="text-slate-400 mb-6">A practical guide for Brazilian IT teams adopting low-code automation while keeping governance and compliance.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Workflow Mapping</h2>
            <p className="text-slate-300 text-sm">Identify repetitive support and ops workflows with highest time savings.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Platform Selection</h2>
            <p className="text-slate-300 text-sm">Choose low-code tools with local data-residency alignment and audit logs.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Pilot & Scale</h2>
            <p className="text-slate-300 text-sm">Run a 30-day pilot, measure ticket deflection, then expand to finance and HR.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/contact/" className="text-purple-400 hover:text-purple-300">Talk to our automation team →</Link>
        </div>
      </div>
    </div>
  );
}
