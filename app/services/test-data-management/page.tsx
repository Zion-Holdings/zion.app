import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Test Data Management Platform | Zion Tech Group",
  description: "Enterprise test data management platform that creates, masks, and provisions realistic test datasets. Ensures data privacy compliance in non-production environments while maintaining referential integrity and data realis",
  openGraph: {
    title: "Test Data Management Platform | Zion Tech Group",
    description: "Enterprise test data management platform that creates, masks, and provisions realistic test datasets. Ensures data privacy compliance in non-production environments while maintaining referential integrity and data realis",
    url: "https://ziontechgroup.com/services/test-data-management/",
    type: 'website',
  },
  alternates: { canonical: "/services/test-data-management/" },
};

export default function TestDataManagementPage() {
  return (
    <StandardPage
      title="Test Data Management Platform"
      subtitle="Enterprise test data management platform that creates, masks, and provisions realistic test datasets. Ensures data privacy compliance in non-production environments while maintaining referential integrity and data realis"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Test Data Management Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Enterprise test data management platform that creates, masks, and provisions realistic test datasets. Ensures data privacy compliance in non-production environments while maintaining referential integrity and data realis</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113355) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
