import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Services — Zion</title>
        <meta name="description" content="Autonomous cloud services: automation factories, continuous improvement, and more." />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
      </div>
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-extrabold gradient-text">Services</h1>
        <p className="mt-4 max-w-2xl text-white/80">Cloud-native agents that discover, plan, apply, and validate improvements across your app — 24/7.</p>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Automation Factories', desc: 'Domain-specific generators that produce tailored workflows.' },
            { title: 'Continuous Delivery', desc: 'Safe, incremental edits shipped straight to main.' },
            { title: 'Performance & A11y', desc: 'Ongoing audits with actionable, auto-applied fixes.' },
            { title: 'Content & SEO', desc: 'Curated promotions, metadata, and structured data.' },
            { title: 'Observability', desc: 'Dashboards, reports, and health checks with guardrails.' },
            { title: 'Enterprise Readiness', desc: 'Compliance-aware pipelines and controlled rollouts.' },
          ].map((f) => (
            <div key={f.title} className="glow-card rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-lg font-semibold">{f.title}</h2>
              <p className="mt-1 text-sm text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/contact"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Contact Us</a></Link>
        </div>
      </main>
    </div>
  );
}