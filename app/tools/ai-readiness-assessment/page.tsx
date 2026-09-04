import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Readiness Assessment for IT Companies — Free Tool | Zion Tech Group",
  description: "Assess your company",
  openGraph: {
    title: "AI Readiness Assessment for IT Companies — Free Tool | Zion Tech Group",
    description: "Assess your company",
    url: "https://ziontechgroup.com/tools/ai-readiness-assessment/",
    type: 'website',
  },
  alternates: { canonical: "/tools/ai-readiness-assessment/" },
};

export default function ToolsAiReadinessAssessmentPage() {
  return (
    <StandardPage
      title="AI Readiness Assessment for IT Companies — Free Tool"
      subtitle="Assess your company"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools/" },
        { label: "Ai Readiness Assessment" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Assess your company</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
