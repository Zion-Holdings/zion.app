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
             <h2 className="text-xl font-bold">Accelerated Sync Orchestrator</h2>
             <p className="text-white/70">Triggers prioritized automations and commits a heartbeat every minute.</p>
             <a className="text-cyan-300 underline" href="/.netlify/functions/accelerated-sync-orchestrator" target="_blank" rel="noopener">Trigger / View</a>
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
            <h2 className="text-xl font-bold">Innovation Lab</h2>
            <p className="text-white/70">Invents, curates, and promotes fresh ideas across the site.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/innovation-lab" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Auto Scheduler</h2>
            <p className="text-white/70">Smart time-based runner that chooses and executes the best tasks.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/auto-scheduler" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Broken Image Scanner</h2>
            <p className="text-white/70">Finds broken images, optimizes assets, and syncs fixes.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/broken-image-scanner" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">SEO Audit Runner</h2>
            <p className="text-white/70">Analyzes pages for title/description issues and writes an HTML report.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/seo-audit-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">AI Trends Radar</h2>
            <p className="text-white/70">Aggregates trending AI topics into a public report.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/ai-trends-radar-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Dependency Auto‑Upgrade</h2>
            <p className="text-white/70">Safely bumps minor/patch deps with build verification.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/deps-auto-upgrade-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Component Props Docs</h2>
            <p className="text-white/70">Scans components and publishes props documentation (Markdown + JSON).</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/component-props-docs-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Topics Map</h2>
            <p className="text-white/70">Builds a live topics map from pages and docs; publishes JSON + Markdown.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/topics-map-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Roadmap Curator</h2>
            <p className="text-white/70">Generates ROADMAP.md from live schedules and functions.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/roadmap-curator" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Revenue Ideas Lab</h2>
            <p className="text-white/70">Runs revenue idea agents and commits growth components.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/revenue-ideas-lab" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Auto Discovery Runner</h2>
            <p className="text-white/70">Discovers new automation opportunities and seeds factories.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/auto-discovery-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
        </ul>
      </main>
    </div>
  );
}