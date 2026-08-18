import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Partners | Zion Tech Group',
  description: 'Technology and delivery partners of Zion Tech Group.',
  openGraph: {
    title: 'Partners | Zion Tech Group',
    description: 'Partner ecosystem for AI, IT, and automation engagements.',
    url: 'https://ziontechgroup.com/partners/',  siteName: 'Zion Tech Group',

    type: 'website',
  },  twitter: {
    card: 'summary_large_image',
    title: 'Partners | Zion Tech Group',
    description: 'Partner ecosystem for AI, IT, and automation engagements.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/partners/' },
};

export default function PartnersPage() {
  return (
    <StandardPage
      title="Partners"
      subtitle="Technology and delivery partners we work with to ship outcomes faster."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Partners' },
      ]}
      actions={[
        { label: 'Become a partner', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Cloud Platforms</h3>
          <p className="text-slate-400 text-sm">Infrastructure, migration, and managed cloud partners.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI Vendors</h3>
          <p className="text-slate-400 text-sm">Model providers, tooling, and evaluation platforms.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Security</h3>
          <p className="text-slate-400 text-sm">Identity, SOC, and compliance tooling partners.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Integrators</h3>
          <p className="text-slate-400 text-sm">Implementation and change-management partners.</p>
        </div>
      </div>
    </StandardPage>
  );
}
