import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Process Automation Consulting | Zion Tech Group",
  description: "AI process automation consulting: workflow assessment, automation design, governance, and managed optimization.",
  openGraph: {
    title: "AI Process Automation Consulting | Zion Tech Group",
    description: "AI process automation consulting: workflow assessment, automation design, governance, and managed optimization.",
    url: "https://ziontechgroup.com/docs/ai-process-automation-consulting/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-process-automation-consulting/" },
};

export default function DocsAiProcessAutomationConsultingPage() {
  return (
    <StandardPage
      title="AI Process Automation Consulting"
      subtitle="AI process automation consulting: workflow assessment, automation design, governance, and managed optimization."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Process Automation Consulting" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI process automation consulting: workflow assessment, automation design, governance, and managed optimization.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
