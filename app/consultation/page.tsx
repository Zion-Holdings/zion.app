import MarketingPageTemplate from '@/components/MarketingPageTemplate';

export const metadata = {
  title: 'Consultation | Zion Tech Group',
  description: 'Book a strategy consultation with Zion Tech Group to review your AI, cloud, or security roadmap.',
  alternates: { canonical: '/consultation' },
};

export default function Page() {
  return (
    <MarketingPageTemplate
      title="Consultation"
      description="A focused session to review your current state, risks, and highest-impact next actions."
      backLabel="← Back to Home"
      backHref="/"
      primaryCta={{ label: 'Book consultation', href: 'https://calendly.com/kleber-ziontechgroup' }}
      secondaryCta={{ label: 'Our services', href: '/services' }}
    />
  );
}
