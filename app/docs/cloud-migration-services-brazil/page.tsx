import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Cloud Migration Services in Brazil | Zion Tech Group",
  description: "Cloud migration services in Brazil for AWS, Azure, and GCP with compliance, low downtime, and cost optimization.",
  openGraph: {
    title: "Cloud Migration Services in Brazil | Zion Tech Group",
    description: "Cloud migration services in Brazil for AWS, Azure, and GCP with compliance, low downtime, and cost optimization.",
    url: "https://ziontechgroup.com/docs/cloud-migration-services-brazil/",
    type: 'website',
  },
  alternates: { canonical: "/docs/cloud-migration-services-brazil/" },
};

export default function DocsCloudMigrationServicesBrazilPage() {
  return (
    <StandardPage
      title="Cloud Migration Services in Brazil"
      subtitle="Cloud migration services in Brazil for AWS, Azure, and GCP with compliance, low downtime, and cost optimization."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Cloud Migration Services Brazil" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Cloud migration services in Brazil for AWS, Azure, and GCP with compliance, low downtime, and cost optimization.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
