export const metadata = {
  title: 'Data Pipeline Automation Starter Kit | Zion Tech Group',
  description: 'Data pipeline automation starter kit with templates, integrations, validation steps, free deployment scripts, and AI/ML readiness checks.',

};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Starter Kit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">Data Pipeline Automation Starter Kit</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">Data pipeline automation starter kit with templates, integrations, validation steps, free deployment scripts, and AI/ML readiness checks.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition">Visit ziontechgroup.com</a>
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition">Contact Us</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">How we can help</h2>
          <p className="text-slate-400 max-w-2xl mb-6">An implementation kit for validation, ingestion, orchestration, and monitoring of production-ready data pipelines.</p>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-300 list-disc pl-6">
            <li>Pipeline templates and orchestration builders</li>
            <li>Schema validation and testing automation</li>
            <li>Monitoring and alerting for data quality</li>
            <li>AI/ML readiness and deployment scripting</li>
          </ul>
          <div className="mt-10">
            <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Book a Meeting</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to see more?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">Explore our services, free tools, and AI resources at https://ziontechgroup.com</p>
          <a href="https://ziontechgroup.com" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Visit ziontechgroup.com</a>
        </div>
      </section>
    </main>
  );
}
