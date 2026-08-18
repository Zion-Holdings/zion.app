import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Client Dashboard | Zion Tech Group',
  description: 'Project visibility, service health, and reporting dashboard for Zion clients.',
  openGraph: { title: 'Client Dashboard | Zion Tech Group', description: 'Operational dashboard and reporting.', url: 'https://ziontechgroup.com/dashboard/', type: 'website' },  twitter: {
    card: 'summary_large_image',
    title: 'Client Dashboard | Zion Tech Group',
    description: 'Operational dashboard and reporting.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/dashboard/' },
};

export default function DashboardPage() {
  return (
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
    </StandardPage>
  );
}
