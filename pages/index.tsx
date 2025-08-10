import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="py-10">
      <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-br from-indigo-600/10 to-cyan-500/10 border border-indigo-400/20 dark:border-cyan-400/20">
        <h1 className="text-2xl md:text-3xl font-semibold">Zion AI Marketplace</h1>
        <p className="mt-2 opacity-80 max-w-2xl">Find elite AI engineers, data scientists, and cloud experts. Post a job or browse vetted talent and get matched instantly.</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link href="/talent"><a className="rounded-md border px-4 py-2 hover:bg-gray-50 dark:hover:bg-white/5">Browse Talent</a></Link>
          <Link href="/jobs/post"><a className="rounded-md border px-4 py-2 hover:bg-gray-50 dark:hover:bg-white/5">Post a Job</a></Link>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Autonomous Cloud Automations</h2>
        <p className="text-sm opacity-80 mt-1">These jobs run continuously in the cloud, self-heal, and sync changes directly to our repository.</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="rounded-lg border p-4">
            <div className="font-medium">Sitemap & Robots</div>
            <p className="opacity-80 mt-1">Keeps sitemap and robots.txt fresh for SEO.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/sitemap.xml"><a className="underline underline-offset-2">Sitemap</a></Link>
              <Link href="/robots.txt"><a className="underline underline-offset-2">Robots</a></Link>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium">Link & Content Health</div>
            <p className="opacity-80 mt-1">Scans and fixes broken links and typos.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/reports/typo-report.txt"><a className="underline underline-offset-2">Typo Report</a></Link>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium">Performance & Bundles</div>
            <p className="opacity-80 mt-1">Optimizes CSS, images, and reports bundle sizes.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/reports/bundle-report.txt"><a className="underline underline-offset-2">Bundle Report</a></Link>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium">Feeds & Route Map</div>
            <p className="opacity-80 mt-1">Publishes RSS/JSON feeds and live route maps.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/feed.xml"><a className="underline underline-offset-2">RSS</a></Link>
              <Link href="/feed.json"><a className="underline underline-offset-2">JSON</a></Link>
              <Link href="/reports/route-map.json"><a className="underline underline-offset-2">Route Map</a></Link>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium">OG Social Images</div>
            <p className="opacity-80 mt-1">Generates Open Graph images for top routes.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/og/home.svg"><a className="underline underline-offset-2">Home OG</a></Link>
            </div>
          </div>
        </div>
        <p className="text-xs opacity-70 mt-3">All tasks run via cloud workflows and auto-commit changes for maximum freshness.</p>
      </section>
    </div>
  )
}