import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "API Monetization & Billing | Zion Tech Group",
  description: "Monetize APIs with rate limits, usage tiers, developer portals, and automated billing using Stripe and Composio.",
  openGraph: {
    title: "API Monetization & Billing | Zion Tech Group",
    description: "Monetize APIs with rate limits, usage tiers, developer portals, and automated billing using Stripe and Composio.",
    url: "https://ziontechgroup.com/docs/api-monetization/",
    type: 'website',
  },
  alternates: { canonical: "/docs/api-monetization/" },
};

export default function DocsApiMonetizationPage() {
  return (
    <StandardPage
      title="API Monetization & Billing"
      subtitle="Monetize APIs with rate limits, usage tiers, developer portals, and automated billing using Stripe and Composio."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Api Monetization" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Monetize APIs with rate limits, usage tiers, developer portals, and automated billing using Stripe and Composio.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
