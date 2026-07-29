import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partners | Zion Tech Group',
  description:
    'Partner with Zion Tech Group for co-selling, integrations, managed AI delivery, and joint go-to-market programs for client outcomes.',
  openGraph: {
    title: 'Partners | Zion Tech Group',
    description:
      'Partner programs, integrations, and joint GTM for AI and IT services providers.',
    url: 'https://ziontechgroup.com/partners/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/partners/' },
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <nav aria-label="Breadcrumb" className="hidden">
          <span>Home</span>
          <span>Partners</span>
        </nav>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs">🤝</span>
            <span className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Partner Program</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Partners</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Co-selling, integration, and delivery partnerships for technology and services providers.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a href="/contact/" className="btn-primary text-lg px-8 py-3">Become a partner</a>
            <a href="/proposals/" className="btn-secondary text-lg px-8 py-3">Submit a proposal</a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Integrators</h2>
            <p className="text-slate-300 leading-relaxed">Connect AI and IT services into your platform or delivery practice with clear onboarding and support.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Resellers</h2>
            <p className="text-slate-300 leading-relaxed">Offer managed AI, cloud, and cybersecurity services under your brand with pricing and procurement support.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Alliances</h2>
            <p className="text-slate-300 leading-relaxed">Joint solutions, co-selling motions, and shared success plans for enterprise clients.</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-900/20 px-8 py-10">
            <h3 className="text-3xl font-bold text-white">Let’s build a partnership that grows revenue</h3>
            <p className="text-slate-300 max-w-2xl">
              Tell us your market, clients, and capabilities. We’ll return a partnership plan with joint offers, onboarding, and support coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/contact/" className="btn-primary text-lg px-10 py-4">Talk to partnerships →</a>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-10 py-4">Email us</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
