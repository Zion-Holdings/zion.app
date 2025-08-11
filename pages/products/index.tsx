import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Products — Intelligent Tools</title>
        <meta name="description" content="A showcase of intelligent, autonomous products and toolkits." />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div>
      </div>
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide"><span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span></div>
          <div className="hidden gap-6 md:flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
            <Link href="/site-health"><a>Site Health</a></Link>
          </div>
        </nav>
      </header>
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 text-center">
          <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"><span className="gradient-text">Products — Intelligent Tools</span></h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80">A showcase of intelligent, autonomous products and toolkits.</p>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-20">
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {[{title:'Automation Dashboard',href:'/automation'},{title:'Site Health',href:'/site-health'},{title:'AI Trends',href:'/reports/ai-trends'}].map((p)=> (
      <Link key={p.title} href={p.href}><a className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30"><div className="text-lg font-semibold">{p.title}</div><div className="mt-1 text-sm text-white/75">Open →</div></a></Link>
    ))}
  </div>
</section>
      </main>
    </div>
  );
}
