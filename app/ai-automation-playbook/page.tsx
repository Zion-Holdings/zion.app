'use client';

import Link from 'next/link';

const steps = [
  { title: 'Map high-impact use cases', body: 'Start with support, security, cloud cost, and document workflows where automation shows ROI fastest.' },
  { title: 'Build one production-ready pilot', body: 'Avoid slide decks. Deliver an integrated pilot with monitoring, retry logic, and clear ownership.' },
  { title: 'Measure outcomes first', body: 'Track resolution time, false-positive rate, cost savings, or revenue lift—not just activity metrics.' },
  { title: 'Add observability and guardrails', body: 'Include logging, tracing, fallback behavior, and human handoff before expanding scope.' },
  { title: 'Scale with reusable patterns', body: 'Package configs, prompts, classifiers, and runbooks into repeatable deployment playbooks.' },
];

export default function AIAutomationPlaybookPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container-page py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs text-purple-300 font-medium uppercase tracking-wider">Playbook</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The <span className="gradient-text">AI automation playbook</span> for IT and services companies
            </h1>
            <p className="text-slate-300 text-base md:text-lg mb-8">
              A repeatable path from use-case selection to production scale, designed for real operations outcomes—not demos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-consultation" className="btn-primary text-lg">Get a scoped plan</Link>
              <Link href="/use-cases" className="btn-secondary text-lg">Use cases</Link>
              <Link href="/services" className="btn-secondary text-lg">All services</Link>
            </div>
          </div>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Five-step rollout</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {steps.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <div className="text-sm font-semibold text-white mb-2">{item.title}</div>
                  <p className="text-slate-400 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 cta-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want this tailored to your team?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Tell us your target outcome and current tooling. We’ll deliver a scoped implementation plan with success metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/request-consultation" className="btn-primary text-lg">Request consultation</Link>
              <Link href="/case-studies" className="btn-secondary text-lg">Case studies</Link>
              <Link href="/pricing" className="btn-secondary text-lg">Pricing</Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
