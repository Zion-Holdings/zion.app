import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Best Monetization Tools for AI & IT Agencies | Zion Tech Group",
  description: "Curated monetization stack for AI and IT agencies: affiliate platforms, usage-based billing, AI chatbots, lead capture, and payment automation tools.",
  openGraph: {
    title: "Best Monetization Tools for AI & IT Agencies | Zion Tech Group",
    description: "Curated monetization stack for AI and IT agencies: affiliate platforms, usage-based billing, AI chatbots, lead capture, and payment automation tools.",
    url: "https://ziontechgroup.com/docs/monetization/",
    type: 'website',
  },
  alternates: { canonical: "/docs/monetization/" },
};

export default function DocsMonetizationPage() {
  return (
    <StandardPage
      title="Best Monetization Tools for AI & IT Agencies"
      subtitle="Curated monetization stack for AI and IT agencies: affiliate platforms, usage-based billing, AI chatbots, lead capture, and payment automation tools."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Monetization" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Curated monetization stack for AI and IT agencies: affiliate platforms, usage-based billing, AI chatbots, lead capture, and payment automation tools.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
