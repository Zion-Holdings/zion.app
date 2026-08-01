import Link from 'next/link';

export const metadata = {
  title: 'AI Implementation | Zion Tech Group',
  description: 'End-to-end AI implementation from Zion Tech Group: use-case selection, model integration, deployment, and support for measurable outcomes.',
  alternates: { canonical: '/ai-implementation/' },
};

export default function AiImplementationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AI Implementation</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            From pilot to production — we implement AI solutions that integrate with your stack and deliver measurable outcomes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link href="/contact/" className="btn-primary text-lg">Start Your AI Project</Link>
            <Link href="/ai-support-for-startups/" className="btn-secondary text-lg">Startup Support</Link>
            <Link href="/services/" className="btn-secondary text-lg">Our Services</Link>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">How We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Use-case selection</h3>
              <p className="text-slate-400 text-sm">We identify high-ROI AI opportunities aligned with your business goals.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Model integration</h3>
              <p className="text-slate-400 text-sm">We connect AI models to your data, workflows, and existing tools.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Deployment & support</h3>
              <p className="text-slate-400 text-sm">We ship, monitor, and optimize so your AI keeps improving in production.</p>
            </div>
          </div>
        </section>

        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to implement AI?</h2>
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
