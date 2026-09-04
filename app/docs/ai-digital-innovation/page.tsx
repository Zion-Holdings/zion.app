import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-digital-innovation | Zion Tech Group",
  description: "Enterprise Ai-digital-innovation services from Zion Tech Group. AI-driven automation, monitoring, and support for modern IT infrastructure.",
  openGraph: {
    title: "Ai-digital-innovation | Zion Tech Group",
    description: "Enterprise Ai-digital-innovation services from Zion Tech Group. AI-driven automation, monitoring, and support for modern IT infrastructure.",
    url: "https://ziontechgroup.com/docs/ai-digital-innovation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-digital-innovation/" },
};

export default function DocsAiDigitalInnovationPage() {
  return (
    <StandardPage
      title="Ai-digital-innovation"
      subtitle="Enterprise Ai-digital-innovation services from Zion Tech Group. AI-driven automation, monitoring, and support for modern IT infrastructure."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Digital Innovation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Enterprise Ai-digital-innovation services from Zion Tech Group. AI-driven automation, monitoring, and support for modern IT infrastructure.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
