import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Call Center Automation | Zion Tech Group",
  description: "AI call center automation: voice agents, transcription, coaching, scheduling, and analytics for support teams.",
  openGraph: {
    title: "AI Call Center Automation | Zion Tech Group",
    description: "AI call center automation: voice agents, transcription, coaching, scheduling, and analytics for support teams.",
    url: "https://ziontechgroup.com/docs/ai-call-center-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-call-center-automation/" },
};

export default function DocsAiCallCenterAutomationPage() {
  return (
    <StandardPage
      title="AI Call Center Automation"
      subtitle="AI call center automation: voice agents, transcription, coaching, scheduling, and analytics for support teams."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Call Center Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI call center automation: voice agents, transcription, coaching, scheduling, and analytics for support teams.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
