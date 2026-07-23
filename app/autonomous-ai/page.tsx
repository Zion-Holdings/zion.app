import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Autonomous AI & IT Platform | Zion Tech Group',
  description:
    'Zion Tech Group is building an autonomous AI and IT platform: self-healing infrastructure, AI ops, agentic workflows, and continuous delivery without manual bottlenecks.',
};

const pillars = [
  { title: 'Autonomous Infrastructure', body: 'Auto-scaling, self-healing environments with policy-based recovery and cost governance.' },
  { title: 'AI Ops', body: 'Anomaly detection, incident acceleration, and runbook automation across clouds and services.' },
  { title: 'Agentic Workflows', body: 'AI agents that triage tickets, qualify leads, schedule meetings, and execute routine delivery tasks.' },
  { title: 'Continuous Delivery', body: 'Pipeline automation, semantic review, release validation, and SLO-aware rollouts.' },
];

export default function AutonomousAiPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Autonomous AI & IT', href: '/autonomous-ai' },
          ]}
          className="mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Autonomous AI & IT Platform
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          Zion Tech Group is engineering an autonomous operating layer for AI and IT:
          self-healing infrastructure, AI ops, agentic workflows, and continuous delivery
          with less manual intervention.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="text-xl font-semibold text-white">{p.title}</h2>
              <p className="mt-2 text-slate-300">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Grow with an autonomous stack</h2>
          <p className="mt-2 text-slate-300">
            We help teams move from manual ops to assisted autonomy, then to full autonomous delivery with measurable reliability and cost outcomes.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/contact/" className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950">
              Start a scoping call
            </a>
            <a href="/services/" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">
              Services
            </a>
            <a href="/free-services-and-tools/" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">
              Free tools
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
