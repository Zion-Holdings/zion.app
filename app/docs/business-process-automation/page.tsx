import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Business Process Automation | Zion Tech Group",
  description: "Transform operations with business process automation. Reduce costs, eliminate errors, and scale efficiently with AI-powered workflows.",
  openGraph: {
    title: "Business Process Automation | Zion Tech Group",
    description: "Transform operations with business process automation. Reduce costs, eliminate errors, and scale efficiently with AI-powered workflows.",
    url: "https://ziontechgroup.com/docs/business-process-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/business-process-automation/" },
};

export default function DocsBusinessProcessAutomationPage() {
  return (
    <StandardPage
      title="Business Process Automation"
      subtitle="Transform operations with business process automation. Reduce costs, eliminate errors, and scale efficiently with AI-powered workflows."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Business Process Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Transform operations with business process automation. Reduce costs, eliminate errors, and scale efficiently with AI-powered workflows.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
