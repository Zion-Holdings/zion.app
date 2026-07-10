import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';
import ServiceCTA from '@/components/ServiceCTA';

export const metadata: Metadata = {
  title: 'AI Data Lakehouse & Analytics Pipelines | Zion Tech Group',
  description:
    'Unify structured and unstructured data with AI-native lakehouse pipelines. Faster analytics, governed data, and real-time insight delivery for modern enterprises.',
  alternates: { canonical: '/services/ai-data-lakehouse-pipelines' },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-5xl px-6 py-16">
      <SiteBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'AI Data Lakehouse & Analytics Pipelines' },
        ]}
      />
      <ArticleStructuredData
        title={metadata.title as string}
        description={metadata.description as string}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'}/services/ai-data-lakehouse-pipelines`}
        author="Zion Tech Group"
      />

      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        AI Data Lakehouse & Analytics Pipelines
      </h1>
      <p className="mt-4 text-lg text-slate-300">
        Modern analytics needs modern infrastructure: unified ingestion, governed storage,
        and AI-assisted curation.
      </p>

      <section className="mt-10 space-y-4 text-slate-300">
        <h2 className="text-2xl font-semibold text-white">What we deliver</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Unified batch + streaming ingestion from APIs, SaaS, and on-prem.</li>
          <li>Lakehouse architecture with governed access and policy enforcement.</li>
          <li>Curated semantic layers for downstream BI and ML.</li>
          <li>Real-time dashboards with anomaly detection and alerting.</li>
          <li>Cost governance, lifecycle management, and retention policies.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 text-slate-300">
        <h2 className="text-2xl font-semibold text-white">Why it matters</h2>
        <p>
          Organizations move faster when analytics is reliable, self-serve, and governed.
          We reduce pipeline debt while increasing trust in data products.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-slate-300">
        <h2 className="text-2xl font-semibold text-white">Engagement options</h2>
        <p>
          Start with a pipeline audit and maturity roadmap, then scale with an embedded
          delivery pod. We also offer managed optimization and cost governance.
        </p>
      </section>

      <ServiceCTA serviceName="AI Data Lakehouse & Analytics Pipelines" />
    </article>
  );
}
