import Link from 'next/link';

export const metadata = {
  title: 'AI & IT Consulting | Zion Tech Group',
  description: 'Practical AI and IT consulting from Zion Tech Group: roadmap, implementation, and support for startups, SMBs, and enterprise teams.',
  alternates: { canonical: '/ai-it-consulting/' },
};

export default function AiItConsultingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AI & IT Consulting</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Practical guidance for companies that want measurable AI and IT outcomes — not slide decks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link href="/contact/" className="btn-primary text-lg">Book a Consultation</Link>
            <Link href="/services/" className="btn-secondary text-lg">Our Services</Link>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Clear roadmap</h3>
              <p className="text-slate-400 text-sm">Prioritized AI and IT initiatives aligned to revenue, cost, and risk.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Implementation support</h3>
              <p className="text-slate-400 text-sm">Architecture, vendor selection, integration, and change management.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Ongoing optimization</h3>
              <p className="text-slate-400 text-sm">Monitoring, tuning, and training so systems keep improving.</p>
            </div>
          </div>
        </section>

        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to move from plan to production?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Tell us your goals and constraints. We’ll propose a practical path with clear milestones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary text-lg">Talk to an Expert</Link>
            <a href="tel:+130****0950" className="btn-secondary text-lg">Call +1 302 464 0950</a>
          </div>
        </section>
      </div>
    </main>
  );
}
