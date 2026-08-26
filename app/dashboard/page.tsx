import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Client Dashboard | Zion Tech Group',
  description: 'Project visibility, service health, and reporting dashboard for Zion clients.',
  openGraph: { title: 'Client Dashboard | Zion Tech Group',
    description: 'Operational dashboard and reporting.',
    url: 'https://ziontechgroup.com/dashboard/',
  type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Dashboard | Zion Tech Group',
    description: 'Operational dashboard and reporting.',
  },
  alternates: { canonical: '/dashboard/' },
};


export default function DashboardPage() {
  return (
<>
    <StandardPage title="Dashboard" subtitle="Project visibility, service health, and reporting." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Dashboard' }]} actions={[{ label: 'Contact support', href: '/contact/', style: 'primary' }]}>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Service health</h3>
          <p className="text-slate-400 text-sm">Monitor active services, incident status, and maintenance windows.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Reports</h3>
          <p className="text-slate-400 text-sm">Download operational summaries, security posture reports, and ROI updates.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Support</h3>
          <p className="text-slate-400 text-sm">Open tickets, track response times, and manage escalation contacts.</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Dashboard capabilities</h2>
        <p className="text-slate-300 text-sm mb-4">
          The dashboard centralizes operational data into role-specific views. Clients and stakeholders can inspect service health, review reports, and act on support requests without switching tools.
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm mb-6">
          <li>Unified view of service health, incidents, and maintenance windows.</li>
          <li>Role-based access so clients and stakeholders see relevant data.</li>
          <li>Automated report delivery to email, Slack, or custom endpoints.</li>
          <li>Integration with existing ITSM, monitoring, and BI tools.</li>
          <li>Support ticket creation and tracking with SLA timers.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary text-center">Explore services</Link>
          <Link href="/contact/" className="btn-secondary text-center">Contact support</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}