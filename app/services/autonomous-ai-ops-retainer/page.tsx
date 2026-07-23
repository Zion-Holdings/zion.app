import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Autonomous AI Ops Retainer | Zion Tech Group',
  description:
    'Autonomous AI ops retainer engagement from Zion Tech Group: continuous delivery, self-healing infrastructure, incident acceleration, and measurable SLO targets.',
};

export default function AutonomousAiOpsRetainerPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services/' },
            { label: 'Autonomous AI Ops Retainer', href: '/services/autonomous-ai-ops-retainer/' },
          ]}
          className="mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Autonomous AI Ops Retainer</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          A predictable operating model for organizations that want autonomous AI/IT outcomes
          without hiring a full platform team. We run infrastructure, incident response,
          automation, and continuous improvement on your behalf.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Essentials</h2>
            <p className="mt-2 text-cyan-400 font-semibold">Light retainer</p>
            <ul className="mt-4 list-disc pl-5 text-slate-300 space-y-1">
              <li>Health monitoring</li>
              <li>Patch/runbook updates</li>
              <li>Business-hour response</li>
            </ul>
            <a href="https://calendly.com/kleber-ziontechgroup" className="mt-4 inline-block rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">Book Essentials</a>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Growth</h2>
            <p className="mt-2 text-cyan-400 font-semibold">Standard retainer</p>
            <ul className="mt-4 list-disc pl-5 text-slate-300 space-y-1">
              <li>AI ops automation</li>
              <li>Cost optimization</li>
              <li>Incident acceleration</li>
              <li>Weekly executive review</li>
            </ul>
            <a href="https://calendly.com/kleber-ziontechgroup" className="mt-4 inline-block rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Book Growth</a>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Scale</h2>
            <p className="mt-2 text-cyan-400 font-semibold">Managed autonomy</p>
            <ul className="mt-4 list-disc pl-5 text-slate-300 space-y-1">
              <li>Auto-scaling workflows</li>
              <li>Agentic automation</li>
              <li>SLO-aware rollouts</li>
              <li>Dedicated support channel</li>
            </ul>
            <a href="https://calendly.com/kleber-ziontechgroup" className="mt-4 inline-block rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">Book Scale</a>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Start with a scoping call</h2>
          <p className="mt-2 text-slate-300">
            Tell us your reliability and automation targets. We’ll propose a retainer model that matches your maturity and risk profile.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/contact/" className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Contact us</a>
            <a href="/services/" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">All services</a>
            <a href="/free-services-and-tools/" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">Free tools</a>
          </div>
        </div>
      </div>
    </main>
  );
}
