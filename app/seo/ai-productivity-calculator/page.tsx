import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Productivity Calculator | Zion Tech Group',
  description: 'Estimate time saved and ROI from AI automation across support, operations, and delivery workflows.',
  openGraph: {
    title: 'AI Productivity Calculator | Zion Tech Group',
    description: 'Estimate time saved and ROI from AI automation across support, operations, and delivery workflows.',
    url: 'https://ziontechgroup.com/seo/ai-productivity-calculator/',
    type: 'website',
  },
  alternates: { canonical: '/seo/ai-productivity-calculator/' },
};

export default function AiProductivityCalculatorPage() {
  return (
    <StandardPage
      title="AI Productivity Calculator"
      subtitle="Estimate time saved and ROI from AI automation across support, operations, and delivery workflows."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/seo/' },
        { label: 'AI Productivity Calculator' },
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse tools', href: '/tools/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">
        Use this calculator with your team to compare current hours spent on repetitive work against an AI-assisted baseline. Zion Tech Group helps map those estimates to a scoped automation pilot.
      </p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260411231543) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
