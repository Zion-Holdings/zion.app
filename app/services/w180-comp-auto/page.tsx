import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "W180 Comp Auto | Zion Tech Group",
  description: "W180 Comp Auto from Zion Tech Group.",
  openGraph: {
    title: "W180 Comp Auto | Zion Tech Group",
    description: "W180 Comp Auto from Zion Tech Group.",
    url: "https://ziontechgroup.com/services/w180-comp-auto/",
    type: 'website',
  },
  alternates: { canonical: "/services/w180-comp-auto/" },
};

export default function W180CompAutoPage() {
  return (
    <StandardPage
      title="W180 Comp Auto"
      subtitle="W180 Comp Auto from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "W180 Comp Auto" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">W180 Comp Auto from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607105822) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
