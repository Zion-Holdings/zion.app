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
            <a className="text-cyan-300 underline" href="/.netlify/functions/maintenance-scheduler" target="_blank" rel="noopener">Run / Logs</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Deep Maintenance</h2>
            <p className="text-white/70">Intelligent orchestrator with smoke tests and link checks.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/maintenance-scheduler" target="_blank" rel="noopener">Run / Logs</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Marketing & SEO</h2>
            <p className="text-white/70">Content factories and on-site SEO optimizer.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/marketing-scheduler" target="_blank" rel="noopener">Run / Logs</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Content Curation</h2>
            <p className="text-white/70">Homepage promo proposals generated continuously.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/marketing-scheduler" target="_blank" rel="noopener">Run / Logs</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Dependency Upgrades</h2>
            <p className="text-white/70">Automated minor/patch upgrades with PR auto-merge.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/maintenance-scheduler" target="_blank" rel="noopener">Run / Logs</a>
          </li>
        </ul>
      </main>
    </div>
  );
}