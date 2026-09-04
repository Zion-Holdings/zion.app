import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Managed SOC Retainer & Pricing Models | Zion Tech Group",
  description: "Compare SOCaaS retainer models, per-device pricing, outcome-based pricing, and ML-driven alert pricing for managed SOC services.",
  openGraph: {
    title: "Managed SOC Retainer & Pricing Models | Zion Tech Group",
    description: "Compare SOCaaS retainer models, per-device pricing, outcome-based pricing, and ML-driven alert pricing for managed SOC services.",
    url: "https://ziontechgroup.com/docs/managed-soc-retainer/",
    type: 'website',
  },
  alternates: { canonical: "/docs/managed-soc-retainer/" },
};

export default function DocsManagedSocRetainerPage() {
  return (
    <StandardPage
      title="Managed SOC Retainer & Pricing Models"
      subtitle="Compare SOCaaS retainer models, per-device pricing, outcome-based pricing, and ML-driven alert pricing for managed SOC services."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Managed Soc Retainer" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Compare SOCaaS retainer models, per-device pricing, outcome-based pricing, and ML-driven alert pricing for managed SOC services.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
