import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Partnerships | Zion Tech Group",
  description: "Partnerships from Zion Tech Group.",
  openGraph: {
    title: "Partnerships | Zion Tech Group",
    description: "Partnerships from Zion Tech Group.",
    url: "https://ziontechgroup.com/docs/partnerships/",
    type: 'website',
  },
  alternates: { canonical: "/docs/partnerships/" },
};

export default function DocsPartnershipsPage() {
  return (
    <StandardPage
      title="Partnerships"
      subtitle="Partnerships from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Partnerships" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Partnerships from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
