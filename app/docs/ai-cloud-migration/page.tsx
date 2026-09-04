import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-cloud-migration | Zion Tech Group",
  description: "Professional Ai-cloud-migration services from Zion Tech Group. AI-driven automation, monitoring, and support.",
  openGraph: {
    title: "Ai-cloud-migration | Zion Tech Group",
    description: "Professional Ai-cloud-migration services from Zion Tech Group. AI-driven automation, monitoring, and support.",
    url: "https://ziontechgroup.com/docs/ai-cloud-migration/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-cloud-migration/" },
};

export default function DocsAiCloudMigrationPage() {
  return (
    <StandardPage
      title="Ai-cloud-migration"
      subtitle="Professional Ai-cloud-migration services from Zion Tech Group. AI-driven automation, monitoring, and support."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Cloud Migration" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Professional Ai-cloud-migration services from Zion Tech Group. AI-driven automation, monitoring, and support.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
