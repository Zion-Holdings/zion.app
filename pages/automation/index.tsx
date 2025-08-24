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
        <p className="text-white/70 mb-8">Discover our autonomous, self-healing systems that keep the codebase evergreen. Powered by scheduled cloud functions — no GitHub Actions required.</p>
        <ul className="space-y-4">
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Innovation Generator</h2>
            <p className="text-white/70">Synthesizes new promos, updates homepage, and syncs to main.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/innovation-generator" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Dependency Health Runner</h2>
            <p className="text-white/70">Auto-upgrades dependencies safely and syncs.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/dependency-health-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Changelog Publisher</h2>
            <p className="text-white/70">Publishes AI-generated changelog and commits updates.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/changelog-publisher" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Homepage Updates</h2>
            <p className="text-white/70">Keeps the homepage fresh and the sitemap up to date.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/schedule-homepage" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Site Health</h2>
            <p className="text-white/70">Link checks, image optimization, and sitemap refresh.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/schedule-site-health" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Content Indexing</h2>
            <p className="text-white/70">Docs and search index regeneration for instant discovery.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/schedule-content-index" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Knowledge Graph</h2>
            <p className="text-white/70">Repository knowledge graph and radar metrics.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/schedule-knowledge-graph" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Front Enhancer</h2>
            <p className="text-white/70">Curates and injects new frontpage promos periodically.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/front-enhancer" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Fast Front Promoter</h2>
            <p className="text-white/70">Runs every 15 minutes to refresh homepage and front content, then syncs to main.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/fast-front-promoter" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Marketing & Features Promo</h2>
            <p className="text-white/70">Generates and applies homepage promos and deep links.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/marketing-and-features-promo" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Fast Orchestrator</h2>
            <p className="text-white/70">Runs every minute to refresh front and homepage content; commits and pushes to main.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/fast-orchestrator" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Continuous Orchestrator</h2>
            <p className="text-white/70">Runs every 5 minutes, including sitemap and UI futurizer steps.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/continuous-orchestrator" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Features/Capabilities/Benefits Advertiser</h2>
            <p className="text-white/70">Continuously advertises new features with deep links on the front pages.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/features-capabilities-benefits-advertiser" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Hyper Front Index Accelerator</h2>
            <p className="text-white/70">Ultra-fast front index futurizer and directory builder.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/hyper-front-index-accelerator" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Auto Dependency Maintainer</h2>
            <p className="text-white/70">Upgrades dependencies safely and syncs to main every 6 hours.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/auto-deps-maintainer" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Docs Pages Indexer</h2>
            <p className="text-white/70">Rebuilds docs/pages index and sitemap for instant discovery.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/docs-pages-indexer" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Dead Code Scanner</h2>
            <p className="text-white/70">Scans for unused code and proposes safe cleanups daily.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/dead-code-scan" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">AI Changelog Generator</h2>
            <p className="text-white/70">Regenerates the AI changelog for transparent progress.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/ai-changelog-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Dependency Licenses Audit</h2>
            <p className="text-white/70">Audits dependency licenses and writes public reports.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/dependency-licenses-audit" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Tech Debt Dashboard</h2>
            <p className="text-white/70">Scans TODO/FIXME/HACK across the repo; publishes a dashboard.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/tech-debt-dashboard" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Autonomous Roadmap</h2>
            <p className="text-white/70">Continuously generated roadmap from repository TODOs.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/roadmap-runner" target="_blank" rel="noopener">Trigger / View</a>
            <span className="block text-white/60 text-sm mt-1">
              <a className="underline" href="/reports/roadmap" target="_blank" rel="noopener">Open Report</a>
            </span>
          </li>
        </ul>
      </main>
    </div>
  );
}