import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Grafana Observability Stack | Zion Tech Group",
  description: "Open-source metrics, logs, and traces visualization through composable dashboards. Combined with Loki (log aggregation) and Tempo (distributed tracing), delivers a full-stack observability suite that rivals Datadog and N",
  openGraph: {
    title: "Grafana Observability Stack | Zion Tech Group",
    description: "Open-source metrics, logs, and traces visualization through composable dashboards. Combined with Loki (log aggregation) and Tempo (distributed tracing), delivers a full-stack observability suite that rivals Datadog and N",
    url: "https://ziontechgroup.com/services/grafana-observability/",
    type: 'website',
  },
  alternates: { canonical: "/services/grafana-observability/" },
};

export default function GrafanaObservabilityPage() {
  return (
    <StandardPage
      title="Grafana Observability Stack"
      subtitle="Open-source metrics, logs, and traces visualization through composable dashboards. Combined with Loki (log aggregation) and Tempo (distributed tracing), delivers a full-stack observability suite that rivals Datadog and N"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Grafana Observability Stack" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Open-source metrics, logs, and traces visualization through composable dashboards. Combined with Loki (log aggregation) and Tempo (distributed tracing), delivers a full-stack observability suite that rivals Datadog and N</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614125739) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
