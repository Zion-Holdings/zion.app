import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Automation Consulting | Zion Tech Group",
  description: "Zion Tech Group provides AI automation consulting for enterprises. We audit your workflows, design AI agent architectures, and implement production automation with Composio, LangChain, and custom solutions.",
  openGraph: {
    title: "AI Automation Consulting | Zion Tech Group",
    description: "Zion Tech Group provides AI automation consulting for enterprises. We audit your workflows, design AI agent architectures, and implement production automation with Composio, LangChain, and custom solutions.",
    url: "https://ziontechgroup.com/docs/services/ai-automation-consulting/",
    type: 'website',
  },
  alternates: { canonical: "/docs/services/ai-automation-consulting/" },
};

export default function DocsServicesAiAutomationConsultingPage() {
  return (
    <StandardPage
      title="AI Automation Consulting"
      subtitle="Zion Tech Group provides AI automation consulting for enterprises. We audit your workflows, design AI agent architectures, and implement production automation with Composio, LangChain, and custom solutions."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Services", href: "/docs/services/" },
        { label: "Ai Automation Consulting" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group provides AI automation consulting for enterprises. We audit your workflows, design AI agent architectures, and implement production automation with Composio, LangChain, and custom solutions.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
