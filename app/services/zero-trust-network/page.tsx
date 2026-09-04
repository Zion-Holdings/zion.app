import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Zero Trust Network Access | Zion Tech Group",
  description: "Implement zero trust security architecture. Continuous verification, least-privilege access, micro-segmentation, and encrypted tunnels for all users.",
  openGraph: {
    title: "Zero Trust Network Access | Zion Tech Group",
    description: "Implement zero trust security architecture. Continuous verification, least-privilege access, micro-segmentation, and encrypted tunnels for all users.",
    url: "https://ziontechgroup.com/services/zero-trust-network/",
    type: 'website',
  },
  alternates: { canonical: "/services/zero-trust-network/" },
};

export default function ZeroTrustNetworkPage() {
  return (
    <StandardPage
      title="Zero Trust Network Access"
      subtitle="Implement zero trust security architecture. Continuous verification, least-privilege access, micro-segmentation, and encrypted tunnels for all users."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Zero Trust Network Access" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Implement zero trust security architecture. Continuous verification, least-privilege access, micro-segmentation, and encrypted tunnels for all users.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607102845) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
