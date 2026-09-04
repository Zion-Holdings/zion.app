import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Zion Composio Automation Stack | Zion Tech Group",
  description: "How Zion uses Composio, Telegram, Calendly, Stripe, Resend, Hugging Face, Canva, and SERP API to deliver AI/IT services.",
  openGraph: {
    title: "Zion Composio Automation Stack | Zion Tech Group",
    description: "How Zion uses Composio, Telegram, Calendly, Stripe, Resend, Hugging Face, Canva, and SERP API to deliver AI/IT services.",
    url: "https://ziontechgroup.com/docs/zion-composio-automation-stack/",
    type: 'website',
  },
  alternates: { canonical: "/docs/zion-composio-automation-stack/" },
};

export default function DocsZionComposioAutomationStackPage() {
  return (
    <StandardPage
      title="Zion Composio Automation Stack"
      subtitle="How Zion uses Composio, Telegram, Calendly, Stripe, Resend, Hugging Face, Canva, and SERP API to deliver AI/IT services."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Zion Composio Automation Stack" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">How Zion uses Composio, Telegram, Calendly, Stripe, Resend, Hugging Face, Canva, and SERP API to deliver AI/IT services.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
