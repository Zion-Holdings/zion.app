import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Readiness Assessment | Zion Tech Group',
  description:
    "Assess your organization's AI readiness: data maturity, infrastructure, talent, and governance. Free assessment available.",
  alternates: { canonical: '/ai-readiness-assessment/' },
};

const areas = [
  { title: 'Data maturity', body: 'Quality, governance, pipelines, and accessibility.' },
  { title: 'Infrastructure', body: 'Cloud, MLOps, compute, and integration readiness.' },
  { title: 'Talent', body: 'Skills, operating model, and change-management capacity.' },
  { title: 'Governance', body: 'Risk, compliance, model oversight, and policy.' },
];

export default function AiReadinessAssessmentPage() {
  return (
    <StandardPage
      title="AI Readiness Assessment"
      subtitle="Evaluate data maturity, infrastructure, talent, and governance. Free assessment available."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'AI Readiness Assessment' },
      ]}
      actions={[
        { label: 'Request assessment', href: '/free-ai-readiness-audit/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {areas.map((area) => (
          <div key={area.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-white font-semibold mb-2">{area.title}</h2>
            <p className="text-slate-400 text-sm">{area.body}</p>
          </div>
        ))}
      </div>
    </StandardPage>
  );
}
