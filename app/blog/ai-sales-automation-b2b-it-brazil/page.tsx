import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
export const metadata = {
  title: 'AI Sales Automation for B2B IT Companies in Brazil',
  description: 'Use AI to qualify leads, automate follow-up, and shorten B2B IT sales cycles in Brazil.',
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
          <span className="text-slate-300">AI Sales Automation for B2B IT Brazil</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Sales Automation for B2B IT Companies in Brazil</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Practical workflows for lead scoring, email sequencing, pipeline forecasting, and proposal acceleration using AI.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>AI improves qualification speed and deal coverage without replacing sales judgment.</p><ul><li>Lead scoring, intent signals, and follow-up cadence</li><li>Forecasting, pricing guidance, and proposal automation</li><li>Request a review at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/services/ai-consulting">AI consulting</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
