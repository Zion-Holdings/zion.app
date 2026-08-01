import Link from 'next/link';

export const metadata = {
  title: 'Free AI & IT Tools | Zion Tech Group',
  description: 'Free AI and IT utilities from Zion Tech Group: service router, ROI calculator, port scanner, SSL checker, and more.',
  alternates: { canonical: '/free-ai-it-tools/' },
};

export default function FreeAiItToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Free AI & IT Tools</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Practical AI and IT utilities — no sign-up required, everything runs in your browser.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link href="/tools/ai-service-router/" className="btn-primary text-lg">Open AI Service Router</Link>
            <Link href="/services/" className="btn-secondary text-lg">Browse Services</Link>
          </div>
        </header>

        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'AI Service Router', path: '/tools/ai-service-router/', desc: 'Type your need and get ranked service recommendations instantly.' },
              { name: 'ROI Calculator', path: '/tools/roi-calculator/', desc: 'Estimate AI, automation, cloud, data, IT, or security ROI in seconds.' },
              { name: 'Port Scanner', path: '/tools/port-scanner/', desc: 'Scan a hostname or IP for open, filtered, and closed ports.' },
              { name: 'SSL Checker', path: '/tools/ssl-checker/', desc: 'Check certificate validity, issuer, expiry, and chain depth.' },
            ].map((tool) => (
              <Link key={tool.name} href={tool.path} className="block rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 hover:border-purple-500/40 p-5 transition-all">
                <h3 className="text-white font-semibold mb-2">{tool.name}</h3>
                <p className="text-slate-400 text-sm">{tool.desc}</p>
                <div className="mt-3 text-xs text-purple-400 font-medium">Open tool →</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a custom AI or IT solution?</h2>
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
