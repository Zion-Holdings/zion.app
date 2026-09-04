
export const metadata = {
  title: 'AI Copilot Enterprise IT Free Resources | Zion Tech Group',
  description: 'Free enterprise IT copilot resources from Zion Tech Group: prompt packs, guardrails, runbooks, onboarding kit, and evaluation templates.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise IT Copilot Free Resources</h1>
              <p className="text-slate-400 mb-8">Prompt packs, guardrails, runbooks, and onboarding templates to ship safer AI copilots faster.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Prompt Pack</div><div className="text-xs text-slate-400">Structured prompts for ops, onboarding, and support workflows.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Guardrails</div><div className="text-xs text-slate-400">Safety checks, approvals, and policy templates.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Evaluation Kit</div><div className="text-xs text-slate-400">Accuracy, tone, and latency checklists.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Get the Resource Kit →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}