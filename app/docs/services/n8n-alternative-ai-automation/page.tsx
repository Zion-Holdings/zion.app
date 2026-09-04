import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "n8n Alternative for AI Agent Workflows | Zion Tech Group",
  description: "Looking for an n8n alternative in 2026? Zion Tech Group explains why Composio beats n8n for AI agent workflows, event-driven automation, and enterprise integration — with managed OAuth and MCP gateway.",
  openGraph: {
    title: "n8n Alternative for AI Agent Workflows | Zion Tech Group",
    description: "Looking for an n8n alternative in 2026? Zion Tech Group explains why Composio beats n8n for AI agent workflows, event-driven automation, and enterprise integration — with managed OAuth and MCP gateway.",
    url: "https://ziontechgroup.com/docs/services/n8n-alternative-ai-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/services/n8n-alternative-ai-automation/" },
};

export default function DocsServicesN8nAlternativeAiAutomationPage() {
  return (
    <StandardPage
      title="n8n Alternative for AI Agent Workflows"
      subtitle="Looking for an n8n alternative in 2026? Zion Tech Group explains why Composio beats n8n for AI agent workflows, event-driven automation, and enterprise integration — with managed OAuth and MCP gateway."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Services", href: "/docs/services/" },
        { label: "N8n Alternative Ai Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Looking for an n8n alternative in 2026? Zion Tech Group explains why Composio beats n8n for AI agent workflows, event-driven automation, and enterprise integration — with managed OAuth and MCP gateway.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
