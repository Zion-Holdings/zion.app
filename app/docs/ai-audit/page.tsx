import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Audit & Readiness Assessment | Zion Tech Group",
  description: "Audit your AI stack for security, compliance, cost, and performance. Get a prioritized action plan.",
  openGraph: {
    title: "AI Audit & Readiness Assessment | Zion Tech Group",
    description: "Audit your AI stack for security, compliance, cost, and performance. Get a prioritized action plan.",
    url: "https://ziontechgroup.com/docs/ai-audit/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-audit/" },
};

export default function DocsAiAuditPage() {
  return (
    <StandardPage
      title="AI Audit & Readiness Assessment"
      subtitle="Audit your AI stack for security, compliance, cost, and performance. Get a prioritized action plan."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Audit" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Audit your AI stack for security, compliance, cost, and performance. Get a prioritized action plan.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
