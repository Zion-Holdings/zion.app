import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Pricing & Engagement Models | Zion Tech Group',
  description: 'Flexible engagement models: project-based, retainer, and managed services. Predictable pricing for AI and infrastructure projects.',
  openGraph: {
    title: 'Pricing & Engagement Models | Zion Tech Group',
    description: 'Flexible engagement models designed for predictable delivery.',
    url: 'https://ziontechgroup.com/pricing/',
    type: 'website',
  },
  alternates: { canonical: '/pricing/' },
};

export default function PricingPage() {
  return (
    <StandardPage
      title="Pricing & Engagement Models"
      subtitle="Predictable pricing for AI, cloud, security, and automation work."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Pricing' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Project-based</h3>
          <p className="text-slate-400 text-sm">Fixed-scope delivery with milestones and acceptance criteria.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Retainer</h3>
          <p className="text-slate-400 text-sm">Ongoing support with predictable response times and backlog triage.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Managed services</h3>
          <p className="text-slate-400 text-sm">Outcome-based operations with SLAs and embedded delivery teams.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
        <a href="/contact/" className="btn-primary text-center">Request quote</a>
        <a href="/services/" className="btn-secondary text-center">Browse services</a>
      </div>
    </StandardPage>
  );
}
