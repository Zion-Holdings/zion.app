import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'AI-First Customer Success and Renewal Intelligence in 2026',
  description: 'Use AI-assisted customer success and renewal intelligence to reduce churn and expand accounts.',
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
          <span className="text-slate-300">AI-First Customer Success and Renewal Intelligence</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI-First Customer Success and Renewal Intelligence in 2026</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Practical AI models for health scoring, renewal risk, and expansion opportunity detection.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Customer-success AI patterns that improve retention and account growth.</p><ul><li>Health scoring and renewal risk</li><li>Expansion opportunity detection</li><li>Request a review at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/services">AI services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
