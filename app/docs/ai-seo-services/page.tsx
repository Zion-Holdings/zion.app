import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-seo-services | Zion Tech Group",
  description: "Enterprise Ai-seo-services from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure.",
  openGraph: {
    title: "Ai-seo-services | Zion Tech Group",
    description: "Enterprise Ai-seo-services from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure.",
    url: "https://ziontechgroup.com/docs/ai-seo-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-seo-services/" },
};

export default function DocsAiSeoServicesPage() {
  return (
    <StandardPage
      title="Ai-seo-services"
      subtitle="Enterprise Ai-seo-services from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Seo Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Enterprise Ai-seo-services from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
