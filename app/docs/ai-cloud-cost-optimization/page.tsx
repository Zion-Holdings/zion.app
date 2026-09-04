import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-cloud-cost-optimization | Zion Tech Group",
  description: "Enterprise Ai-cloud-cost-optimization from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure.",
  openGraph: {
    title: "Ai-cloud-cost-optimization | Zion Tech Group",
    description: "Enterprise Ai-cloud-cost-optimization from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure.",
    url: "https://ziontechgroup.com/docs/ai-cloud-cost-optimization/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-cloud-cost-optimization/" },
};

export default function DocsAiCloudCostOptimizationPage() {
  return (
    <StandardPage
      title="Ai-cloud-cost-optimization"
      subtitle="Enterprise Ai-cloud-cost-optimization from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Cloud Cost Optimization" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Enterprise Ai-cloud-cost-optimization from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
