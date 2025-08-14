import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

type Service = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  ctaHref: string;
};

const services: Service[] = [
  {
    slug: 'ai-seo-auditor',
    title: 'AI SEO Auditor',
    description: 'Automate SEO improvements with continuous audits and metadata optimization.',
    bullets: [
      'Crawls pages and validates metadata',
      'Finds issues and proposes fixes',
      'Improves Core Web Vitals and reach'
    ],
    ctaHref: '/contact'
  },
  {
    slug: 'customer-support-chatbot',
    title: 'Customer Support Chatbot',
    description: 'Reduce response time with an AI‑powered support assistant.',
    bullets: [
      'Trained on your docs and FAQs',
      'Escalation paths and human handoff',
      'Analytics on customer intents'
    ],
    ctaHref: '/contact'
  },
  {
    slug: 'landing-page-generator',
    title: 'Landing Page Generator',
    description: 'Launch optimized landing pages instantly, powered by AI content blocks.',
    bullets: [
      'Section templates with best practices',
      'A/B variants and tracking hooks',
      'SEO‑friendly structures'
    ],
    ctaHref: '/contact'
  },
  {
    slug: 'price-intelligence-service',
    title: 'Price Intelligence',
    description: 'Market‑aware dynamic pricing insights to stay competitive.',
    bullets: [
      'Competitive monitoring',
      'Elasticity modeling',
      'Alerting and recommendations'
    ],
    ctaHref: '/contact'
  }
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services.map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug || '');
  const service = services.find((s) => s.slug === slug) || services[0];
  return { props: { service } };
};

export default function ServicePage({ service }: { service: Service }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Head>
        <title>{service.title} — Zion Tech Group</title>
        <meta name="description" content={service.description} />
      
        <meta property="og:title" content="{service.title}" />
        <meta property="og:description" content="{service.title} — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      <h1 className="text-3xl font-bold tracking-tight">{service.title}</h1>
      <p className="mt-2 text-white/80">{service.description}</p>
      <ul className="mt-6 grid gap-2">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-white/80">{b}</span>
          </li>
        ))}
      </ul>
      <a href={service.ctaHref} className="mt-6 inline-flex rounded-lg bg-white/90 px-5 py-2 font-semibold text-slate-900 hover:bg-white">Get in touch</a>
    </div>
  );
}


