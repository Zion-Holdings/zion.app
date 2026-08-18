import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Status — Uptime & Service Status | Zion Tech Group',
  description: 'Real-time status of Zion Tech Group services. Check if all systems are operational.',
  alternates: { canonical: '/status/' },
};

export default function StatusPage() {
  return (
    <PageWrapper>
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4">Site Status</h1>
        <p className="text-slate-300 mb-6">Operational status for public services and major client environments.</p>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Public services</h3>
          <p className="text-slate-400 text-sm">Website, API, support intake, and deploy pipeline health targets.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 mt-4">
          <h3 className="text-white font-semibold mb-2">Incident cadence</h3>
          <p className="text-slate-400 text-sm">Severity-based response targets, escalation paths, and post-incident review cadence.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 mt-4">
          <h3 className="text-white font-semibold mb-2">Maintenance windows</h3>
          <p className="text-slate-400 text-sm">Planned maintenance is scheduled in low-traffic windows with advance notice when possible.</p>
        </div>
        <Link href="/contact/" className="text-purple-300 hover:text-purple-200 mt-6 inline-block">Contact support →</Link>
      </div>
    </PageWrapper>
  );
}
