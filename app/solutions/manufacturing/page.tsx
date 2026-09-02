import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Manufacturing Solutions | Zion Tech Group',
  description: 'Predictive maintenance, quality assurance, and supply chain operations for manufacturing.',
  openGraph: {
    title: 'Manufacturing Solutions | Zion Tech Group',
    description: 'Manufacturing delivery patterns and AI implementation guidance.',
    url: 'https://ziontechgroup.com/solutions/manufacturing/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing Solutions | Zion Tech Group',
    description: 'Manufacturing delivery patterns and AI implementation guidance.',
  },
  alternates: { canonical: '/solutions/manufacturing/' },
};


export default function ManufacturingSolutionsPage() {
  return (
<>
    <StandardPage
      title="Manufacturing"
      subtitle="Predictive maintenance, quality assurance, and supply chain operations with measurable outcomes."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'Manufacturing' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Maintenance prediction</h3>
          <p className="text-slate-400 text-sm">Sensor-driven failure prediction and maintenance planning.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Quality workflow</h3>
          <p className="text-slate-400 text-sm">Visual inspection, defect tracking, and quality gate automation.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Inventory automation</h3>
          <p className="text-slate-400 text-sm">Demand sensing, replenishment, and warehouse automation.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Supply chain ops</h3>
          <p className="text-slate-400 text-sm">Lead-time visibility, supplier risk, and logistics coordination.</p>
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
  </>
  );
}