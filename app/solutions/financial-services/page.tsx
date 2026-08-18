import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Financial Services Solutions | Zion Tech Group',
  description: 'RegTech, fraud detection, trading bots, and KYC automation for financial services.',
  openGraph: {
    title: 'Financial Services Solutions | Zion Tech Group',
    description: 'Financial services delivery patterns and AI implementation guidance.',
    url: 'https://ziontechgroup.com/solutions/financial-services/',  siteName: 'Zion Tech Group',

    type: 'website',
  },  twitter: {
    card: 'summary_large_image',
    title: 'Financial Services Solutions | Zion Tech Group',
    description: 'Financial services delivery patterns and AI implementation guidance.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/solutions/financial-services/' },
};

export default function FinancialServicesSolutionsPage() {
  return (
    <StandardPage
      title="Financial Services"
      subtitle="Fraud defense, compliance, and payment intelligence with measurable outcomes."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'Financial Services' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Anomaly detection</h3>
          <p className="text-slate-400 text-sm">Real-time fraud and anomaly detection with explainable alerts.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Document processing</h3>
          <p className="text-slate-400 text-sm">Structured intake for contracts, KYC, and compliance documentation.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Reporting automation</h3>
          <p className="text-slate-400 text-sm">Automated regulatory and management reporting with audit evidence.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Payment intelligence</h3>
          <p className="text-slate-400 text-sm">Routing, risk scoring, and operational insights for payment flows.</p>
        </div>
      </div>
    </StandardPage>
  );
}
