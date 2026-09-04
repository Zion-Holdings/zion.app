import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Revenue Operations Dashboard | Zion Tech Group",
  description: "Live revenue operations dashboard: leads, bookings, payments, and automation health for Zion Tech Group.",
  openGraph: {
    title: "Revenue Operations Dashboard | Zion Tech Group",
    description: "Live revenue operations dashboard: leads, bookings, payments, and automation health for Zion Tech Group.",
    url: "https://ziontechgroup.com/docs/revenue-dashboard/",
    type: 'website',
  },
  alternates: { canonical: "/docs/revenue-dashboard/" },
};

export default function DocsRevenueDashboardPage() {
  return (
    <StandardPage
      title="Revenue Operations Dashboard"
      subtitle="Live revenue operations dashboard: leads, bookings, payments, and automation health for Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Revenue Dashboard" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Live revenue operations dashboard: leads, bookings, payments, and automation health for Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
