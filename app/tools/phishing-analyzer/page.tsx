import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Phishing Analyzer | Zion Tech Group',
  description: 'Review URL and email signals to spot phishing indicators before clicking or forwarding.',
  openGraph: {
    title: 'Phishing Analyzer',
    description: 'Lightweight phishing signal checker.',
    url: 'https://ziontechgroup.com/tools/phishing-analyzer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phishing Analyzer',
    description: 'Lightweight phishing signal checker.',
  },
  alternates: { canonical: '/tools/phishing-analyzer/' },
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
<>
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
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-bold text-white mb-3">Related offerings</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/services/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Enterprise Services</h3>
            <p className="text-slate-400 text-xs mb-2">AI, IT, security, and data programs with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View services →</span>
          </Link>
          <Link href="/solutions/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Industry Solutions</h3>
            <p className="text-slate-400 text-xs mb-2">Purpose-built AI and IT solutions by industry.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View solutions →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-2">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}