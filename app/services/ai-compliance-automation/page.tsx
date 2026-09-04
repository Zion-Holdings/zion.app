import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Compliance Automation Service | Zion Tech Group",
  description: "Automate compliance workflows: continuous control monitoring, evidence collection, audit readiness reporting, and regulatory mapping for SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS.",
  openGraph: {
    title: "AI Compliance Automation Service | Zion Tech Group",
    description: "Automate compliance workflows: continuous control monitoring, evidence collection, audit readiness reporting, and regulatory mapping for SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS.",
    url: "https://ziontechgroup.com/services/ai-compliance-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/ai-compliance-automation/" },
};

export default function ServicesAiComplianceAutomationPage() {
  return (
    <StandardPage
      title="AI Compliance Automation Service"
      subtitle="Automate compliance workflows: continuous control monitoring, evidence collection, audit readiness reporting, and regulatory mapping for SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Ai Compliance Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate compliance workflows: continuous control monitoring, evidence collection, audit readiness reporting, and regulatory mapping for SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
