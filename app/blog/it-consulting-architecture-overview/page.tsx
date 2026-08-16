import Link from 'next/link';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {
  title: 'IT Consulting: architecture overview | Zion Tech Group',
  description: 'IT Consulting: architecture overview',
  keywords: ['cloud', 'guide', 'AI services', 'IT services', 'Zion Tech Group'],
  authors: { name: 'Zion Tech Group' },
  openGraph: {
    title: 'IT Consulting: architecture overview',
    description: 'IT Consulting: architecture overview',
    url: 'https://ziontechgroup.com/blog/it-consulting-architecture-overview/',
    type: 'article',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: '/blog/it-consulting-architecture-overview/' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "TechArticle", "headline": "IT Consulting: architecture overview", "description": "IT Consulting: architecture overview", "author": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"}, "publisher": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"}, "datePublished": "2026-08-07T04:52:04Z", "dateModified": "2026-08-07T04:52:04Z", "mainEntityOfPage": "https://ziontechgroup.com/blog/it-consulting-architecture-overview/"};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'IT Consulting: architecture overview' }]} className="mb-8" />
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">IT Consulting: architecture overview</h1>
          <p className="mt-4 text-lg text-slate-300">IT Consulting: architecture overview</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>By Zion Tech Group</span>
            <span aria-hidden="true">•</span>
            <span>IT and AI insights from Zion Tech Group</span>
            <span aria-hidden="true">•</span>
            <span>2026</span>
          </div>
        </header>

        <section className="prose prose-invert max-w-none">
<h2 className="text-2xl font-bold text-white mt-10 mb-4">Conversion path</h2>
If this guide matches your it consulting: architecture overview initiative, the next step is a scoping call with Zion Tech Group. We will define one measurable outcome, identify dependencies, and outline a pilot plan you can start in days. Contact us to move from assessment to execution with a timeline and success criteria already in place.
<p className="mb-4 text-slate-300"><h2 className="text-2xl font-bold text-white mt-10 mb-4">Conversion path</h2> If this guide matches your it consulting: architecture overview initiative, the next step is a scoping call with Zion Tech Group. We will define one measurable outcome, identify dependencies, and outline a pilot plan you can start in days. Contact us to move from assessment to execution with a timeline and success criteria already in place.</p>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Related articles</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><Link href="/blog/microsaas-social-media-manager-case-study">Microsaas Social Media Manager Case Study</Link></li>
<li><Link href="/blog/etl-pipeline-optimization-2026-6615">Etl Pipeline Optimization 2026 6615</Link></li>
<li><Link href="/blog/it-consulting-2026">It Consulting 2026</Link></li>
<li><Link href="/blog/ai-customer-success-churn-prevention-roi-and-cost-model">Ai Customer Success Churn Prevention Roi And Cost Model</Link></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Next steps</h2>
            <p className="text-slate-300">Talk with Zion Tech Group about your environment and goals.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Get started</Link>
              <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Services</Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        ></script>
      </article>
    </div>
  );
}
