import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Solutions | Zion Tech Group',
    description: 'Zion Tech Group solutions by industry and capability.',
    openGraph: {
    title: 'Solutions | Zion Tech Group',
    description: 'Zion Tech Group solutions by industry and capability.',
    url: 'https://ziontechgroup.com/solutions/',
    type: 'website',
  },
    twitter: {
    card: 'summary_large_image',
    title: 'Solutions | Zion Tech Group',
    description: 'Zion Tech Group solutions by industry and capability.',
  },
    alternates: { canonical: '/solutions/' },
};

export default function DataAnalyticsPage() {
  return (
    <StandardPage
      title="Solutions"
      subtitle="Industry-specific and capability-based solutions built for measurable outcomes."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions' },
      ]}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Data analytics</h3>
            <p className="text-slate-400 text-sm">Pipelines, forecasting, and decision-ready dashboards.</p>
            <Link href="/data/" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Data & Analytics →</Link>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">AI & automation</h3>
            <p className="text-slate-400 text-sm">Assistants, copilots, and autonomous operations.</p>
            <Link href="/ai-services/" className="text-purple-300 text-xs font-semibold mt-3 inline-block">AI Services →</Link>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Cloud & DevOps</h3>
            <p className="text-slate-400 text-sm">Migration, CI/CD, and reliability at scale.</p>
            <Link href="/services/" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Services →</Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link href="/contact/" className="btn-primary text-center">Talk to an Engineer</Link>
          <Link href="/services/" className="btn-secondary text-center">All Services</Link>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-bold text-white mb-3">Related resources</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/tools/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Developer Tools</h3>
            <p className="text-slate-400 text-xs">Free utilities for JSON, JWT, regex, QR, and text processing.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Use tools →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}
