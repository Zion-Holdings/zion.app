import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-remote-support | Zion Tech Group",
  description: "Enterprise Ai-remote-support from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure.",
  openGraph: {
    title: "Ai-remote-support | Zion Tech Group",
    description: "Enterprise Ai-remote-support from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure.",
    url: "https://ziontechgroup.com/docs/ai-remote-support/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-remote-support/" },
};

export default function DocsAiRemoteSupportPage() {
  return (
    <StandardPage
      title="Ai-remote-support"
      subtitle="Enterprise Ai-remote-support from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Remote Support" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Enterprise Ai-remote-support from Zion Tech Group. AI-driven automation, security, and cost optimization for modern IT infrastructure.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
