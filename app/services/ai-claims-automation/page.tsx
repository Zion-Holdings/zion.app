import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AI Claims Automation | Zion Tech Group',
  description: 'Automate claims intake, extraction, triage, and routing with AI-backed workflow automation.',
};

export default function AiClaimsAutomationPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'AI Claims Automation', href: '/services/ai-claims-automation/' }]} className="mb-8" />
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Claims Automation</h1>
        <p className="text-slate-300 text-lg mb-6 max-w-3xl">Reduce claims throughput time with AI-assisted document extraction, validation, and routing.</p>
        <ul className="list-disc pl-6 text-slate-300 space-y-1 mb-8 max-w-3xl">
          <li>Document and form extraction</li>
          <li>Outlier and exception routing</li>
          <li>Automated validation checks</li>
          <li>Integration with claims management systems</li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <a href="/contact/" className="btn-primary">Request a demo</a>
          <a href="/services/" className="btn-secondary">All services</a>
        </div>
      </div>
    </main>
  );
}
