'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-400 hover:text-white">← Back to home</Link>
        <h1 className="text-4xl font-bold mt-4">AI-first DevSecOps in 2026</h1>
        <p className="mt-4 text-slate-300">Shift-left security, automated compliance, and AI-driven remediation for modern engineering orgs.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Security scanning</h2>
            <p className="mt-2 text-slate-400">Automated SAST, DAST, and dependency checks pre-merge.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">AI triage</h2>
            <p className="mt-2 text-slate-400">Reduce false positives with LLM-based prioritization and fix suggestions.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Compliance automation</h2>
            <p className="mt-2 text-slate-400">SOC2, HIPAA, and PCI audit evidence generated automatically.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Incident response</h2>
            <p className="mt-2 text-slate-400">AI-driven runbooks and postmortem summaries to reduce MTTR.</p>
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
