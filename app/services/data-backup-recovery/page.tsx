import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Data Backup & Disaster Recovery | Zion Tech Group",
  description: "Enterprise-grade backup and disaster recovery solutions for servers, workstations, cloud workloads, and SaaS data. Includes automated backups, offsite replication, encryption, and tested recovery procedures. RPO as low a",
  openGraph: {
    title: "Data Backup & Disaster Recovery | Zion Tech Group",
    description: "Enterprise-grade backup and disaster recovery solutions for servers, workstations, cloud workloads, and SaaS data. Includes automated backups, offsite replication, encryption, and tested recovery procedures. RPO as low a",
    url: "https://ziontechgroup.com/services/data-backup-recovery/",
    type: 'website',
  },
  alternates: { canonical: "/services/data-backup-recovery/" },
};

export default function DataBackupRecoveryPage() {
  return (
    <StandardPage
      title="Data Backup & Disaster Recovery"
      subtitle="Enterprise-grade backup and disaster recovery solutions for servers, workstations, cloud workloads, and SaaS data. Includes automated backups, offsite replication, encryption, and tested recovery procedures. RPO as low a"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Data Backup & Disaster Recovery" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Data Backup &amp; Disaster Recovery</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Get Started</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">📊 ROI Calculator</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Your Current Operations</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Deployment Roadmap</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">1. Discovery &amp; Planning</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Estimated timeline for Data Backup &amp; Disaster Recovery — adapt to your team size and complexity.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Replace VPN with Zero Trust architecture. Verify every user and device before granting access to any application. Micro-segmentation, continuous authentication, and least-privilege access built in.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Enterprise-grade BDR with automated backups, instant virtualization, and 1-hour RPO/RTO guarantees. Protects physical servers, VMs, cloud workloads, and SaaS data. Tested monthly with documented recovery reports.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Unified management across AWS, Azure, GCP, and on-premise infrastructure. Auto-optimize costs, enforce policies, and provide single-pane visibility. Includes FinOps cost recommendations.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607105759) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
