import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Healthcare Workflow Automation | Zion Tech Group",
  description: "HIPAA-compliant workflow automation for healthcare. Patient scheduling, referral management, prior authorization, and clinical documentation.",
  openGraph: {
    title: "Healthcare Workflow Automation | Zion Tech Group",
    description: "HIPAA-compliant workflow automation for healthcare. Patient scheduling, referral management, prior authorization, and clinical documentation.",
    url: "https://ziontechgroup.com/services/healthcare-workflow/",
    type: 'website',
  },
  alternates: { canonical: "/services/healthcare-workflow/" },
};

export default function HealthcareWorkflowPage() {
  return (
    <StandardPage
      title="Healthcare Workflow Automation"
      subtitle="HIPAA-compliant workflow automation for healthcare. Patient scheduling, referral management, prior authorization, and clinical documentation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Healthcare Workflow Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">HIPAA-compliant workflow automation for healthcare. Patient scheduling, referral management, prior authorization, and clinical documentation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607194033) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
