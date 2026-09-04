import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Data Platform | Zion Tech Group",
  description: "Modernize data ingestion, governance, and analytics with an AI-native data platform.",
  openGraph: {
    title: "AI Data Platform | Zion Tech Group",
    description: "Modernize data ingestion, governance, and analytics with an AI-native data platform.",
    url: "https://ziontechgroup.com/docs/ai-data-platform/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-data-platform/" },
};

export default function DocsAiDataPlatformPage() {
  return (
    <StandardPage
      title="AI Data Platform"
      subtitle="Modernize data ingestion, governance, and analytics with an AI-native data platform."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Data Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Modernize data ingestion, governance, and analytics with an AI-native data platform.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
