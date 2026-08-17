import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Data & Analytics | Zion Tech Group',
  description: 'Data and analytics capabilities from Zion Tech Group: pipelines, governance, forecasting, dashboards, and warehouse modernization.',
  openGraph: {
    title: 'Data & Analytics | Zion Tech Group',
    description: 'Data and analytics capabilities and delivery guidance from Zion Tech Group.',
    url: 'https://ziontechgroup.com/data/',
    type: 'website',
  },
  alternates: { canonical: '/data/' },
};

export default function DataPage() {
  return (
    <StandardPage
      title="Data & Analytics"
      subtitle="Pipelines, governance, forecasting, dashboards, and warehouse modernization."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Data & Analytics' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/solutions/data-analytics" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">Data & Analytics Solutions</h3>
          <p className="text-slate-400 text-sm">Explore data and analytics capabilities and implementation patterns.</p>
          <span className="text-purple-300 text-xs mt-3 inline-block">Browse →</span>
        </Link>
        <Link href="/blog/data-warehouse-modernization-2026/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">Data Warehouse Modernization</h3>
          <p className="text-slate-400 text-sm">Guidance and playbooks for modernizing your data platform.</p>
          <span className="text-purple-300 text-xs mt-3 inline-block">Read more →</span>
        </Link>
        <Link href="/blog/data-analytics-platform-modern-enterprise-2026/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">Analytics Platform Guidance</h3>
          <p className="text-slate-400 text-sm">Modern enterprise data analytics patterns and governance.</p>
          <span className="text-purple-300 text-xs mt-3 inline-block">Read more →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
