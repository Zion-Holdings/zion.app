
export const metadata = {
  title: 'Revenue Operations AI Tools | Zion Tech Group',
  description: 'Revenue operations AI tools from Zion Tech Group: pipeline hygiene, forecasting, lead scoring, and GTM automation helpers.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Revenue Operations AI Tools</h1>
              <p className="text-slate-400 mb-8">AI tools to clean pipeline data, improve forecasts, and shorten revenue cycles.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Pipeline Hygiene</div><div className="text-xs text-slate-400">Stale deals, stage drift, and duplicate handling.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Forecast Assist</div><div className="text-xs text-slate-400">Probability weighting and coverage checks.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">GTM Automation</div><div className="text-xs text-slate-400">Sequences, routing, and attribution helpers.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Request RevOps Tools →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
