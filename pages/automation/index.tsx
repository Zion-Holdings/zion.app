import Head from 'next/head';

export default function AutomationHub() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Automation Hub</title>
        <meta name="description" content="Explore autonomous cloud automations running 24/7." />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-2">Automation Hub</h1>
        <p className="text-white/70 mb-8">Discover our autonomous, self-healing systems that keep the codebase evergreen.</p>
        <ul className="space-y-4">
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Quick Fixes</h2>
            <p className="text-white/70">Build rescue, sitemap/robots, and security remediation.</p>
            <a className="text-cyan-300 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-quick-fixes.yml" target="_blank" rel="noopener">Run / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Deep Maintenance</h2>
            <p className="text-white/70">Intelligent orchestrator with smoke tests and link checks.</p>
            <a className="text-cyan-300 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-deep-maintenance.yml" target="_blank" rel="noopener">Run / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Marketing & SEO</h2>
            <p className="text-white/70">Content factories and on-site SEO optimizer.</p>
            <a className="text-cyan-300 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-marketing-seo.yml" target="_blank" rel="noopener">Run / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Content Curation</h2>
            <p className="text-white/70">Homepage promo proposals generated continuously.</p>
            <a className="text-cyan-300 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-content-curation.yml" target="_blank" rel="noopener">Run / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Dependency Upgrades</h2>
            <p className="text-white/70">Automated minor/patch upgrades with PR auto-merge.</p>
            <a className="text-cyan-300 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-deps-upgrade.yml" target="_blank" rel="noopener">Run / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Internal Link Orchestrator</h2>
            <p className="text-white/70">Crawls internal routes, fixes missing pages, regenerates sitemap and SEO.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/link-scheduler" target="_blank" rel="noopener">Run on Netlify</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Maintenance Scheduler</h2>
            <p className="text-white/70">SaaS, feature marketing, homepage promos, site links and promos.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/maintenance-scheduler" target="_blank" rel="noopener">Run on Netlify</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Marketing Scheduler</h2>
            <p className="text-white/70">LinkedIn and Instagram automations via Netlify scheduler.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/marketing-scheduler" target="_blank" rel="noopener">Run on Netlify</a>
          </li>
        </ul>
      </main>
    </div>
  );
}