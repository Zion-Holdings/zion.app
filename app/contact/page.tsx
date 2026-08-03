import MarketingPageTemplate from '@/components/MarketingPageTemplate';

export const metadata = {
  title: 'Contact | Zion Tech Group',
  description: 'Talk to Zion Tech Group about AI, IT, cloud, security, and outreach automation.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return (
    <MarketingPageTemplate
      title="Contact"
      description="Tell us what you’re trying to solve. We’ll reply with a scoped next step and timing."
      primaryCta={{ label: 'Book via Calendly', href: 'https://calendly.com/kleber-ziontechgroup' }}
      secondaryCta={{ label: 'Email us', href: 'mailto:kleber@ziontechgroup.com' }}
    />
  );
}
