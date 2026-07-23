import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AI Insurance Claims Automation | Zion Tech Group',
  description: 'AI insurance claims automation with document extraction, validation, routing, and fraud scoring.',
};

export default function AiInsuranceClaimsAutomationPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'AI Insurance Claims Automation', href: '/services/ai-insurance-claims-automation/' }]} className="mb-8" />
        <h1 className="text-4xl font-bold text-white mb-4">AI Insurance Claims Automation</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">Automate claims handling end to end: intake, extraction, validation, routing, and fraud suspicion scoring.</p>
        <ul className="mt-6 list-disc pl-6 text-slate-300 space-y-1 max-w-3xl">
          <li>Straight-through processing for routine claims</li>
          <li>Document extraction and data validation</li>
          <li>Exception routing with audit evidence</li>
          <li>Adjuster assist with recommended action</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact/" className="btn-primary">Start a pilot</a>
          <a href="/services/" className="btn-secondary">All services</a>
          <a href="/case-studies/healthcare/" className="btn-secondary">Case studies</a>
        </div>
      </div>
    </main>
  );
}
