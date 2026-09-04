import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Integration & API Delivery | Zion Tech Group",
  description: "Connect AI to your stack: CRM, ERP, ITSM, data lake, and messaging with production-ready integrations.",
  openGraph: {
    title: "AI Integration & API Delivery | Zion Tech Group",
    description: "Connect AI to your stack: CRM, ERP, ITSM, data lake, and messaging with production-ready integrations.",
    url: "https://ziontechgroup.com/docs/ai-integration/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-integration/" },
};

export default function DocsAiIntegrationPage() {
  return (
    <StandardPage
      title="AI Integration & API Delivery"
      subtitle="Connect AI to your stack: CRM, ERP, ITSM, data lake, and messaging with production-ready integrations."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Integration" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Connect AI to your stack: CRM, ERP, ITSM, data lake, and messaging with production-ready integrations.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
