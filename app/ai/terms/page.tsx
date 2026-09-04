import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Terms | Zion Tech Group",
  description: "Terms — Zion Tech Group.",
  openGraph: {
    title: "Terms | Zion Tech Group",
    description: "Terms — Zion Tech Group.",
    url: "https://ziontechgroup.com/ai/terms/",
    type: 'website',
  },
  alternates: { canonical: "/ai/terms/" },
};

export default function AiTermsPage() {
  return (
    <StandardPage
      title="Terms"
      subtitle="Terms — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai", href: "/ai/" },
        { label: "Terms" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Terms — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
