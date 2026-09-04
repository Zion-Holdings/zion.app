import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "data analytics | Zion Tech Group",
  description: "data analytics — Zion Tech Group.",
  openGraph: {
    title: "data analytics | Zion Tech Group",
    description: "data analytics — Zion Tech Group.",
    url: "https://ziontechgroup.com/services/data-analytics/",
    type: 'website',
  },
  alternates: { canonical: "/services/data-analytics/" },
};

export default function ServicesDataAnalyticsPage() {
  return (
    <StandardPage
      title="data analytics"
      subtitle="data analytics — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Data Analytics" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">data analytics — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
