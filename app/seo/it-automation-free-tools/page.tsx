
export const metadata = {
  title: 'IT Automation Free Tools and Scripts | Zion Tech Group',
  description: 'Zion Tech Group IT automation free tools and scripts: onboarding, patching, log rotation, ticket routing, and deployment shortcuts.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Automation Free Tools</h1>
              <p className="text-slate-400 mb-8">Reusable scripts and starter patterns for IT teams automating routine work.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Onboarding</div><div className="text-xs text-slate-400">Account, permissions, and access checklist.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Log Rotation</div><div className="text-xs text-slate-400">Retention, archiving, and cleanup scripts.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Ticket Routing</div><div className="text-xs text-slate-400">Classification, queue, and escalation rules.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Request Starter Kit →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}