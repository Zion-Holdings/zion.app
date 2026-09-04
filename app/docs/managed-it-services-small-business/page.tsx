import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Managed IT Services for Small Business | Zion Tech Group",
  description: "Small business IT support, 24/7 monitoring, helpdesk, backup, security, and cost-effective managed services.",
  openGraph: {
    title: "Managed IT Services for Small Business | Zion Tech Group",
    description: "Small business IT support, 24/7 monitoring, helpdesk, backup, security, and cost-effective managed services.",
    url: "https://ziontechgroup.com/docs/managed-it-services-small-business/",
    type: 'website',
  },
  alternates: { canonical: "/docs/managed-it-services-small-business/" },
};

export default function DocsManagedItServicesSmallBusinessPage() {
  return (
    <StandardPage
      title="Managed IT Services for Small Business"
      subtitle="Small business IT support, 24/7 monitoring, helpdesk, backup, security, and cost-effective managed services."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Managed It Services Small Business" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Small business IT support, 24/7 monitoring, helpdesk, backup, security, and cost-effective managed services.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
