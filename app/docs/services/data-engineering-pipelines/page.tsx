import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Data-engineering-pipelines | Zion Tech Group",
  description: "Professional Data-engineering-pipelines services from Zion Tech Group. AI-driven automation, monitoring, and support.",
  openGraph: {
    title: "Data-engineering-pipelines | Zion Tech Group",
    description: "Professional Data-engineering-pipelines services from Zion Tech Group. AI-driven automation, monitoring, and support.",
    url: "https://ziontechgroup.com/docs/services/data-engineering-pipelines/",
    type: 'website',
  },
  alternates: { canonical: "/docs/services/data-engineering-pipelines/" },
};

export default function DocsServicesDataEngineeringPipelinesPage() {
  return (
    <StandardPage
      title="Data-engineering-pipelines"
      subtitle="Professional Data-engineering-pipelines services from Zion Tech Group. AI-driven automation, monitoring, and support."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Services", href: "/docs/services/" },
        { label: "Data Engineering Pipelines" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Professional Data-engineering-pipelines services from Zion Tech Group. AI-driven automation, monitoring, and support.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
