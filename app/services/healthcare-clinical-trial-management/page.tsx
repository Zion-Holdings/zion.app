import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Healthcare Clinical Trial Management System | Zion Tech Group",
  description: "End-to-end clinical trial management with patient recruitment, regulatory compliance, and real-time analytics.",
  openGraph: {
    title: "Healthcare Clinical Trial Management System | Zion Tech Group",
    description: "End-to-end clinical trial management with patient recruitment, regulatory compliance, and real-time analytics.",
    url: "https://ziontechgroup.com/services/healthcare-clinical-trial-management/",
    type: 'website',
  },
  alternates: { canonical: "/services/healthcare-clinical-trial-management/" },
};

export default function ServicesHealthcareClinicalTrialManagementPage() {
  return (
    <StandardPage
      title="Healthcare Clinical Trial Management System"
      subtitle="End-to-end clinical trial management with patient recruitment, regulatory compliance, and real-time analytics."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Healthcare Clinical Trial Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">End-to-end clinical trial management with patient recruitment, regulatory compliance, and real-time analytics.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
