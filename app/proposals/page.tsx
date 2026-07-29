import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Proposals | Zion Tech Group',
  description:
    'Request a tailored AI and IT services proposal with scoped outcomes, milestones, resourcing, and cost estimates.',
  openGraph: {
    title: 'Proposals | Zion Tech Group',
    description:
      'Request a tailored AI and IT services proposal with scoped outcomes and implementation support.',
    url: 'https://ziontechgroup.com/proposals/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/proposals/' },
};

export default function ProposalsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <nav aria-label="Breadcrumb" className="hidden">
          <span>Home</span>
          <span>Proposals</span>
        </nav>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs">📝</span>
            <span className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Tailored Proposals</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request a <span className="gradient-text">Proposal</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Share your constraints and success metrics. We’ll return a scoped engagement plan with outcomes, timeline, team, and estimated ROI.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a href="/contact/" className="btn-primary text-lg px-8 py-3">Start your proposal</a>
            <a href="/services/" className="btn-secondary text-lg px-8 py-3">Browse services</a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Fixed-Scope Delivery</h2>
            <p className="text-slate-300 leading-relaxed">Clear deliverables, milestone payments, and acceptance criteria suited to executive approval cycles.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Managed Engagement</h2>
            <p className="text-slate-300 leading-relaxed">Ongoing service packages with predictable monthly spend, SLA coverage, and continuous optimization.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Advisory & Strategy</h2>
            <p className="text-slate-300 leading-relaxed">Architecture, roadmap, and procurement guidance for AI, cloud, security, and IT operations.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Pilot Program</h2>
            <p className="text-slate-300 leading-relaxed">Time-boxed proof-of-concept engagements with measurable success criteria before full deployment.</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-900/20 px-8 py-10">
            <h3 className="text-3xl font-bold text-white">Tell us your goal</h3>
            <p className="text-slate-300 max-w-2xl">
              We’ll return a scoped proposal with implementation steps, milestones, owners, estimated ROI, and risk controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/contact/" className="btn-primary text-lg px-10 py-4">Request proposal →</a>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-10 py-4">Email us</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
