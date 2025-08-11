import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Contact — Zion</title>
        <meta name="description" content="Get in touch to discuss your automation goals." />
      </Head>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div>
        <div className="absolute inset-0 beams opacity-[0.06]" />
      </div>

      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
          </div>
          <div className="hidden gap-6 md:flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/services"><a>Services</a></Link>
            <Link href="/products"><a>Products</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-2xl px-6 pt-10 pb-20 md:pt-16">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl text-center"><span className="gradient-text">Contact</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-white/80">Tell us about your goals. We will propose safe, incremental automations to get there.</p>

          <div className="mt-8 grid grid-cols-1 gap-4">
            <a className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 text-center" href="mailto:hello@ziontechgroup.com">Email: hello@ziontechgroup.com</a>
            <a className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 text-center" href="https://github.com/Zion-Holdings/zion.app/issues/new" target="_blank" rel="noopener">Open a GitHub Issue</a>
          </div>
        </section>
      </main>
    </div>
  );
}