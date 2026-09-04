import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Healthcare | Zion Tech Group",
  description: "AI and IT solutions for healthcare: diagnostics, patient scheduling, claims automation, and HIPAA-compliant workflows.",
  openGraph: {
    title: "Healthcare | Zion Tech Group",
    description: "AI and IT solutions for healthcare: diagnostics, patient scheduling, claims automation, and HIPAA-compliant workflows.",
    url: "https://ziontechgroup.com/docs/industries/healthcare/",
    type: 'website',
  },
  alternates: { canonical: "/docs/industries/healthcare/" },
};

export default function DocsIndustriesHealthcarePage() {
  return (
    <StandardPage
      title="Healthcare"
      subtitle="AI and IT solutions for healthcare: diagnostics, patient scheduling, claims automation, and HIPAA-compliant workflows."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Industries", href: "/docs/industries/" },
        { label: "Healthcare" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI and IT solutions for healthcare: diagnostics, patient scheduling, claims automation, and HIPAA-compliant workflows.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
