import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Real-Time Data Quality Monitor | Zion Tech Group",
  description: "Continuous data quality monitoring platform that profiles datasets, detects anomalies, and enforces quality rules across your entire data pipeline. Sends alerts before bad data reaches downstream consumers.",
  openGraph: {
    title: "Real-Time Data Quality Monitor | Zion Tech Group",
    description: "Continuous data quality monitoring platform that profiles datasets, detects anomalies, and enforces quality rules across your entire data pipeline. Sends alerts before bad data reaches downstream consumers.",
    url: "https://ziontechgroup.com/services/data-quality-monitor/",
    type: 'website',
  },
  alternates: { canonical: "/services/data-quality-monitor/" },
};

export default function DataQualityMonitorPage() {
  return (
    <StandardPage
      title="Real-Time Data Quality Monitor"
      subtitle="Continuous data quality monitoring platform that profiles datasets, detects anomalies, and enforces quality rules across your entire data pipeline. Sends alerts before bad data reaches downstream consumers."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Real-Time Data Quality Monitor" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Continuous data quality monitoring platform that profiles datasets, detects anomalies, and enforces quality rules across your entire data pipeline. Sends alerts before bad data reaches downstream consumers.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614133852) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
