import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Partner Portal & Revenue Calculator | Zion Tech Group",
  description: "Join the Zion partner portal, estimate AI revenue potential, and access reseller tools, pricing models, and enablement resources.",
  openGraph: {
    title: "AI Partner Portal & Revenue Calculator | Zion Tech Group",
    description: "Join the Zion partner portal, estimate AI revenue potential, and access reseller tools, pricing models, and enablement resources.",
    url: "https://ziontechgroup.com/docs/partner-portal/",
    type: 'website',
  },
  alternates: { canonical: "/docs/partner-portal/" },
};

export default function DocsPartnerPortalPage() {
  return (
    <StandardPage
      title="AI Partner Portal & Revenue Calculator"
      subtitle="Join the Zion partner portal, estimate AI revenue potential, and access reseller tools, pricing models, and enablement resources."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Partner Portal" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Join the Zion partner portal, estimate AI revenue potential, and access reseller tools, pricing models, and enablement resources.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
