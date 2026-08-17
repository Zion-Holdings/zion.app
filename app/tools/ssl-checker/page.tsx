import type { Metadata } from 'next';
import Link from 'next/link';
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
    <StandardPage
      title="SSL Checker"
      subtitle="Use this checklist to validate certificate trust, coverage, and configuration before review or incident response."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
        { label: 'SSL Checker' },
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
    </StandardPage>
  );
}
