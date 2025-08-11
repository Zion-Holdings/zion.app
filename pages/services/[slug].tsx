import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ServiceDetail() {
  const { query } = useRouter();
  const slug = String(query.slug || '').replace(/-/g, ' ').replace(/w/g, (m) => m.toUpperCase());
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>{slug ? slug + ' — Service' : 'Service'}</title>
        <meta name="description" content="Autonomous service page" />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
      </div>
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-12 pb-20 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight"><span className="gradient-text">{slug || 'Service'}</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">This is a generated, futuristic placeholder. Content will be auto-enriched by our automations.</p>
          <div className="mt-6"><Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Back to Services</a></Link></div>
        </section>
      </main>
    </div>
  );
}
