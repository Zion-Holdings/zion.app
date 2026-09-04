'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-400 hover:text-white">← Back to home</Link>
        <h1 className="text-4xl font-bold mt-4">AI data contract governance in 2026</h1>
        <p className="mt-4 text-slate-300">Schema enforcement, lineage tracking, and policy-as-code for trustworthy AI pipelines.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Schema enforcement</h2>
            <p className="mt-2 text-slate-400">Contract tests and validation gates before data enters model training.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Lineage tracking</h2>
            <p className="mt-2 text-slate-400">End-to-end provenance from source to feature store to model.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Policy-as-code</h2>
            <p className="mt-2 text-slate-400">Automated PII masking, retention rules, and access policies.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Audit-ready reporting</h2>
            <p className="mt-2 text-slate-400">Evidence packs for compliance reviews and model risk management.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/services/?category=data" className="px-4 py-2 rounded-lg bg-purple-600 text-white">Data services</Link>
          <Link href="/contact/" className="px-4 py-2 rounded-lg border border-slate-700 text-white">Talk to us</Link>
        </div>
      </div>
    </div>
  );
}
