import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Status | Zion Tech Group',
  description: 'Service status page for Zion Tech Group platforms and client environments with uptime targets and incident response.',
  openGraph: {
    title: 'Status | Zion Tech Group',
    description: 'Platform and service status.',
    url: 'https://ziontechgroup.com/status/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Status | Zion Tech Group',
    description: 'Platform and service status.',
  },
  alternates: { canonical: '/status/' },
};


export default function StatusPage() {
  return (
<>
    <StandardPage title="Status" subtitle="Operational health for public services and major client environments." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Status' }]} actions={[{ label: 'Contact support', href: '/contact/', style: 'primary' }]}>
      <div className="max-w-3xl mx-auto space-y-6 text-slate-300">
        <p>This status page shows operational health for public services and major client environments.</p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Public services</h3>
          <p className="text-slate-400 text-sm">Website, API, support intake, and deploy pipeline health targets.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Uptime targets</h3>
          <p className="text-slate-400 text-sm">Public-facing services target 99.9% availability. Client environments use agreed SLA windows.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Incident cadence</h3>
          <p className="text-slate-400 text-sm">Severity-based response targets, escalation paths, and post-incident review cadence.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Maintenance windows</h3>
          <p className="text-slate-400 text-sm">Planned maintenance is scheduled in low-traffic windows with advance notice when possible.</p>
        </div>

        <Link href="/contact/" className="text-purple-300 hover:text-purple-200">Contact support →</Link>
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