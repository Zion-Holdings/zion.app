import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Cloud FinOps Cost Optimization Platform | Zion Tech Group",
  description: "Multi-cloud cost management with rightsizing recommendations, reserved instance planning, and chargeback reporting.",
  openGraph: {
    title: "Cloud FinOps Cost Optimization Platform | Zion Tech Group",
    description: "Multi-cloud cost management with rightsizing recommendations, reserved instance planning, and chargeback reporting.",
    url: "https://ziontechgroup.com/services/cloud-finops-cost-optimization/",
    type: 'website',
  },
  alternates: { canonical: "/services/cloud-finops-cost-optimization/" },
};

export default function ServicesCloudFinopsCostOptimizationPage() {
  return (
    <StandardPage
      title="Cloud FinOps Cost Optimization Platform"
      subtitle="Multi-cloud cost management with rightsizing recommendations, reserved instance planning, and chargeback reporting."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Cloud Finops Cost Optimization" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Multi-cloud cost management with rightsizing recommendations, reserved instance planning, and chargeback reporting.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
