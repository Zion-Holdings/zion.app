import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions | Zion Tech Group',
  description: 'Zion Tech Group solutions by industry and capability.',
  openGraph: {
    title: 'Page',
    description: metadata.description,
    url: 'https://ziontechgroup.com',
    type: 'website',
  },
  alternates: { canonical: '/solutions/' },
};

export default function DataAnalyticsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions</h1>
      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        Industry-specific and capability-based solutions built for measurable outcomes.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Data analytics</h3>
          <p className="text-slate-400 text-sm">Pipelines, forecasting, and decision-ready dashboards.</p>
          <Link href="/data" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Data & Analytics →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI & automation</h3>
          <p className="text-slate-400 text-sm">Assistants, copilots, and autonomous operations.</p>
          <Link href="/ai-services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">AI Services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Cloud & DevOps</h3>
          <p className="text-slate-400 text-sm">Migration, CI/CD, and reliability at scale.</p>
          <Link href="/services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Services →</Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <Link href="/contact" className="btn-primary text-center">Talk to an Engineer</Link>
        <Link href="/services" className="btn-secondary text-center">All Services</Link>
      </div>
    </div>
  );
}
