import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI CMDB Automation | Zion Tech Group",
  description: "Automate configuration management with AI enrichment, relationship mapping, and asset lifecycle tracking.",
  openGraph: {
    title: "AI CMDB Automation | Zion Tech Group",
    description: "Automate configuration management with AI enrichment, relationship mapping, and asset lifecycle tracking.",
    url: "https://ziontechgroup.com/docs/ai-cmdb-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-cmdb-automation/" },
};

export default function DocsAiCmdbAutomationPage() {
  return (
    <StandardPage
      title="AI CMDB Automation"
      subtitle="Automate configuration management with AI enrichment, relationship mapping, and asset lifecycle tracking."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Cmdb Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Automate configuration management with AI enrichment, relationship mapping, and asset lifecycle tracking.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
