import MarketingPageTemplate from '@/components/MarketingPageTemplate';

export const metadata = {
  title: 'Health Dashboard | Zion Tech Group',
  description: 'Operational health dashboard and metrics for managed IT and security services.',
  alternates: { canonical: '/health-dashboard' },
};

export default function Page() {
  return (
    <MarketingPageTemplate
      title="Health Dashboard"
      description="Real-time health signals, reliability metrics, and incident status for your environment."
      backLabel="← Back to Home"
      backHref="/"
      primaryCta={{ label: 'Contact us', href: '/contact' }}
      secondaryCta={{ label: 'Our services', href: '/services' }}
    />
  );
}
