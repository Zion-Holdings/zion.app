import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Agent Development | Zion Tech Group",
  description: "Custom AI agent development: autonomous assistants, workflow agents, and multi-agent systems for enterprise.",
  openGraph: {
    title: "AI Agent Development | Zion Tech Group",
    description: "Custom AI agent development: autonomous assistants, workflow agents, and multi-agent systems for enterprise.",
    url: "https://ziontechgroup.com/ai-agent-development/",
    type: 'website',
  },
  alternates: { canonical: "/ai-agent-development/" },
};

export default function AiAgentDevelopmentPage() {
  return (
    <StandardPage
      title="AI Agent Development"
      subtitle="Custom AI agent development: autonomous assistants, workflow agents, and multi-agent systems for enterprise."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Agent Development" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Custom AI agent development: autonomous assistants, workflow agents, and multi-agent systems for enterprise.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
