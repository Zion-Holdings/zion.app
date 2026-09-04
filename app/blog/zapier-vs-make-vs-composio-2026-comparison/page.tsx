import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "zapier vs make vs composio 2026 comparison | Zion Tech Group",
  description: "Zapier, Make, and Composio compared for 2026. Learn which automation platform is best for AI agents, enterprise workflows, and B2B lead generation. Composio",
  openGraph: {
    title: "zapier vs make vs composio 2026 comparison | Zion Tech Group",
    description: "Zapier, Make, and Composio compared for 2026. Learn which automation platform is best for AI agents, enterprise workflows, and B2B lead generation. Composio",
    url: "https://ziontechgroup.com/blog/zapier-vs-make-vs-composio-2026-comparison/",
    type: 'website',
  },
  alternates: { canonical: "/blog/zapier-vs-make-vs-composio-2026-comparison/" },
};

export default function BlogZapierVsMakeVsComposio2026ComparisonPage() {
  return (
    <StandardPage
      title="zapier vs make vs composio 2026 comparison"
      subtitle="Zapier, Make, and Composio compared for 2026. Learn which automation platform is best for AI agents, enterprise workflows, and B2B lead generation. Composio"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Zapier Vs Make Vs Composio 2026 Comparison" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zapier, Make, and Composio compared for 2026. Learn which automation platform is best for AI agents, enterprise workflows, and B2B lead generation. Composio</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
