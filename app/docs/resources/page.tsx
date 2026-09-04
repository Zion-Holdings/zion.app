import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Resources | Zion Tech Group",
  description: "Explore Resources for AI, IT, and automation services.",
  openGraph: {
    title: "Resources | Zion Tech Group",
    description: "Explore Resources for AI, IT, and automation services.",
    url: "https://ziontechgroup.com/docs/resources/",
    type: 'website',
  },
  alternates: { canonical: "/docs/resources/" },
};

export default function DocsResourcesPage() {
  return (
    <StandardPage
      title="Resources"
      subtitle="Explore Resources for AI, IT, and automation services."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Resources" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Explore Resources for AI, IT, and automation services.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
