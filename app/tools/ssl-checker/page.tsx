import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'SSL Checker | Zion Tech Group',
  description: 'Inspect certificate basics and expiry window.',
  openGraph: {
    title: 'SSL Checker',
    description: 'TLS certificate helper.',
    url: 'https://ziontechgroup.com/tools/ssl-checker/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSL Checker',
    description: 'TLS certificate helper.',
  },
  alternates: { canonical: '/tools/ssl-checker/' },
};

const CHECKS = [
  { label: 'Issuer trust', note: 'Confirm the certificate chains to a trusted root and is not self-signed in production.' },
  { label: 'Validity window', note: 'Review notBefore/notAfter. Renew before expiry and watch for long-lived certificates.' },
  { label: 'Hostname match', note: 'The certificate subject or SAN must match the public hostname users visit.' },
  { label: 'TLS version and cipher', note: 'Prefer TLS 1.2+ and modern cipher suites; disable legacy protocol versions.' },
  { label: 'OCSP and stapling', note: 'Check revocation behavior and stapling when available to reduce latency and trust checks.' },
];


export default function SslCheckerPage() {
  return (
<>
    <StandardPage
      title="SSL Checker"
      subtitle="Use this checklist to validate certificate trust, coverage, and configuration before review or incident response."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
        { label: 'SSL Checker' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Start a project', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Certificate review checklist</h2>
          <p className="text-slate-300 text-sm mb-4">
            These checks apply to production hosts, API gateways, and internal services with external access.
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
          <h2 className="text-xl font-bold text-white mb-2">Need security review or remediation?</h2>
          <p className="text-slate-300 text-sm mb-4">
            If you want TLS configuration review, certificate automation, or compliance evidence, Zion Tech Group can help.
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