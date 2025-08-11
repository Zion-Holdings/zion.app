import Head from 'next/head';

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Contact — Zion</title>
        <meta name="description" content="Get in touch to explore autonomous cloud solutions." />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
      </div>
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-5xl font-extrabold gradient-text">Contact</h1>
        <p className="mt-4 text-white/80">We'd love to hear about your roadmap. Reach out and we'll assemble a bespoke autonomous fleet.</p>
        <form className="mt-8 space-y-4">
          <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder-white/50" placeholder="Name" />
          <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder-white/50" placeholder="Email" />
          <textarea className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder-white/50" rows={5} placeholder="Tell us about your goals" />
          <button type="button" className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Send</button>
        </form>
      </main>
    </div>
  );
}