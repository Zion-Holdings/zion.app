import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Case Studies | Zion Tech Group",
  description: "Zion Tech Group case studies: AI automation, SOC, cloud migration, and IT cost optimization results.",
  openGraph: {
    title: "Case Studies | Zion Tech Group",
    description: "Zion Tech Group case studies: AI automation, SOC, cloud migration, and IT cost optimization results.",
    url: "https://ziontechgroup.com/docs/case-studies/",
    type: 'website',
  },
  alternates: { canonical: "/docs/case-studies/" },
};

export default function DocsCaseStudiesPage() {
  return (
    <StandardPage
      title="Case Studies"
      subtitle="Zion Tech Group case studies: AI automation, SOC, cloud migration, and IT cost optimization results."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Case Studies" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group case studies: AI automation, SOC, cloud migration, and IT cost optimization results.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
