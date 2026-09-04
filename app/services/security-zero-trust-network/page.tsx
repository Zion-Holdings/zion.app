import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Security Zero Trust Network Access | Zion Tech Group",
  description: "ZTNA solution replacing VPN with identity-aware micro-segmented access to internal applications.",
  openGraph: {
    title: "Security Zero Trust Network Access | Zion Tech Group",
    description: "ZTNA solution replacing VPN with identity-aware micro-segmented access to internal applications.",
    url: "https://ziontechgroup.com/services/security-zero-trust-network/",
    type: 'website',
  },
  alternates: { canonical: "/services/security-zero-trust-network/" },
};

export default function SecurityZeroTrustNetworkPage() {
  return (
    <StandardPage
      title="Security Zero Trust Network Access"
      subtitle="ZTNA solution replacing VPN with identity-aware micro-segmented access to internal applications."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Security Zero Trust Network Access" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">ZTNA solution replacing VPN with identity-aware micro-segmented access to internal applications.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614110108) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
