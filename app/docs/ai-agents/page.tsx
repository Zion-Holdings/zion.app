import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Agents & Automation Delivery | Zion Tech Group",
  description: "Deploy AI agents for support, sales, ops, and security with measurable SLAs and human escalation.",
  openGraph: {
    title: "AI Agents & Automation Delivery | Zion Tech Group",
    description: "Deploy AI agents for support, sales, ops, and security with measurable SLAs and human escalation.",
    url: "https://ziontechgroup.com/docs/ai-agents/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-agents/" },
};

export default function DocsAiAgentsPage() {
  return (
    <StandardPage
      title="AI Agents & Automation Delivery"
      subtitle="Deploy AI agents for support, sales, ops, and security with measurable SLAs and human escalation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Agents" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Deploy AI agents for support, sales, ops, and security with measurable SLAs and human escalation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
