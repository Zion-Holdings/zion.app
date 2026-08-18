import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
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
  twitter: {
    card: 'summary_large_image',
    title: 'Help Center | Zion Tech Group',
    description: 'Help center for onboarding, support, and engagement questions.',
  },
  alternates: { canonical: '/help/' },
};


export default function HelpPage() {
  return (
<>
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
        <Link href="/faq/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">FAQ</h3>
          <p className="text-slate-400 text-sm">Common questions about AI, IT, pricing, and timelines.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Open FAQ →</span>
        </Link>
        <Link href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Contact Support</h3>
          <p className="text-slate-400 text-sm">Get a detailed reply within one business hour.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Contact us →</span>
        </Link>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Help resources</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>FAQ covering pricing, onboarding, and support response times.</li>
          <li>Runbooks for common integrations, deployments, and troubleshooting.</li>
          <li>Video and written guides for self-service onboarding.</li>
          <li>Escalation paths with guaranteed response SLAs by plan.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary text-center">Browse services</Link>
          <Link href="/contact/" className="btn-secondary text-center">Contact us</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}