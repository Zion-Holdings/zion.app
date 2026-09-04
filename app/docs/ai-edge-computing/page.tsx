import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-edge-computing | Zion Tech Group",
  description: "Enterprise Ai-edge-computing services from Zion Tech Group. AI-driven automation, monitoring, and support for modern IT infrastructure.",
  openGraph: {
    title: "Ai-edge-computing | Zion Tech Group",
    description: "Enterprise Ai-edge-computing services from Zion Tech Group. AI-driven automation, monitoring, and support for modern IT infrastructure.",
    url: "https://ziontechgroup.com/docs/ai-edge-computing/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-edge-computing/" },
};

export default function DocsAiEdgeComputingPage() {
  return (
    <StandardPage
      title="Ai-edge-computing"
      subtitle="Enterprise Ai-edge-computing services from Zion Tech Group. AI-driven automation, monitoring, and support for modern IT infrastructure."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Edge Computing" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Enterprise Ai-edge-computing services from Zion Tech Group. AI-driven automation, monitoring, and support for modern IT infrastructure.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
