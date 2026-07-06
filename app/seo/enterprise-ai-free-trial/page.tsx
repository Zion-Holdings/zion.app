export const metadata = {
  title: 'AI Free Trial for Enterprise | Zion Tech Group',
  description: 'Start an AI free trial for enterprise with guided onboarding, sample automations, security guardrails, and expert support.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Enterprise AI Free Trial</h1>
              <p className="text-slate-400 mb-8">Evaluate enterprise AI with a guided free trial: secure access, sample workflows, and hands-on support.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Guided Onboarding</div><div className="text-xs text-slate-400">Credentials, roles, and first automation quickstart.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Business Scenarios</div><div className="text-xs text-slate-400">Sales, support, operations, and security templates.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Expert Support</div><div className="text-xs text-slate-400">Office hours and rollout guidance included.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Start Enterprise Trial →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
