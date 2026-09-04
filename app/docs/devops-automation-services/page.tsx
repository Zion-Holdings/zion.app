import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "DevOps Automation Services | Zion Tech Group",
  description: "DevOps automation: CI/CD, infrastructure as code, Kubernetes, observability, and platform engineering.",
  openGraph: {
    title: "DevOps Automation Services | Zion Tech Group",
    description: "DevOps automation: CI/CD, infrastructure as code, Kubernetes, observability, and platform engineering.",
    url: "https://ziontechgroup.com/docs/devops-automation-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/devops-automation-services/" },
};

export default function DocsDevopsAutomationServicesPage() {
  return (
    <StandardPage
      title="DevOps Automation Services"
      subtitle="DevOps automation: CI/CD, infrastructure as code, Kubernetes, observability, and platform engineering."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Devops Automation Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">DevOps automation: CI/CD, infrastructure as code, Kubernetes, observability, and platform engineering.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
