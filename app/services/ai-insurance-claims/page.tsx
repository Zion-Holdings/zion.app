import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Insurance Claims AI | Zion Tech Group',
  description: 'AI-driven insurance claims processing, validation, and triage for faster resolution and lower operational cost.',
};

export default function AiInsuranceClaimsServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'Insurance Claims AI', href: '/services/ai-insurance-claims/' }]} className="mb-8" />
        <h1 className="text-4xl font-bold text-white mb-4">Insurance Claims AI</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">Accelerate claims handling with AI that validates documentation, flags outliers, and routes cases to the right queue.</p>
        <ul className="mt-6 list-disc pl-6 text-slate-300 space-y-1 max-w-3xl">
          <li>Document extraction and validation</li>
          <li>Fraud suspicion scoring</li>
          <li>Straight-through processing for low-risk claims</li>
          <li>Adjuster assist with recommended disposition</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact/" className="btn-primary">Contact us</a>
          <a href="/services/" className="btn-secondary">All services</a>
          <a href="/free-services-and-tools/" className="btn-secondary">Free tools</a>
        </div>
      </div>
    </main>
  );
}
