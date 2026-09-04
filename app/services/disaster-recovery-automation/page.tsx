import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Disaster Recovery Automation Platform | Zion Tech Group",
  description: "Automated disaster recovery platform that orchestrates failover, data replication, and recovery across multi-cloud environments. One-click DR testing, RTO/RPO monitoring, and compliance-ready runbooks.",
  openGraph: {
    title: "Disaster Recovery Automation Platform | Zion Tech Group",
    description: "Automated disaster recovery platform that orchestrates failover, data replication, and recovery across multi-cloud environments. One-click DR testing, RTO/RPO monitoring, and compliance-ready runbooks.",
    url: "https://ziontechgroup.com/services/disaster-recovery-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/disaster-recovery-automation/" },
};

export default function DisasterRecoveryAutomationPage() {
  return (
    <StandardPage
      title="Disaster Recovery Automation Platform"
      subtitle="Automated disaster recovery platform that orchestrates failover, data replication, and recovery across multi-cloud environments. One-click DR testing, RTO/RPO monitoring, and compliance-ready runbooks."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Disaster Recovery Automation Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automated disaster recovery platform that orchestrates failover, data replication, and recovery across multi-cloud environments. One-click DR testing, RTO/RPO monitoring, and compliance-ready runbooks.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614100121) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
