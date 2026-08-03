import MarketingPageTemplate from '@/components/MarketingPageTemplate';

export const metadata = {
  title: 'Solution Configurator | Zion Tech Group',
  description: 'Configure your AI, IT, or security solution stack and get a tailored recommendation.',
  alternates: { canonical: '/configurator' },
};

export default function Page() {
  return (
    <MarketingPageTemplate
      title="Solution Configurator"
      description="Answer a few questions and get a recommended service and tooling stack."
      backLabel="← Back to Home"
      backHref="/"
      primaryCta={{ label: 'Start configurator', href: '/contact' }}
      secondaryCta={{ label: 'Browse services', href: '/services' }}
    />
  );
}
