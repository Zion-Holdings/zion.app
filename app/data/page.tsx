import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data & Analytics | Zion Tech Group',
  description: 'Data pipelines, analytics, and decision-ready dashboards from Zion Tech Group.',
  alternates: { canonical: '/data/' },
};

export default function DataPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Data & Analytics</h1>
      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        We turn raw data into reliable decisions with governed pipelines, forecasting models, and executive dashboards.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Analytics pipelines</h3>
          <p className="text-slate-400 text-sm">Clean ingestion, transformation, and warehouse patterns for trustworthy reporting.</p>
          <Link href="/services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Forecasting</h3>
          <p className="text-slate-400 text-sm">Demand, revenue, and risk forecasting with measurable accuracy and review cycles.</p>
          <Link href="/services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Dashboards</h3>
          <p className="text-slate-400 text-sm">Operational and executive dashboards designed for fast action, not just pretty charts.</p>
          <Link href="/services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore services →</Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <Link href="/contact" className="btn-primary text-center">Talk to an Engineer</Link>
        <Link href="/services" className="btn-secondary text-center">Browse Services</Link>
      </div>
    </div>
  );
}
