import Link from 'next/link';
import AnimatedBackground from './AnimatedBackground';

export default function FuturisticHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-cyber text-high-contrast p-8 md:p-12">
      <AnimatedBackground />
      <div className="relative z-10">
        <div className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs tracking-wider uppercase mb-4 bg-white/5 backdrop-blur">Autonomous • Cloud • AI</div>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight animate-fade-in">
          Build With The Future: <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,212,255,0.6)]">Autonomous</span> Automations
        </h1>
        <p className="mt-3 md:mt-4 max-w-2xl opacity-90">
          Zero‑touch, always‑on agents that analyze, optimize, and publish. Experience seamless insights with a neon‑infused, futuristic UI.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/automation"><a className="px-5 py-2.5 rounded-md bg-neon-blue text-black font-medium shadow-neon-blue hover:brightness-110">Automation Dashboard</a></Link>
          <Link href="/services"><a className="px-5 py-2.5 rounded-md bg-white/10 border border-white/20 hover:bg-white/15">Explore Services</a></Link>
        </div>
      </div>
    </section>
  );
}