import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-indigo-500 blur-3xl opacity-30 animate-float-slow" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-cyan-400 via-teal-500 to-emerald-500 blur-3xl opacity-30 animate-float" />
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-sky-500 blur-3xl opacity-20 animate-float-fast" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%)]" />
      </div>

      {/* Hero */}
      <header className="relative"> 
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-medium tracking-wider text-white/80">Autonomous. Cloud-Native. Always On.</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-br from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent">Zion Autonomous Cloud Intelligence</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Ship faster with self-driving automations for IPO readiness, investor relations, data rooms, and growth. Secure by design, powered by schedules, zero human babysitting.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/admin/ipo-portal"><a className="neon-btn">Open IPO Portal</a></Link>
            <Link href="/api/ipo/export-metrics"><a className="neon-btn ghost">Export Metrics</a></Link>
            <Link href="/api/ipo/audit-log"><a className="neon-btn ghost">Audit Log</a></Link>
          </div>
        </div>
      </header>

      {/* Feature grid */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="IPO Readiness Dashboard" desc="Live KPIs: MRR, GMV, Active Users, Churn, CAC/LTV, cohorts, geo." tag="Realtime" color="from-cyan-400/20 to-indigo-400/10" />
          <FeatureCard title="Secure Data Room" desc="Structured uploads with audit trails for every open and download." tag="Audited" color="from-emerald-400/20 to-teal-400/10" />
          <FeatureCard title="Investor Update Engine" desc="One-click drafts + PDF exports with open tracking pixel." tag="Automated" color="from-fuchsia-400/20 to-pink-400/10" />
          <FeatureCard title="Deal Room" desc="Terms, offering toggles (SAFE/Equity/Token), soft commitments." tag="Actionable" color="from-amber-400/20 to-rose-400/10" />
          <FeatureCard title="Cloud Schedulers" desc="15-min, hourly, daily, weekly GitHub Actions with auto-commit." tag="Hands-free" color="from-purple-400/20 to-blue-400/10" />
          <FeatureCard title="Security & 2FA" desc="Superadmin 2FA, role gating, file-level audit log." tag="Zero-Trust" color="from-red-400/20 to-rose-400/10" />
        </div>
      </section>

      {/* Animated stats ribbon */}
      <section className="relative mx-auto max-w-6xl px-6 pb-2">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-4">
          <Stat label="MRR" value="$220k+" />
          <Stat label="GMV" value="$4.8M" />
          <Stat label="Active Users" value="18,452" />
          <Stat label="Churn" value="2.4%" />
        </div>
      </section>

      {/* Automations */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="mb-6 text-center text-xl font-semibold tracking-wide text-white/90">Intelligent Automations</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <AutomationItem title="IPO Watchdog" desc="Computes traffic-light status over KPIs and writes rich reports." link="/admin/ipo-portal" />
          <AutomationItem title="Audit Analyzer" desc="Summarizes activity, highlights hotspots and anomalies." link="/api/ipo/audit-log" />
          <AutomationItem title="Investor Drafts" desc="Generates crisp update drafts; optional LLM polish." link="/admin/ipo-portal" />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur">
          <h3 className="text-2xl font-semibold">Future-proof your fundraising ops</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">Activate autonomous cloud intelligence—no servers to manage, no cron jobs to babysit.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/admin/ipo-portal"><a className="neon-btn">Launch Portal</a></Link>
            <Link href="/auth"><a className="neon-btn ghost">Secure Access</a></Link>
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-400 opacity-30 blur-2xl" />
        </div>
      </section>

      <style jsx>{`
        .neon-btn {
          @apply rounded-full px-5 py-2.5 text-sm font-medium tracking-wide border border-white/10 bg-white/10 backdrop-blur hover:bg-white/20 transition;
          box-shadow: 0 0 0px rgba(255,255,255,0.15), 0 0 40px rgba(56,189,248,0.15);
        }
        .neon-btn.ghost { @apply bg-transparent hover:bg-white/10; }
        .glass {
          background: radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.12), rgba(255,255,255,0.04) 60%);
          backdrop-filter: blur(10px);
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-12px) translateX(6px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-18px) translateX(-10px) scale(1.06); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }
        @keyframes float-fast {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-52%, -48%) scale(1.08); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 16s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

function FeatureCard({ title, desc, tag, color }: { title: string; desc: string; tag: string; color: string }) {
  return (
    <div className={`relative rounded-2xl border border-white/10 p-5 glass hover:border-white/20 transition`}> 
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${color} opacity-0 blur-xl transition group-hover:opacity-40`} />
      <div className="relative">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-white/70">{tag}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}

function AutomationItem({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <Link href={link}>
      <a className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-fuchsia-400 to-emerald-400 opacity-60" />
        <div className="ml-3">
          <h4 className="text-base font-semibold tracking-wide">{title}</h4>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300 group-hover:underline">Open <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V14a1 1 0 11-2 0V5.414L9.707 8.121A1 1 0 018.293 6.707l4-4z"/></svg></span>
        </div>
      </a>
    </Link>
  );
}