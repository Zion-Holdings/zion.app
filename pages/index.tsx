import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [report, setReport] = useState<{ runAt: string; successCount: number; total: number } | null>(null);
  useEffect(() => {
    fetch('/data/reports/autonomous/last-run.json').then(async (r) => {
      if (r.ok) setReport(await r.json());
    }).catch(()=>{});
  }, []);

  return (
    <div className="relative">
      {/* Futuristic animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-[50vmax] w-[50vmax] rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-24 -right-24 h-[55vmax] w-[55vmax] rounded-full bg-gradient-to-tr from-purple-500 via-teal-400 to-amber-300 opacity-25 blur-3xl animate-pulse-slower" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.4))]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><defs><pattern id=\'grid\' width=\'80\' height=\'80\' patternUnits=\'userSpaceOnUse\'><path d=\'M 80 0 L 0 0 0 80\' fill=\'none\' stroke=\'rgba(255,255,255,0.06)\' stroke-width=\'1\'/></pattern></defs><rect width=\'100%\' height=\'100%\' fill=\'url(%23grid)\'/></svg>')] opacity-40" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-16 sm:pt-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl dark:bg-black/40">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping-slow" />
              Autonomous cloud agents are live
              {report && (
                <span className="ml-2 rounded-full bg-black/30 px-2 py-0.5 text-[10px]">
                  Last run {new Date(report.runAt).toLocaleString()} • {report.successCount}/{report.total} OK
                </span>
              )}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Build faster with <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">futuristic AI automations</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
              Zion AI Marketplace helps you launch, operate, and optimize AI experiences autonomously—benchmarks, automations, and admin in one sleek platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/salary-insights"><a className="rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 hover:opacity-95">Explore Salary Insights</a></Link>
              <Link href="/admin"><a className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20">Open Admin</a></Link>
              <Link href="/blog"><a className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20">Read the Blog</a></Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 animate-spin-slow rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(59,130,246,0.3),rgba(236,72,153,0.3),rgba(34,197,94,0.3),rgba(59,130,246,0.3))] blur-2xl" />
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: 'Cloud Autonomous Agents',
              desc: 'Self-running workflows keep links healthy, fix errors, analyze design, and sync changes—no human required.',
              cta: { href: '/admin', label: 'See Ops' },
            },
            {
              title: 'Salary Insights',
              desc: 'GPT-powered rate benchmarks with trends, regions, and confidence. Set competitive offers in minutes.',
              cta: { href: '/salary-insights', label: 'Benchmark Now' },
            },
            {
              title: 'Admin Operations',
              desc: 'Moderate users, CVs, services, jobs, and equipment with filters, CSV export, and verification.',
              cta: { href: '/admin', label: 'Open Admin' },
            },
            {
              title: 'AI Workflows',
              desc: 'Composable, event-driven tasks you can schedule and chain. Designed for speed and reliability.',
              cta: { href: '/services', label: 'Explore Services' },
            },
            {
              title: 'Security & Compliance',
              desc: 'Guardrails and continuous scanning keep your stack aligned with best practices.',
              cta: { href: '/about', label: 'Learn More' },
            },
            {
              title: 'Integrations',
              desc: 'OpenAI, Supabase, and more. Plug in your keys and scale instantly.',
              cta: { href: '/contact', label: 'Contact Sales' },
            },
          ].map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20">
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-fuchsia-500/40 to-cyan-500/40 blur-xl transition group-hover:scale-125" />
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/80">{f.desc}</p>
              <Link href={f.cta.href}><a className="mt-4 inline-block rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20">{f.cta.label}</a></Link>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-white">Why Zion</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[ 
              ['Autonomous by default', 'Cloud-native agents run on schedule and self-heal.'],
              ['Speed to value', 'From idea to production in hours, not weeks.'],
              ['Observability', 'Lightweight reports with status and diffs.'],
              ['Data-in', 'Use your jobs, CVs, and external datasets.'],
              ['Secure', 'Continuous scans and guardrails keep you safe.'],
              ['Extensible', 'Composable APIs and scripts you can remix.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="text-white font-medium">{title}</div>
                <div className="text-sm text-white/70">{desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/salary-insights"><a className="rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-cyan-500/20 shadow">Start Benchmarking</a></Link>
            <Link href="/admin"><a className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">Open Admin</a></Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .animate-pulse-slow { animation: pulseSlow 8s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulseSlower 12s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 18s linear infinite; }
        @keyframes pulseSlow { 0%,100%{ transform: scale(1); } 50%{ transform: scale(1.06); } }
        @keyframes pulseSlower { 0%,100%{ transform: scale(1); } 50%{ transform: scale(1.08); } }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}