import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Workflow Orchestrator | Zion Tech Group",
  description: "Visual workflow builder for complex business processes. Drag-and-drop designer, conditional logic, API integrations, and real-time monitoring.",
  openGraph: {
    title: "Workflow Orchestrator | Zion Tech Group",
    description: "Visual workflow builder for complex business processes. Drag-and-drop designer, conditional logic, API integrations, and real-time monitoring.",
    url: "https://ziontechgroup.com/services/workflow-orchestrator/",
    type: 'website',
  },
  alternates: { canonical: "/services/workflow-orchestrator/" },
};

export default function WorkflowOrchestratorPage() {
  return (
    <StandardPage
      title="Workflow Orchestrator"
      subtitle="Visual workflow builder for complex business processes. Drag-and-drop designer, conditional logic, API integrations, and real-time monitoring."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Workflow Orchestrator" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Visual workflow builder for complex business processes. Drag-and-drop designer, conditional logic, API integrations, and real-time monitoring.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614125712) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
