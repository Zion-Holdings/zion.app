import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Insurance | Zion Tech Group",
  description: "AI and IT solutions for insurance: claims automation, underwriting AI, policy management, and fraud prevention.",
  openGraph: {
    title: "Insurance | Zion Tech Group",
    description: "AI and IT solutions for insurance: claims automation, underwriting AI, policy management, and fraud prevention.",
    url: "https://ziontechgroup.com/docs/industries/insurance/",
    type: 'website',
  },
  alternates: { canonical: "/docs/industries/insurance/" },
};

export default function DocsIndustriesInsurancePage() {
  return (
    <StandardPage
      title="Insurance"
      subtitle="AI and IT solutions for insurance: claims automation, underwriting AI, policy management, and fraud prevention."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Industries", href: "/docs/industries/" },
        { label: "Insurance" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI and IT solutions for insurance: claims automation, underwriting AI, policy management, and fraud prevention.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
