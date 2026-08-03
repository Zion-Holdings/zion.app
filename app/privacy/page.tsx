import MarketingPageTemplate from '@/components/MarketingPageTemplate';

export const metadata = {
  title: 'Privacy Policy | Zion Tech Group',
  description: 'Privacy policy for Zion Tech Group services, website, and outreach communications.',
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return (
    <MarketingPageTemplate
      title="Privacy Policy"
      description="This policy covers data collection, use, retention, and your rights for Zion Tech Group services and outreach."
      backLabel="← Back to Home"
      backHref="/"
      primaryCta={{ label: 'Contact us', href: '/contact' }}
      secondaryCta={{ label: 'Our services', href: '/services' }}
    />
  );
}
