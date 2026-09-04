import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-agent-platform | Zion Tech Group",
  description: "Ai-agent-platform from Zion Tech Group.",
  openGraph: {
    title: "Ai-agent-platform | Zion Tech Group",
    description: "Ai-agent-platform from Zion Tech Group.",
    url: "https://ziontechgroup.com/docs/ai-agent-platform/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-agent-platform/" },
};

export default function DocsAiAgentPlatformPage() {
  return (
    <StandardPage
      title="Ai-agent-platform"
      subtitle="Ai-agent-platform from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Agent Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-agent-platform from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
