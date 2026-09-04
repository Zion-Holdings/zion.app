import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "White-Label Analytics Dashboard | Zion Tech Group",
  description: "Embeddable white-label analytics platform that SaaS companies can rebrand and offer to their own customers. Includes customizable dashboards, report builder, data connectors, and multi-tenant architecture out of the box.",
  openGraph: {
    title: "White-Label Analytics Dashboard | Zion Tech Group",
    description: "Embeddable white-label analytics platform that SaaS companies can rebrand and offer to their own customers. Includes customizable dashboards, report builder, data connectors, and multi-tenant architecture out of the box.",
    url: "https://ziontechgroup.com/services/white-label-analytics/",
    type: 'website',
  },
  alternates: { canonical: "/services/white-label-analytics/" },
};

export default function WhiteLabelAnalyticsPage() {
  return (
    <StandardPage
      title="White-Label Analytics Dashboard"
      subtitle="Embeddable white-label analytics platform that SaaS companies can rebrand and offer to their own customers. Includes customizable dashboards, report builder, data connectors, and multi-tenant architecture out of the box."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "White-Label Analytics Dashboard" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Embeddable white-label analytics platform that SaaS companies can rebrand and offer to their own customers. Includes customizable dashboards, report builder, data connectors, and multi-tenant architecture out of the box.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607112838) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
