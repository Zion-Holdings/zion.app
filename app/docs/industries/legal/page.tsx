import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Legal | Zion Tech Group",
  description: "AI and IT solutions for legal: contract review, legal research, e-discovery, and document automation.",
  openGraph: {
    title: "Legal | Zion Tech Group",
    description: "AI and IT solutions for legal: contract review, legal research, e-discovery, and document automation.",
    url: "https://ziontechgroup.com/docs/industries/legal/",
    type: 'website',
  },
  alternates: { canonical: "/docs/industries/legal/" },
};

export default function DocsIndustriesLegalPage() {
  return (
    <StandardPage
      title="Legal"
      subtitle="AI and IT solutions for legal: contract review, legal research, e-discovery, and document automation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Industries", href: "/docs/industries/" },
        { label: "Legal" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI and IT solutions for legal: contract review, legal research, e-discovery, and document automation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
