import Head from 'next/head';
import Link from 'next/link';
import Landing from '../../components/Landing';

export default function ExploreIndex() {
  // AUTO-GENERATED: EXPLORE_PROMOS
  const promos = [
  {
    "href": "/reports/innovations/insight-2025-08-13T21-30",
    "title": "Innovation Insight — 2025-08-13 21-30",
    "desc": "New autonomous content"
  },
  {
    "href": "/reports/updates/update-2025-08-13T21-30",
    "title": "Autonomous Update — 2025-08-13 21-30",
    "desc": "New autonomous content"
  }
];

  const features: Array<{ title: string; desc: string }> = [
    { title: 'Autonomous Agents', desc: 'Self‑improving systems that build and run new automations.' },
    { title: 'Direct Repo Sync', desc: 'Edits are committed and pushed to main safely.' },
    { title: 'Zero‑Ops Cloud', desc: 'Fully managed execution with layered guardrails.' },
    { title: 'Observability', desc: 'Dashboards, reports, and health checks across the site.' },
    { title: 'Scalable Factories', desc: 'Domain‑specific content and automation factories on demand.' },
    { title: 'A11y & SEO', desc: 'Continuous improvements to accessibility and search.' }
  ];

  const benefits: string[] = [
    '24/7 progress without manual intervention',
    'Faster delivery with incremental, safe edits',
    'Lower maintenance via automated checks',
    'Higher quality from continuous auditing'
  ];

  const servicesDir: Array<{ href: string; title: string; desc: string }> = [
    { href: '/services/ai-seo-auditor', title: 'AI SEO Auditor', desc: 'Automate SEO improvements' },
    { href: '/services/customer-support-chatbot', title: 'Customer Support Chatbot', desc: 'Reduce response time' },
    { href: '/services/landing-page-generator', title: 'Landing Page Generator', desc: 'Launch pages instantly' },
    { href: '/services/price-intelligence-service', title: 'Price Intelligence', desc: 'Market‑aware pricing' }
  ];

  const keyPages: Array<{ href: string; title: string; desc: string }> = [
    { href: '/automation', title: 'Automation Hub', desc: 'Live agents, runners, and schedulers' },
    { href: '/main/front', title: 'Front Systems', desc: 'Futuristic product showcase' },
    { href: '/reports', title: 'Reports Index', desc: 'SEO, AI Trends, Roadmap, and more' },
    { href: '/newsroom', title: 'Newsroom', desc: 'Curated updates by autonomous agents' },
    { href: '/site-health', title: 'Site Health', desc: 'A11y, links, images, diagnostics' },
    { href: '/search', title: 'Search', desc: 'Find content across the site' },
    { href: '/sitemap.xml', title: 'Sitemap', desc: 'Full index of pages' },
    { href: 'https://github.com/Zion-Holdings/zion.app', title: 'GitHub', desc: 'Repository and actions' },
  ];

  const contentHubs: Array<{ href: string; title: string; desc: string }> = [
    { href: '/reports/ai-trends', title: 'AI Trends Radar', desc: 'Signals that inspire automations' },
    { href: '/reports/ai-lab', title: 'AI Lab', desc: 'Research, experiments, and results' },
    { href: '/reports/innovations', title: 'Innovations', desc: 'Insights, guides, and patterns' },
    { href: '/newsroom', title: 'Autonomous Updates', desc: 'Freshly published content' }
  ];

  return (
    <div>
      <Head>
        <title>Explore — Zion</title>
        <meta name="description" content="Discover all features, benefits, services, key pages, and content hubs in one place." />
      
        <meta property="og:title" content="Explore" />
        <meta property="og:description" content="Explore all capabilities and content across Zion." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      <div className="relative">
        <Landing />
      </div>
      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="sr-only">Explore</h1>

        {/* Everything at a glance */}
        <section className="pb-8">
          <h2 className="text-2xl font-bold tracking-wide text-white/90 text-center">Everything at a glance</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-white/70">Features, benefits, services, key pages, and content hubs.</p>
        </section>

        {/* Feature highlights */}
        <section className="pb-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/75">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="pb-12">
          <h2 className="text-2xl font-bold tracking-wide text-white/90 text-center">Benefits</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span className="text-sm text-white/80">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services Directory */}
        <section className="pb-12">
          <div className="mb-4 flex items-end justify-between gap-3">
            <h2 className="text-2xl font-bold tracking-wide text-white/90">Services</h2>
            <Link href="/services" className="text-sm text-cyan-300 hover:text-cyan-200">View all →</Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {servicesDir.map((s) => (
              <Link key={s.href} href={s.href} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/75">{s.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Key Pages */}
        <section className="pb-12">
          <h2 className="text-2xl font-bold tracking-wide text-white/90">Key Pages</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {keyPages.map((p) => (
              <Link key={p.href} href={p.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-white/75">{p.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Content Hubs */}
        <section className="pb-10">
          <h2 className="text-2xl font-bold tracking-wide text-white/90">Content Hubs</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contentHubs.map((c) => (
              <Link key={c.href} href={c.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-white/75">{c.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest */}
        {promos && promos.length > 0 ? (
          <section className="pb-6">
            <h2 className="text-2xl font-bold tracking-wide text-white/90">Latest</h2>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {promos.map((p) => (
                <Link key={p.href} href={p.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{p.title}</div>
                  <div className="mt-1 text-sm text-white/75">{p.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* Quick Links */}
        <section className="pb-2">
          <h2 className="text-2xl font-bold tracking-wide text-white/90">Quick Links</h2>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyPages.map((t) => (
              <Link key={t.href} href={t.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">{t.title}</div>
                <div className="mt-1 text-sm text-white/75">{t.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

