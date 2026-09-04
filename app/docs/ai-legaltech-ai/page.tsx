import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-legaltech-ai | Zion Tech Group",
  description: "Ai-legaltech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for legaltech-ai.",
  openGraph: {
    title: "Ai-legaltech-ai | Zion Tech Group",
    description: "Ai-legaltech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for legaltech-ai.",
    url: "https://ziontechgroup.com/docs/ai-legaltech-ai/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-legaltech-ai/" },
};

export default function DocsAiLegaltechAiPage() {
  return (
    <StandardPage
      title="Ai-legaltech-ai"
      subtitle="Ai-legaltech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for legaltech-ai."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Legaltech Ai" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-legaltech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for legaltech-ai.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
