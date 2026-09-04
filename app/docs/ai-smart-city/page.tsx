import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-smart-city | Zion Tech Group",
  description: "Ai-smart-city services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for smart-city.",
  openGraph: {
    title: "Ai-smart-city | Zion Tech Group",
    description: "Ai-smart-city services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for smart-city.",
    url: "https://ziontechgroup.com/docs/ai-smart-city/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-smart-city/" },
};

export default function DocsAiSmartCityPage() {
  return (
    <StandardPage
      title="Ai-smart-city"
      subtitle="Ai-smart-city services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for smart-city."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Smart City" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-smart-city services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for smart-city.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
