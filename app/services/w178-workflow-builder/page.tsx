import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "No-Code Workflow Builder | Zion Tech Group",
  description: "Visual workflow builder: drag-drop, conditional logic, API orchestration, 200+ connectors.",
  openGraph: {
    title: "No-Code Workflow Builder | Zion Tech Group",
    description: "Visual workflow builder: drag-drop, conditional logic, API orchestration, 200+ connectors.",
    url: "https://ziontechgroup.com/services/w178-workflow-builder/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-workflow-builder/" },
};

export default function W178WorkflowBuilderPage() {
  return (
    <StandardPage
      title="No-Code Workflow Builder"
      subtitle="Visual workflow builder: drag-drop, conditional logic, API orchestration, 200+ connectors."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "No-Code Workflow Builder" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Visual workflow builder: drag-drop, conditional logic, API orchestration, 200+ connectors.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607114859) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
