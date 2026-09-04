import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "W179 Logistics Auto | Zion Tech Group",
  description: "W179 Logistics Auto from Zion Tech Group.",
  openGraph: {
    title: "W179 Logistics Auto | Zion Tech Group",
    description: "W179 Logistics Auto from Zion Tech Group.",
    url: "https://ziontechgroup.com/services/w179-logistics-auto/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-logistics-auto/" },
};

export default function W179LogisticsAutoPage() {
  return (
    <StandardPage
      title="W179 Logistics Auto"
      subtitle="W179 Logistics Auto from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "W179 Logistics Auto" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">W179 Logistics Auto from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607105059) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
