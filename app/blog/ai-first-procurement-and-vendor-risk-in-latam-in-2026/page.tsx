import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'AI-First Procurement and Vendor Risk in LATAM in 2026',
  description: 'Use AI-assisted procurement and vendor risk management to improve sourcing decisions and reduce exposure.',
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
          <span className="text-slate-300">AI-First Procurement and Vendor Risk</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI-First Procurement and Vendor Risk in LATAM in 2026</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Practical AI models for spend analysis, risk scoring, and vendor governance.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Procurement AI patterns that improve sourcing discipline and visibility.</p><ul><li>Spend analysis and risk scoring</li><li>Vendor governance and exception tracking</li><li>Proof-of-concept at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/services/ai-consulting-latam-partnerships">partnership services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
