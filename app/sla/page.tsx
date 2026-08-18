import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Service Level Agreement | Zion Tech Group',
  description: 'Service level commitments for support, uptime, and incident response.',
  openGraph: { title: 'SLA | Zion Tech Group', description: 'Service level commitments.', url: 'https://ziontechgroup.com/sla/', type: 'website' },  twitter: {
    card: 'summary_large_image',
    title: 'SLA | Zion Tech Group',
    description: 'Service level commitments.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/sla/' },
};

export default function SlaPage() {
  return (
    <StandardPage title="Service Level Agreement" subtitle="Support, uptime, and incident-response commitments." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'SLA' }]} actions={[{ label: 'Contact us', href: '/contact/', style: 'primary' }]}>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Support hours</h3>
          <p className="text-slate-400 text-sm">Business-hours and after-hours coverage by plan tier.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Incident response</h3>
          <p className="text-slate-400 text-sm">Severity-based response targets and escalation paths.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Uptime target</h3>
          <p className="text-slate-400 text-sm">High availability target with monitoring and alerting for critical paths.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Change control</h3>
          <p className="text-slate-400 text-sm">Governed deployments, rollback readiness, and release-risk review.</p>
        </div>
      </div>
    </StandardPage>
  );
}
