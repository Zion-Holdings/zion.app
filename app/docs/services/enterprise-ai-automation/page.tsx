import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Enterprise AI Automation Services | Zion Tech Group",
  description: "Zion Tech Group delivers enterprise AI automation services — building AI agent workflows powered by Composio that connect your CRMs, communication tools, engineering platforms, and databases into unified, event-driven automation.",
  openGraph: {
    title: "Enterprise AI Automation Services | Zion Tech Group",
    description: "Zion Tech Group delivers enterprise AI automation services — building AI agent workflows powered by Composio that connect your CRMs, communication tools, engineering platforms, and databases into unified, event-driven automation.",
    url: "https://ziontechgroup.com/docs/services/enterprise-ai-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/services/enterprise-ai-automation/" },
};

export default function DocsServicesEnterpriseAiAutomationPage() {
  return (
    <StandardPage
      title="Enterprise AI Automation Services"
      subtitle="Zion Tech Group delivers enterprise AI automation services — building AI agent workflows powered by Composio that connect your CRMs, communication tools, engineering platforms, and databases into unified, event-driven automation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Services", href: "/docs/services/" },
        { label: "Enterprise Ai Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group delivers enterprise AI automation services — building AI agent workflows powered by Composio that connect your CRMs, communication tools, engineering platforms, and databases into unified, event-driven automation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
