import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Security SIEM & SOC as a Service | Zion Tech Group",
  description: "Cloud-native SIEM with managed SOC, threat intelligence, and incident response.",
  openGraph: {
    title: "Security SIEM & SOC as a Service | Zion Tech Group",
    description: "Cloud-native SIEM with managed SOC, threat intelligence, and incident response.",
    url: "https://ziontechgroup.com/services/security-siem-socaas/",
    type: 'website',
  },
  alternates: { canonical: "/services/security-siem-socaas/" },
};

export default function SecuritySiemSocaasPage() {
  return (
    <StandardPage
      title="Security SIEM & SOC as a Service"
      subtitle="Cloud-native SIEM with managed SOC, threat intelligence, and incident response."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Security SIEM & SOC as a Service" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Cloud-native SIEM with managed SOC, threat intelligence, and incident response.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614130309) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
