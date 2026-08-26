import Link from 'next/link';

export const metadata = {
  title: 'AI Outsourcing vs. In-House IT Teams for LATAM in 2026',
  description: 'Comparing outsourcing versus in-house IT execution for LATAM companies.',
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
          <span className="text-slate-300">AI Outsourcing vs. In-House IT Teams</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Outsourcing vs. In-House IT Teams for LATAM in 2026</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Practical execution models, local AI/IT delivery, governance, cost control, and observability.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Comparing outsourcing versus in-house IT execution for LATAM companies in 2026.</p><ul><li>Practical execution models</li><li>Local AI/IT delivery and support</li><li>Governance, cost control, and observability</li></ul><p>Explore <a href="/services">AI services</a>, then <a href="/contact">contact us</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
