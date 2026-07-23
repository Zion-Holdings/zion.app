import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AI Observability | Zion Tech Group',
  description: 'AI observability, anomaly detection, and SLO tracking for IT teams.',
  alternates: { canonical: '/services/ai-observability/' },
};

export default function AIObservabilityPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'AI Observability', href: '/services/ai-observability/' }]} className="mb-8" />
        <h1 className="text-4xl font-bold text-white mb-4">AI Observability</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">Monitor AI systems with purpose-built observability, anomaly detection, root-cause hints, and SLO tracking.</p>
        <ul className="mt-6 list-disc pl-6 text-slate-300 space-y-1 max-w-3xl">
          <li>Anomaly detection across services and traces</li>
          <li>Root-cause hints and accelerated triage</li>
          <li>SLO tracking and reliability reporting</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact/" className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Contact us</a>
          <a href="/services/" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">All services</a>
        </div>
      </div>
    </main>
  );
}
