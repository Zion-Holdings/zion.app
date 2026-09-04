import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Network Observability Platform | Zion Tech Group",
  description: "Full-stack network observability platform that provides real-time visibility into network performance, traffic patterns, and health metrics. Combines flow analysis, packet capture, and synthetic monitoring with AI-powere",
  openGraph: {
    title: "Network Observability Platform | Zion Tech Group",
    description: "Full-stack network observability platform that provides real-time visibility into network performance, traffic patterns, and health metrics. Combines flow analysis, packet capture, and synthetic monitoring with AI-powere",
    url: "https://ziontechgroup.com/services/network-observability-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/network-observability-platform/" },
};

export default function NetworkObservabilityPlatformPage() {
  return (
    <StandardPage
      title="Network Observability Platform"
      subtitle="Full-stack network observability platform that provides real-time visibility into network performance, traffic patterns, and health metrics. Combines flow analysis, packet capture, and synthetic monitoring with AI-powere"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Network Observability Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Full-stack network observability platform that provides real-time visibility into network performance, traffic patterns, and health metrics. Combines flow analysis, packet capture, and synthetic monitoring with AI-powere</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607104723) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
