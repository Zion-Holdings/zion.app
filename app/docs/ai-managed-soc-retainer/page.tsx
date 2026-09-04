import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Managed SOC Retainer | Zion Tech Group",
  description: "Zion Tech Group delivers AI-managed SOC services with real-time threat detection, alert triage, and incident response automation.",
  openGraph: {
    title: "AI Managed SOC Retainer | Zion Tech Group",
    description: "Zion Tech Group delivers AI-managed SOC services with real-time threat detection, alert triage, and incident response automation.",
    url: "https://ziontechgroup.com/docs/ai-managed-soc-retainer/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-managed-soc-retainer/" },
};

export default function DocsAiManagedSocRetainerPage() {
  return (
    <StandardPage
      title="AI Managed SOC Retainer"
      subtitle="Zion Tech Group delivers AI-managed SOC services with real-time threat detection, alert triage, and incident response automation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Managed Soc Retainer" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group delivers AI-managed SOC services with real-time threat detection, alert triage, and incident response automation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
