import Head from 'next/head';

import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedContent from '../../components/RelatedContent';
import QuickNavigation from '../../components/QuickNavigation';

export default function AutomationHub() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Automation Hub | Zion Tech Group</title>
        <meta name="description" content="Explore autonomous cloud automations running 24/7 with live monitoring and self-healing systems." />
        <meta property="og:title" content="Automation Hub | Zion Tech Group" />
        <meta property="og:description" content="Explore autonomous cloud automations running 24/7 with live monitoring and self-healing systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-2">Automation Hub</h1>
        <p className="text-white/70 mb-8">Discover our autonomous, self-healing systems that keep the codebase evergreen. Powered by scheduled cloud functions — no GitHub Actions required.</p>
        <ul className="space-y-4">
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">AI Trends Radar</h2>
            <p className="text-white/70">Updates AI trends report and insights automatically.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/ai-trends-radar" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">SEO Audit Runner</h2>
            <p className="text-white/70">Runs SEO audits and publishes reports.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/seo-audit-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Monetization Orchestrator</h2>
            <p className="text-white/70">Applies autonomous revenue ideas safely.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/monetization-orchestrator" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">UI Evolution Beautify</h2>
            <p className="text-white/70">Refreshes UI polish via autonomous evolution.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/ui-evolution-beautify" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Design Evolution</h2>
            <p className="text-white/70">Cycles design improvements automatically.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/design-evolution" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Autonomous Git Sync</h2>
            <p className="text-white/70">Keeps the repo in a healthy, synchronized state.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/autonomous-git-sync" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Autonomous Invention Lab</h2>
            <p className="text-white/70">Discovers and proposes new automations.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/autonomous-invention-lab" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Knowledge Radar</h2>
            <p className="text-white/70">Updates repo radar metrics and knowledge views.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/knowledge-radar" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Innovation Sprint</h2>
            <p className="text-white/70">High-frequency front innovation and directory refresh.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/innovation-sprint" target="_blank" rel="noopener">Trigger / View</a>
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
            <h2 className="text-xl font-bold">Tech Debt Heatmap</h2>
            <p className="text-white/70">Scans repo signals and publishes a live heatmap.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/tech-debt-heatmap-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Revenue Ideas Runner</h2>
            <p className="text-white/70">Aggregates monetization proposals into reports.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/revenue-ideas-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Code Ownership Map</h2>
            <p className="text-white/70">Infers contributors per top-level area and publishes a map.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/code-ownership-map-runner" target="_blank" rel="noopener">Trigger / View</a>
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
            <h2 className="text-xl font-bold">Agent of Agents (1m)</h2>
            <p className="text-white/70">Triggers all cloud automations from the manifest, then syncs to main.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/agent-of-agents" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Adaptive Orchestrator (5m)</h2>
            <p className="text-white/70">Runs different automation sets based on cadence and context.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/adaptive-orchestrator" target="_blank" rel="noopener">Trigger / View</a>
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
             <h2 className="text-xl font-bold">Autonomous Invention Orchestrator</h2>
             <p className="text-white/70">Discovers and creates new automations; commits and pushes autonomously.</p>
             <a className="text-cyan-300 underline" href="/.netlify/functions/autonomous-invention-orchestrator" target="_blank" rel="noopener">Trigger / View</a>
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
            <h2 className="text-xl font-bold">Cache Warmer</h2>
            <p className="text-white/70">Warms critical pages to keep the edge cache hot.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/cache-warmer" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Anchor Auditor</h2>
            <p className="text-white/70">Finds broken #anchor links and publishes a report.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/anchor-auditor" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Structured Data Auditor</h2>
            <p className="text-white/70">Checks JSON‑LD coverage and publishes a report to /reports/structured-data.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/structured-data-auditor" target="_blank" rel="noopener">Trigger / View</a>
          </li>

                     <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Dependency Auto‑Upgrade</h2>
            <p className="text-white/70">Safely bumps minor/patch deps with build verification.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/deps-auto-upgrade-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Auto Redirect Mapper</h2>
            <p className="text-white/70">Scans link reports for internal 404s and writes safe redirects.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/auto-redirect-mapper" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Asset Size Guardian</h2>
            <p className="text-white/70">Scans public assets, writes reports, and syncs changes.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/asset-size-guardian" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Content Freshness Auditor</h2>
            <p className="text-white/70">Finds stale pages and docs; publishes a freshness report.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/content-freshness-auditor" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Repo Insights Digest</h2>
            <p className="text-white/70">Compiles a daily repo health digest across automations.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/repo-insights-digest" target="_blank" rel="noopener">Trigger / View</a>
          </li>
        </ul>
        
        <RelatedContent currentPage="automation" />
      </main>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Added by automation: Link Health */}
        <a href="/reports/link-health" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
          <div className="text-base font-semibold">Link Health</div>
          <div className="mt-1 text-sm text-white/75">Live link checks</div>
          <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
        </a>
      </div>
    </div>
  );
}