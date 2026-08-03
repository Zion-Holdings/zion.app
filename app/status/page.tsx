import MarketingPageTemplate from '@/components/MarketingPageTemplate';

export const metadata = {
  title: 'Status | Zion Tech Group',
  description: 'Service status page for Zion Tech Group platform and client-facing operations.',
  alternates: { canonical: '/status' },
};

export default function Page() {
  return (
    <MarketingPageTemplate
      title="Status"
      description="Current operational status for Zion Tech Group services and infrastructure."
      backLabel="← Back to Home"
      backHref="/"
      primaryCta={{ label: 'Contact support', href: '/contact' }}
      secondaryCta={{ label: 'Our services', href: '/services' }}
    />
  );
}
