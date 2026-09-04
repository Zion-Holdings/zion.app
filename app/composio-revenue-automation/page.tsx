import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Composio Revenue Automation | Zion Tech Group",
  description: "Monetize workflows with Composio: Gmail, Notion, Slack, GitHub, Calendly, WhatsApp, Stripe, and more.",
  openGraph: {
    title: "Composio Revenue Automation | Zion Tech Group",
    description: "Monetize workflows with Composio: Gmail, Notion, Slack, GitHub, Calendly, WhatsApp, Stripe, and more.",
    url: "https://ziontechgroup.com/composio-revenue-automation/",
    type: 'website',
  },
  alternates: { canonical: "/composio-revenue-automation/" },
};

export default function ComposioRevenueAutomationPage() {
  return (
    <StandardPage
      title="Composio Revenue Automation"
      subtitle="Monetize workflows with Composio: Gmail, Notion, Slack, GitHub, Calendly, WhatsApp, Stripe, and more."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Composio Revenue Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Monetize workflows with Composio: Gmail, Notion, Slack, GitHub, Calendly, WhatsApp, Stripe, and more.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
