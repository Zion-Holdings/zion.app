import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Data Analytics & BI Services | Zion Tech Group",
  description: "Data analytics and BI services: data engineering, dashboards, data quality, and self-service analytics.",
  openGraph: {
    title: "Data Analytics & BI Services | Zion Tech Group",
    description: "Data analytics and BI services: data engineering, dashboards, data quality, and self-service analytics.",
    url: "https://ziontechgroup.com/docs/data-analytics-bi-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/data-analytics-bi-services/" },
};

export default function DocsDataAnalyticsBiServicesPage() {
  return (
    <StandardPage
      title="Data Analytics & BI Services"
      subtitle="Data analytics and BI services: data engineering, dashboards, data quality, and self-service analytics."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Data Analytics Bi Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Data analytics and BI services: data engineering, dashboards, data quality, and self-service analytics.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
