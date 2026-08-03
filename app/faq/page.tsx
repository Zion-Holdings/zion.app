import MarketingPageTemplate from '@/components/MarketingPageTemplate';

export const metadata = {
  title: 'FAQ | Zion Tech Group',
  description: 'Quick answers about Zion Tech Group services, pricing, engagement models, and support.',
  alternates: { canonical: '/faq' },
};

export default function Page() {
  return (
    <MarketingPageTemplate
      title="FAQ"
      description="Quick answers to common questions about services, pricing, and delivery."
      backLabel="← Back to Home"
      backHref="/"
      primaryCta={{ label: 'Contact us', href: '/contact' }}
      secondaryCta={{ label: 'Our services', href: '/services' }}
    />
  );
}
