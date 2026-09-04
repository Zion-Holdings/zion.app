import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Healthcare Solutions | Zion Tech Group",
  description: "AI and IT solutions for healthcare: clinical operations, diagnostics, patient pathways, and compliance.",
  openGraph: {
    title: "Healthcare Solutions | Zion Tech Group",
    description: "AI and IT solutions for healthcare: clinical operations, diagnostics, patient pathways, and compliance.",
    url: "https://ziontechgroup.com/docs/solutions/healthcare/",
    type: 'website',
  },
  alternates: { canonical: "/docs/solutions/healthcare/" },
};

export default function DocsSolutionsHealthcarePage() {
  return (
    <StandardPage
      title="Healthcare Solutions"
      subtitle="AI and IT solutions for healthcare: clinical operations, diagnostics, patient pathways, and compliance."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Solutions", href: "/docs/solutions/" },
        { label: "Healthcare" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI and IT solutions for healthcare: clinical operations, diagnostics, patient pathways, and compliance.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
