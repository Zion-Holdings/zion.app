import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Affiliate Program — Zion Tech Group | Zion Tech Group",
  description: "Join the Zion Tech Group affiliate program. Earn commissions by referring clients to AI services, managed IT, and automation solutions.",
  openGraph: {
    title: "Affiliate Program — Zion Tech Group | Zion Tech Group",
    description: "Join the Zion Tech Group affiliate program. Earn commissions by referring clients to AI services, managed IT, and automation solutions.",
    url: "https://ziontechgroup.com/affiliates/",
    type: 'website',
  },
  alternates: { canonical: "/affiliates/" },
};

export default function AffiliatesPage() {
  return (
    <StandardPage
      title="Affiliate Program — Zion Tech Group"
      subtitle="Join the Zion Tech Group affiliate program. Earn commissions by referring clients to AI services, managed IT, and automation solutions."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Affiliates" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Join the Zion Tech Group affiliate program. Earn commissions by referring clients to AI services, managed IT, and automation solutions.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
