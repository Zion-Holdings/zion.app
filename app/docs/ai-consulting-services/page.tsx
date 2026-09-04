import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Consulting Services | Zion Tech Group",
  description: "Practical AI consulting for strategy, implementation, and operationalization of intelligent systems.",
  openGraph: {
    title: "AI Consulting Services | Zion Tech Group",
    description: "Practical AI consulting for strategy, implementation, and operationalization of intelligent systems.",
    url: "https://ziontechgroup.com/docs/ai-consulting-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-consulting-services/" },
};

export default function DocsAiConsultingServicesPage() {
  return (
    <StandardPage
      title="AI Consulting Services"
      subtitle="Practical AI consulting for strategy, implementation, and operationalization of intelligent systems."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Consulting Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Practical AI consulting for strategy, implementation, and operationalization of intelligent systems.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
