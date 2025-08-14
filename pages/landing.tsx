import Head from 'next/head';
import Link from 'next/link';
import Landing from '../components/Landing';

export default function MarketingLanding() {
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

  const services: Array<{ href: string; title: string; desc: string }> = [
    { href: '/services/ai-seo-auditor', title: 'AI SEO Auditor', desc: 'Automate SEO improvements with continuous audits.' },
    { href: '/services/customer-support-chatbot', title: 'Customer Support Chatbot', desc: 'Reduce response time and scale support.' },
    { href: '/services/landing-page-generator', title: 'Landing Page Generator', desc: 'Launch optimized pages instantly.' },
    { href: '/services/price-intelligence-service', title: 'Price Intelligence', desc: 'Market‑aware dynamic pricing insights.' }
  ];

  const keyPages: Array<{ href: string; title: string; desc: string }> = [
    { href: '/automation', title: 'Automation Hub', desc: 'Live agents, runners, and schedulers' },
    { href: '/main/front', title: 'Front Systems', desc: 'Futuristic product showcase' },
    { href: '/reports', title: 'Reports Index', desc: 'SEO, AI Trends, Roadmap, and more' },
    { href: '/newsroom', title: 'Newsroom', desc: 'Curated updates by autonomous agents' },
    { href: '/site-health', title: 'Site Health', desc: 'A11y, links, images, diagnostics' },
    { href: '/search', title: 'Search', desc: 'Find content across the site' },
    { href: '/sitemap.xml', title: 'Sitemap', desc: 'Full index of pages' },
    { href: 'https://github.com/Zion-Holdings/zion.app', title: 'GitHub', desc: 'Repository and actions' }
  ];

  const contentHubs: Array<{ href: string; title: string; desc: string }> = [
    { href: '/reports/ai-trends', title: 'AI Trends Radar', desc: 'Signals that inspire automations' },
    { href: '/reports/ai-lab', title: 'AI Lab', desc: 'Research, experiments, and results' },
    { href: '/reports/innovations', title: 'Innovations', desc: 'Insights, guides, and patterns' },
    { href: '/reports/updates/update-2025-08-12-1417', title: 'Autonomous Updates', desc: 'Freshly published content' }
  ];

  return (
    <div>
      <Head>
        <title>Zion — Features, Benefits, Services, and Content</title>
        <meta name="description" content="Explore all Zion features, benefits, services, key pages, and content hubs — with direct links to everything." />
        
        <meta property="og:title" content="Zion — Features & Services" />
        <meta property="og:description" content="Discover Zion's autonomous capabilities, services, pages, and content hubs." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="relative">
        <Landing />
      </div>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="sr-only">Zion — All Features, Benefits, Services, Pages and Content</h1>

        {/* Feature highlights */}
        <section className="pb-10">
          <h2 className="text-2xl font-bold tracking-wide text-white/90 text-center">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
            {services.map((s) => (
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
        <section className="pb-16">
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

        {/* CTA */}
        <section className="pb-24">
          <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold">Ready to build with autonomous cloud agents?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Scale development with a tireless fleet of self‑improving automations.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/main/front#capabilities" className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</Link>
              <Link href="/automation" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Automations</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


