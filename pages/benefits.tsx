import Head from 'next/head';

export default function BenefitsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Benefits — Zion</title>
        <meta name="description" content="Understand the outcomes and benefits of Zion's autonomous cloud automations." />
      </Head>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 bg-aurora opacity-[0.18]" />
        <div className="absolute inset-0 beams opacity-[0.06]" />
      </div>

      <main className="mx-auto max-w-7xl px-6 py-14">
        <h1 className="text-4xl font-extrabold tracking-tight">Benefits</h1>
        <p className="mt-2 max-w-2xl text-white/75">Outcome-focused advantages delivered by Zion.</p>

        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            '24/7 progress without human intervention',
            'Rapid feedback loop with safe, incremental edits',
            'Continuous delivery directly to main branch',
            'Fewer regressions via layered checks and reports',
            'Improved SEO visibility and content freshness',
            'Tighter design consistency and performance',
          ].map((b) => (
            <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">{b}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}