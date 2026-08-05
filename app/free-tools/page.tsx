import Link from 'next/link';

export const metadata = {
  title: 'Free Tools | Zion Tech Group',
  description: 'Free IT assessment tools, checklists, and automation utilities.',
  alternates: { canonical: '/free-tools/' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Tools</h1>
        <p className="text-slate-400 text-lg max-w-2xl">Free IT assessment tools, checklists, and automation utilities.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Link href="/contact" className="glass-card group hover:border-purple-500/40 transition-colors block">
            <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors leading-snug">Cloud Cost Estimator</h3>
            <span className="text-purple-400 text-sm inline-flex items-center gap-1">Get access <span aria-hidden="true">→</span></span>
          </Link>
          <Link href="/contact" className="glass-card group hover:border-purple-500/40 transition-colors block">
            <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors leading-snug">Security Posture Check</h3>
            <span className="text-purple-400 text-sm inline-flex items-center gap-1">Get access <span aria-hidden="true">→</span></span>
          </Link>
          <Link href="/contact" className="glass-card group hover:border-purple-500/40 transition-colors block">
            <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors leading-snug">MSP Readiness Scorecard</h3>
            <span className="text-purple-400 text-sm inline-flex items-center gap-1">Get access <span aria-hidden="true">→</span></span>
          </Link>
        </div>
      </div>
    </main>
  );
}
