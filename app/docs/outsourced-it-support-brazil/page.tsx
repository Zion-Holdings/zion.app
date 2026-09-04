import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Outsourced IT Support Brazil | Zion Tech Group",
  description: "Outsourced IT support in Brazil: helpdesk, cloud, security, endpoint management, and bilingual support teams.",
  openGraph: {
    title: "Outsourced IT Support Brazil | Zion Tech Group",
    description: "Outsourced IT support in Brazil: helpdesk, cloud, security, endpoint management, and bilingual support teams.",
    url: "https://ziontechgroup.com/docs/outsourced-it-support-brazil/",
    type: 'website',
  },
  alternates: { canonical: "/docs/outsourced-it-support-brazil/" },
};

export default function DocsOutsourcedItSupportBrazilPage() {
  return (
    <StandardPage
      title="Outsourced IT Support Brazil"
      subtitle="Outsourced IT support in Brazil: helpdesk, cloud, security, endpoint management, and bilingual support teams."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Outsourced It Support Brazil" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Outsourced IT support in Brazil: helpdesk, cloud, security, endpoint management, and bilingual support teams.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
