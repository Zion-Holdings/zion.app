import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Cloud Migration & Modernization | Zion Tech Group",
  description: "Migrate and modernize with minimal risk: landing zones, refactoring, hybrid cloud, and cost governance.",
  openGraph: {
    title: "Cloud Migration & Modernization | Zion Tech Group",
    description: "Migrate and modernize with minimal risk: landing zones, refactoring, hybrid cloud, and cost governance.",
    url: "https://ziontechgroup.com/docs/cloud-migration/",
    type: 'website',
  },
  alternates: { canonical: "/docs/cloud-migration/" },
};

export default function DocsCloudMigrationPage() {
  return (
    <StandardPage
      title="Cloud Migration & Modernization"
      subtitle="Migrate and modernize with minimal risk: landing zones, refactoring, hybrid cloud, and cost governance."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Cloud Migration" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Migrate and modernize with minimal risk: landing zones, refactoring, hybrid cloud, and cost governance.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
