import { Metadata } from 'next';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';
import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata = {
  title: 'Why Zion Tech Group | AI & IT Services',
  description:
    'Zion Tech Group delivers measurable AI and IT outcomes: faster delivery, safer operations, lower cost, and higher revenue.',
  openGraph: {
    title: 'Why Zion Tech Group',
    description: 'Outcomes-first AI/IT delivery: speed, safety, cost, revenue.',
    url: 'https://ziontechgroup.com/why-us',
    type: 'website',
  },
  alternates: { canonical: 'https://ziontechgroup.com/why-us' },
};

export default function WhyUsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-24 space-y-10">
      <ArticleStructuredData
        title={metadata.title as string}
        description={metadata.description as string}
        canonical={metadata.alternates?.canonical as string}
        publishedAt="2026-07-27"
        updatedAt="2026-07-27"
      />
      <SiteBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why Zion Tech Group', href: '/why-us' },
        ]}
      />

      <header className="text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-900/20 px-3 py-1 text-xs text-emerald-300 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Outcomes-first delivery
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Zion Tech Group
          </span>
        </h1>
        <p className="text-slate-300 text-xl leading-relaxed mb-8">
          We build AI and IT systems that deliver measurable business outcomes:
          faster delivery, safer operations, lower cost, and higher revenue.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="tel:+13024640950" className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 font-semibold">Call Now</a>
          <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-white/40 transition-colors">Book Consultation</a>
          <a href="/services/" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-white/40 transition-colors">View Services</a>
        </div>
      </header>

      <section className="mt-24 grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="text-sm text-emerald-300 font-medium mb-2">Speed</div>
          <div className="text-slate-300 text-sm">Pilots in days, not quarters.</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="text-sm text-amber-300 font-medium mb-2">Safety</div>
          <div className="text-slate-300 text-sm">Governance, access, and incident readiness built in.</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="text-sm text-cyan-300 font-medium mb-2">Cost</div>
          <div className="text-slate-300 text-sm">Cloud, process, and automation savings with measurable ROI.</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="text-sm text-pink-300 font-medium mb-2">Revenue</div>
          <div className="text-slate-300 text-sm">Support, CX, and data systems that grow customer value.</div>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">What clients actually get</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Executable roadmap</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Clear deliverables, acceptance criteria, milestones, and optional fixed-price engagement.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Production-ready systems</h3>
            <p className="text-slate-300 text-sm leading-relaxed">AI implementations with monitoring, access control, and handoff docs, not just demos.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Measurable progress</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Weekly outcome updates, adoption signals, and cost/revenue impact when relevant.</p>
          </div>
        </div>
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Start with one short call</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">We prepare before every conversation so the time is useful. Pick a slot that fits.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 font-semibold">Schedule Now</a>
          <a href="tel:+13024640950" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-white/40 transition-colors">Call Now</a>
          <a href="/contact/" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-white/40 transition-colors">Contact Us</a>
        </div>
      </section>

      <footer className="mt-28 border-t border-slate-800 pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
        <div>
          <a className="font-semibold text-white" href="/">Zion Tech Group</a>
          <span className="ml-2 text-slate-500">AI & IT services for modern teams</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book a consultation</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          <a href="/services" className="hover:text-white transition-colors">Services</a>
        </div>
      </footer>
    </main>
  );
}
