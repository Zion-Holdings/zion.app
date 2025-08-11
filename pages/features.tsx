import Head from 'next/head';

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Features — Zion</title>
        <meta name="description" content="Explore Zion features in a futuristic, animated showcase." />
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
        <h1 className="text-4xl font-extrabold tracking-tight">Features</h1>
        <p className="mt-2 max-w-2xl text-white/75">A curated, high-signal list of the core features that power Zion's autonomous cloud automations.</p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Autonomous Agents', desc: 'Self-improving systems that plan, apply, and validate changes.' },
            { title: 'Repo Sync to Main', desc: 'Conservative edits committed and pushed continuously.' },
            { title: 'Zero-Ops Cloud', desc: 'Fully managed cloud execution with safety guardrails.' },
            { title: 'Observability', desc: 'Reports, dashboards, and health checks built-in.' },
            { title: 'Scalable Factories', desc: 'Domain-specific automation factories on demand.' },
            { title: 'Security & Safety', desc: 'Layered controls to minimize regressions.' },
          ].map((f) => (
            <article key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h2 className="text-lg font-semibold">{f.title}</h2>
              <p className="mt-1 text-sm text-white/75">{f.desc}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}