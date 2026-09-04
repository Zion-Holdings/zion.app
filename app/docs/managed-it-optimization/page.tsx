import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Managed IT Optimization | Zion Tech Group",
  description: "Optimize your managed IT operations with AI. Reduce costs, improve service quality, and automate repetitive tasks for MSPs and IT teams.",
  openGraph: {
    title: "Managed IT Optimization | Zion Tech Group",
    description: "Optimize your managed IT operations with AI. Reduce costs, improve service quality, and automate repetitive tasks for MSPs and IT teams.",
    url: "https://ziontechgroup.com/docs/managed-it-optimization/",
    type: 'website',
  },
  alternates: { canonical: "/docs/managed-it-optimization/" },
};

export default function DocsManagedItOptimizationPage() {
  return (
    <StandardPage
      title="Managed IT Optimization"
      subtitle="Optimize your managed IT operations with AI. Reduce costs, improve service quality, and automate repetitive tasks for MSPs and IT teams."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Managed It Optimization" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Optimize your managed IT operations with AI. Reduce costs, improve service quality, and automate repetitive tasks for MSPs and IT teams.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
