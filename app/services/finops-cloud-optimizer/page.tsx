import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "FinOps Cloud Cost Optimizer | Zion Tech Group",
  description: "Comprehensive FinOps platform that analyzes cloud spend across AWS, Azure, and GCP. Identifies waste, recommends rightsizing, automates reserved instance purchases, and provides chargeback reports per team and project.",
  openGraph: {
    title: "FinOps Cloud Cost Optimizer | Zion Tech Group",
    description: "Comprehensive FinOps platform that analyzes cloud spend across AWS, Azure, and GCP. Identifies waste, recommends rightsizing, automates reserved instance purchases, and provides chargeback reports per team and project.",
    url: "https://ziontechgroup.com/services/finops-cloud-optimizer/",
    type: 'website',
  },
  alternates: { canonical: "/services/finops-cloud-optimizer/" },
};

export default function FinopsCloudOptimizerPage() {
  return (
    <StandardPage
      title="FinOps Cloud Cost Optimizer"
      subtitle="Comprehensive FinOps platform that analyzes cloud spend across AWS, Azure, and GCP. Identifies waste, recommends rightsizing, automates reserved instance purchases, and provides chargeback reports per team and project."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "FinOps Cloud Cost Optimizer" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Comprehensive FinOps platform that analyzes cloud spend across AWS, Azure, and GCP. Identifies waste, recommends rightsizing, automates reserved instance purchases, and provides chargeback reports per team and project.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614100212) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
