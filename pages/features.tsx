import Head from 'next/head';
import Link from 'next/link';

export default function Features() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Zion — Features</title>
        <meta name="description" content="Futuristic feature set powering autonomous cloud automations." />
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
          <span className="gradient-text">Features</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/80">A curated set of futuristic modules, templates, and effects used throughout the app.</p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Animated Backgrounds', desc: 'Aurora, nebula, grids, beams, and twinkles.' },
            { title: 'Futuristic Effects', desc: 'Neon glows, shimmer, tilt-on-hover, scanlines.' },
            { title: 'Templates', desc: 'Hero, feature grids, capability cards, benefits strips.' },
            { title: 'Motion', desc: 'Smooth entrance, parallax, and marquee animations.' },
            { title: 'Accessibility', desc: 'Contrast, keyboard navigation, and ARIA patterns.' },
            { title: 'Performance', desc: 'Optimized assets, lazy loading, and bundle hygiene.' },
          ].map((f) => (
            <article key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-white/75">{f.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/capabilities"><a className="rounded-xl border border-white/20 bg-white/5 px-5 py-2 font-semibold backdrop-blur-md hover:bg-white/10">View Capabilities</a></Link>
          <Link href="/benefits"><a className="rounded-xl border border-white/20 bg-white/5 px-5 py-2 font-semibold backdrop-blur-md hover:bg-white/10">Explore Benefits</a></Link>
          <Link href="/"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-2 font-semibold">Home</a></Link>
        </div>
      </main>
    </div>
  );
}