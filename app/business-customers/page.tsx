import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Customers | Zion Tech Group',
  description: 'AI and IT delivery models for business customers with measurable outcomes.',
  openGraph: {
    title: 'Enterprise Customers | Zion Tech Group',
    description: 'AI and IT delivery models for business customers with measurable outcomes.',
    url: 'https://ziontechgroup.com/business-customers/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Customers | Zion Tech Group',
    description: 'AI and IT delivery models for business customers with measurable outcomes.',
  },
  alternates: { canonical: '/business-customers/' },
};


export default function BusinessCustomersPage() {
  return (
<>
    <StandardPage
      title="Enterprise Customers"
      subtitle="AI and IT delivery models for business customers with measurable outcomes."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Enterprise Customers' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Business customers gain faster delivery, lower operational risk, and measurable outcomes through focused AI and IT programs.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Program delivery</h3>
            <p className="text-slate-400 text-sm">Outcome-based delivery with accountable milestones and production-ready systems.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Managed services</h3>
            <p className="text-slate-400 text-sm">Ongoing operations, monitoring, and support for AI and IT environments.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Cost control</h3>
            <p className="text-slate-400 text-sm">Budget visibility, forecasting, and cost-optimization practices for long-running programs.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Adoption</h3>
            <p className="text-slate-400 text-sm">Change management, training, and enablement to ensure lasting organizational impact.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link href="/contact/" className="btn-primary text-center">Start a project</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}