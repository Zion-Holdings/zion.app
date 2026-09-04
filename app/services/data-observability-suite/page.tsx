import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Data Observability & Reliability Suite | Zion Tech Group",
  description: "End-to-end data observability platform that monitors data pipelines for freshness, volume, schema, and quality issues. Automatic anomaly detection, root cause analysis, and incident management for data teams.",
  openGraph: {
    title: "Data Observability & Reliability Suite | Zion Tech Group",
    description: "End-to-end data observability platform that monitors data pipelines for freshness, volume, schema, and quality issues. Automatic anomaly detection, root cause analysis, and incident management for data teams.",
    url: "https://ziontechgroup.com/services/data-observability-suite/",
    type: 'website',
  },
  alternates: { canonical: "/services/data-observability-suite/" },
};

export default function DataObservabilitySuitePage() {
  return (
    <StandardPage
      title="Data Observability & Reliability Suite"
      subtitle="End-to-end data observability platform that monitors data pipelines for freshness, volume, schema, and quality issues. Automatic anomaly detection, root cause analysis, and incident management for data teams."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Data Observability & Reliability Suite" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">End-to-end data observability platform that monitors data pipelines for freshness, volume, schema, and quality issues. Automatic anomaly detection, root cause analysis, and incident management for data teams.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614102454) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
