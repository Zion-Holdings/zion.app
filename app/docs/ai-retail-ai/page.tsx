import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-retail-ai | Zion Tech Group",
  description: "Ai-retail-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for retail-ai.",
  openGraph: {
    title: "Ai-retail-ai | Zion Tech Group",
    description: "Ai-retail-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for retail-ai.",
    url: "https://ziontechgroup.com/docs/ai-retail-ai/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-retail-ai/" },
};

export default function DocsAiRetailAiPage() {
  return (
    <StandardPage
      title="Ai-retail-ai"
      subtitle="Ai-retail-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for retail-ai."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Retail Ai" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-retail-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for retail-ai.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
