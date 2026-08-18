import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Phishing Analyzer | Zion Tech Group',
  description: 'Review URL and email signals to spot phishing indicators before clicking or forwarding.',
  openGraph: {
    title: 'Phishing Analyzer',
    description: 'Lightweight phishing signal checker.',
    url: 'https://ziontechgroup.com/tools/phishing-analyzer/',  siteName: 'Zion Tech Group',

    type: 'website',
  },  twitter: {
    card: 'summary_large_image',
    title: 'Phishing Analyzer',
    description: 'Lightweight phishing signal checker.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/tools/phishing-analyzer/' },
};

const CHECKS = [
  { label: 'Sender domain age and MX', note: 'Newly registered or missing MX records are common phishing signals.' },
  { label: 'URL similarity', note: 'Look for typosquatting, homoglyphs, and unexpected subdomains.' },
  { label: 'Link destination mismatch', note: 'Visible text and actual href often differ in phishing emails.' },
  { label: 'Attachment risk', note: 'Unexpected executables, macros, and password-protected archives deserve extra scrutiny.' },
  { label: 'Urgency and coercion cues', note: 'Phishing relies on fear and time pressure. Treat urgent payment or access requests as suspicious until verified.' },
];

export default function PhishingAnalyzerPage() {
  return (
    <StandardPage
      title="Phishing Analyzer"
      subtitle="Use this checklist to evaluate suspicious URLs and emails before interacting."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
        { label: 'Phishing Analyzer' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Start a project', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Quick review checklist</h2>
          <p className="text-slate-300 text-sm mb-4">
            These checks apply to emails, messages, and landing pages. When in doubt, verify through an official channel rather than replying to the sender.
          </p>
          <div className="grid gap-3">
            {CHECKS.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-white text-sm font-semibold mb-1">{item.label}</div>
                <p className="text-slate-400 text-xs">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Need security training or email protection?</h2>
          <p className="text-slate-300 text-sm mb-4">
            Zion Tech Group can help design email protection, user training, and detection workflows tuned to your environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact/" className="btn-primary text-center">Contact us</Link>
            <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}
