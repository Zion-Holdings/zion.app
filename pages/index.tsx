import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center py-12">
        <h1 className="text-3xl font-bold">Zion AI Marketplace</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Intelligent automations running 24/7 in the cloud.</p>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">New Autonomous Automations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
            <h3 className="font-semibold">Market Intelligence</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Daily AI-curated trends from tech sources with actionable opportunities.</p>
            <div className="mt-3 text-sm">
              <Link href="/docs/automations#market-intel"><a className="text-cyan-600">Learn more</a></Link> · <Link href="/data/reports/market-intel"><a className="text-cyan-600">Reports</a></Link>
            </div>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
            <h3 className="font-semibold">Broken Link Auto-Fix</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Weekly scan detects broken links and safely replaces them.</p>
            <div className="mt-3 text-sm">
              <Link href="/docs/automations#link-auto-fix"><a className="text-cyan-600">Learn more</a></Link> · <Link href="/data/reports/link-auto-fix"><a className="text-cyan-600">Reports</a></Link>
            </div>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
            <h3 className="font-semibold">Roadmap Orchestrator</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Weekly clustering of GitHub issues into a prioritized roadmap.</p>
            <div className="mt-3 text-sm">
              <Link href="/docs/automations#roadmap-orchestrator"><a className="text-cyan-600">Learn more</a></Link> · <Link href="/data/reports/roadmap"><a className="text-cyan-600">Reports</a></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}