import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Cloud Cost Optimization | Zion Tech Group",
  description: "Cut cloud spend by 20-40% with Zion",
  openGraph: {
    title: "Cloud Cost Optimization | Zion Tech Group",
    description: "Cut cloud spend by 20-40% with Zion",
    url: "https://ziontechgroup.com/docs/cloud-cost-optimization/",
    type: 'website',
  },
  alternates: { canonical: "/docs/cloud-cost-optimization/" },
};

export default function DocsCloudCostOptimizationPage() {
  return (
    <StandardPage
      title="Cloud Cost Optimization"
      subtitle="Cut cloud spend by 20-40% with Zion"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Cloud Cost Optimization" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Cut cloud spend by 20-40% with Zion</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
