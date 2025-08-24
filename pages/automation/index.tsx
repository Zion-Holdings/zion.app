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
            <h2 className="text-xl font-bold">Auto Reports Suite</h2>
            <p className="text-white/70">SEO audit, search index, AI trends, docs and repo intel.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/auto-reports-suite" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">AI Changelog Broadcaster</h2>
            <p className="text-white/70">Refreshes AI changelog and newsroom content.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/ai-changelog-broadcaster" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Guardian Ultra</h2>
            <p className="text-white/70">Auto-healing, image optimization, broken-image scanning.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/guardian-ultra" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Newsroom Auto</h2>
            <p className="text-white/70">Regenerates newsroom updates automatically.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/newsroom-auto" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">OG Image Refresh</h2>
            <p className="text-white/70">Regenerates page OG images on a cadence.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/og-image-refresh" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Orphan Page Detector</h2>
            <p className="text-white/70">Finds unlinked/orphaned pages and recommends links.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/orphan-page-detector" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Content Staleness Auditor</h2>
            <p className="text-white/70">Flags stale content by last git change and suggests refresh.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/content-staleness-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
        </ul>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-3">New Intelligent Automations</h2>
          <ul className="space-y-4">
            <li className="rounded-lg bg-white/5 border border-white/10 p-5">
              <h3 className="text-lg font-bold">Autonomous Invention Orchestrator</h3>
              <p className="text-white/70">Discovers opportunities, futurizes the front, commits, and pushes to main.</p>
              <a className="text-cyan-300 underline" href="/.netlify/functions/autonomous-invention-orchestrator" target="_blank" rel="noopener">Trigger / View</a>
            </li>
            <li className="rounded-lg bg-white/5 border border-white/10 p-5">
              <h3 className="text-lg font-bold">LLM Content Curator</h3>
              <p className="text-white/70">Curates copy and promos across key pages with safe, reviewable edits.</p>
              <a className="text-cyan-300 underline" href="/.netlify/functions/llm-content-curator-runner" target="_blank" rel="noopener">Trigger / View</a>
            </li>
            <li className="rounded-lg bg-white/5 border border-white/10 p-5">
              <h3 className="text-lg font-bold">Front Index Advertiser</h3>
              <p className="text-white/70">Auto-generates and injects fresh front index promos and deep links.</p>
              <a className="text-cyan-300 underline" href="/.netlify/functions/front-index-advertiser" target="_blank" rel="noopener">Trigger / View</a>
            </li>
            <li className="rounded-lg bg-white/5 border border-white/10 p-5">
              <h3 className="text-lg font-bold">Auto Media Release</h3>
              <p className="text-white/70">Publishes condensed product updates to the newsroom and social.</p>
              <a className="text-cyan-300 underline" href="/.netlify/functions/auto-media-release-runner" target="_blank" rel="noopener">Trigger / View</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}