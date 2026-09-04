import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Advanced Form Builder & Workflow | Zion Tech Group",
  description: "No-code form builder with conditional logic, payment collection, file uploads, and workflow automation. Multi-step forms, calculated fields, and 50+ integrations for lead generation, surveys, and applications.",
  openGraph: {
    title: "Advanced Form Builder & Workflow | Zion Tech Group",
    description: "No-code form builder with conditional logic, payment collection, file uploads, and workflow automation. Multi-step forms, calculated fields, and 50+ integrations for lead generation, surveys, and applications.",
    url: "https://ziontechgroup.com/services/form-builder-pro/",
    type: 'website',
  },
  alternates: { canonical: "/services/form-builder-pro/" },
};

export default function FormBuilderProPage() {
  return (
    <StandardPage
      title="Advanced Form Builder & Workflow"
      subtitle="No-code form builder with conditional logic, payment collection, file uploads, and workflow automation. Multi-step forms, calculated fields, and 50+ integrations for lead generation, surveys, and applications."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Advanced Form Builder & Workflow" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">No-code form builder with conditional logic, payment collection, file uploads, and workflow automation. Multi-step forms, calculated fields, and 50+ integrations for lead generation, surveys, and applications.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607105209) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
