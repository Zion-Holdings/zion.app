import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Free AI Tools Hub | Zion Tech Group",
  description: "Free AI tools and resources from Zion Tech Group: calculators, checklists, templates, and automation utilities.",
  openGraph: {
    title: "Free AI Tools Hub | Zion Tech Group",
    description: "Free AI tools and resources from Zion Tech Group: calculators, checklists, templates, and automation utilities.",
    url: "https://ziontechgroup.com/docs/free-tools-hub/",
    type: 'website',
  },
  alternates: { canonical: "/docs/free-tools-hub/" },
};

export default function DocsFreeToolsHubPage() {
  return (
    <StandardPage
      title="Free AI Tools Hub"
      subtitle="Free AI tools and resources from Zion Tech Group: calculators, checklists, templates, and automation utilities."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Free Tools Hub" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Free AI tools and resources from Zion Tech Group: calculators, checklists, templates, and automation utilities.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
