import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Security Compliance | Zion Tech Group",
  description: "Automate compliance controls, evidence collection, and audit readiness with AI-driven security compliance workflows.",
  openGraph: {
    title: "AI Security Compliance | Zion Tech Group",
    description: "Automate compliance controls, evidence collection, and audit readiness with AI-driven security compliance workflows.",
    url: "https://ziontechgroup.com/docs/ai-security-compliance/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-security-compliance/" },
};

export default function DocsAiSecurityCompliancePage() {
  return (
    <StandardPage
      title="AI Security Compliance"
      subtitle="Automate compliance controls, evidence collection, and audit readiness with AI-driven security compliance workflows."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Security Compliance" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Automate compliance controls, evidence collection, and audit readiness with AI-driven security compliance workflows.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
