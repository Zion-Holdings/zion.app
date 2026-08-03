import Link from 'next/link';

export const metadata = {
  title: 'AI Platform Engineering 2026 Services Guide',
  description: 'A service guide to building, operating, and scaling internal AI platforms safely in 2026.',
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
          <span className="text-slate-300">AI Platform Engineering 2026 Services Guide</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Platform Engineering 2026 Services Guide</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Platform contracts, guardrails, developer experience, and reuse patterns.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>A service guide to AI platform engineering in 2026: build, operate, and scale internal AI platforms safely.</p><ul><li>Platform contracts and guardrails</li><li>Developer experience and reuse</li><li>Start from <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>Explore <a href="/services">AI services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
