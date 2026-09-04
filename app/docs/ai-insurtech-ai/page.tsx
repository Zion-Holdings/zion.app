import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-insurtech-ai | Zion Tech Group",
  description: "Ai-insurtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for insurtech-ai.",
  openGraph: {
    title: "Ai-insurtech-ai | Zion Tech Group",
    description: "Ai-insurtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for insurtech-ai.",
    url: "https://ziontechgroup.com/docs/ai-insurtech-ai/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-insurtech-ai/" },
};

export default function DocsAiInsurtechAiPage() {
  return (
    <StandardPage
      title="Ai-insurtech-ai"
      subtitle="Ai-insurtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for insurtech-ai."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Insurtech Ai" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-insurtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for insurtech-ai.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
