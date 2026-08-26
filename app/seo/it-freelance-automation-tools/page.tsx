export const metadata = {
  title: 'IT Freelance Automation Tools | Zion Tech Group',
  description: 'Zion Tech Group provides freelance-friendly IT automation tools, script starters, monitoring templates, and deployment patterns for faster client delivery.',

};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Freelance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">IT Freelance Automation Tools</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">Freelance-ready IT automation tools and templates to deliver client work faster with repeatable runbooks, monitors, and deployment checks.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition">Get Free Tools</a>
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition">Contact Us</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Built for freelance delivery</h2>
          <p className="text-slate-400 max-w-2xl mb-6">Use proven templates and lighthouse-backed checks to reduce manual setup and increase billable output.</p>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-300 list-disc pl-6">
            <li>Deployment and monitoring starters</li>
            <li>Client onboarding checklists</li>
            <li>Incident response templates</li>
            <li>Performance and security baselines</li>
          </ul>
          <div className="mt-10">
            <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Book a Meeting</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Free services and tools</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">Find more free IT and AI services and tools on https://ziontechgroup.com.</p>
          <a href="https://ziontechgroup.com" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Visit ziontechgroup.com</a>
        </div>
      </section>
    </main>
  );
}
