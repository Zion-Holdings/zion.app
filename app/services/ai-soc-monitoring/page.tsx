import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI SOC Monitoring Service | Zion Tech Group",
  description: "AI-augmented Security Operations Center monitoring: alert triage, anomaly detection, threat correlation, and automated investigation workflows for 24/7 security coverage.",
  openGraph: {
    title: "AI SOC Monitoring Service | Zion Tech Group",
    description: "AI-augmented Security Operations Center monitoring: alert triage, anomaly detection, threat correlation, and automated investigation workflows for 24/7 security coverage.",
    url: "https://ziontechgroup.com/services/ai-soc-monitoring/",
    type: 'website',
  },
  alternates: { canonical: "/services/ai-soc-monitoring/" },
};

export default function ServicesAiSocMonitoringPage() {
  return (
    <StandardPage
      title="AI SOC Monitoring Service"
      subtitle="AI-augmented Security Operations Center monitoring: alert triage, anomaly detection, threat correlation, and automated investigation workflows for 24/7 security coverage."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Ai Soc Monitoring" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-augmented Security Operations Center monitoring: alert triage, anomaly detection, threat correlation, and automated investigation workflows for 24/7 security coverage.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
