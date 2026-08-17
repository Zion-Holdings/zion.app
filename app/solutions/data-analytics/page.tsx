import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Data & Analytics Solutions | Zion Tech Group',
  description: 'Data pipelines, analytics, and business intelligence solutions for decision-ready insights.',
  openGraph: {
    title: 'Data & Analytics Solutions | Zion Tech Group',
    description: 'Data and analytics solutions for faster decisions.',
    url: 'https://ziontechgroup.com/solutions/data-analytics/',
    type: 'website',
  },
  alternates: { canonical: '/solutions/data-analytics/' },
};

export default function DataAnalyticsSolutionsPage() {
  return (
    <StandardPage
      title="Data & Analytics"
      subtitle="Governed pipelines, forecasting, and decision-ready dashboards."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Data & Analytics' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse data services', href: '/services?category=data', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services?category=data" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Data Engineering</h3>
          <p className="text-slate-400 text-sm">Pipelines, ingestion, and governed data foundations.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Analytics & AI</h3>
          <p className="text-slate-400 text-sm">Forecasting, anomaly detection, and decision intelligence.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=iot" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Telemetry & IoT</h3>
          <p className="text-slate-400 text-sm">Edge data, normalization, and streaming analytics.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
