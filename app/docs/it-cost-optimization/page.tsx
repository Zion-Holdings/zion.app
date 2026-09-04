import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "IT Cost Optimization Playbook | Zion Tech Group",
  description: "Cut IT spend without cutting capability: FinOps, licensing, SaaS sprawl, and automation playbooks.",
  openGraph: {
    title: "IT Cost Optimization Playbook | Zion Tech Group",
    description: "Cut IT spend without cutting capability: FinOps, licensing, SaaS sprawl, and automation playbooks.",
    url: "https://ziontechgroup.com/docs/it-cost-optimization/",
    type: 'website',
  },
  alternates: { canonical: "/docs/it-cost-optimization/" },
};

export default function DocsItCostOptimizationPage() {
  return (
    <StandardPage
      title="IT Cost Optimization Playbook"
      subtitle="Cut IT spend without cutting capability: FinOps, licensing, SaaS sprawl, and automation playbooks."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "It Cost Optimization" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Cut IT spend without cutting capability: FinOps, licensing, SaaS sprawl, and automation playbooks.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
