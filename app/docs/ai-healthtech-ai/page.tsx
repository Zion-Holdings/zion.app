import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-healthtech-ai | Zion Tech Group",
  description: "Ai-healthtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for healthtech-ai.",
  openGraph: {
    title: "Ai-healthtech-ai | Zion Tech Group",
    description: "Ai-healthtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for healthtech-ai.",
    url: "https://ziontechgroup.com/docs/ai-healthtech-ai/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-healthtech-ai/" },
};

export default function DocsAiHealthtechAiPage() {
  return (
    <StandardPage
      title="Ai-healthtech-ai"
      subtitle="Ai-healthtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for healthtech-ai."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Healthtech Ai" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-healthtech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for healthtech-ai.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
