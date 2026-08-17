import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Zion Tech Group',
  description:
    'Flexible pricing and engagement models for AI and IT services, with transparent cost structures, payment terms, and ROI expectations.',
  openGraph: {
    title: 'Pricing | Zion Tech Group',
    description:
      'Flexible pricing and engagement models for AI and IT services, with transparent cost structures and ROI expectations.',
    url: 'https://ziontechgroup.com/pricing/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/pricing/' },
};

export default function PricingPage() {
  return (
    <PageTemplate
      title="Pricing & Engagement Models"
      description="Flexible engagement models with transparent cost structures, payment terms, and ROI expectations — so you can scale AI and IT services predictably."
      category="Transparent Pricing"
      heroIcon="💎"
      actions={[
        { label: 'Request proposal', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Pricing', href: '/pricing' },
      ]}
      layout="hero"
    >
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-2">Time and Materials</h2>
          <p className="text-slate-300 leading-relaxed">Hourly or daily rates for staffing, advisory, and iterative delivery. Best for evolving scopes and fast engagement starts.</p>
        </div>
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-2">Fixed Price</h2>
          <p className="text-slate-300 leading-relaxed">Scoped deliverables with milestone payments and acceptance criteria. Best for well-defined outcomes and predictable budgets.</p>
        </div>
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-2">Retainer</h2>
          <p className="text-slate-300 leading-relaxed">Ongoing managed services with predictable monthly spend and SLA terms. Best for continuous improvement and support coverage.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
