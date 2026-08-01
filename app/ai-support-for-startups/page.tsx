import Link from 'next/link';

export const metadata = {
  title: 'AI Support for Startups | Zion Tech Group',
  description: 'Practical AI support for startups: implementation, automation, and managed services designed for early-stage teams and limited budgets.',
  alternates: { canonical: '/ai-support-for-startups/' },
};

export default function AiSupportForStartupsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AI Support for Startups</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Practical AI implementation, automation, and support designed for early-stage teams and limited budgets.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link href="/contact/" className="btn-primary text-lg">Request Startup Support</Link>
            <Link href="/services/" className="btn-secondary text-lg">See Services</Link>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">Why Startups Choose Zion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Fast setup</h3>
              <p className="text-slate-400 text-sm">We prioritize quick wins and reusable components so you can ship faster.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Budget-friendly</h3>
              <p className="text-slate-400 text-sm">Modular engagements and retainer options that scale with your growth.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Expert guidance</h3>
              <p className="text-slate-400 text-sm">Senior engineers who understand startup constraints and speed requirements.</p>
            </div>
          </div>
        </section>

        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need an AI partner that moves at startup speed?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Tell us your stage, stack, and goals. We’ll propose a lightweight plan with clear milestones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary text-lg">Talk to Us</Link>
            <a href="tel:+130****0950" className="btn-secondary text-lg">Call +1 302 464 0950</a>
          </div>
        </section>
      </div>
    </main>
  );
}
