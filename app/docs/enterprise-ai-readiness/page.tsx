import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Enterprise AI Readiness Assessment | Zion Tech Group",
  description: "Evaluate AI readiness across strategy, data, infrastructure, governance, and execution with Zion",
  openGraph: {
    title: "Enterprise AI Readiness Assessment | Zion Tech Group",
    description: "Evaluate AI readiness across strategy, data, infrastructure, governance, and execution with Zion",
    url: "https://ziontechgroup.com/docs/enterprise-ai-readiness/",
    type: 'website',
  },
  alternates: { canonical: "/docs/enterprise-ai-readiness/" },
};

export default function DocsEnterpriseAiReadinessPage() {
  return (
    <StandardPage
      title="Enterprise AI Readiness Assessment"
      subtitle="Evaluate AI readiness across strategy, data, infrastructure, governance, and execution with Zion"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Enterprise Ai Readiness" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Evaluate AI readiness across strategy, data, infrastructure, governance, and execution with Zion</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
