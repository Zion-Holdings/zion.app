import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Public Roadmap | Zion Tech Group",
  description: "Zion Tech Group public roadmap, planned releases, and platform direction.",
  openGraph: {
    title: "Public Roadmap | Zion Tech Group",
    description: "Zion Tech Group public roadmap, planned releases, and platform direction.",
    url: "https://ziontechgroup.com/docs/public-roadmap/",
    type: 'website',
  },
  alternates: { canonical: "/docs/public-roadmap/" },
};

export default function DocsPublicRoadmapPage() {
  return (
    <StandardPage
      title="Public Roadmap"
      subtitle="Zion Tech Group public roadmap, planned releases, and platform direction."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Public Roadmap" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group public roadmap, planned releases, and platform direction.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
