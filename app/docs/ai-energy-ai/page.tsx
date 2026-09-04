import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-energy-ai | Zion Tech Group",
  description: "Ai-energy-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for energy-ai.",
  openGraph: {
    title: "Ai-energy-ai | Zion Tech Group",
    description: "Ai-energy-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for energy-ai.",
    url: "https://ziontechgroup.com/docs/ai-energy-ai/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-energy-ai/" },
};

export default function DocsAiEnergyAiPage() {
  return (
    <StandardPage
      title="Ai-energy-ai"
      subtitle="Ai-energy-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for energy-ai."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Energy Ai" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-energy-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for energy-ai.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
