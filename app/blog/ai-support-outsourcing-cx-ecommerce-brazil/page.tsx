import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
export const metadata = {
  title: 'AI Support Outsourcing and CX for Ecommerce in Brazil',
  description: 'AI-assisted CX, ticketing triage, returns handling, and agent assist for Brazilian ecommerce support teams.',
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
          <span className="text-slate-300">AI Support Outsourcing and CX for Ecommerce Brazil</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Support Outsourcing and CX for Ecommerce in Brazil</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Tiered support flows, AI triage, knowledge retrieval, and human handoff for conversion and retention.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Support automation increases resolution speed and protects revenue from returns and churn.</p><ul><li>Ticket triage, agent assist, and after-hours coverage</li><li>See <a href="https://ziontechgroup.com">ziontechgroup.com</a> for CX enablement</li></ul><p>Review <a href="/services/ai-customer-support-pro">AI support automation</a>, then <a href="/contact/">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
