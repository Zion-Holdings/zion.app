import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Strategy & Execution Playbook | Zion Tech Group",
  description: "Enterprise AI strategy: use-case prioritization, operating model, change management, and measurable outcomes.",
  openGraph: {
    title: "AI Strategy & Execution Playbook | Zion Tech Group",
    description: "Enterprise AI strategy: use-case prioritization, operating model, change management, and measurable outcomes.",
    url: "https://ziontechgroup.com/docs/ai-strategy/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-strategy/" },
};

export default function DocsAiStrategyPage() {
  return (
    <StandardPage
      title="AI Strategy & Execution Playbook"
      subtitle="Enterprise AI strategy: use-case prioritization, operating model, change management, and measurable outcomes."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Strategy" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Enterprise AI strategy: use-case prioritization, operating model, change management, and measurable outcomes.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
