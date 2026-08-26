
export const metadata = {
  title: 'AI Free Platform Trial | Zion Tech Group',
  description: 'Start an AI platform free trial from Zion Tech Group with guided onboarding, sample automations, and expert support for your first deployment.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Platform Free Trial</h1>
              <p className="text-slate-400 mb-8">Experience production-style onboarding, templates, and support without commitment.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Guided Setup</div><div className="text-xs text-slate-400">Credentials, access, and first automation walkthrough.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Templates</div><div className="text-xs text-slate-400">Sample workflows and prompt libraries.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Support</div><div className="text-xs text-slate-400">Office hours and troubleshooting guidance.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Start Free Trial →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}