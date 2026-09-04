import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Devsecops-automation | Zion Tech Group",
  description: "Professional Devsecops-automation services from Zion Tech Group. AI-driven automation, monitoring, and support.",
  openGraph: {
    title: "Devsecops-automation | Zion Tech Group",
    description: "Professional Devsecops-automation services from Zion Tech Group. AI-driven automation, monitoring, and support.",
    url: "https://ziontechgroup.com/docs/services/devsecops-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/services/devsecops-automation/" },
};

export default function DocsServicesDevsecopsAutomationPage() {
  return (
    <StandardPage
      title="Devsecops-automation"
      subtitle="Professional Devsecops-automation services from Zion Tech Group. AI-driven automation, monitoring, and support."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Services", href: "/docs/services/" },
        { label: "Devsecops Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Professional Devsecops-automation services from Zion Tech Group. AI-driven automation, monitoring, and support.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
