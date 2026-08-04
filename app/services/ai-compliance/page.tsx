import Link from 'next/link';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {
  title: 'AI Compliance Services | Zion Tech Group',
  description: 'AI compliance services from Zion Tech Group: policy, governance, audit readiness, and risk management for production AI systems.',
  keywords: ['AI compliance','AI governance','AI audit','IT services','Zion Tech Group'],
  authors: { name: 'Zion Tech Group' },
  openGraph: {
    title: 'AI Compliance Services',
    description: 'AI compliance services: policy, governance, audit readiness, and risk management.',
    url: 'https://ziontechgroup.com/services/ai-compliance/',
    type: 'website',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: '/services/ai-compliance/' },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'AI Compliance', href: '/services/ai-compliance' }]} className="mb-8" />
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">AI Compliance Services</h1>
          <p className="mt-4 text-lg text-slate-300">Policy, governance, audit readiness, and risk management for production AI systems.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>By Zion Tech Group</span>
            <span aria-hidden="true">•</span>
            <span>IT and AI insights from Zion Tech Group</span>
          </div>
        </header>
        <section className="prose prose-invert max-w-none">
          <h2>Why AI compliance needs operational rigor</h2>
          <p>Compliance is not a one-time audit. It requires ongoing monitoring, access control, documentation, and incident response.</p>
          <h2>Recommended approach</h2>
            <p>Start with a lightweight governance baseline, add risk scoring, then automate controls and reporting for repeatable evidence.</p>
          <h2>Common pitfalls</h2>
          <p>Teams often treat AI compliance as a pilot concern. The highest risk comes from production systems with no documented ownership or escalation path.</p>
          <h2>Next actions</h2>
          <p>Review your AI workflows, contact Zion Tech Group for a scoped compliance review, and start with one control set before expanding.</p>
        </section>
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Next steps</h2>
            <p className="text-slate-300">Talk with Zion Tech Group about your environment and goals.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Contact us</Link>
              <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Services</Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
