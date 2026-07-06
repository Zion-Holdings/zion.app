export const metadata = {
  title: 'AI Services Catalog | Zion Tech Group',
  description: 'Browse the Zion Tech Group AI services catalog: automation, copilots, document intelligence, sales AI, security, monitoring, and free trial options.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">AI Services Catalog</h1>
              <p className="text-slate-400 mb-10">
                Explore our AI and IT services designed to reduce manual work, improve decision speed, and generate measurable business outcomes.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a className="glass-card group" href="/ai-copilot-for-enterprise-it/"><div className="font-semibold text-white">IT Copilot</div><div className="text-xs text-slate-400">Ticket triage, runbooks, onboarding</div></a>
                <a className="glass-card group" href="/ai-document-automation-enterprise/"><div className="font-semibold text-white">Document AI</div><div className="text-xs text-slate-400">Extraction, validation, compliance</div></a>
                <a className="glass-card group" href="/ai-sales-workflow-automation-templates/"><div className="font-semibold text-white">Sales AI</div><div className="text-xs text-slate-400">Lead routing, proposals, follow-up</div></a>
                <a className="glass-card group" href="/ai-email-tuning-free-tools/"><div className="font-semibold text-white">Email AI</div><div className="text-xs text-slate-400">Subject scoring, readability, timing</div></a>
                <a className="glass-card group" href="/ai-security-automation-platform-free-trial/"><div className="font-semibold text-white">Security AI</div><div className="text-xs text-slate-400">Alert triage, playbooks, response</div></a>
                <a className="glass-card group" href="/ai-ops-assistant-free-trial/"><div className="font-semibold text-white">Ops AI</div><div className="text-xs text-slate-400">Incident summaries, SLA tracking</div></a>
                <a className="glass-card group" href="/enterprise-ai-poc-playbook/"><div className="font-semibold text-white">Enterprise PoC</div><div className="text-xs text-slate-400">Pilot to production roadmap</div></a>
                <a className="glass-card group" href="/it-automation-starter-kit/"><div className="font-semibold text-white">IT Automation</div><div className="text-xs text-slate-400">Scripts, runbooks, checklists</div></a>
                <a className="glass-card group" href="/free-it-health-check-monitoring-tools/"><div className="font-semibold text-white">Monitoring</div><div className="text-xs text-slate-400">Health checks, uptime helpers, alerts</div></a>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a className="btn-primary" href="/contact/">Request a Consultation →</a>
                <a className="btn-secondary" href="/ai-free-services-and-tools/">Explore Free Tools →</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
