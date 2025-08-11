import Head from 'next/head';
import Link from 'next/link';

export default function Capabilities() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Zion — Capabilities</title>
        <meta name="description" content="Capabilities spanning code quality, performance, content and beyond." />
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
          <span className="gradient-text">Capabilities</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/80">What the system can do across domains, powered by autonomous cloud agents.</p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { title: 'Code Quality & Refactors', desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.' },
            { title: 'Performance & A11y', desc: 'Optimizes bundles, assets, and accessibility with continuous checks.' },
            { title: 'Content & SEO', desc: 'Curates content, updates promotions, and tunes metadata for reach.' },
            { title: 'UX & Design', desc: 'Evolves layouts, visual design, and templates with guardrails.' },
            { title: 'Ops & Automation', desc: 'Schedules, monitors, and heals autonomous workflows.' },
            { title: 'Analytics & Insights', desc: 'Builds dashboards and reports for observability.' },
          ].map((c) => (
            <article key={c.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl" />
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-white/75">{c.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/features"><a className="rounded-xl border border-white/20 bg-white/5 px-5 py-2 font-semibold backdrop-blur-md hover:bg-white/10">Browse Features</a></Link>
          <Link href="/benefits"><a className="rounded-xl border border-white/20 bg-white/5 px-5 py-2 font-semibold backdrop-blur-md hover:bg-white/10">Explore Benefits</a></Link>
          <Link href="/"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-2 font-semibold">Home</a></Link>
        </div>
      </main>
    </div>
  );
}