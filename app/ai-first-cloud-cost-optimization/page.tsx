'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-400 hover:text-white">← Back to home</Link>
        <h1 className="text-4xl font-bold mt-4">AI-first cloud cost optimization</h1>
        <p className="mt-4 text-slate-300">Automated spend analysis, waste detection, and rightsizing recommendations for multi-cloud estates.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Spend visibility</h2>
            <p className="mt-2 text-slate-400">Unified cost view across AWS, Azure, and GCP with anomaly detection.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Waste detection</h2>
            <p className="mt-2 text-slate-400">Idle resources, orphaned disks, and overprovisioned instances highlighted automatically.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Rightsizing</h2>
            <p className="mt-2 text-slate-400">AI recommends instance classes and reserved capacity to cut spend without risk.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Budget guardrails</h2>
            <p className="mt-2 text-slate-400">Policy-driven alerts and auto-actions to prevent overruns before they happen.</p>
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
