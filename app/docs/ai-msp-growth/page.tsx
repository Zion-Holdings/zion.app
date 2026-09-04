import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI MSP Growth | Zion Tech Group",
  description: "Zion Tech Group helps MSPs grow with AI-powered lead capture, support automation, and recurring revenue systems.",
  openGraph: {
    title: "AI MSP Growth | Zion Tech Group",
    description: "Zion Tech Group helps MSPs grow with AI-powered lead capture, support automation, and recurring revenue systems.",
    url: "https://ziontechgroup.com/docs/ai-msp-growth/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-msp-growth/" },
};

export default function DocsAiMspGrowthPage() {
  return (
    <StandardPage
      title="AI MSP Growth"
      subtitle="Zion Tech Group helps MSPs grow with AI-powered lead capture, support automation, and recurring revenue systems."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Msp Growth" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group helps MSPs grow with AI-powered lead capture, support automation, and recurring revenue systems.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
