import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Document Workflow Automation Platform | Zion Tech Group",
  description: "End-to-end document workflow automation that handles creation, review, approval, signing, and archival. Template library, conditional routing, e-signature integration, and compliance audit trails.",
  openGraph: {
    title: "Document Workflow Automation Platform | Zion Tech Group",
    description: "End-to-end document workflow automation that handles creation, review, approval, signing, and archival. Template library, conditional routing, e-signature integration, and compliance audit trails.",
    url: "https://ziontechgroup.com/services/workflow-document-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/workflow-document-automation/" },
};

export default function WorkflowDocumentAutomationPage() {
  return (
    <StandardPage
      title="Document Workflow Automation Platform"
      subtitle="End-to-end document workflow automation that handles creation, review, approval, signing, and archival. Template library, conditional routing, e-signature integration, and compliance audit trails."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Document Workflow Automation Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">End-to-end document workflow automation that handles creation, review, approval, signing, and archival. Template library, conditional routing, e-signature integration, and compliance audit trails.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614140718) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
