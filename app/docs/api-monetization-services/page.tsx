import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "API Monetization Services | Zion Tech Group",
  description: "Monetize your APIs with Zion: usage-based billing, developer portal, rate limiting, and Stripe integration.",
  openGraph: {
    title: "API Monetization Services | Zion Tech Group",
    description: "Monetize your APIs with Zion: usage-based billing, developer portal, rate limiting, and Stripe integration.",
    url: "https://ziontechgroup.com/docs/api-monetization-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/api-monetization-services/" },
};

export default function DocsApiMonetizationServicesPage() {
  return (
    <StandardPage
      title="API Monetization Services"
      subtitle="Monetize your APIs with Zion: usage-based billing, developer portal, rate limiting, and Stripe integration."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Api Monetization Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Monetize your APIs with Zion: usage-based billing, developer portal, rate limiting, and Stripe integration.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
