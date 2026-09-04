import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Compliance Automation for IT & AI | Zion Tech Group",
  description: "Automate compliance, audits, and governance for AI and IT operations with Zion",
  openGraph: {
    title: "Compliance Automation for IT & AI | Zion Tech Group",
    description: "Automate compliance, audits, and governance for AI and IT operations with Zion",
    url: "https://ziontechgroup.com/docs/compliance-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/compliance-automation/" },
};

export default function DocsComplianceAutomationPage() {
  return (
    <StandardPage
      title="Compliance Automation for IT & AI"
      subtitle="Automate compliance, audits, and governance for AI and IT operations with Zion"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Compliance Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Automate compliance, audits, and governance for AI and IT operations with Zion</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
