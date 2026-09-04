import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Data Engineering Services | Zion Tech Group",
  description: "AI data engineering: ingestion, transformation, pipelines, lakehouse, and analytics-ready infrastructure.",
  openGraph: {
    title: "AI Data Engineering Services | Zion Tech Group",
    description: "AI data engineering: ingestion, transformation, pipelines, lakehouse, and analytics-ready infrastructure.",
    url: "https://ziontechgroup.com/docs/ai-data-engineering-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-data-engineering-services/" },
};

export default function DocsAiDataEngineeringServicesPage() {
  return (
    <StandardPage
      title="AI Data Engineering Services"
      subtitle="AI data engineering: ingestion, transformation, pipelines, lakehouse, and analytics-ready infrastructure."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Data Engineering Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI data engineering: ingestion, transformation, pipelines, lakehouse, and analytics-ready infrastructure.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
