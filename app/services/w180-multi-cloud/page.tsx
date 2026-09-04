import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Multi-Cloud Management Platform | Zion Tech Group",
  description: "Manage AWS, Azure, GCP: unified dashboards, policy, cost.",
  openGraph: {
    title: "Multi-Cloud Management Platform | Zion Tech Group",
    description: "Manage AWS, Azure, GCP: unified dashboards, policy, cost.",
    url: "https://ziontechgroup.com/services/w180-multi-cloud/",
    type: 'website',
  },
  alternates: { canonical: "/services/w180-multi-cloud/" },
};

export default function W180MultiCloudPage() {
  return (
    <StandardPage
      title="Multi-Cloud Management Platform"
      subtitle="Manage AWS, Azure, GCP: unified dashboards, policy, cost."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Multi-Cloud Management Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Manage AWS, Azure, GCP: unified dashboards, policy, cost.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113913) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
