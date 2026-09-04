import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Composio Integration Stack | Zion Tech Group",
  description: "Full automation stack powered by Composio: Stripe, Calendly, WhatsApp, Resend, HubSpot, Notion, Slack, 1Password, SendGrid, ActiveCampaign, Firecrawl, SerpApi, Tavily, Brevo, Gmail.",
  openGraph: {
    title: "Composio Integration Stack | Zion Tech Group",
    description: "Full automation stack powered by Composio: Stripe, Calendly, WhatsApp, Resend, HubSpot, Notion, Slack, 1Password, SendGrid, ActiveCampaign, Firecrawl, SerpApi, Tavily, Brevo, Gmail.",
    url: "https://ziontechgroup.com/docs/composio-integrations/",
    type: 'website',
  },
  alternates: { canonical: "/docs/composio-integrations/" },
};

export default function DocsComposioIntegrationsPage() {
  return (
    <StandardPage
      title="Composio Integration Stack"
      subtitle="Full automation stack powered by Composio: Stripe, Calendly, WhatsApp, Resend, HubSpot, Notion, Slack, 1Password, SendGrid, ActiveCampaign, Firecrawl, SerpApi, Tavily, Brevo, Gmail."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Composio Integrations" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Full automation stack powered by Composio: Stripe, Calendly, WhatsApp, Resend, HubSpot, Notion, Slack, 1Password, SendGrid, ActiveCampaign, Firecrawl, SerpApi, Tavily, Brevo, Gmail.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
