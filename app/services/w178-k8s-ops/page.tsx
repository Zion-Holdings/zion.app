import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Kubernetes Operations and Management | Zion Tech Group",
  description: "Managed Kubernetes: cluster management, monitoring, security, upgrades. EKS, GKE, AKS, on-prem.",
  openGraph: {
    title: "Kubernetes Operations and Management | Zion Tech Group",
    description: "Managed Kubernetes: cluster management, monitoring, security, upgrades. EKS, GKE, AKS, on-prem.",
    url: "https://ziontechgroup.com/services/w178-k8s-ops/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-k8s-ops/" },
};

export default function W178K8sOpsPage() {
  return (
    <StandardPage
      title="Kubernetes Operations and Management"
      subtitle="Managed Kubernetes: cluster management, monitoring, security, upgrades. EKS, GKE, AKS, on-prem."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Kubernetes Operations and Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Managed Kubernetes: cluster management, monitoring, security, upgrades. EKS, GKE, AKS, on-prem.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607104515) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
