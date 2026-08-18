import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Port Scanner | Zion Tech Group',
  description: 'Check common service ports and surface open or filtered results.',
  openGraph: {
    title: 'Port Scanner',
    description: 'Network port scan helper.',
    url: 'https://ziontechgroup.com/tools/port-scanner/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Port Scanner',
    description: 'Network port scan helper.',
  },
  alternates: { canonical: '/tools/port-scanner/' },
};

const PORTS = [
  { port: 22, service: 'SSH', note: 'Restrict to bastion or VPN.' },
  { port: 53, service: 'DNS', note: 'Validate recursion and zone transfers.' },
  { port: 80, service: 'HTTP', note: 'Expect redirect to HTTPS.' },
  { port: 443, service: 'HTTPS', note: 'Check certificate and TLS config.' },
  { port: 3306, service: 'MySQL', note: 'Do not expose to public internet.' },
  { port: 5432, service: 'PostgreSQL', note: 'Use private networking or SSH tunnel.' },
  { port: 6379, service: 'Redis', note: 'Require auth and network isolation.' },
  { port: 27017, service: 'MongoDB', note: 'Bind private IPs and enable auth.' },
];


export default function PortScannerPage() {
  return (
<>
    <StandardPage
      title="Port Scanner"
      subtitle="Use this checklist to review common exposure before hardening or auditing infrastructure."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
        { label: 'Port Scanner' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Start a project', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Common ports</h2>
          <p className="text-slate-300 text-sm mb-4">
            Review expected exposure for common services. Open ports are not automatically unsafe, but unnecessary public exposure is a frequent finding.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {PORTS.map((item) => (
              <div key={item.port} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-sm font-semibold">{item.service}</span>
                  <span className="text-xs text-purple-300">:{item.port}</span>
                </div>
                <p className="text-slate-400 text-xs">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Need infrastructure hardening?</h2>
          <p className="text-slate-300 text-sm mb-4">
            If you want audited network rules, private access patterns, or incident-ready hardening, Zion Tech Group can review or implement it.
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