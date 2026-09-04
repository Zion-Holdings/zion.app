import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Data Catalog & Governance Platform | Zion Tech Group",
  description: "Automated data discovery, classification, and governance with lineage tracking and policy enforcement.",
  openGraph: {
    title: "Data Catalog & Governance Platform | Zion Tech Group",
    description: "Automated data discovery, classification, and governance with lineage tracking and policy enforcement.",
    url: "https://ziontechgroup.com/services/data-catalog-governance/",
    type: 'website',
  },
  alternates: { canonical: "/services/data-catalog-governance/" },
};

export default function ServicesDataCatalogGovernancePage() {
  return (
    <StandardPage
      title="Data Catalog & Governance Platform"
      subtitle="Automated data discovery, classification, and governance with lineage tracking and policy enforcement."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Data Catalog Governance" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automated data discovery, classification, and governance with lineage tracking and policy enforcement.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
