import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Enterprise Solutions | Zion Tech Group",
  description: "Enterprise AI solutions: governance, security, scale architecture, and change management.",
  openGraph: {
    title: "AI Enterprise Solutions | Zion Tech Group",
    description: "Enterprise AI solutions: governance, security, scale architecture, and change management.",
    url: "https://ziontechgroup.com/docs/ai-enterprise-solutions/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-enterprise-solutions/" },
};

export default function DocsAiEnterpriseSolutionsPage() {
  return (
    <StandardPage
      title="AI Enterprise Solutions"
      subtitle="Enterprise AI solutions: governance, security, scale architecture, and change management."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Enterprise Solutions" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Enterprise AI solutions: governance, security, scale architecture, and change management.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
