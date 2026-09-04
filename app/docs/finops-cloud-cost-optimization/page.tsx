import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "FinOps Cloud Cost Optimization | Zion Tech Group",
  description: "FinOps cloud cost optimization: rightsizing, reserved planning, spend governance, and showback/chargeback.",
  openGraph: {
    title: "FinOps Cloud Cost Optimization | Zion Tech Group",
    description: "FinOps cloud cost optimization: rightsizing, reserved planning, spend governance, and showback/chargeback.",
    url: "https://ziontechgroup.com/docs/finops-cloud-cost-optimization/",
    type: 'website',
  },
  alternates: { canonical: "/docs/finops-cloud-cost-optimization/" },
};

export default function DocsFinopsCloudCostOptimizationPage() {
  return (
    <StandardPage
      title="FinOps Cloud Cost Optimization"
      subtitle="FinOps cloud cost optimization: rightsizing, reserved planning, spend governance, and showback/chargeback."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Finops Cloud Cost Optimization" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">FinOps cloud cost optimization: rightsizing, reserved planning, spend governance, and showback/chargeback.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
