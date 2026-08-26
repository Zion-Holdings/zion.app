
export const metadata = {
  title: 'Automation',
  description: 'Intelligent process automation services from Zion Tech Group. RPA, workflow automation, AI-powered business processes.',
};

export default function AutomationPage() {
  const services = [
    { icon: '🤖', name: 'Robotic Process Automation', href: '/robotic-process-automation', desc: 'Automate repetitive tasks with intelligent bots that learn and adapt.' },
    { icon: '⚡', name: 'Workflow Automation', href: '/workflow-automation', desc: 'Design and deploy automated workflows across your organization.' },
    { icon: '🧠', name: 'AI-Powered Automation', href: '/ai-workflow-automation', desc: 'Intelligent automation that makes decisions based on context and data.' },
    { icon: '📧', name: 'Email Automation', href: '/email-automation', desc: 'Automated email campaigns, sequences, and intelligent responses.' },
    { icon: '🔗', name: 'System Integration', href: '/system-integration', desc: 'Connect your systems with API integrations and data pipelines.' },
    { icon: '📊', name: 'Process Mining', href: '/process-automation', desc: 'Discover automation opportunities through data-driven process analysis.' },
  ];
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Automation</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Intelligent Automation</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Transform your business with AI-powered automation. Reduce costs, eliminate errors, and scale operations.</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <a key={i} href={s.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
