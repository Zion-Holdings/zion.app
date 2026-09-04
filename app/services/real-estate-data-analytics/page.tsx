import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Real Estate Data Analytics | Zion Tech Group",
  description: "Market intelligence platform for real estate investors. Property valuations, rental yield predictions, neighborhood scoring, and investment opportunity alerts.",
  openGraph: {
    title: "Real Estate Data Analytics | Zion Tech Group",
    description: "Market intelligence platform for real estate investors. Property valuations, rental yield predictions, neighborhood scoring, and investment opportunity alerts.",
    url: "https://ziontechgroup.com/services/real-estate-data-analytics/",
    type: 'website',
  },
  alternates: { canonical: "/services/real-estate-data-analytics/" },
};

export default function RealEstateDataAnalyticsPage() {
  return (
    <StandardPage
      title="Real Estate Data Analytics"
      subtitle="Market intelligence platform for real estate investors. Property valuations, rental yield predictions, neighborhood scoring, and investment opportunity alerts."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Real Estate Data Analytics" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Market intelligence platform for real estate investors. Property valuations, rental yield predictions, neighborhood scoring, and investment opportunity alerts.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614094216) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
