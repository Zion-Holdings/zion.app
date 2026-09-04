import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Knowledge Base Rag Platform | Zion Tech Group",
  description: "Zion Tech Group builds knowledge base rag platform solutions for IT teams and enterprises.",
  openGraph: {
    title: "Knowledge Base Rag Platform | Zion Tech Group",
    description: "Zion Tech Group builds knowledge base rag platform solutions for IT teams and enterprises.",
    url: "https://ziontechgroup.com/ai-knowledge-base-rag-platform/",
    type: 'website',
  },
  alternates: { canonical: "/ai-knowledge-base-rag-platform/" },
};

export default function AiKnowledgeBaseRagPlatformPage() {
  return (
    <StandardPage
      title="Knowledge Base Rag Platform"
      subtitle="Zion Tech Group builds knowledge base rag platform solutions for IT teams and enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Knowledge Base Rag Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zion Tech Group builds knowledge base rag platform solutions for IT teams and enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
