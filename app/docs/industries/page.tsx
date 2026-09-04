import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Industries | Zion Tech Group",
  description: "Zion Tech Group serves healthcare, financial services, insurance, legal, manufacturing, logistics, and government with AI and IT solutions.",
  openGraph: {
    title: "Industries | Zion Tech Group",
    description: "Zion Tech Group serves healthcare, financial services, insurance, legal, manufacturing, logistics, and government with AI and IT solutions.",
    url: "https://ziontechgroup.com/docs/industries/",
    type: 'website',
  },
  alternates: { canonical: "/docs/industries/" },
};

export default function DocsIndustriesPage() {
  return (
    <StandardPage
      title="Industries"
      subtitle="Zion Tech Group serves healthcare, financial services, insurance, legal, manufacturing, logistics, and government with AI and IT solutions."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Industries" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group serves healthcare, financial services, insurance, legal, manufacturing, logistics, and government with AI and IT solutions.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
