import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Vendors | Zion Tech Group',
  description: 'Vendor qualification, governance, and lifecycle management for IT environments.',
  openGraph: {
    title: 'IT Vendors | Zion Tech Group',
    description: 'Vendor qualification, governance, and lifecycle management for IT environments.',
    url: 'https://ziontechgroup.com/it-vendors/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Vendors | Zion Tech Group',
    description: 'Vendor qualification, governance, and lifecycle management for IT environments.',
  },
  alternates: { canonical: '/it-vendors/' },
};


export default function ItVendorsPage() {
  return (
<>
    <StandardPage
      title="IT Vendors"
      subtitle="Vendor qualification, governance, and lifecycle management for IT environments."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'IT Vendors' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Vendor programs reduce risk and keep IT environments consistent. Zion Tech Group brings qualification, governance, and operational discipline.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Qualification</h3>
            <p className="text-slate-400 text-sm">Security, reliability, and support standards for production-ready vendors.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Lifecycle</h3>
            <p className="text-slate-400 text-sm">Renewal, offboarding, and change management with clear ownership.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Risk controls</h3>
            <p className="text-slate-400 text-sm">Vendor risk scoring, access review, and incident escalation paths.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Reporting</h3>
            <p className="text-slate-400 text-sm">Monthly scorecards and executive reviews for vendor performance.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link href="/contact/" className="btn-primary text-center">Talk to us</Link>
          <Link href="/services/" className="btn-secondary text-center">Explore services</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}