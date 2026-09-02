import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Governments | Zion Tech Group',
  description: 'Secure AI, IT, and automation programs for government organizations.',
  openGraph: {
    title: 'Governments | Zion Tech Group',
    description: 'Secure AI, IT, and automation programs for government organizations.',
    url: 'https://ziontechgroup.com/governments/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Governments | Zion Tech Group',
    description: 'Secure AI, IT, and automation programs for government organizations.',
  },
  alternates: { canonical: '/governments/' },
};


export default function GovernmentsPage() {
  return (
<>
    <StandardPage
      title="Governments"
      subtitle="Secure AI, IT, and automation programs for government organizations."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Governments' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Government engagements require stronger controls, auditability, and predictable delivery. Zion Tech Group builds secure AI and IT programs accordingly.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Secure delivery</h3>
            <p className="text-slate-400 text-sm">Architecture, access controls, and incident response aligned to public-sector requirements.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Observable operations</h3>
            <p className="text-slate-400 text-sm">Monitoring, logging, and review cycles with clear ownership and escalation paths.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Compliance</h3>
            <p className="text-slate-400 text-sm">Documentation and evidence packages for audit and regulatory reviews.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Vendor governance</h3>
            <p className="text-slate-400 text-sm">Provider qualification and lifecycle controls for public-sector delivery.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link href="/contact/" className="btn-primary text-center">Request a briefing</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}