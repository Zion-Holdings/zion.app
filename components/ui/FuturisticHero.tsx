import Link from 'next/link';
import AnimatedBackground from './AnimatedBackground';

export default function FuturisticHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyber-dark to-cyber-dark-blue text-white px-6 py-16 sm:py-20">
      <AnimatedBackground />
      <div className="relative z-10 max-w-3xl">
        <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full mb-3">Future of Work</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Build with Elite AI Talent, Faster than Ever
        </h1>
        <p className="mt-4 text-white/80 text-lg">
          Zion is a mobile-first marketplace connecting you to world-class AI experts. Post, match, and deliver projects with trust.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/browse">
            <a className="inline-flex justify-center items-center h-12 px-6 rounded-lg bg-neon-blue text-black font-semibold shadow-neon-blue">Browse Talent</a>
          </Link>
          <Link href="/post">
            <a className="inline-flex justify-center items-center h-12 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold ring-1 ring-white/20">Post a Job</a>
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl font-bold">5k+</div>
          <div className="text-white/70 text-sm">Verified Experts</div>
        </div>
        <div>
          <div className="text-3xl font-bold">48h</div>
          <div className="text-white/70 text-sm">Avg. Match Time</div>
        </div>
        <div>
          <div className="text-3xl font-bold">98%</div>
          <div className="text-white/70 text-sm">Milestone Success</div>
        </div>
        <div>
          <div className="text-3xl font-bold">A+</div>
          <div className="text-white/70 text-sm">Security Grade</div>
        </div>
      </div>
    </section>
  );
}