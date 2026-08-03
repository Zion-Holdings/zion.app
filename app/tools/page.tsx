import MarketingPageTemplate from '@/components/MarketingPageTemplate';

export const metadata = {
  title: 'Tools | Zion Tech Group',
  description: 'Free AI, IT, and security calculators and utilities from Zion Tech Group.',
  alternates: { canonical: '/tools' },
};

export default function Page() {
  return (
    <MarketingPageTemplate
      title="Tools"
      description="Free calculators, converters, and utilities for AI, IT, and security operations."
      backLabel="← Back to Home"
      backHref="/"
      primaryCta={{ label: 'Get started', href: '/free-resources' }}
      secondaryCta={{ label: 'Our services', href: '/services' }}
    />
  );
}
