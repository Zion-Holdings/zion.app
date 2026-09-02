import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Service Level Agreement | Zion Tech Group',
  description: 'Service level commitments for support, uptime, and incident response.',
  openGraph: { title: 'SLA | Zion Tech Group',
    description: 'Service level commitments.',
    url: 'https://ziontechgroup.com/sla/',
  type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'SLA | Zion Tech Group',
    description: 'Service level commitments.',
  },
  alternates: { canonical: '/sla/' },
};


export default function SlaPage() {
  return (
<>
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

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">SLA details</h2>
        <p className="text-slate-300 text-sm mb-4">
          Commitments are defined per service tier. Baseline tiers include standard business-hours support with next-business-day response for non-critical issues. Enhanced tiers include after-hours coverage and tighter response targets.
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm mb-6">
          <li>Critical incidents: 1-hour response with continuous updates until resolved.</li>
          <li>High-severity issues: 4-hour response during covered hours.</li>
          <li>Medium and low severity: documented response windows by plan.</li>
          <li>Planned maintenance windows communicated at least 48 hours in advance.</li>
          <li>Quarterly reliability and availability reporting included.</li>
          <li>Exclusions, review cycles, and change-control processes documented.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary text-center">Browse services</Link>
          <Link href="/contact/" className="btn-secondary text-center">Contact us</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}