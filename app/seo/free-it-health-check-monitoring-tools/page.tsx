
export const metadata = {
  title: 'Free IT Health Check and Monitoring Tools | Zion Tech Group',
  description: 'Download free IT health check and monitoring tools from Zion Tech Group: server checks, uptime helpers, threshold alerts, and ops-ready reports.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Free IT Health Check Tools</h1>
              <p className="text-slate-400 mb-8">Lightweight health checks and monitoring helpers for ops, SRE, and startup platforms.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Server Checks</div><div className="text-xs text-slate-400">CPU, memory, disk, and network diagnostics.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Uptime Helper</div><div className="text-xs text-slate-400">Heartbeat pattern and probe stubs.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Threshold Alerts</div><div className="text-xs text-slate-400">Sane defaults for production and staging.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Get Monitoring Toolkit →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}