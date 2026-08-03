import MarketingPageTemplate from '@/components/MarketingPageTemplate';

export const metadata = {
  title: 'Free Resources | Zion Tech Group',
  description: 'Download free AI, IT, and security resources: checklists, guides, and templates.',
  alternates: { canonical: '/free-resources' },
};

export default function Page() {
  return (
    <MarketingPageTemplate
      title="Free Resources"
      description="Practical guides and templates to help you evaluate and improve your operations."
      backLabel="← Back to Home"
      backHref="/"
      primaryCta={{ label: 'Get resources', href: '/contact' }}
      secondaryCta={{ label: 'Read insights', href: '/blog' }}
    />
  );
}
