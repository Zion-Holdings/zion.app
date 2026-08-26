import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {
  title: 'Free AI Readiness Audit | Zion Tech Group',
  description: 'Get a free AI readiness audit from Zion Tech Group. Discover quick wins, automation opportunities, and ROI in 30 minutes.',

  openGraph: {
    title: 'Free AI Readiness Audit',
    description: 'Free AI readiness audit to spot quick wins and automation opportunities.',
    type: 'website',
    url: 'https://ziontechgroup.com/free-ai-readiness-audit/',
  },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <ArticleStructuredData
        headline="Free AI Readiness Audit"
        description="Free AI readiness audit from Zion Tech Group."
        datePublished="2026-07-07"
        slug="free-ai-readiness-audit"
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-9rem] h-[28rem] w-[28rem] rounded-full bg-purple-500/15 blur-3xl" />
      </div>
      <article className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Free AI Readiness Audit', href: '/free-ai-readiness-audit/' }]} className="mb-8" />
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Free AI Readiness Audit</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">Discover automation wins, cost savings, and a practical AI roadmap — no pitch deck, just real next steps.</p>
        </header>
        <section className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Process mapping', body: 'We map workflows and identify highest-ROI automation points.', emoji: '🗺️' },
              { title: 'Tool gap review', body: 'We review your current stack and spot missing AI-ready integrations.', emoji: '🧩' },
              { title: 'Quick-win plan', body: 'You get a 30-60-90 day roadmap with owners and outcomes.', emoji: '📈' },
              { title: 'Cost model', body: 'Estimate savings from ticket deflection, faster onboarding, and fewer manual steps.', emoji: '💰' },
              { title: 'Risk check', body: 'Privacy, access, fallback behavior, and escalation rules reviewed.', emoji: '🛡️' },
              { title: 'Support options', body: 'Low-cost implementation paths including free tools where possible.', emoji: '🛠️' },
            ].map((card, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 hover:border-purple-500/40 transition-all">
                <div className="text-4xl mb-3">{card.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-16 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready for honest AI guidance?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">Book a free strategy call and walk away with a prioritized action plan.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="https://calendly.com/kleber-ziontechgroup" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">Book Free Audit</Link>
            <Link href="https://ziontechgroup.com" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore Free AI Tools</Link>
          </div>
        </section>
        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/" className="text-sm font-medium text-violet-300 transition hover:text-violet-200">&larr; Back to Zion Tech Group</Link>
        </div>
      </article>
    </div>
  );
}
