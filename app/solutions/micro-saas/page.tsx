import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Micro-SaaS Solutions | Zion Tech Group',
  description: 'Micro-SaaS productization, monetization, and self-service delivery.',
  openGraph: {
    title: 'Micro-SaaS Solutions | Zion Tech Group',
    description: 'Micro-SaaS solutions for repeatable revenue.',
    url: 'https://ziontechgroup.com/solutions/micro-saas/',  siteName: 'Zion Tech Group',

    type: 'website',
  },  twitter: {
    card: 'summary_large_image',
    title: 'Micro-SaaS Solutions | Zion Tech Group',
    description: 'Micro-SaaS solutions for repeatable revenue.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/solutions/micro-saas/' },
};

export default function MicroSaaSSolutionsPage() {
  return (
    <StandardPage
      title="Micro-SaaS"
      subtitle="Ship monetizable tools and self-service experiences faster."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Micro-SaaS' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Productization</h3>
          <p className="text-slate-400 text-sm">Turn internal tools into externally sellable Micro-SaaS products.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Self-Service</h3>
          <p className="text-slate-400 text-sm">Onboarding, usage metering, and account flows.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Growth Infrastructure</h3>
          <p className="text-slate-400 text-sm">Analytics, pricing, and repeatable go-to-market motions.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
