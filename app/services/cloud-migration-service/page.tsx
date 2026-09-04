import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Cloud Migration & Modernization | Zion Tech Group",
  description: "End-to-end cloud migration service with assessment, planning, execution, and optimization. Migrate legacy applications to AWS, Azure, or GCP with zero downtime.",
  openGraph: {
    title: "Cloud Migration & Modernization | Zion Tech Group",
    description: "End-to-end cloud migration service with assessment, planning, execution, and optimization. Migrate legacy applications to AWS, Azure, or GCP with zero downtime.",
    url: "https://ziontechgroup.com/services/cloud-migration-service/",
    type: 'website',
  },
  alternates: { canonical: "/services/cloud-migration-service/" },
};

export default function CloudMigrationServicePage() {
  return (
    <StandardPage
      title="Cloud Migration & Modernization"
      subtitle="End-to-end cloud migration service with assessment, planning, execution, and optimization. Migrate legacy applications to AWS, Azure, or GCP with zero downtime."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Cloud Migration & Modernization" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Cloud Migration &amp; Modernization</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Get Started</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">📊 ROI Calculator</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Your Current Operations</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Deployment Roadmap</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">1. Requirements &amp; Design</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Estimated timeline for Cloud Migration &amp; Modernization — adapt to your team size and complexity.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Unified cloud management across AWS, Azure, GCP, and private infrastructure. Cost optimization, governance, and automated compliance.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Manage AWS, Azure, and GCP from one dashboard. Cost optimization, resource tagging, compliance monitoring, budget alerts, and automated rightsizing recommendations. Typical clients reduce cloud spend by 35%.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">End-to-end Kubernetes platform setup and management. Cluster provisioning, Helm charts, monitoring (Prometheus/Grafana), logging (ELK/Loki), service mesh (Istio), and developer self-service portals.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607205220) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
