import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI | Zion Tech Group',
  description: 'Production AI services: assistants, automation, evaluation, and governed rollout.',
  openGraph: {
    title: 'AI | Zion Tech Group',
    description: 'AI-native services: assistants, automation, evaluation, and governed rollout.',
    url: 'https://ziontechgroup.com/ai/',
    type: 'website',
  },
  alternates: { canonical: '/ai/' },
};

export default function AiPage() {
  return (
    <StandardPage
      title="AI"
      subtitle="Production AI services: assistants, automation, evaluation, and governed rollout."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'AI' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI assistants</h3>
          <p className="text-slate-400 text-sm">Support, ops, and internal tooling assistants grounded in your data.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Autonomous operations</h3>
          <p className="text-slate-400 text-sm">Workflows, triage, and routing with measurable deflection and faster resolution.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Evaluation & safety</h3>
          <p className="text-slate-400 text-sm">Prompt testing, guardrails, and production review loops.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <a href="/contact/" className="btn-primary text-center">Start an AI project</a>
        <a href="/services/" className="btn-secondary text-center">Browse Services</a>
      </div>
    </StandardPage>
  );
}
