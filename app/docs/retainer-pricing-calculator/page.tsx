import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Services Retainer Pricing Calculator | Zion Tech Group",
  description: "Estimate retainer pricing for AI managed services, SOCaaS, and support contracts.",
  openGraph: {
    title: "AI Services Retainer Pricing Calculator | Zion Tech Group",
    description: "Estimate retainer pricing for AI managed services, SOCaaS, and support contracts.",
    url: "https://ziontechgroup.com/docs/retainer-pricing-calculator/",
    type: 'website',
  },
  alternates: { canonical: "/docs/retainer-pricing-calculator/" },
};

export default function DocsRetainerPricingCalculatorPage() {
  return (
    <StandardPage
      title="AI Services Retainer Pricing Calculator"
      subtitle="Estimate retainer pricing for AI managed services, SOCaaS, and support contracts."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Retainer Pricing Calculator" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Estimate retainer pricing for AI managed services, SOCaaS, and support contracts.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
