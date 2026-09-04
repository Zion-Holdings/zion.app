import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Customer Support Automation | Zion Tech Group",
  description: "AI customer support automation with WhatsApp, Resend, and AI agents. Reduce tickets, speed up responses, and improve CSAT.",
  openGraph: {
    title: "AI Customer Support Automation | Zion Tech Group",
    description: "AI customer support automation with WhatsApp, Resend, and AI agents. Reduce tickets, speed up responses, and improve CSAT.",
    url: "https://ziontechgroup.com/docs/ai-customer-support-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-customer-support-automation/" },
};

export default function DocsAiCustomerSupportAutomationPage() {
  return (
    <StandardPage
      title="AI Customer Support Automation"
      subtitle="AI customer support automation with WhatsApp, Resend, and AI agents. Reduce tickets, speed up responses, and improve CSAT."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Customer Support Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI customer support automation with WhatsApp, Resend, and AI agents. Reduce tickets, speed up responses, and improve CSAT.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
