import Link from 'next/link';

export const metadata = {
  title: 'Client Success Roadmap | Zion Tech Group',
  description: 'Follow the exact roadmap we use to move clients from current-state pain to measurable AI and IT outcomes in weeks, not quarters.',
};

type Phase = {
  key: string;
  title: string;
  timeframe: string;
  outcome: string;
  proof: string;
  signal: string;
};

const phases: Phase[] = [
  { key: 'assess', title: 'Assess & Prioritize', timeframe: 'Week 1-2', outcome: 'A clear, ranked backlog of high-ROI automations instead of guesswork.', proof: 'See AI Readiness Assessment →', signal: 'You will see priorities, not a generic report.' },
  { key: 'pilot', title: 'Pilot with Live Traffic', timeframe: 'Week 3-4', outcome: 'One working workflow changing real operations, with guardrails.', proof: 'View automation playbook →', signal: 'Risk drops because the system starts teaching itself.' },
  { key: 'measure', title: 'Measure & Stabilize', timeframe: 'Week 5-8', outcome: 'Metrics that prove ROI and a checklist for reliability.', proof: 'View case study →', signal: 'Confidence replaces questions.' },
  { key: 'expand', title: 'Expand with Governance', timeframe: 'Week 9-16', outcome: 'More workflows, lower cost per ticket, consistent outcomes.', proof: 'View cloud optimization case study →', signal: 'Scale feels predictable instead of expensive.' },
  { key: 'operate', title: 'Operate & Optimize', timeframe: 'Month 5+', outcome: 'A living system with monitoring, escalation, and continuous improvement.', proof: 'View agent monitoring dashboard →', signal: 'You stop maintaining tools and start reading decisions.' },
];

const actions = [
  { label: 'Get Custom Proposal', href: '/', accent: 'from-violet-600 to-purple-600' },
  { label: 'Start ROI Calculation', href: '/roi-calculator/', accent: 'from-emerald-600 to-teal-600' },
  { label: 'Review Case Studies', href: '/case-studies/', accent: 'from-blue-600 to-cyan-600' },
];

const resultRows = [
  { effect: 'Support deflection', value: '64% faster resolution' },
  { effect: 'Cloud reporting', value: 'Overnight pipeline delivery' },
  { effect: 'Compliance evidence', value: 'SOC 2 ahead of schedule' },
  { effect: 'Operational cost', value: 'Predictable AI-backed run rates' },
  { effect: 'Agent capacity', value: 'Coverage without headcount growth' },
];

export default function TransformationRoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Client Success Roadmap
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            A tested path from problem to outcome
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl">
            This roadmap comes from successful client transformations and works as a blueprint for your next initiative.
          </p>
        </div>
      </section>

      <section className="pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4">Outcome evidence</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {resultRows.map((row) => (
                <div key={row.effect} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs font-semibold text-purple-400">{row.effect}</p>
                  <p className="mt-2 text-sm text-slate-200">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {phases.map((p, i) => (
              <div
                key={p.key}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-purple-400">
                      Phase {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="text-xl font-bold text-white">{p.title}</h2>
                    <p className="text-sm text-slate-400 mt-1">{p.timeframe}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Decision signal</p>
                    <p className="text-sm text-emerald-400">{p.signal}</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
                  <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4">
                    <p className="text-xs font-semibold text-blue-400 mb-1">Outcome</p>
                    <p className="text-slate-200">{p.outcome}</p>
                  </div>
                  <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4">
                    <p className="text-xs font-semibold text-white mb-1">Proof</p>
                    <p className="text-slate-300">{p.proof}</p>
                  </div>
                  <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4">
                    <p className="text-xs font-semibold text-purple-400 mb-1">Signal</p>
                    <p className="text-slate-200">{p.signal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Pick your next act</h2>
            <p className="text-slate-300 mb-5">Each step below starts a real conversation or calculation.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {actions.map((a) => (
                <Link
                  key={a.label}
                  href={a.href}
                  className={`rounded-xl bg-gradient-to-r ${a.accent} text-white px-5 py-3 font-semibold text-center`}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/60 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>
            <p className="text-white font-semibold">Zion Tech Group</p>
            <p>Enterprise AI services, IT solutions, and Micro SAAS platforms.</p>
          </div>
          <div className="flex items-center gap-4">
            {actions.map((a) => (
              <Link key={a.label} href={a.href} className="hover:text-white transition-colors">
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
