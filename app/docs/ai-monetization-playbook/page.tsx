import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Monetization Playbook for Agencies & MSPs | Zion Tech Group",
  description: "Practical playbook for AI agencies and MSPs: subscription models, usage billing, affiliate revenue, and automation tools that generate recurring income.",
  openGraph: {
    title: "AI Monetization Playbook for Agencies & MSPs | Zion Tech Group",
    description: "Practical playbook for AI agencies and MSPs: subscription models, usage billing, affiliate revenue, and automation tools that generate recurring income.",
    url: "https://ziontechgroup.com/docs/ai-monetization-playbook/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-monetization-playbook/" },
};

export default function DocsAiMonetizationPlaybookPage() {
  return (
    <StandardPage
      title="AI Monetization Playbook for Agencies & MSPs"
      subtitle="Practical playbook for AI agencies and MSPs: subscription models, usage billing, affiliate revenue, and automation tools that generate recurring income."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Monetization Playbook" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Practical playbook for AI agencies and MSPs: subscription models, usage billing, affiliate revenue, and automation tools that generate recurring income.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
