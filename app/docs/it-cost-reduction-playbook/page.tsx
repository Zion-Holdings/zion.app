import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "IT Cost Reduction Playbook for 2026 | Zion Tech Group",
  description: "Reduce IT costs without cutting performance: cloud optimization, automation, vendor consolidation, and AI-driven operations.",
  openGraph: {
    title: "IT Cost Reduction Playbook for 2026 | Zion Tech Group",
    description: "Reduce IT costs without cutting performance: cloud optimization, automation, vendor consolidation, and AI-driven operations.",
    url: "https://ziontechgroup.com/docs/it-cost-reduction-playbook/",
    type: 'website',
  },
  alternates: { canonical: "/docs/it-cost-reduction-playbook/" },
};

export default function DocsItCostReductionPlaybookPage() {
  return (
    <StandardPage
      title="IT Cost Reduction Playbook for 2026"
      subtitle="Reduce IT costs without cutting performance: cloud optimization, automation, vendor consolidation, and AI-driven operations."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "It Cost Reduction Playbook" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Reduce IT costs without cutting performance: cloud optimization, automation, vendor consolidation, and AI-driven operations.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
