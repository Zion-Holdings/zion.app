import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata: Metadata = {
  title: 'AI IT Consulting & Digital Transformation Roadmap | Zion Tech Group',
  description:
    'Plan your AI adoption with an IT consulting roadmap that prioritizes rapid wins, governance, and delivery velocity.',
  alternates: { canonical: '/services/ai-it-consulting-and-digital-transformation-roadmap' },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-5xl px-6 py-16">
      <SiteBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'AI IT Consulting' },
        ]}
      />
      <ArticleStructuredData
        title={metadata.title as string}
        description={metadata.description as string}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'}/services/ai-it-consulting-and-digital-transformation-roadmap`}
        author="Zion Tech Group"
      />

      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        AI IT Consulting & Digital Transformation Roadmap
      </h1>
      <p className="mt-4 text-lg text-slate-300">
        Move from ad-hoc AI experiments to an accountable delivery roadmap: governance,
        prioritization, architecture, and measurable outcomes.
      </p>

      <section className="mt-10 space-y-4 text-slate-300">
        <h2 className="text-2xl font-semibold text-white">What we deliver</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Executive-ready AI roadmap aligned to revenue and risk.</li>
          <li>Architecture reviews for data, infra, and model delivery.</li>
          <li>Program governance, KPIs, and executive reporting.</li>
          <li>Delivery playbooks for pilot, productionization, and scaling.</li>
          <li>Change management and stakeholder adoption planning.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 text-slate-300">
        <h2 className="text-2xl font-semibold text-white">Why it matters</h2>
        <p>
          Most AI programs stall because they lack a concrete execution path. We turn
          ambition into a sequenced plan with owners, milestones, and reviews.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-slate-300">
        <h2 className="text-2xl font-semibold text-white">Engagement options</h2>
        <p>
          Start with a 90-day transformation sprint, then continue with embedded
          advisory or managed program delivery.
        </p>
      </section>
    </article>
  );
}
