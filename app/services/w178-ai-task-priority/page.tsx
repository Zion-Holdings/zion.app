import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Task Priority Engine | Zion Tech Group",
  description: "AI task prioritization: deadline urgency, importance scoring, dependency mapping, focus time.",
  openGraph: {
    title: "AI Task Priority Engine | Zion Tech Group",
    description: "AI task prioritization: deadline urgency, importance scoring, dependency mapping, focus time.",
    url: "https://ziontechgroup.com/services/w178-ai-task-priority/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-ai-task-priority/" },
};

export default function W178AiTaskPriorityPage() {
  return (
    <StandardPage
      title="AI Task Priority Engine"
      subtitle="AI task prioritization: deadline urgency, importance scoring, dependency mapping, focus time."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Task Priority Engine" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI task prioritization: deadline urgency, importance scoring, dependency mapping, focus time.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607110450) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
