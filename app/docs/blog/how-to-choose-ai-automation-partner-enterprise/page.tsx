import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "How to Choose the Right AI Automation Partner for Enterprise | Zion Tech Group",
  description: "Enterprise guide to choosing an AI automation partner: selection criteria, pricing benchmarks, red flags, and a practical evaluation framework for IT leaders in 2026.",
  openGraph: {
    title: "How to Choose the Right AI Automation Partner for Enterprise | Zion Tech Group",
    description: "Enterprise guide to choosing an AI automation partner: selection criteria, pricing benchmarks, red flags, and a practical evaluation framework for IT leaders in 2026.",
    url: "https://ziontechgroup.com/docs/blog/how-to-choose-ai-automation-partner-enterprise/",
    type: 'website',
  },
  alternates: { canonical: "/docs/blog/how-to-choose-ai-automation-partner-enterprise/" },
};

export default function DocsBlogHowToChooseAiAutomationPartnerEnterprisePage() {
  return (
    <StandardPage
      title="How to Choose the Right AI Automation Partner for Enterprise"
      subtitle="Enterprise guide to choosing an AI automation partner: selection criteria, pricing benchmarks, red flags, and a practical evaluation framework for IT leaders in 2026."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Blog", href: "/docs/blog/" },
        { label: "How To Choose Ai Automation Partner Enterprise" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Enterprise guide to choosing an AI automation partner: selection criteria, pricing benchmarks, red flags, and a practical evaluation framework for IT leaders in 2026.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
