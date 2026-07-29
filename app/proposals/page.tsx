import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Proposals | Zion Tech Group',
  description:
    'Request a tailored AI and IT services proposal with timeline, team, pricing, and ROI estimates.',
  alternates: { canonical: '/proposals/' },
};

const steps = [
  {
    title: 'Share your goal',
    body: 'Tell us your outcomes, constraints, timeline, and success criteria.',
  },
  {
    title: 'Review fit assessment',
    body: 'We return a fit review, recommended model, and estimated timeline.',
  },
  {
    title: 'Receive proposal',
    body: 'Final proposal includes scope, team, pricing, milestones, and ROI assumptions.',
  },
];

export default function ProposalsPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Proposals</h1>
          <p className="text-slate-300 text-lg mb-8">
            Request a tailored AI and IT services proposal with timeline, team, pricing, and ROI estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href="/contact/" className="btn-primary text-lg px-10 py-4">
              Request proposal
            </Link>
            <Link href="/services/" className="btn-secondary text-lg px-10 py-4">
              Browse services
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-900/20 px-8 py-10">
            <h2 className="text-3xl font-bold text-white">Get a proposal you can act on</h2>
            <p className="text-slate-300 max-w-2xl">
              Share your goal, constraints, and success criteria. We’ll return a proposal with fit assessment, team structure, timeline, and estimated ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-primary text-lg px-10 py-4">
                Start proposal request
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-10 py-4">
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
