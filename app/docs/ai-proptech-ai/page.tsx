import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-proptech-ai | Zion Tech Group",
  description: "Ai-proptech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for proptech-ai.",
  openGraph: {
    title: "Ai-proptech-ai | Zion Tech Group",
    description: "Ai-proptech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for proptech-ai.",
    url: "https://ziontechgroup.com/docs/ai-proptech-ai/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-proptech-ai/" },
};

export default function DocsAiProptechAiPage() {
  return (
    <StandardPage
      title="Ai-proptech-ai"
      subtitle="Ai-proptech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for proptech-ai."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Proptech Ai" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Ai-proptech-ai services from Zion Tech Group. Enterprise AI automation, consulting, and implementation for proptech-ai.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
