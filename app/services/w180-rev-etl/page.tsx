import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Reverse ETL and Data Activation | Zion Tech Group",
  description: "Push data from warehouse to operational systems: CRM, ad platforms.",
  openGraph: {
    title: "Reverse ETL and Data Activation | Zion Tech Group",
    description: "Push data from warehouse to operational systems: CRM, ad platforms.",
    url: "https://ziontechgroup.com/services/w180-rev-etl/",
    type: 'website',
  },
  alternates: { canonical: "/services/w180-rev-etl/" },
};

export default function W180RevEtlPage() {
  return (
    <StandardPage
      title="Reverse ETL and Data Activation"
      subtitle="Push data from warehouse to operational systems: CRM, ad platforms."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Reverse ETL and Data Activation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Push data from warehouse to operational systems: CRM, ad platforms.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113536) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
