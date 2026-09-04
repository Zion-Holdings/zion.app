import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "API Gateway & Rate Limiter Pro | Zion Tech Group",
  description: "Protect your APIs with intelligent rate limiting, API key management, usage analytics, and automatic blocking of abusive clients. Cloud or on-premise.",
  openGraph: {
    title: "API Gateway & Rate Limiter Pro | Zion Tech Group",
    description: "Protect your APIs with intelligent rate limiting, API key management, usage analytics, and automatic blocking of abusive clients. Cloud or on-premise.",
    url: "https://ziontechgroup.com/services/saas-api-rate-limiter/",
    type: 'website',
  },
  alternates: { canonical: "/services/saas-api-rate-limiter/" },
};

export default function SaasApiRateLimiterPage() {
  return (
    <StandardPage
      title="API Gateway & Rate Limiter Pro"
      subtitle="Protect your APIs with intelligent rate limiting, API key management, usage analytics, and automatic blocking of abusive clients. Cloud or on-premise."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "API Gateway & Rate Limiter Pro" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Protect your APIs with intelligent rate limiting, API key management, usage analytics, and automatic blocking of abusive clients. Cloud or on-premise.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614095705) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
