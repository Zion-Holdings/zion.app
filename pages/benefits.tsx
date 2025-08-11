import Head from 'next/head';
import Link from 'next/link';

export default function Benefits() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Zion — Benefits</title>
        <meta name="description" content="Outcomes and value delivered by autonomous cloud automations." />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="twinkle-field absolute inset-0" />
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="gradient-text">Benefits</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/80">Outcome‑focused advantages delivered by Zion's autonomous cloud agents.</p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-2">
          {[
            '24/7 progress without human intervention',
            'Rapid feedback loop with safe, incremental edits',
            'Continuous delivery directly to main branch',
            'Fewer regressions via layered checks and reports',
            'Faster time‑to‑value through automated pipelines',
            'Improved SEO and reach with continuous content tuning',
          ].map((b) => (
            <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              <span className="text-sm text-white/80">{b}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/features"><a className="rounded-xl border border-white/20 bg-white/5 px-5 py-2 font-semibold backdrop-blur-md hover:bg-white/10">Browse Features</a></Link>
          <Link href="/capabilities"><a className="rounded-xl border border-white/20 bg-white/5 px-5 py-2 font-semibold backdrop-blur-md hover:bg-white/10">View Capabilities</a></Link>
          <Link href="/"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-2 font-semibold">Home</a></Link>
        </div>
      </main>
    </div>
  );
}