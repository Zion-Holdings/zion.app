import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Micro-SaaS | Zion Tech Group',
  description: 'Micro-SaaS design, delivery, and growth support from Zion Tech Group.',
  openGraph: { title: 'Micro-SaaS | Zion Tech Group', description: 'Micro-SaaS design and delivery.', url: 'https://ziontechgroup.com/micro-saas/', type: 'website' },
  alternates: { canonical: '/micro-saas/' },
};

export default function MicroSaaSPage() {
  return (
    <StandardPage title="Micro-SaaS" subtitle="Design, delivery, and growth support for small software products." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Micro-SaaS' }]} actions={[{ label: 'Talk to us', href: '/contact/', style: 'primary' }]}>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <Link href="/services?category=micro-saas" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Platform setup</h3>
          <p className="text-slate-400 text-sm">Payments, auth, analytics, and deployment foundations.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI-assisted growth</h3>
          <p className="text-slate-400 text-sm">Onboarding automation, support assistants, and retention tools.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
