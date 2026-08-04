import Link from 'next/link';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {
  title: 'Free AI Tools | Zion Tech Group',
  description: 'Curated free AI tools for IT, security, analytics, and automation. Tested picks from Zion Tech Group to speed evaluation without pilot noise.',
  keywords: ['free AI tools','AI evaluation','IT tools','Zion Tech Group'],
  authors: { name: 'Zion Tech Group' },
  openGraph: {
    title: 'Free AI Tools',
    description: 'Curated free AI tools for IT, security, analytics, and automation.',
    url: 'https://ziontechgroup.com/free-ai-tools/',
    type: 'website',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: '/free-ai-tools/' },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Free AI Tools', href: '/free-ai-tools' }]} className="mb-8" />
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Free AI Tools</h1>
          <p className="mt-4 text-lg text-slate-300">Curated free AI tools for IT, security, analytics, and automation.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>By Zion Tech Group</span>
            <span aria-hidden="true">•</span>
            <span>IT and AI insights from Zion Tech Group</span>
          </div>
        </header>
        <section className="prose prose-invert max-w-none">
          <h2>Why curated free tools matter</h2>
          <p>Evaluation time is expensive. These tools let you test workflows, data handling, and integration readiness before buying.</p>
          <h2>How to choose</h2>
          <p>Prefer tools with clear usage limits, export options, and documented security practices. Avoid anything that locks evaluation data behind sales gates.</p>
          <h2>Recommended path</h2>
          <p>Pick one workflow, compare two tools, measure output quality, then decide. Do not collect ten tools and never pilot any of them.</p>
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
