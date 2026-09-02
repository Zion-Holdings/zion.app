import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Data & Analytics Solutions | Zion Tech Group',
  description: 'Data pipelines, governance, warehousing, and analytics solutions from Zion Tech Group.',
  openGraph: {
    title: 'Data & Analytics Solutions | Zion Tech Group',
    description: 'Data and analytics solutions with measurable outcomes.',
    url: 'https://ziontechgroup.com/solutions/data-analytics/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data & Analytics Solutions | Zion Tech Group',
    description: 'Data and analytics solutions with measurable outcomes.',
  },
  alternates: { canonical: '/solutions/data-analytics/' },
};


export default function DataAnalyticsSolutionsPage() {
  return (
<>
    <StandardPage
      title="Data & Analytics"
      subtitle="Pipelines, governance, forecasting, dashboards, and warehouse modernization."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'Data & Analytics' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse data services', href: '/services/?category=data', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services/?category=data" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Modern Data Stack</h3>
          <p className="text-slate-400 text-sm">Ingestion, transformation, and warehouse modernization.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Analytics & AI</h3>
          <p className="text-slate-400 text-sm">Dashboards, forecasting, and decision support from governed data.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Governance & Privacy</h3>
          <p className="text-slate-400 text-sm">Data quality, lineage, access control, and compliance mapping.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">What you can expect</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Clear data ownership and quality targets before implementation.</li>
          <li>Modular pipeline design with observability and retry semantics.</li>
          <li>Governance controls that satisfy audit and privacy requirements.</li>
          <li>Executive-ready reporting on adoption, quality, and impact.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Talk to an engineer</Link>
          <Link href="/services/?category=data" className="btn-secondary text-center">Browse data services</Link>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">Related offerings</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/tools/json-formatter/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">JSON Formatter</h3>
            <p className="text-slate-400 text-xs mb-3">Inspect and validate payloads during pipeline development.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Open tool →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-3">Data engineering, analytics, and governance guidance.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}