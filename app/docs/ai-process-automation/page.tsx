import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Process Automation | Zion Tech Group",
  description: "AI process automation for finance, legal, HR, and operations with measurable efficiency gains.",
  openGraph: {
    title: "AI Process Automation | Zion Tech Group",
    description: "AI process automation for finance, legal, HR, and operations with measurable efficiency gains.",
    url: "https://ziontechgroup.com/docs/ai-process-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-process-automation/" },
};

export default function DocsAiProcessAutomationPage() {
  return (
    <StandardPage
      title="AI Process Automation"
      subtitle="AI process automation for finance, legal, HR, and operations with measurable efficiency gains."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Process Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI process automation for finance, legal, HR, and operations with measurable efficiency gains.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
