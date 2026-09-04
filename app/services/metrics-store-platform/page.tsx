import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Metrics Store & Observability Platform | Zion Tech Group",
  description: "Centralized metrics store that standardizes business and technical metrics across the organization. Single source of truth for KPIs, SLOs, and operational metrics with versioning and access control.",
  openGraph: {
    title: "Metrics Store & Observability Platform | Zion Tech Group",
    description: "Centralized metrics store that standardizes business and technical metrics across the organization. Single source of truth for KPIs, SLOs, and operational metrics with versioning and access control.",
    url: "https://ziontechgroup.com/services/metrics-store-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/metrics-store-platform/" },
};

export default function MetricsStorePlatformPage() {
  return (
    <StandardPage
      title="Metrics Store & Observability Platform"
      subtitle="Centralized metrics store that standardizes business and technical metrics across the organization. Single source of truth for KPIs, SLOs, and operational metrics with versioning and access control."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Metrics Store & Observability Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Centralized metrics store that standardizes business and technical metrics across the organization. Single source of truth for KPIs, SLOs, and operational metrics with versioning and access control.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607102537) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
