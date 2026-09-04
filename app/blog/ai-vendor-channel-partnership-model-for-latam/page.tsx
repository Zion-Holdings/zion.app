import Link from 'next/link';

export const metadata = {
  title: 'AI Vendor Channel Partnership Model for LATAM',
  description: 'Channel partnership models for LATAM vendors, service providers, and resellers.',
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
          <span className="text-slate-300">AI Vendor Channel Partnership Model</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Vendor Channel Partnership Model for LATAM</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Co-sell, enablement, local delivery, and margin models for LATAM partners.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Channel partnership models for LATAM vendors, service providers, and resellers.</p><ul><li>Co-sell and enablement frameworks</li><li>Local delivery and margin models</li><li>Partnership inquiry at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/services">AI services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
