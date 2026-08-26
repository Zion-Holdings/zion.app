import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Providers | Zion Tech Group',
  description: 'Managed service providers, platforms, and tooling partnerships for AI and IT delivery.',
  openGraph: {
    title: 'Providers | Zion Tech Group',
    description: 'Managed service providers, platforms, and tooling partnerships for AI and IT delivery.',
    url: 'https://ziontechgroup.com/providers/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Providers | Zion Tech Group',
    description: 'Managed service providers, platforms, and tooling partnerships for AI and IT delivery.',
  },
  alternates: { canonical: '/providers/' },
};


export default function ProvidersPage() {
  return (
<>
    <StandardPage
      title="Providers"
      subtitle="Managed service providers, platforms, and tooling partnerships for AI and IT delivery."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Providers' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Provider relationships need clear operating models and outcome agreements. Zion Tech Group helps align providers to measurable results.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Operating model</h3>
            <p className="text-slate-400 text-sm">Roles, review cycles, and escalation paths that reduce delivery risk.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Outcome alignment</h3>
            <p className="text-slate-400 text-sm">Metrics, scorecards, and review loops for ongoing provider performance.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Onboarding</h3>
            <p className="text-slate-400 text-sm">Vetted access, environment setup, and security review to reduce ramp time.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Tooling standards</h3>
            <p className="text-slate-400 text-sm">Common observability, deployment, and incident response toolchains across providers.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link href="/contact/" className="btn-primary text-center">Partner with us</Link>
          <Link href="/partners/" className="btn-secondary text-center">Partner ecosystem</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}