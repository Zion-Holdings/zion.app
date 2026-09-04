import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Brazilian IT Staffing | Zion Tech Group",
  description: "Brazilian IT staffing: AI engineers, SOC analysts, cloud architects, and DevOps specialists for LATAM teams.",
  openGraph: {
    title: "Brazilian IT Staffing | Zion Tech Group",
    description: "Brazilian IT staffing: AI engineers, SOC analysts, cloud architects, and DevOps specialists for LATAM teams.",
    url: "https://ziontechgroup.com/docs/brazilian-it-staffing/",
    type: 'website',
  },
  alternates: { canonical: "/docs/brazilian-it-staffing/" },
};

export default function DocsBrazilianItStaffingPage() {
  return (
    <StandardPage
      title="Brazilian IT Staffing"
      subtitle="Brazilian IT staffing: AI engineers, SOC analysts, cloud architects, and DevOps specialists for LATAM teams."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Brazilian It Staffing" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Brazilian IT staffing: AI engineers, SOC analysts, cloud architects, and DevOps specialists for LATAM teams.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
