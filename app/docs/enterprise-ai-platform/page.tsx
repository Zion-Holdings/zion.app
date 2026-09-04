import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Enterprise-ai-platform | Zion Tech Group",
  description: "Enterprise-ai-platform solutions from Zion Tech Group. Enterprise AI automation, API monetization, and strategic partnerships.",
  openGraph: {
    title: "Enterprise-ai-platform | Zion Tech Group",
    description: "Enterprise-ai-platform solutions from Zion Tech Group. Enterprise AI automation, API monetization, and strategic partnerships.",
    url: "https://ziontechgroup.com/docs/enterprise-ai-platform/",
    type: 'website',
  },
  alternates: { canonical: "/docs/enterprise-ai-platform/" },
};

export default function DocsEnterpriseAiPlatformPage() {
  return (
    <StandardPage
      title="Enterprise-ai-platform"
      subtitle="Enterprise-ai-platform solutions from Zion Tech Group. Enterprise AI automation, API monetization, and strategic partnerships."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Enterprise Ai Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Enterprise-ai-platform solutions from Zion Tech Group. Enterprise AI automation, API monetization, and strategic partnerships.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
