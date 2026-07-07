import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'AI Data, Lakehouse, and Pipeline Services | Zion Tech Group',
  description: 'AI-native data pipeline, lakehouse, and governance services for analytics and AI-ready platforms.',
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
          <span className="text-slate-300">AI Data, Lakehouse, and Pipeline Services</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Data, Lakehouse, and Pipeline Services</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Build scalable ingestion, semantic layers, and governed data access for AI workloads.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Data foundation services for analytics and AI workloads.</p><ul><li>Streaming ingestion pipelines</li><li>Semantic layer and governed access</li><li>Free readiness tools at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/blog/ai-data-pipeline-lakehouse-platform-engineering-in-2026">lakehouse guide</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary">Contact us</Link>
          <Link href="https://calendly.com/kleber-ziontechgroup" className="btn-secondary">Schedule a meeting</Link>
        </div>
      </div>
    </main>
  );
}
