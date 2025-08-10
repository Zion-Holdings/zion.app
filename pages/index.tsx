import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white">
      <Head>
        <title>Zion — Autonomous Cloud Automations</title>
        <meta name="description" content="Self-running cloud automations that improve the app 24/7 and auto-sync changes." />
      </Head>
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight">Autonomous Cloud Automations</h1>
          <p className="mt-4 text-white/80 text-lg max-w-3xl mx-auto">
            Our intelligent, innovative automation systems run continuously in the cloud—no servers to manage, no human intervention required.
            They fix issues, optimize performance, curate content, and keep everything in sync with the repository in near real-time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/automation"><a className="px-5 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-md font-semibold">Explore Automations</a></Link>
            <Link href="/site-health"><a className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md font-semibold">Site Health</a></Link>
            <Link href="/newsroom"><a className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md font-semibold">Newsroom</a></Link>
            <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="px-5 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-md font-semibold">Live Actions</a>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold">Quick Fixes</h2>
            <p className="text-white/70 mt-2">Build rescue, sitemap/robots verification, and security remediation run on a tight cadence and auto-commit.</p>
            <a className="text-cyan-300 underline mt-3 inline-block" href="https://github.com/Zion-Holdings/zion.app/blob/main/.github/workflows/autonomous-quick-fixes.yml" target="_blank" rel="noopener">View workflow</a>
          </article>
          <article className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold">Deep Maintenance</h2>
            <p className="text-white/70 mt-2">Intelligent orchestrator, smoke tests, and link checks keep the app healthy and predictable.</p>
            <a className="text-cyan-300 underline mt-3 inline-block" href="https://github.com/Zion-Holdings/zion.app/blob/main/.github/workflows/autonomous-deep-maintenance.yml" target="_blank" rel="noopener">View workflow</a>
          </article>
          <article className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold">Marketing & SEO</h2>
            <p className="text-white/70 mt-2">Content factories generate posts and SEO optimizations to keep the brand fresh.</p>
            <a className="text-cyan-300 underline mt-3 inline-block" href="https://github.com/Zion-Holdings/zion.app/blob/main/.github/workflows/autonomous-marketing-seo.yml" target="_blank" rel="noopener">View workflow</a>
          </article>
          <article className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold">Content Curation</h2>
            <p className="text-white/70 mt-2">Curates proposals from internal data and syncs homepage promo suggestions automatically.</p>
            <a className="text-cyan-300 underline mt-3 inline-block" href="https://github.com/Zion-Holdings/zion.app/blob/main/.github/workflows/autonomous-content-curation.yml" target="_blank" rel="noopener">View workflow</a>
          </article>
          <article className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold">Dependency Upgrades</h2>
            <p className="text-white/70 mt-2">Safe minor/patch upgrades with audit fixes and build verification, opened via automated PRs.</p>
            <a className="text-cyan-300 underline mt-3 inline-block" href="https://github.com/Zion-Holdings/zion.app/blob/main/.github/workflows/autonomous-deps-upgrade.yml" target="_blank" rel="noopener">View workflow</a>
          </article>
          <article className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold">System Summary</h2>
            <p className="text-white/70 mt-2">Overview of every automation system with capabilities and usage.</p>
            <a className="text-cyan-300 underline mt-3 inline-block" href="https://github.com/Zion-Holdings/zion.app/blob/main/AUTOMATION_SYSTEMS_SUMMARY.md" target="_blank" rel="noopener">Read summary</a>
          </article>
          <article className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold">External Link Checks</h2>
            <p className="text-white/70 mt-2">Scans pages for outbound links and monitors their health, auto-committing reports.</p>
            <a className="text-cyan-300 underline mt-3 inline-block" href="https://github.com/Zion-Holdings/zion.app/blob/main/.github/workflows/autonomous-external-links.yml" target="_blank" rel="noopener">View workflow</a>
          </article>
          <article className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold">Image Optimizer</h2>
            <p className="text-white/70 mt-2">Compresses public images lossily with safety thresholds and syncs saved bytes reports.</p>
            <a className="text-cyan-300 underline mt-3 inline-block" href="https://github.com/Zion-Holdings/zion.app/blob/main/.github/workflows/autonomous-image-optimizer.yml" target="_blank" rel="noopener">View workflow</a>
          </article>
          <article className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold">Lighthouse CI</h2>
            <p className="text-white/70 mt-2">Runs scheduled audits on key pages and stores artifacts for continuous performance tracking.</p>
            <a className="text-cyan-300 underline mt-3 inline-block" href="https://github.com/Zion-Holdings/zion.app/blob/main/.github/workflows/autonomous-lighthouse.yml" target="_blank" rel="noopener">View workflow</a>
          </article>
        </section>
      </main>
    </div>
  );
}