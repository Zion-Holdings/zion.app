'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-400 hover:text-white">← Back to home</Link>
        <h1 className="text-4xl font-bold mt-4">Micro-SaaS qualification rubric</h1>
        <p className="mt-4 text-slate-300">Evaluate buildability, demand, monetization, retention, and operational cost before launch.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Buildability</h2>
            <p className="mt-2 text-slate-400">MVP scope, integrations, and delivery confidence.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Demand signal</h2>
            <p className="mt-2 text-slate-400">Search volume, competitor gap, and early access interest.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Monetization</h2>
            <p className="mt-2 text-slate-400">ARPU, pricing model, and conversion pathway.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Retention</h2>
            <p className="mt-2 text-slate-400">Usage depth, churn risk, and expansion revenue.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/services/?category=micro-saas" className="px-4 py-2 rounded-lg bg-purple-600 text-white">Micro-SaaS services</Link>
          <Link href="/contact/" className="px-4 py-2 rounded-lg border border-slate-700 text-white">Validation call</Link>
        </div>
      </div>
    </div>
  );
}
