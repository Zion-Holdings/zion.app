import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Use Cases by Industry | Zion Tech Group",
  description: "Explore AI use cases by industry: healthcare, finance, retail, manufacturing, education, real estate, logistics, and government.",
  openGraph: {
    title: "AI Use Cases by Industry | Zion Tech Group",
    description: "Explore AI use cases by industry: healthcare, finance, retail, manufacturing, education, real estate, logistics, and government.",
    url: "https://ziontechgroup.com/docs/ai-use-cases/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-use-cases/" },
};

export default function DocsAiUseCasesPage() {
  return (
    <StandardPage
      title="AI Use Cases by Industry"
      subtitle="Explore AI use cases by industry: healthcare, finance, retail, manufacturing, education, real estate, logistics, and government."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Use Cases" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Explore AI use cases by industry: healthcare, finance, retail, manufacturing, education, real estate, logistics, and government.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
