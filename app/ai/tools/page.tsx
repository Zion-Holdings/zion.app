import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Tools | Zion Tech Group",
  description: "Tools — Zion Tech Group.",
  openGraph: {
    title: "Tools | Zion Tech Group",
    description: "Tools — Zion Tech Group.",
    url: "https://ziontechgroup.com/ai/tools/",
    type: 'website',
  },
  alternates: { canonical: "/ai/tools/" },
};

export default function AiToolsPage() {
  return (
    <StandardPage
      title="Tools"
      subtitle="Tools — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai", href: "/ai/" },
        { label: "Tools" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Tools — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
