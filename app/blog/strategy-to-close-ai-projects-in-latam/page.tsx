import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "strategy to close ai projects in latam | Zion Tech Group",
  description: "strategy to close ai projects in latam — Zion Tech Group.",
  openGraph: {
    title: "strategy to close ai projects in latam | Zion Tech Group",
    description: "strategy to close ai projects in latam — Zion Tech Group.",
    url: "https://ziontechgroup.com/blog/strategy-to-close-ai-projects-in-latam/",
    type: 'website',
  },
  alternates: { canonical: "/blog/strategy-to-close-ai-projects-in-latam/" },
};

export default function BlogStrategyToCloseAiProjectsInLatamPage() {
  return (
    <StandardPage
      title="strategy to close ai projects in latam"
      subtitle="strategy to close ai projects in latam — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Strategy To Close Ai Projects In Latam" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">strategy to close ai projects in latam — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
