import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Blog | Zion Tech Group",
  description: "Blog — Zion Tech Group.",
  openGraph: {
    title: "Blog | Zion Tech Group",
    description: "Blog — Zion Tech Group.",
    url: "https://ziontechgroup.com/ai/blog/",
    type: 'website',
  },
  alternates: { canonical: "/ai/blog/" },
};

export default function AiBlogPage() {
  return (
    <StandardPage
      title="Blog"
      subtitle="Blog — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai", href: "/ai/" },
        { label: "Blog" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Blog — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
