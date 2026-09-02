import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
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
  twitter: {
    card: 'summary_large_image',
    title: 'AI | Zion Tech Group',
    description: 'AI-native services: assistants, automation, evaluation, and governed rollout.',
  },
  alternates: { canonical: '/ai/' },
};


export default function AiPage() {
  return (
<>
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

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">AI in production</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Assistants grounded in your data with retrieval and tool use.</li>
          <li>Evaluation loops that measure quality, safety, and business impact.</li>
          <li>Governance and compliance controls before scale-out.</li>
          <li>Observability, cost tracking, and model-version management.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">Browse services</a>
          <a href="/contact/" className="btn-secondary text-center">Contact us</a>
        </div>
      </div>
    </StandardPage>
  </>
  );
}