import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Smart Form & Survey Builder Pro | Zion Tech Group",
  description: "Drag-and-drop form builder with conditional logic, file uploads, payment collection, and 50+ integrations. AI-powered form optimization suggests improvements to increase completion rates.",
  openGraph: {
    title: "Smart Form & Survey Builder Pro | Zion Tech Group",
    description: "Drag-and-drop form builder with conditional logic, file uploads, payment collection, and 50+ integrations. AI-powered form optimization suggests improvements to increase completion rates.",
    url: "https://ziontechgroup.com/services/saas-form-builder/",
    type: 'website',
  },
  alternates: { canonical: "/services/saas-form-builder/" },
};

export default function SaasFormBuilderPage() {
  return (
    <StandardPage
      title="Smart Form & Survey Builder Pro"
      subtitle="Drag-and-drop form builder with conditional logic, file uploads, payment collection, and 50+ integrations. AI-powered form optimization suggests improvements to increase completion rates."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Smart Form & Survey Builder Pro" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Drag-and-drop form builder with conditional logic, file uploads, payment collection, and 50+ integrations. AI-powered form optimization suggests improvements to increase completion rates.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614100703) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
