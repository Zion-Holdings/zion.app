import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "growth | Zion Tech Group",
  description: "growth — Zion Tech Group.",
  openGraph: {
    title: "growth | Zion Tech Group",
    description: "growth — Zion Tech Group.",
    url: "https://ziontechgroup.com/growth/",
    type: 'website',
  },
  alternates: { canonical: "/growth/" },
};

export default function GrowthPage() {
  return (
    <StandardPage
      title="growth"
      subtitle="growth — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Growth" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">growth — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
