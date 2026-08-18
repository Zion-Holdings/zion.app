import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Platform Status | Zion Tech Group',
  description: 'Service health, uptime targets, and incident cadence.',
  openGraph: {
    title: 'Platform Status',
    description: 'Zion operational status summary.',
    url: 'https://ziontechgroup.com/tools/health-check/',  siteName: 'Zion Tech Group',

    type: 'website',
  },  twitter: {
    card: 'summary_large_image',
    title: 'Platform Status',
    description: 'Zion operational status summary.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/tools/health-check/' },
};

const SYSTEMS = [
  { name: 'Website', target: '24/7', focus: 'TLS, CDN behavior, DNS propagation, and static asset freshness.' },
  { name: 'API', target: '24/7', focus: 'Auth, latency, error rate, rate limits, and schema compatibility.' },
  { name: 'Support intake', target: 'Business hours + on-call escalation', focus: 'Routing accuracy, queue depth, and response-time SLA.' },
  { name: 'Deploy pipeline', target: 'High availability', focus: 'Workflow success rate, artifact freshness, and rollback readiness.' },
];

export default function HealthCheckPage() {
  return (
    <StandardPage
      title="Platform Status"
      subtitle="Use this checklist to validate service health before and after changes."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
        { label: 'Platform Status' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Start a project', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {SYSTEMS.map((item) => (
          <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold">{item.name}</h3>
              <span className="text-xs font-semibold text-purple-300">{item.target}</span>
            </div>
            <p className="text-slate-400 text-sm">{item.focus}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
        <h2 className="text-xl font-bold text-white mb-2">Need operational support?</h2>
        <p className="text-slate-300 text-sm mb-4">
          If you want monitored operations, incident response, or a governed deployment cadence, Zion Tech Group can run or review it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Contact us</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>
    </StandardPage>
  );
}
