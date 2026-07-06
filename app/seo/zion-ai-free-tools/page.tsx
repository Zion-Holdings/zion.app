export const metadata = {
  title: 'Zion AI Free Services and Tools | Zion Tech Group',
  description: 'Zion Tech Group offers free AI tools, templates, and services to help teams evaluate AI quickly and without cost.',
  alternates: { canonical: '/zion-ai-free-tools' }
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Free Resources</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">Zion AI Free Services and Tools</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">Zion Tech Group offers free AI tools, templates, and services to help teams evaluate AI quickly and without cost.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition">Visit ziontechgroup.com</a>
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition">Contact Us</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">What&apos;s included</h2>
          <p className="text-slate-400 max-w-2xl mb-6">Practical, ready-to-use resources for AI and IT teams who want to move fast without big upfront investment.</p>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-300 list-disc pl-6">
            <li>Ready-to-use templates and checklists</li>
            <li>No-Code/low-code automation starters</li>
            <li>Evaluation environments and sandboxes</li>
            <li>Reporting and pricing samples</li>
          </ul>
          <div className="mt-10">
            <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Book a Meeting</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want personalized help?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">Our team can help you pick the right AI and IT services. Reach out at kleber@ziontechgroup.com or +1 302 464 0950.</p>
          <a href="https://ziontechgroup.com" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Visit ziontechgroup.com</a>
        </div>
      </section>
    </main>
  );
}
