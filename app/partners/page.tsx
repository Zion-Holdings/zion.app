import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partners | Zion Tech Group',
  description:
    'Partner with Zion Tech Group for co-sell, referral, and technology alliances built for AI and IT services growth.',
  alternates: { canonical: '/partners/' },
};

const badges = [
  { icon: '🤝', text: 'Co-Sell Ready' },
  { icon: '📈', text: 'Recurring Revenue' },
  { icon: '🔗', text: 'API First' },
  { icon: '🌍', text: 'Global Coverage' },
];

const models = [
  {
    title: 'Co-Sell',
    body:
      'Joint pipeline development, bundled solutions, and shared go-to-market motions with fast agreements and clear revenue sharing.',
  },
  {
    title: 'Referral',
    body:
      'Transparent rewards, fast onboarding, and dedicated partner support so you can refer qualified opportunities with confidence.',
  },
  {
    title: 'Technology Alliance',
    body:
      'Integration partnerships, certifications, and joint solution architecture for enterprise accounts that demand native interoperability.',
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Partners</h1>
          <p className="text-slate-300 text-lg mb-8">
            Grow with Zion Tech Group through co-sell, referral, and technology alliances built for AI and IT services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href="/contact/" className="btn-primary text-lg px-10 py-4">
              Become a partner
            </Link>
            <Link href="/case-studies/" className="btn-secondary text-lg px-10 py-4">
              See results
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {badges.map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-700/60 text-slate-200 text-sm"
              >
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m) => (
            <div key={m.title} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{m.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-900/20 px-8 py-10">
            <h2 className="text-3xl font-bold text-white">Build recurring revenue with an AI partner</h2>
            <p className="text-slate-300 max-w-2xl">
              Tell us your ICP, margin model, and coverage goals. We’ll return a partnership proposal with model fit, expected pipeline, and launch plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-primary text-lg px-10 py-4">
                Request partnership details
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
