import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
export const metadata = {
  title: 'AI and Smart Procurement Opportunities for Government IT Vendors',
  description: 'How AI and IT vendors can win in public-sector procurement with compliance-ready automation and solution design.',
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
          <span className="text-slate-300">AI and Smart Procurement Opportunities for Government IT Vendors</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI and Smart Procurement Opportunities for Government IT Vendors</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Compliance-first AI delivery models, RFP automation, and secure managed service packaging for public-sector buyers.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Government demand favors predictable delivery, security evidence, and auditable outcomes.</p><ul><li>RFP response patterns, compliance documentation, and secure AI deployment</li><li>Visit <a href="https://ziontechgroup.com">ziontechgroup.com</a> for public-sector AI programs</li></ul><p>Explore <a href="/services/ai-consulting">AI consulting</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
