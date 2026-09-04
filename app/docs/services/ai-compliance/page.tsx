import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Compliance & Regulatory Automation | Zion Tech Group",
  description: "Automated compliance monitoring, risk assessment, and audit trail management for GDPR, HIPAA, SOC 2, and more.",
  openGraph: {
    title: "AI Compliance & Regulatory Automation | Zion Tech Group",
    description: "Automated compliance monitoring, risk assessment, and audit trail management for GDPR, HIPAA, SOC 2, and more.",
    url: "https://ziontechgroup.com/docs/services/ai-compliance/",
    type: 'website',
  },
  alternates: { canonical: "/docs/services/ai-compliance/" },
};

export default function DocsServicesAiCompliancePage() {
  return (
    <StandardPage
      title="AI Compliance & Regulatory Automation"
      subtitle="Automated compliance monitoring, risk assessment, and audit trail management for GDPR, HIPAA, SOC 2, and more."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Services", href: "/docs/services/" },
        { label: "Ai Compliance" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Automated compliance monitoring, risk assessment, and audit trail management for GDPR, HIPAA, SOC 2, and more.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
