import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-fintech-automation | Zion Tech Group",
  description: "Ai-fintech-automation services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for fintech-automation.",
  openGraph: {
    title: "Ai-fintech-automation | Zion Tech Group",
    description: "Ai-fintech-automation services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for fintech-automation.",
    url: "https://ziontechgroup.com/docs/ai-fintech-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-fintech-automation/" },
};

export default function DocsAiFintechAutomationPage() {
  return (
    <StandardPage
      title="Ai-fintech-automation"
      subtitle="Ai-fintech-automation services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for fintech-automation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Fintech Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-fintech-automation services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for fintech-automation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
