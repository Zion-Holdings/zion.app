import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Multi-Cloud Management Service | Zion Tech Group",
  description: "Unified management across AWS, Azure, and GCP. Reduce cloud complexity, optimize spend, and maintain security consistency across providers.",
  openGraph: {
    title: "Multi-Cloud Management Service | Zion Tech Group",
    description: "Unified management across AWS, Azure, and GCP. Reduce cloud complexity, optimize spend, and maintain security consistency across providers.",
    url: "https://ziontechgroup.com/services/cloud-multi-cloud-management/",
    type: 'website',
  },
  alternates: { canonical: "/services/cloud-multi-cloud-management/" },
};

export default function ServicesCloudMultiCloudManagementPage() {
  return (
    <StandardPage
      title="Multi-Cloud Management Service"
      subtitle="Unified management across AWS, Azure, and GCP. Reduce cloud complexity, optimize spend, and maintain security consistency across providers."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Cloud Multi Cloud Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Unified management across AWS, Azure, and GCP. Reduce cloud complexity, optimize spend, and maintain security consistency across providers.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
