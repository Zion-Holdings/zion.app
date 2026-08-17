import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Help Center | Zion Tech Group',
  description: 'Support topics, runbooks, and contact paths for Zion Tech Group.',
  openGraph: {
    title: 'Help Center | Zion Tech Group',
    description: 'Help center for onboarding, support, and engagement questions.',
    url: 'https://ziontechgroup.com/help/',
    type: 'website',
  },
  alternates: { canonical: '/help/' },
};

export default function HelpPage() {
  return (
    <StandardPage
      title="Help Center"
      subtitle="Find answers about onboarding, support, pricing, and what to expect from a Zion engagement."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Help' },
      ]}
      actions={[
        { label: 'Contact us', href: '/contact/', style: 'primary' },
        { label: 'Browse FAQ', href: '/faq/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <Link href="/faq" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">FAQ</h3>
          <p className="text-slate-400 text-sm">Common questions about AI, IT, pricing, and timelines.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Open FAQ →</span>
        </Link>
        <Link href="/contact" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Contact Support</h3>
          <p className="text-slate-400 text-sm">Get a detailed reply within one business hour.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Contact us →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
