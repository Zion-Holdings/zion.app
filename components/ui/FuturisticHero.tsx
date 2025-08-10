import Link from 'next/link';
import AnimatedBackground from './AnimatedBackground';

export default function FuturisticHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 p-8 md:p-12">
      <AnimatedBackground />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 px-3 py-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-50/40 dark:bg-blue-900/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Live Autonomous Agents
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
          Build the Future of Talent with AI
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
          Zion unifies learning, AI assistants, certifications, and autonomous cloud agents to accelerate skills and opportunities.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/academy"><a className="rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 shadow-[0_0_20px_rgba(59,130,246,0.4)]">Explore Academy</a></Link>
          <Link href="/academy/insights"><a className="rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-2.5">View Insights</a></Link>
        </div>
      </div>

      <div className="absolute -right-12 -bottom-12 w-72 h-72 blur-3xl rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
    </section>
  );
}