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
            <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener" className="px-5 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-md font-semibold">Live Meta Factory</a>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">What’s Running Now</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a href="/automation" className="block rounded-xl border border-white/15 bg-white/5 p-5 hover:border-cyan-400/40 transition">
              <div className="text-lg font-semibold">Automation Control Center</div>
              <div className="text-sm text-white/70">Live status, run controls, and reports</div>
            </a>
            <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-meta.yml" target="_blank" rel="noreferrer" className="block rounded-xl border border-white/15 bg-white/5 p-5 hover:border-cyan-400/40 transition">
              <div className="text-lg font-semibold">Autonomous Meta Factory</div>
              <div className="text-sm text-white/70">Runs every 10 minutes to generate and run factories</div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}