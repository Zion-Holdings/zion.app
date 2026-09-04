import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-manufacturing-automation | Zion Tech Group",
  description: "Ai-manufacturing-automation services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for manufacturing-automation.",
  openGraph: {
    title: "Ai-manufacturing-automation | Zion Tech Group",
    description: "Ai-manufacturing-automation services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for manufacturing-automation.",
    url: "https://ziontechgroup.com/docs/ai-manufacturing-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-manufacturing-automation/" },
};

export default function DocsAiManufacturingAutomationPage() {
  return (
    <StandardPage
      title="Ai-manufacturing-automation"
      subtitle="Ai-manufacturing-automation services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for manufacturing-automation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Manufacturing Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-manufacturing-automation services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for manufacturing-automation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
