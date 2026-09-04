import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Observability Platform | Zion Tech Group",
  description: "Unify logs, metrics, and traces with AI-assisted root cause analysis and proactive incident prevention.",
  openGraph: {
    title: "AI Observability Platform | Zion Tech Group",
    description: "Unify logs, metrics, and traces with AI-assisted root cause analysis and proactive incident prevention.",
    url: "https://ziontechgroup.com/docs/ai-observability-platform/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-observability-platform/" },
};

export default function DocsAiObservabilityPlatformPage() {
  return (
    <StandardPage
      title="AI Observability Platform"
      subtitle="Unify logs, metrics, and traces with AI-assisted root cause analysis and proactive incident prevention."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Observability Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Unify logs, metrics, and traces with AI-assisted root cause analysis and proactive incident prevention.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
