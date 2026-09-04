import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Multi-Cloud DNS & Traffic Manager | Zion Tech Group",
  description: "Unified DNS management across cloud providers with intelligent traffic routing, health checks, and failover automation. Supports geo-routing, weighted round-robin, and latency-based routing policies.",
  openGraph: {
    title: "Multi-Cloud DNS & Traffic Manager | Zion Tech Group",
    description: "Unified DNS management across cloud providers with intelligent traffic routing, health checks, and failover automation. Supports geo-routing, weighted round-robin, and latency-based routing policies.",
    url: "https://ziontechgroup.com/services/multi-cloud-dns-manager/",
    type: 'website',
  },
  alternates: { canonical: "/services/multi-cloud-dns-manager/" },
};

export default function MultiCloudDnsManagerPage() {
  return (
    <StandardPage
      title="Multi-Cloud DNS & Traffic Manager"
      subtitle="Unified DNS management across cloud providers with intelligent traffic routing, health checks, and failover automation. Supports geo-routing, weighted round-robin, and latency-based routing policies."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Multi-Cloud DNS & Traffic Manager" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Unified DNS management across cloud providers with intelligent traffic routing, health checks, and failover automation. Supports geo-routing, weighted round-robin, and latency-based routing policies.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614134924) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
