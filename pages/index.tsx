import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const features = [
  {
    title: 'Autonomous Cloud Automations',
    desc: 'Zero‑touch, self‑healing jobs for data, SEO, and marketplace intelligence.',
    href: '/automations',
    badge: 'Auto',
  },
  {
    title: 'Dual‑Sided Reviews',
    desc: 'Mutual post‑project feedback with moderation, privacy, and abuse reporting.',
    href: '/talent/ava-chen',
    badge: 'Trust',
  },
  {
    title: 'Nightly Sitemap Generation',
    desc: 'Fresh URLs every night and weekly search engine pings for fast discovery.',
    href: '/automations/sitemap-status',
    badge: 'SEO',
  },
  {
    title: 'Top Talents Leaderboard',
    desc: 'Auto‑ranked profiles from verified, approved reviews and outcomes.',
    href: '/automations/top-talents',
    badge: 'AI Rank',
  },
  {
    title: 'Secure By Design',
    desc: 'Guardrails, identity checks, timestamps, and immutability after submission.',
    href: '/about',
    badge: 'Security',
  },
  {
    title: 'Futuristic UI/UX',
    desc: 'Holographic gradients, neon glow, pill badges, and kinetic motion built‑in.',
    href: '/enhanced-home',
    badge: 'Design',
  },
];

const capabilities = [
  'Autonomous review workflows',
  'Marketplace insights & ranking',
  'Nightly sitemap & weekly pings',
  'Abuse reporting & moderation',
  'Anonymous author support',
  'Self‑healing job orchestration',
  'Audit trails & timestamps',
  'Futuristic UI components',
];

const benefits = [
  {
    title: 'Trust & Transparency',
    desc: 'Mutual reviews appear only after both parties submit, reducing bias and gaming.',
  },
  {
    title: 'Speed to Discovery',
    desc: 'Automated sitemaps keep content fresh and discoverable across search engines.',
  },
  {
    title: 'Hands‑Off Operations',
    desc: 'Set‑and‑forget automations continuously generate value without human oversight.',
  },
];

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zion — Autonomous Cloud Platform</title>
        <meta name="description" content="Futuristic marketplace automations, reviews, and growth systems." />
      </Head>

      {/* Futuristic Animated Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-high-contrast-accent bg-high-contrast-card shadow-neon-high-contrast">
        <div className="absolute inset-0 holographic-bg opacity-30" aria-hidden="true" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full neon-glow opacity-40" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full holographic-bg opacity-20" aria-hidden="true" />

        <div className="relative p-10 md:p-16">
          <p className="text-high-contrast-accent font-medium tracking-widest uppercase mb-3">Autonomous • Futuristic • Secure</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build trust and growth with intelligent, autonomous systems
          </h1>
          <p className="text-high-contrast-tertiary mt-4 max-w-2xl">
            Zion runs continuous cloud automations: dual‑sided reviews, nightly sitemaps,
            search engine pings, and live talent ranking — all with futuristic design and speed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/automations">
              <span className="enhanced-button enhanced-button-primary">Explore Automations</span>
            </Link>
            <Link href="/automations/top-talents">
              <span className="enhanced-button enhanced-button-secondary">View Top Talents</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Link key={f.title} href={f.href}>
            <div className="enhanced-card hover:shadow-high-contrast-xl transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <span className="pill">{f.badge}</span>
              </div>
              <p className="text-high-contrast-muted mt-2">{f.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Capabilities */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {capabilities.map((c) => (
            <div key={c} className="enhanced-card hover:shadow-high-contrast-lg">
              <div className="flex items-center gap-2">
                <span className="text-neon-blue">◆</span>
                <span>{c}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="enhanced-card hover:shadow-high-contrast-lg">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="text-high-contrast-muted mt-2">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Stripe */}
      <section className="mt-14 rounded-xl border border-high-contrast-accent p-8 holographic-bg text-high-contrast shadow-glow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Ready to automate your marketplace?</h3>
            <p className="opacity-90">Deploy trust and discovery engines that never sleep.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/automations">
              <span className="enhanced-button enhanced-button-primary">Get Started</span>
            </Link>
            <Link href="/contact">
              <span className="enhanced-button enhanced-button-secondary">Talk to Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;