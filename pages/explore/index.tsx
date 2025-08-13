import Head from 'next/head';
import Link from 'next/link';

export default function ExploreIndex() {
  const tiles: Array<{ href: string; title: string; desc: string }> = [
    { href: '/automation', title: 'Automation Hub', desc: 'Live agents, runners, and schedulers' },
    { href: '/main/front', title: 'Front Systems Hub', desc: 'Futuristic product showcase' },
    { href: '/reports', title: 'Reports Index', desc: 'SEO, AI Trends, Roadmap, and more' },
    { href: '/newsroom', title: 'Newsroom', desc: 'Curated headlines by autonomous agents' },
    { href: '/site-health', title: 'Site Health', desc: 'A11y, links, images, and diagnostics' },
    { href: '/reports/ai-trends', title: 'AI Trends Radar', desc: 'Signals that inspire automations' },
    { href: '/reports/seo', title: 'AI SEO Auditor', desc: 'Continuous on‑site SEO insights' },
    { href: '/reports/roadmap', title: 'Autonomous Roadmap', desc: 'Planned and running systems' },
    { href: '/front', title: 'Front Redirect', desc: 'Shortcut to Front Systems' },
    { href: '/search', title: 'Search', desc: 'Find content across the site' },
    { href: '/sitemap.xml', title: 'Sitemap', desc: 'Full index of pages' },
    { href: 'https://github.com/Zion-Holdings/zion.app', title: 'GitHub', desc: 'Repository and actions' },
  ];

  return (
    <div>
      <Head>
        <title>Explore — Zion</title>
        <meta name="description" content="Discover all pages, features, and reports across the site." />
      
        <meta property="og:title" content="Explore" />
        <meta property="og:description" content="Explore — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-2">Explore</h1>
        <p className="text-white/70 mb-6">A directory of key sections and reports.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <Link key={t.href} href={t.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">{t.title}</div>
              <div className="mt-1 text-sm text-white/75">{t.desc}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}


