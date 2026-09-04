import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Implementation Services | Zion Tech Group",
  description: "AI implementation services: RAG systems, AI agents, workflow automation, and integration with your existing stack.",
  openGraph: {
    title: "AI Implementation Services | Zion Tech Group",
    description: "AI implementation services: RAG systems, AI agents, workflow automation, and integration with your existing stack.",
    url: "https://ziontechgroup.com/docs/ai-implementation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-implementation/" },
};

export default function DocsAiImplementationPage() {
  return (
    <StandardPage
      title="AI Implementation Services"
      subtitle="AI implementation services: RAG systems, AI agents, workflow automation, and integration with your existing stack."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Implementation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI implementation services: RAG systems, AI agents, workflow automation, and integration with your existing stack.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
