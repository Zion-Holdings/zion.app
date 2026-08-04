import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Observability for Security Operations | Zion Tech Group',
  description: 'Improve security posture with AI observability: trace-driven threat detection, behavior baselining, and alert correlation.',
  alternates: { canonical: '/blog/ai-observability-for-security-operations/' },
};

export default function AIObservabilitySecurityOperationsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">AI Observability for Security Operations</h1>
        <p className="mt-4 text-slate-300">Use traces, metrics, and logs with AI to detect threats faster, reduce false positives, and shorten investigation cycles.</p>
        <div className="mt-8">
          <a href="/contact/" className="btn-primary">Talk to an Expert</a>
        </div>
      </main>
    </div>
  );
}
