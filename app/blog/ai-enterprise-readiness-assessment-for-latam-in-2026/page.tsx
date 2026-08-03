import Link from 'next/link';

export const metadata = {
  title: 'AI Enterprise Readiness Assessment for LATAM in 2026',
  description: 'An enterprise readiness checklist for evaluating execution readiness and partnership fit in LATAM.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <nav className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog/" className="hover:text-purple-400 transition">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">AI Enterprise Readiness Assessment</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Enterprise Readiness Assessment for LATAM in 2026</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Business case, execution model, data maturity, and partnership options for LATAM.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Use this enterprise readiness assessment to evaluate execution readiness, data maturity, and partnership fit for LATAM companies.</p><ul><li>Business case and execution model</li><li>Data maturity and governance</li><li>Cost control and partnership options</li></ul><p>Visit <a href="/services">AI services</a> to review delivery models, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
