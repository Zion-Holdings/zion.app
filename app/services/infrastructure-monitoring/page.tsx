import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Infrastructure Monitoring & Observability | Zion Tech Group",
  description: "Full-stack observability with metrics, logs, and traces. Setup Prometheus, Grafana, Loki, and Jaeger for complete visibility into your systems. Custom dashboards, alerting rules, and SLO tracking included.",
  openGraph: {
    title: "Infrastructure Monitoring & Observability | Zion Tech Group",
    description: "Full-stack observability with metrics, logs, and traces. Setup Prometheus, Grafana, Loki, and Jaeger for complete visibility into your systems. Custom dashboards, alerting rules, and SLO tracking included.",
    url: "https://ziontechgroup.com/services/infrastructure-monitoring/",
    type: 'website',
  },
  alternates: { canonical: "/services/infrastructure-monitoring/" },
};

export default function InfrastructureMonitoringPage() {
  return (
    <StandardPage
      title="Infrastructure Monitoring & Observability"
      subtitle="Full-stack observability with metrics, logs, and traces. Setup Prometheus, Grafana, Loki, and Jaeger for complete visibility into your systems. Custom dashboards, alerting rules, and SLO tracking included."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Infrastructure Monitoring & Observability" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Full-stack observability with metrics, logs, and traces. Setup Prometheus, Grafana, Loki, and Jaeger for complete visibility into your systems. Custom dashboards, alerting rules, and SLO tracking included.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607204908) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
