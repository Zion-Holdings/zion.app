import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Churn Prediction Suite | Zion Tech Group",
  description: "ML-powered churn prediction with automated retention campaigns and health scoring.",
  openGraph: {
    title: "Churn Prediction Suite | Zion Tech Group",
    description: "ML-powered churn prediction with automated retention campaigns and health scoring.",
    url: "https://ziontechgroup.com/services/microsaas-churn-prediction/",
    type: 'website',
  },
  alternates: { canonical: "/services/microsaas-churn-prediction/" },
};

export default function MicrosaasChurnPredictionPage() {
  return (
    <StandardPage
      title="Churn Prediction Suite"
      subtitle="ML-powered churn prediction with automated retention campaigns and health scoring."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Churn Prediction Suite" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">ML-powered churn prediction with automated retention campaigns and health scoring.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614101728) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
