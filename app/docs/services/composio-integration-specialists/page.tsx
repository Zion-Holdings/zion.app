import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Composio Integration Specialists | Zion Tech Group",
  description: "Zion Tech Group is your Composio integration specialist. We connect your AI agents to 1,000+ apps — Slack, Gmail, GitHub, Linear, Notion, HubSpot, and more — with managed OAuth, event-driven triggers, and enterprise-grade security.",
  openGraph: {
    title: "Composio Integration Specialists | Zion Tech Group",
    description: "Zion Tech Group is your Composio integration specialist. We connect your AI agents to 1,000+ apps — Slack, Gmail, GitHub, Linear, Notion, HubSpot, and more — with managed OAuth, event-driven triggers, and enterprise-grade security.",
    url: "https://ziontechgroup.com/docs/services/composio-integration-specialists/",
    type: 'website',
  },
  alternates: { canonical: "/docs/services/composio-integration-specialists/" },
};

export default function DocsServicesComposioIntegrationSpecialistsPage() {
  return (
    <StandardPage
      title="Composio Integration Specialists"
      subtitle="Zion Tech Group is your Composio integration specialist. We connect your AI agents to 1,000+ apps — Slack, Gmail, GitHub, Linear, Notion, HubSpot, and more — with managed OAuth, event-driven triggers, and enterprise-grade security."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Services", href: "/docs/services/" },
        { label: "Composio Integration Specialists" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group is your Composio integration specialist. We connect your AI agents to 1,000+ apps — Slack, Gmail, GitHub, Linear, Notion, HubSpot, and more — with managed OAuth, event-driven triggers, and enterprise-grade security.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
