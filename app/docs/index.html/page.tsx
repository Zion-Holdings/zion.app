import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Documentation Center | Zion Tech Group | Zion Tech Group",
  description: "Comprehensive documentation for all Zion Tech Group services, APIs, and integrations.",
  openGraph: {
    title: "Documentation Center | Zion Tech Group | Zion Tech Group",
    description: "Comprehensive documentation for all Zion Tech Group services, APIs, and integrations.",
    url: "https://ziontechgroup.com/docs/index.html/",
    type: 'website',
  },
  alternates: { canonical: "/docs/index.html/" },
};

export default function DocsIndexHtmlPage() {
  return (
    <StandardPage
      title="Documentation Center | Zion Tech Group"
      subtitle="Comprehensive documentation for all Zion Tech Group services, APIs, and integrations."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Index.Html" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Comprehensive documentation for all Zion Tech Group services, APIs, and integrations.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
