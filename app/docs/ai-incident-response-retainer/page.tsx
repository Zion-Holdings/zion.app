import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Incident Response Retainer | Zion Tech Group",
  description: "Retain Zion for AI-powered incident response, breach containment, and post-incident recovery planning.",
  openGraph: {
    title: "AI Incident Response Retainer | Zion Tech Group",
    description: "Retain Zion for AI-powered incident response, breach containment, and post-incident recovery planning.",
    url: "https://ziontechgroup.com/docs/ai-incident-response-retainer/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-incident-response-retainer/" },
};

export default function DocsAiIncidentResponseRetainerPage() {
  return (
    <StandardPage
      title="AI Incident Response Retainer"
      subtitle="Retain Zion for AI-powered incident response, breach containment, and post-incident recovery planning."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Incident Response Retainer" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Retain Zion for AI-powered incident response, breach containment, and post-incident recovery planning.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
