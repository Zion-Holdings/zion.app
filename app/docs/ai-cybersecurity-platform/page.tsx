import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Cybersecurity Platform | Zion Tech Group",
  description: "AI cybersecurity platform: threat detection, SOC automation, zero trust, compliance, and managed protection.",
  openGraph: {
    title: "AI Cybersecurity Platform | Zion Tech Group",
    description: "AI cybersecurity platform: threat detection, SOC automation, zero trust, compliance, and managed protection.",
    url: "https://ziontechgroup.com/docs/ai-cybersecurity-platform/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-cybersecurity-platform/" },
};

export default function DocsAiCybersecurityPlatformPage() {
  return (
    <StandardPage
      title="AI Cybersecurity Platform"
      subtitle="AI cybersecurity platform: threat detection, SOC automation, zero trust, compliance, and managed protection."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Cybersecurity Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI cybersecurity platform: threat detection, SOC automation, zero trust, compliance, and managed protection.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
