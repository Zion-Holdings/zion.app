import MarketingPageTemplate from '@/components/MarketingPageTemplate';

export const metadata = {
  title: 'Business Solutions | Zion Tech Group',
  description: 'Explore outcome-driven AI, IT, and security solutions for measurable operational and revenue impact.',
  alternates: { canonical: '/business-solutions' },
};

export default function Page() {
  return (
    <MarketingPageTemplate
      title="Business Solutions"
      description="Outcome-driven solutions for operations, support, security, and growth."
      backLabel="← Back to Home"
      backHref="/"
      primaryCta={{ label: 'Talk to us', href: '/contact' }}
      secondaryCta={{ label: 'Our services', href: '/services' }}
    />
  );
}
