import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Real-Time Analytics & Event Streaming | Zion Tech Group",
  description: "Build real-time analytics pipelines with event streaming (Kafka, Kinesis), real-time dashboards, and live alerting. Track user behavior, system metrics, and business KPIs with sub-second latency.",
  openGraph: {
    title: "Real-Time Analytics & Event Streaming | Zion Tech Group",
    description: "Build real-time analytics pipelines with event streaming (Kafka, Kinesis), real-time dashboards, and live alerting. Track user behavior, system metrics, and business KPIs with sub-second latency.",
    url: "https://ziontechgroup.com/services/real-time-analytics/",
    type: 'website',
  },
  alternates: { canonical: "/services/real-time-analytics/" },
};

export default function RealTimeAnalyticsPage() {
  return (
    <StandardPage
      title="Real-Time Analytics & Event Streaming"
      subtitle="Build real-time analytics pipelines with event streaming (Kafka, Kinesis), real-time dashboards, and live alerting. Track user behavior, system metrics, and business KPIs with sub-second latency."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Real-Time Analytics & Event Streaming" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Build real-time analytics pipelines with event streaming (Kafka, Kinesis), real-time dashboards, and live alerting. Track user behavior, system metrics, and business KPIs with sub-second latency.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614110556) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
