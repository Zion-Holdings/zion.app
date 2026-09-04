import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "MLOps Platform and Model Lifecycle | Zion Tech Group",
  description: "End-to-end ML lifecycle: experiment tracking, model registry, CI/CD for ML.",
  openGraph: {
    title: "MLOps Platform and Model Lifecycle | Zion Tech Group",
    description: "End-to-end ML lifecycle: experiment tracking, model registry, CI/CD for ML.",
    url: "https://ziontechgroup.com/services/w180-mlops/",
    type: 'website',
  },
  alternates: { canonical: "/services/w180-mlops/" },
};

export default function W180MlopsPage() {
  return (
    <StandardPage
      title="MLOps Platform and Model Lifecycle"
      subtitle="End-to-end ML lifecycle: experiment tracking, model registry, CI/CD for ML."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "MLOps Platform and Model Lifecycle" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">End-to-end ML lifecycle: experiment tracking, model registry, CI/CD for ML.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607112951) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
