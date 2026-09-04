import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI ML Services | Zion Tech Group",
  description: "AI/ML services: model training, fine-tuning, evaluation, and deployment for production use.",
  openGraph: {
    title: "AI ML Services | Zion Tech Group",
    description: "AI/ML services: model training, fine-tuning, evaluation, and deployment for production use.",
    url: "https://ziontechgroup.com/docs/ai-ml-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-ml-services/" },
};

export default function DocsAiMlServicesPage() {
  return (
    <StandardPage
      title="AI ML Services"
      subtitle="AI/ML services: model training, fine-tuning, evaluation, and deployment for production use."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Ml Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI/ML services: model training, fine-tuning, evaluation, and deployment for production use.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
