
export const metadata = {
  title: 'AI PoC to Production Playbook | Zion Tech Group',
  description: 'Move from proof-of-concept to production AI with this playbook covering architecture review, evals, rollout, monitoring, and organizational adoption.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI PoC to Production Playbook</h1>
              <p className="text-slate-400 mb-8">A practical playbook for moving AI from pilot to production with lower risk and measurable value.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Architecture Review</div><div className="text-xs text-slate-400">Production readiness, reliability, and data contracts.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Evaluation Layer</div><div className="text-xs text-slate-400">Model evals, prompt tests, and regression checks.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Rollout & Operate</div><div className="text-xs text-slate-400">Observability, feedback loops, and incident response.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Get the Full Playbook →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}