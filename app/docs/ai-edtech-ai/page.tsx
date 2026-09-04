import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-edtech-ai | Zion Tech Group",
  description: "Ai-edtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for edtech-ai.",
  openGraph: {
    title: "Ai-edtech-ai | Zion Tech Group",
    description: "Ai-edtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for edtech-ai.",
    url: "https://ziontechgroup.com/docs/ai-edtech-ai/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-edtech-ai/" },
};

export default function DocsAiEdtechAiPage() {
  return (
    <StandardPage
      title="Ai-edtech-ai"
      subtitle="Ai-edtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for edtech-ai."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Edtech Ai" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-edtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for edtech-ai.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
