import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Infrastructure-as-Code Security Scanner | Zion Tech Group",
  description: "DevSecOps platform that scans Terraform, CloudFormation, Kubernetes manifests, and Ansible playbooks for security misconfigurations, compliance violations, and cost issues before deployment.",
  openGraph: {
    title: "Infrastructure-as-Code Security Scanner | Zion Tech Group",
    description: "DevSecOps platform that scans Terraform, CloudFormation, Kubernetes manifests, and Ansible playbooks for security misconfigurations, compliance violations, and cost issues before deployment.",
    url: "https://ziontechgroup.com/services/infrastructure-as-code-scanner/",
    type: 'website',
  },
  alternates: { canonical: "/services/infrastructure-as-code-scanner/" },
};

export default function InfrastructureAsCodeScannerPage() {
  return (
    <StandardPage
      title="Infrastructure-as-Code Security Scanner"
      subtitle="DevSecOps platform that scans Terraform, CloudFormation, Kubernetes manifests, and Ansible playbooks for security misconfigurations, compliance violations, and cost issues before deployment."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Infrastructure-as-Code Security Scanner" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">DevSecOps platform that scans Terraform, CloudFormation, Kubernetes manifests, and Ansible playbooks for security misconfigurations, compliance violations, and cost issues before deployment.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614131848) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
