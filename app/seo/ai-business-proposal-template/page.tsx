
export const metadata = {
  title: 'AI Business Proposal Template | Zion Tech Group',
  description: 'Use this AI business proposal template from Zion Tech Group to scope solutions, align stakeholders, model ROI, and accelerate client approvals.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Business Proposal Template</h1>
              <p className="text-slate-400 mb-8">A structured proposal template to shorten selling cycles and improve client alignment.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Scope</div><div className="text-xs text-slate-400">Problem, constraints, deliverables, timeline.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">ROI Model</div><div className="text-xs text-slate-400">Cost, benefit, payback, and risk model.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Approval Path</div><div className="text-xs text-slate-400">Decision maker map and next-step plan.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Request Editable Template →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
