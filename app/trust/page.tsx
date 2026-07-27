import Link from 'next/link';

export const metadata = {
  title: 'Trust & Security | Zion Tech Group',
  description: 'Zion Tech Group trust page: uptime, security posture, incident response, compliance, and AI guardrails for AI/IT solutions and managed services.',
};

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Trust &amp; Security</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Reliability and transparency are prerequisites for any system we ship.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold mb-2">Uptime</h3>
            <p>99.9% availability target on core production workloads.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold mb-2">Security Posture</h3>
            <p>Access control, audit logging, and secret hygiene by default.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold mb-2">Incident Response</h3>
            <p>Fast containment, root cause analysis, and customer notification.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold mb-2">Compliance</h3>
            <p>Best-practice controls and policies aligned to customer requirements.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold mb-2">AI Guardrails</h3>
            <p>Safety-by-design AI integrations with monitoring and kill switches.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold mb-2">Transparency</h3>
            <p>Clear SLA terms, scope, and escalation paths in writing.</p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link href="/contact/" className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-white">
            Contact Us
          </Link>
          <Link href="/services/" className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-slate-900">
            View Services
          </Link>
        </div>
      </main>
    </div>
  );
}
