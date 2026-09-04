
export const metadata = {
  title: 'AI Sales Workflow Automation Templates | Zion Tech Group',
  description: 'Download AI sales workflow automation templates from Zion Tech Group: lead qualification, follow-up sequences, proposals, and pipeline review cadences.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Sales Workflow Templates</h1>
              <p className="text-slate-400 mb-8">Production-ready sales automation templates to qualify leads, nurture prospects, and shorten close cycles.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Lead Qualification</div><div className="text-xs text-slate-400">Scoring, routing, and tiering automation.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Follow-Up Sequences</div><div className="text-xs text-slate-400">Templates, timing rules, and personalization.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Proposal Generation</div><div className="text-xs text-slate-400">Scope, options, pricing, and e-sign flow.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Request Custom Templates →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}