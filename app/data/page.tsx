import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Data & Analytics | Zion Tech Group',
  description: 'Data pipelines, analytics, and decision-ready dashboards from Zion Tech Group.',
  openGraph: {
    title: 'Data & Analytics | Zion Tech Group',
    description: 'Governed data pipelines, forecasting, and executive dashboards.',
    url: 'https://ziontechgroup.com/data/',
    type: 'website',
  },
  alternates: { canonical: '/data/' },
};

export default function DataPage() {
  return (
    <StandardPage
      title="Data & Analytics"
      subtitle="We turn raw data into reliable decisions with governed pipelines, forecasting models, and executive dashboards."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Data & Analytics' },
      ]}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Analytics pipelines</h3>
          <p className="text-slate-400 text-sm">Clean ingestion, transformation, and warehouse patterns for trustworthy reporting.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Forecasting</h3>
          <p className="text-slate-400 text-sm">Demand, revenue, and risk forecasting with measurable accuracy and review cycles.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Dashboards</h3>
          <p className="text-slate-400 text-sm">Operational and executive dashboards designed for fast action, not just pretty charts.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <a href="/contact/" className="btn-primary text-center">Talk to an Engineer</a>
        <a href="/services/" className="btn-secondary text-center">Browse Services</a>
      </div>
    </StandardPage>
  );
}
