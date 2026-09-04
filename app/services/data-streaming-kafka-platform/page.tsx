import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Apache Kafka Data Streaming Platform | Zion Tech Group",
  description: "Enterprise-grade real-time data streaming platform built on Apache Kafka. Handles millions of events per second with exactly-once processing guarantees, schema registry, and managed connectors for seamless data pipeline ",
  openGraph: {
    title: "Apache Kafka Data Streaming Platform | Zion Tech Group",
    description: "Enterprise-grade real-time data streaming platform built on Apache Kafka. Handles millions of events per second with exactly-once processing guarantees, schema registry, and managed connectors for seamless data pipeline ",
    url: "https://ziontechgroup.com/services/data-streaming-kafka-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/data-streaming-kafka-platform/" },
};

export default function DataStreamingKafkaPlatformPage() {
  return (
    <StandardPage
      title="Apache Kafka Data Streaming Platform"
      subtitle="Enterprise-grade real-time data streaming platform built on Apache Kafka. Handles millions of events per second with exactly-once processing guarantees, schema registry, and managed connectors for seamless data pipeline "
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Apache Kafka Data Streaming Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Enterprise-grade real-time data streaming platform built on Apache Kafka. Handles millions of events per second with exactly-once processing guarantees, schema registry, and managed connectors for seamless data pipeline </p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614140227) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
