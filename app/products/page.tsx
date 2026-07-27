import Link from 'next/link';

export const metadata = {
  title: 'Products | Zion Tech Group',
  description: 'AI services and IT solutions designed to deliver measurable growth, automation, and security for modern teams.',
  alternates: { canonical: '/products/' },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Products</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Zion Tech Group products span AI support automation, observability, compliance, channel partner tooling, and operational intelligence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link href="/contact/" className="btn-primary text-lg">Request Demo</Link>
            <Link href="/services/" className="btn-secondary text-lg">Explore Services</Link>
            <Link href="/free-ai-itools/" className="btn-secondary text-lg">Free AI/IT Tools</Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white mb-2">AI Services</h2>
            <p className="text-slate-300 text-sm">Revenue intelligence, customer journey orchestration, automation, and security solutions.</p>
            <Link href="/services/?category=ai" className="text-emerald-300 text-sm mt-3 inline-block">Browse AI services →</Link>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white mb-2">IT Solutions</h2>
            <p className="text-slate-300 text-sm">Cloud migration, DevOps automation, governance, and managed support plans.</p>
            <Link href="/services/?category=cloud" className="text-emerald-300 text-sm mt-3 inline-block">Browse cloud services →</Link>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white mb-2">Micro SAAS Platforms</h2>
            <p className="text-slate-300 text-sm">Focused tools for outreach, monitoring, and operational efficiency.</p>
            <Link href="/tools/" className="text-emerald-300 text-sm mt-3 inline-block">Use free tools →</Link>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white mb-2">Developer Tools</h2>
            <p className="text-slate-300 text-sm">Free AI/IT tools and resources available on the platform.</p>
            <Link href="/tools/" className="text-emerald-300 text-sm mt-3 inline-block">Browse tools →</Link>
          </div>
        </section>

        <section className="cta-section text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Need a custom solution?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Tell us your goal and we will return a concrete execution plan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary text-lg">Contact Us</Link>
            <Link href="/free-consultation/" className="btn-secondary text-lg">Book Consultation</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
