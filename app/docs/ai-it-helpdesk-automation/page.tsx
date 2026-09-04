import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI IT Helpdesk Automation | Zion Tech Group",
  description: "AI IT helpdesk automation: ticket triage, knowledge base, chat support, and SLA management for MSPs and IT teams.",
  openGraph: {
    title: "AI IT Helpdesk Automation | Zion Tech Group",
    description: "AI IT helpdesk automation: ticket triage, knowledge base, chat support, and SLA management for MSPs and IT teams.",
    url: "https://ziontechgroup.com/docs/ai-it-helpdesk-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-it-helpdesk-automation/" },
};

export default function DocsAiItHelpdeskAutomationPage() {
  return (
    <StandardPage
      title="AI IT Helpdesk Automation"
      subtitle="AI IT helpdesk automation: ticket triage, knowledge base, chat support, and SLA management for MSPs and IT teams."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai It Helpdesk Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI IT helpdesk automation: ticket triage, knowledge base, chat support, and SLA management for MSPs and IT teams.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
