
export const metadata = {
  title: 'IT Cost Optimization AI Tools | Zion Tech Group',
  description: 'Zion Tech Group IT cost optimization AI tools: spend visibility, waste detection, rightsizing suggestions, and renewal forecasting.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Cost Optimization AI Tools</h1>
              <p className="text-slate-400 mb-8">AI-assisted tools to lower IT spend, eliminate waste, and improve budget confidence.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Spend Visibility</div><div className="text-xs text-slate-400">Clean cost data by service and team.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Waste Detection</div><div className="text-xs text-slate-400">Idle resources, orphaned assets, unused licenses.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Renewal Forecast</div><div className="text-xs text-slate-400">Upcoming renewals and negotiation points.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Request Cost Optimization Review →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
