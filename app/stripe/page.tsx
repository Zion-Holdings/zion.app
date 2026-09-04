import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Stripe Payment Links — Zion Tech Group | Zion Tech Group",
  description: "Pay for Zion Tech Group services instantly with Stripe. One-click checkout for AI consulting, IT services, cloud migration, security audits, and custom development packages.",
  openGraph: {
    title: "Stripe Payment Links — Zion Tech Group | Zion Tech Group",
    description: "Pay for Zion Tech Group services instantly with Stripe. One-click checkout for AI consulting, IT services, cloud migration, security audits, and custom development packages.",
    url: "https://ziontechgroup.com/stripe/",
    type: 'website',
  },
  alternates: { canonical: "/stripe/" },
};

export default function StripePage() {
  return (
    <StandardPage
      title="Stripe Payment Links — Zion Tech Group"
      subtitle="Pay for Zion Tech Group services instantly with Stripe. One-click checkout for AI consulting, IT services, cloud migration, security audits, and custom development packages."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Stripe" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Pay for Zion Tech Group services instantly with Stripe. One-click checkout for AI consulting, IT services, cloud migration, security audits, and custom development packages.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
