import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing | Zion Tech Group',
  description:
    'Flexible pricing and engagement models for AI and IT services, with transparent cost structures, payment terms, and ROI expectations.',
  openGraph: {
    title: 'Pricing | Zion Tech Group',
    description:
      'Flexible pricing and engagement models for AI and IT services, with transparent cost structures and ROI expectations.',
    url: 'https://ziontechgroup.com/pricing/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/pricing/' },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <nav aria-label="Breadcrumb" className="hidden">
          <span>Home</span>
          <span>Pricing</span>
        </nav>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs">💎</span>
            <span className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Transparent Pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pricing & <span className="gradient-text">Engagement Models</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Flexible engagement models with transparent cost structures, payment terms, and ROI expectations — so you can scale AI and IT services predictably.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a href="mailto:kleber@ziontechgroup.com" className="btn-primary text-lg px-8 py-3">Email for pricing</a>
            <a href="/contact/" className="btn-secondary text-lg px-8 py-3">Request proposal</a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Time and Materials</h2>
            <p className="text-slate-300 leading-relaxed">Hourly or daily rates for staffing, advisory, and iterative delivery. Best for evolving scopes and fast engagement starts.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Fixed Price</h2>
            <p className="text-slate-300 leading-relaxed">Scoped deliverables with milestone payments and acceptance criteria. Best for well-defined outcomes and predictable budgets.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Retainer</h2>
            <p className="text-slate-300 leading-relaxed">Ongoing managed services with predictable monthly spend and SLA terms. Best for continuous improvement and support coverage.</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-900/20 px-8 py-10">
            <h3 className="text-3xl font-bold text-white">Ready for a transparent cost model?</h3>
            <p className="text-slate-300 max-w-2xl">
              Share your scope and constraints. We’ll return a tailored proposal with pricing model, timeline, team, and estimated ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/contact/" className="btn-primary text-lg px-10 py-4">Get Your Custom Proposal →</a>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-10 py-4">Email us</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
