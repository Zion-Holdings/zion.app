import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Autonomous Cloud Automations for Zion</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Always-on agents that research, improve, and evolve your product—no human babysitting, no servers to manage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/automation"><a className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow">Explore Automations</a></Link>
          <Link href="/automation/innovation"><a className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 font-medium">Innovation Digest</a></Link>
          <Link href="/automation/tech-radar"><a className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 font-medium">Tech Radar</a></Link>
          <Link href="/automation/repo-health"><a className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 font-medium">Repo Health</a></Link>
          <Link href="/automation/content-map"><a className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 font-medium">Content Map</a></Link>
          <Link href="/automation/site-validator"><a className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 font-medium">Site Validator</a></Link>
          <Link href="/automation/knowledge-graph"><a className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 font-medium">Knowledge Graph</a></Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <h3 className="font-semibold text-lg">Innovation Digest</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Scans arXiv, GitHub Trending, and HuggingFace to summarize the latest AI breakthroughs.</p>
          <div className="mt-4">
            <Link href="/automation/innovation"><a className="text-blue-600 dark:text-cyan-400">View live feed →</a></Link>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <h3 className="font-semibold text-lg">UI Evolution</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Continuously refines UI structure, accessibility, and visual polish based on content analysis.</p>
          <div className="mt-4">
            <Link href="/automation"><a className="text-blue-600 dark:text-cyan-400">See details →</a></Link>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <h3 className="font-semibold text-lg">SEO & Link Health</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Monitors pages, structured data, and links—autofixes issues and keeps growth compounding.</p>
          <div className="mt-4">
            <Link href="/automation"><a className="text-blue-600 dark:text-cyan-400">Learn more →</a></Link>
          </div>
        </div>
      </section>

      <section className="rounded-2xl p-8 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <h2 className="text-2xl font-bold">Zero-maintenance, Cloud-native</h2>
        <p className="mt-2 text-white/90 max-w-2xl">Agents run on schedules in GitHub Actions and Netlify—fetching data, updating the site, and committing changes automatically.</p>
        <div className="mt-4">
          <Link href="https://github.com/Zion-Holdings/zion.app"><a className="underline" target="_blank" rel="noreferrer">View repo →</a></Link>
        </div>
      </section>
    </div>
  );
}