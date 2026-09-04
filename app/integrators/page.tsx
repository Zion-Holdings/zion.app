import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Integrators | Zion Tech Group',
  description: 'Implementation and delivery partners for complex AI and IT programs with joint delivery support.',
  openGraph: {
    title: 'Integrators | Zion Tech Group',
    description: 'Implementation and delivery partners for complex AI and IT programs.',
    url: 'https://ziontechgroup.com/integrators/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrators | Zion Tech Group',
    description: 'Implementation and delivery partners for complex AI and IT programs.',
  },
  alternates: { canonical: '/integrators/' },
};


export default function IntegratorsPage() {
  return (
<>
    <StandardPage
      title="Integrators"
      subtitle="Implementation and delivery partners for complex AI and IT programs."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Integrators' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Integrators help translate strategy into production systems. Zion Tech Group partners with integrators to move faster and reduce rework.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Delivery support</h3>
            <p className="text-slate-400 text-sm">Implementation patterns, runbooks, and review cycles for complex engagements.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Enablement</h3>
            <p className="text-slate-400 text-sm">Training, tooling, and governance support for integrator teams.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Co-selling</h3>
            <p className="text-slate-400 text-sm">Joint pipeline planning and deal support for AI and automation opportunities.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Reference architecture</h3>
            <p className="text-slate-400 text-sm">Shared baseline patterns for deployment, observability, and security controls.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link href="/contact/" className="btn-primary text-center">Become a partner</Link>
          <Link href="/partners/" className="btn-secondary text-center">Partner ecosystem</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}