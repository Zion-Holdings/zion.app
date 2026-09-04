import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "DevOps Pipeline Automation | Zion Tech Group",
  description: "End-to-end CI/CD pipeline as a service. Automated testing, security scanning, container building, and multi-environment deployment with rollback.",
  openGraph: {
    title: "DevOps Pipeline Automation | Zion Tech Group",
    description: "End-to-end CI/CD pipeline as a service. Automated testing, security scanning, container building, and multi-environment deployment with rollback.",
    url: "https://ziontechgroup.com/services/devops-pipeline/",
    type: 'website',
  },
  alternates: { canonical: "/services/devops-pipeline/" },
};

export default function DevopsPipelinePage() {
  return (
    <StandardPage
      title="DevOps Pipeline Automation"
      subtitle="End-to-end CI/CD pipeline as a service. Automated testing, security scanning, container building, and multi-environment deployment with rollback."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "DevOps Pipeline Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">End-to-end CI/CD pipeline as a service. Automated testing, security scanning, container building, and multi-environment deployment with rollback.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113938) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
