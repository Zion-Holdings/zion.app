import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'AI Observability and AIOps | Zion Tech Group',
  description: 'AI observability, AIOps, incident management, and platform engineering patterns for LATAM teams.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <nav className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services/" className="hover:text-purple-400 transition">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">AI Observability and AIOps</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Observability and AIOps</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Reduce incidents, improve MTTR, and operate smaller teams with AI-assisted observability and platform guardrails.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>AI-assisted monitoring and platform patterns for reliable service delivery.</p><ul><li>Intelligent alerting and triage</li><li>Platform guardrails and reuse</li><li>Review delivery models at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/blog/ai-observability-aiops-platform-engineering-for-latam-in-2026">AI observability guide</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary">Contact us</Link>
          <Link href="https://calendly.com/kleber-ziontechgroup" className="btn-secondary">Schedule a meeting</Link>
        </div>
      </div>
    </main>
  );
}
