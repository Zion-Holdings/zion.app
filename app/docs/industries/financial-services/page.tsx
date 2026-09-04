import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Financial Services | Zion Tech Group",
  description: "AI and IT solutions for financial services: fraud defense, compliance, payment intelligence, and analytics.",
  openGraph: {
    title: "Financial Services | Zion Tech Group",
    description: "AI and IT solutions for financial services: fraud defense, compliance, payment intelligence, and analytics.",
    url: "https://ziontechgroup.com/docs/industries/financial-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/industries/financial-services/" },
};

export default function DocsIndustriesFinancialServicesPage() {
  return (
    <StandardPage
      title="Financial Services"
      subtitle="AI and IT solutions for financial services: fraud defense, compliance, payment intelligence, and analytics."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Industries", href: "/docs/industries/" },
        { label: "Financial Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI and IT solutions for financial services: fraud defense, compliance, payment intelligence, and analytics.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
