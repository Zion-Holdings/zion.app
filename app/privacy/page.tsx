import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
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
<>
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
          <h3 className="text-white font-semibold mb-2">Data retention</h3>
          <p className="text-slate-400 text-sm">We keep personal data only as long as needed for delivery, legal, or security requirements. You can request deletion when retention is no longer required.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Security</h3>
          <p className="text-slate-400 text-sm">Access is restricted, activity is logged, and sensitive data is handled under documented controls.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Your rights</h3>
          <p className="text-slate-400 text-sm">You can request access, correction, deletion, or export of personal data. We honor lawful requests within verified channels.</p>
        </div>

        <Link href="/contact/" className="text-purple-300 hover:text-purple-200">Contact privacy team →</Link>
      </div>
    
      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Explore related</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/services/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Services</h3>
            <p className="text-slate-400 text-xs mb-2">AI, IT, and automation services with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View services →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights</h3>
            <p className="text-slate-400 text-xs mb-2">Guides on AI delivery, security, data, and DevOps.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
          <Link href="/contact/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Contact</h3>
            <p className="text-slate-400 text-xs mb-2">Talk with Zion about your environment and timeline.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Contact us →</span>
          </Link>
        </div>
      </div>

    </StandardPage>
  </>
  );
}