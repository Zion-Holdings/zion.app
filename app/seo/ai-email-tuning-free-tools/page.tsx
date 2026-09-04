
export const metadata = {
  title: 'AI Email Tuning Free Tools | Zion Tech Group',
  description: 'Free AI email tuning tools from Zion Tech Group: subject-line scoring, readability checks, spam-score estimates, and send-time suggestions.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Email Tuning Free Tools</h1>
              <p className="text-slate-400 mb-8">Improve reply quality, deliverability, and agent email performance with lightweight tuning utilities.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Subject Scorer</div><div className="text-xs text-slate-400">Length, keywords, and sendability estimate.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Readability Check</div><div className="text-xs text-slate-400">Grade, tone, and clarity recommendations.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Send-Time Helper</div><div className="text-xs text-slate-400">Time-window suggestions by recipient region.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Request Email Tooling →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}