import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-incident-response | Zion Tech Group",
  description: "Professional Ai-incident-response services from Zion Tech Group. AI-driven automation, monitoring, and support.",
  openGraph: {
    title: "Ai-incident-response | Zion Tech Group",
    description: "Professional Ai-incident-response services from Zion Tech Group. AI-driven automation, monitoring, and support.",
    url: "https://ziontechgroup.com/docs/ai-incident-response/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-incident-response/" },
};

export default function DocsAiIncidentResponsePage() {
  return (
    <StandardPage
      title="Ai-incident-response"
      subtitle="Professional Ai-incident-response services from Zion Tech Group. AI-driven automation, monitoring, and support."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Incident Response" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Professional Ai-incident-response services from Zion Tech Group. AI-driven automation, monitoring, and support.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
