'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-400 hover:text-white">← Back to home</Link>
        <h1 className="text-4xl font-bold mt-4">AI-first incident response in 2026</h1>
        <p className="mt-4 text-slate-300">Automated alert triage, runbook execution, and postmortem generation for faster MTTR.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">AI triage</h2>
            <p className="mt-2 text-slate-400">Reduce alert fatigue with LLM-based prioritization and anomaly detection.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Runbook automation</h2>
            <p className="mt-2 text-slate-400">Execute mitigations with confidence scores and human-in-the-loop options.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Postmortem generation</h2>
            <p className="mt-2 text-slate-400">Create timelines, root-cause summaries, and action items automatically.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Compliance mapping</h2>
            <p className="mt-2 text-slate-400">Map incidents to SOC2, HIPAA, and PCI requirements with audit-ready evidence.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/services/" className="px-4 py-2 rounded-lg bg-purple-600 text-white">Explore services</Link>
          <Link href="/contact/" className="px-4 py-2 rounded-lg border border-slate-700 text-white">Talk to us</Link>
        </div>
      </div>
    </div>
  );
}
