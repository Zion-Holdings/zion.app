import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Data Governance Service | Zion Tech Group",
  description: "Implement AI data governance frameworks: data lineage, classification, access controls, and compliance automation for regulated industries.",
  openGraph: {
    title: "AI Data Governance Service | Zion Tech Group",
    description: "Implement AI data governance frameworks: data lineage, classification, access controls, and compliance automation for regulated industries.",
    url: "https://ziontechgroup.com/services/ai-data-governance/",
    type: 'website',
  },
  alternates: { canonical: "/services/ai-data-governance/" },
};

export default function ServicesAiDataGovernancePage() {
  return (
    <StandardPage
      title="AI Data Governance Service"
      subtitle="Implement AI data governance frameworks: data lineage, classification, access controls, and compliance automation for regulated industries."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Ai Data Governance" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Implement AI data governance frameworks: data lineage, classification, access controls, and compliance automation for regulated industries.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
