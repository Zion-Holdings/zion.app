import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zion Tech Group',
    description: 'Privacy policy for Zion Tech Group: data collection, use, retention, security, and your rights.',
    openGraph: { title: 'Privacy Policy | Zion Tech Group',
    description: 'Data practices and privacy rights.',
    url: 'https://ziontechgroup.com/privacy/',
    type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Zion Tech Group',
    description: 'Data practices and privacy rights.',
  },
    alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <StandardPage title="Privacy Policy" subtitle="How we collect, use, and protect your data." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}>
      <div className="max-w-3xl mx-auto space-y-6 text-slate-300">
        <p>We collect information needed to deliver services, improve site performance, and communicate updates. We do not sell personal data.</p>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">What we collect</h3>
          <p className="text-slate-400 text-sm">Contact details, project context, service usage signals, and technical logs required for delivery and security.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">How we use it</h3>
          <p className="text-slate-400 text-sm">To respond to inquiries, run agreed services, improve reliability, and meet contractual or compliance obligations.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Your rights</h3>
          <p className="text-slate-400 text-sm">You can request access, correction, deletion, or export of personal data. We honor lawful requests within verified channels.</p>
        </div>
        <Link href="/contact/" className="text-purple-300 hover:text-purple-200">Contact privacy team →</Link>
      </div>
    </StandardPage>
  );
}
