import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "blog/zapier vs make vs composio 2026 comparison | Zion Tech Group",
  description: "Zapier, Make, and Composio compared for 2026. Learn which automation platform is best for AI agents, enterprise workflows, and B2B lead generation. Composio",
  openGraph: {
    title: "blog/zapier vs make vs composio 2026 comparison | Zion Tech Group",
    description: "Zapier, Make, and Composio compared for 2026. Learn which automation platform is best for AI agents, enterprise workflows, and B2B lead generation. Composio",
    url: "https://ziontechgroup.com/docs/blog/zapier-vs-make-vs-composio-2026-comparison/",
    type: 'website',
  },
  alternates: { canonical: "/docs/blog/zapier-vs-make-vs-composio-2026-comparison/" },
};

export default function DocsBlogZapierVsMakeVsComposio2026ComparisonPage() {
  return (
    <StandardPage
      title="blog/zapier vs make vs composio 2026 comparison"
      subtitle="Zapier, Make, and Composio compared for 2026. Learn which automation platform is best for AI agents, enterprise workflows, and B2B lead generation. Composio"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Blog", href: "/docs/blog/" },
        { label: "Zapier Vs Make Vs Composio 2026 Comparison" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zapier, Make, and Composio compared for 2026. Learn which automation platform is best for AI agents, enterprise workflows, and B2B lead generation. Composio</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
