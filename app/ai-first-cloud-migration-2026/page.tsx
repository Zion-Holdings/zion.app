'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-400 hover:text-white">← Back to home</Link>
        <h1 className="text-4xl font-bold mt-4">AI-first cloud migration in 2026</h1>
        <p className="mt-4 text-slate-300">Accelerate legacy modernization with AI-driven workload mapping, cutover planning, and validation.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Workload mapping</h2>
            <p className="mt-2 text-slate-400">Automated discovery and dependency analysis across on-prem and cloud estates.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Cutover planning</h2>
            <p className="mt-2 text-slate-400">Risk-ranked migration sequences with rollback and validation gates.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Cost forecasting</h2>
            <p className="mt-2 text-slate-400">AI estimates post-migration cloud spend with confidence intervals.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Operational readiness</h2>
            <p className="mt-2 text-slate-400">Security, compliance, and SRE playbooks generated before cutover.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/services/?category=cloud" className="px-4 py-2 rounded-lg bg-purple-600 text-white">Cloud services</Link>
          <Link href="/contact/" className="px-4 py-2 rounded-lg border border-slate-700 text-white">Talk to us</Link>
        </div>
      </div>
    </div>
  );
}
