import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'AI-First Low-Code Workflow Automation for Brazilian IT in 2026',
  description: 'Use AI-assisted low-code/no-code workflow automation to improve IT delivery speed and reduce backlogs.',
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
          <span className="text-slate-300">AI-First Low-Code Workflow Automation</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI-First Low-Code Workflow Automation for Brazilian IT in 2026</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Practical automation, governance, and integration patterns for modern IT operations.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Low-code workflow patterns that expand IT throughput safely.</p><ul><li>Approval, integration, and event-driven automation</li><li>Governance, auditability, and reuse</li><li>Free readiness tools at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="https://ziontechgroup.com/services/managed-observability-247">observability services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
