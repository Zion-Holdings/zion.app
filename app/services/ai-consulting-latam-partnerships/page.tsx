import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'AI Consulting for LATAM Partners and Vendors | Zion Tech Group',
  description: 'AI consulting, co-sell enablement, and channel partnership models for LATAM partners and vendors.',
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
          <span className="text-slate-300">AI Consulting for LATAM Partners and Vendors</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Consulting for LATAM Partners and Vendors</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Expand locally with co-sell models, enablement, and delivery support.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Channel and partnership models for AI service growth.</p><ul><li>Co-sell and onboarding playbooks</li><li>Local support, governance, and observability</li><li>Partnership inquiry at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/blog/ai-vendor-channel-partnership-model-for-latam">partnership guide</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary">Contact us</Link>
          <Link href="https://calendly.com/kleber-ziontechgroup" className="btn-secondary">Schedule a meeting</Link>
        </div>
      </div>
    </main>
  );
}
