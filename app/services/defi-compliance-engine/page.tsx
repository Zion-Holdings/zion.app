import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "DeFi Compliance Engine | Zion Tech Group",
  description: "Automated compliance monitoring for DeFi protocols and cryptocurrency exchanges. Real-time AML screening, transaction monitoring, and regulatory reporting across multiple chains.",
  openGraph: {
    title: "DeFi Compliance Engine | Zion Tech Group",
    description: "Automated compliance monitoring for DeFi protocols and cryptocurrency exchanges. Real-time AML screening, transaction monitoring, and regulatory reporting across multiple chains.",
    url: "https://ziontechgroup.com/services/defi-compliance-engine/",
    type: 'website',
  },
  alternates: { canonical: "/services/defi-compliance-engine/" },
};

export default function DefiComplianceEnginePage() {
  return (
    <StandardPage
      title="DeFi Compliance Engine"
      subtitle="Automated compliance monitoring for DeFi protocols and cryptocurrency exchanges. Real-time AML screening, transaction monitoring, and regulatory reporting across multiple chains."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "DeFi Compliance Engine" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automated compliance monitoring for DeFi protocols and cryptocurrency exchanges. Real-time AML screening, transaction monitoring, and regulatory reporting across multiple chains.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614131349) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
