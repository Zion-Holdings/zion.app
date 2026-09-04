import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Affiliate Program Setup for AI Agencies | Zion Tech Group",
  description: "How to set up an affiliate or referral program for AI agencies using Stripe, FirstPromoter, PartnerStack, Rewardful, or Reditus.",
  openGraph: {
    title: "Affiliate Program Setup for AI Agencies | Zion Tech Group",
    description: "How to set up an affiliate or referral program for AI agencies using Stripe, FirstPromoter, PartnerStack, Rewardful, or Reditus.",
    url: "https://ziontechgroup.com/docs/affiliate-program-setup/",
    type: 'website',
  },
  alternates: { canonical: "/docs/affiliate-program-setup/" },
};

export default function DocsAffiliateProgramSetupPage() {
  return (
    <StandardPage
      title="Affiliate Program Setup for AI Agencies"
      subtitle="How to set up an affiliate or referral program for AI agencies using Stripe, FirstPromoter, PartnerStack, Rewardful, or Reditus."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Affiliate Program Setup" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">How to set up an affiliate or referral program for AI agencies using Stripe, FirstPromoter, PartnerStack, Rewardful, or Reditus.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
