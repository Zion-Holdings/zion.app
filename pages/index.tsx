import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div className="min-h-screen cyber-bg text-high-contrast">
      <Head>
        <title>Zion — Autonomous Cloud AI</title>
        <meta name="description" content="Zion Brain: always-on, self-optimizing cloud automations" />
      </Head>

      <div className="matrix-rain" />

      <header className="container-responsive py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full holographic-bg" aria-hidden />
          <span className="font-semibold tracking-wide">Zion</span>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link href="/admin/zion-brain"><a className="hover:underline">Admin</a></Link>
          <Link href="/docs/zion-brain/status"><a className="hover:underline">Reports</a></Link>
          <a href="https://github.com/Zion-Holdings/zion.app/actions" className="hover:underline">Automation Runs</a>
        </nav>
      </header>

      <main className="container-responsive pb-20">
        <section className="relative overflow-hidden rounded-2xl p-8 md:p-12 glass-dark neon-border">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full holographic-bg blur-2xl opacity-30" aria-hidden />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Autonomous Cloud AI for self-optimizing operations
          </h1>
          <p className="mt-3 md:mt-4 max-w-2xl text-high-contrast-secondary">
            Zion Brain runs 24/7 in the cloud to route prompts, balance models, detect stuck users, and publish reports — no human intervention required.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/admin/zion-brain"><a className="px-4 py-2 rounded bg-black text-white neon-border">Open Admin Dashboard</a></Link>
            <Link href="/docs/zion-brain/status"><a className="px-4 py-2 rounded border border-high-contrast-accent">Daily Status Report</a></Link>
            <a href="/docs/zion-brain/prompt-benchmark" className="px-4 py-2 rounded border border-high-contrast-accent">Prompt Benchmark</a>
            <a href="/docs/zion-brain/governance-digest" className="px-4 py-2 rounded border border-high-contrast-accent">Governance Digest</a>
          </div>
        </section>

        <section className="mt-10 grid-responsive-3 gap-4">
          <article className="p-6 glass neon-border hover:bg-high-contrast-card-hover transition">
            <h2 className="text-xl font-semibold neon-text">Auto-Prompt Router</h2>
            <p className="mt-2 text-high-contrast-tertiary">Detects intent and routes to the right chain (resume builder, DAO explainer, tokenomics simulator, governance summarizer, nation assistant).</p>
            <div className="mt-3 text-sm text-high-contrast-accent">Zero configuration. Extensible chains.</div>
          </article>
          <article className="p-6 glass neon-border hover:bg-high-contrast-card-hover transition">
            <h2 className="text-xl font-semibold neon-text">Reflex Engine</h2>
            <p className="mt-2 text-high-contrast-tertiary">Monitors surges and drops (signups, dispute flags, ZION$ velocity) and triggers counter-actions automatically.</p>
            <div className="mt-3 text-sm text-high-contrast-accent">Reward popups. Escalations. Admin notifications.</div>
          </article>
          <article className="p-6 glass neon-border hover:bg-high-contrast-card-hover transition">
            <h2 className="text-xl font-semibold neon-text">Prompt Optimizer</h2>
            <p className="mt-2 text-high-contrast-tertiary">Continuously improves prompts for speed and specificity with OpenAI or heuristic fallback. Commits optimized outputs to the repo.</p>
            <div className="mt-3 text-sm text-high-contrast-accent">LLM optional. Deterministic fallback.</div>
          </article>
        </section>

        <section className="mt-6 grid-responsive-2 gap-4">
          <article className="p-6 glass-dark neon-border-purple hover:bg-high-contrast-card-hover transition">
            <h3 className="font-medium">Chain Tuning</h3>
            <p className="mt-2 text-high-contrast-muted">Balances routing across chains by adjusting weights from analytics. Stored in `data/zion-brain/chains.json`.</p>
          </article>
          <article className="p-6 glass-dark neon-border-purple hover:bg-high-contrast-card-hover transition">
            <h3 className="font-medium">Stuck Users Scanner</h3>
            <p className="mt-2 text-high-contrast-muted">Detects laggy/stuck sessions and opens GitHub issues automatically with labels and context.</p>
          </article>
          <article className="p-6 glass-dark neon-border-purple hover:bg-high-contrast-card-hover transition">
            <h3 className="font-medium">Prompt Benchmark</h3>
            <p className="mt-2 text-high-contrast-muted">Compares before/after prompt sizes and estimates latency improvement. Publishes JSON and Markdown tables.</p>
          </article>
          <article className="p-6 glass-dark neon-border-purple hover:bg-high-contrast-card-hover transition">
            <h3 className="font-medium">Governance Digest</h3>
            <p className="mt-2 text-high-contrast-muted">Summarizes governance inputs into concise digests and updates public docs automatically.</p>
          </article>
        </section>

        <section className="mt-10 p-6 glass neon-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="cyber-float">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-high-contrast-tertiary">Autonomous</div>
            </div>
            <div className="cyber-float">
              <div className="text-3xl font-bold">Zero</div>
              <div className="text-high-contrast-tertiary">Human Ops</div>
            </div>
            <div className="cyber-float">
              <div className="text-3xl font-bold">Fast</div>
              <div className="text-high-contrast-tertiary">Repo Sync</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container-responsive py-10 text-center text-high-contrast-muted text-sm">
        <div>© {new Date().getFullYear()} Zion. All systems are continuously monitored and self-optimizing.</div>
      </footer>
    </div>
  );
};

export default Index;