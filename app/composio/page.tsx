import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "composio | Zion Tech Group",
  description: "Zion Tech Group usa Composio para orquestrar 47+ integrações de IA e automação. WhatsApp, Calendly, Stripe, Gmail, Slack, HubSpot e mais — tudo conectado e automatizado.",
  openGraph: {
    title: "composio | Zion Tech Group",
    description: "Zion Tech Group usa Composio para orquestrar 47+ integrações de IA e automação. WhatsApp, Calendly, Stripe, Gmail, Slack, HubSpot e mais — tudo conectado e automatizado.",
    url: "https://ziontechgroup.com/composio/",
    type: 'website',
  },
  alternates: { canonical: "/composio/" },
};

export default function ComposioPage() {
  return (
    <StandardPage
      title="composio"
      subtitle="Zion Tech Group usa Composio para orquestrar 47+ integrações de IA e automação. WhatsApp, Calendly, Stripe, Gmail, Slack, HubSpot e mais — tudo conectado e automatizado."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Composio" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zion Tech Group usa Composio para orquestrar 47+ integrações de IA e automação. WhatsApp, Calendly, Stripe, Gmail, Slack, HubSpot e mais — tudo conectado e automatizado.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
