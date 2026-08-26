import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'AI Edge, CDN, and Connectivity Services | Zion Tech Group',
  description: 'Edge inference, AI-first CDN, SASE, and secure connectivity services for LATAM enterprises.',
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
          <span className="text-slate-300">AI Edge, CDN, and Connectivity Services</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Edge, CDN, and Connectivity Services</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Reduce latency, improve availability, and secure distributed AI delivery.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Connectivity and edge services for modern AI platforms.</p><ul><li>Latency-aware routing and caching</li><li>SASE policies and private connectivity options</li><li>Request a review at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/blog/ai-first-cdn-and-edge-computing-for-brazilian-it-in-2026">edge guide</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary">Contact us</Link>
          <Link href="https://calendly.com/kleber-ziontechgroup" className="btn-secondary">Schedule a meeting</Link>
        </div>
      </div>
    </main>
  );
}
