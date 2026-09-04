import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Affiliate Program — Zion Tech Group | Zion Tech Group",
  description: "Earn 20% recurring commission by referring clients to Zion Tech Group. AI services, IT consulting, cloud migration, and automation — pay only when your referral pays.",
  openGraph: {
    title: "Affiliate Program — Zion Tech Group | Zion Tech Group",
    description: "Earn 20% recurring commission by referring clients to Zion Tech Group. AI services, IT consulting, cloud migration, and automation — pay only when your referral pays.",
    url: "https://ziontechgroup.com/affiliate/",
    type: 'website',
  },
  alternates: { canonical: "/affiliate/" },
};

export default function AffiliatePage() {
  return (
    <StandardPage
      title="Affiliate Program — Zion Tech Group"
      subtitle="Earn 20% recurring commission by referring clients to Zion Tech Group. AI services, IT consulting, cloud migration, and automation — pay only when your referral pays."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Affiliate" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Earn 20% recurring commission by referring clients to Zion Tech Group. AI services, IT consulting, cloud migration, and automation — pay only when your referral pays.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
