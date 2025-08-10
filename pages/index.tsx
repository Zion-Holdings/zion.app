import Link from 'next/link';
import { Zap, Cloud, Shield, Activity, Workflow, Webhook, Code2, TrendingUp, Bot, GitPullRequest } from 'lucide-react';

const REPO = 'Zion-Holdings/zion.app';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-cyber-darker text-high-contrast overflow-hidden">
      <BackgroundFX />

      <main className="relative z-10">
        <section className="px-6 pt-16 pb-10 md:pt-24 md:pb-16 max-w-7xl mx-auto">
          <Hero />
          <CTAButtons />
        </section>

        <section className="px-6 py-10 md:py-16 max-w-7xl mx-auto">
          <FeatureGrid />
        </section>

        <section className="px-6 py-10 md:py-16 max-w-7xl mx-auto">
          <CapabilityShowcase />
        </section>

        <section className="px-6 py-10 md:py-16 max-w-7xl mx-auto">
          <Benefits />
        </section>

        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <QuickLinks />
        </section>
      </main>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute -inset-32 bg-cyber animate-gradient-x opacity-60" />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-neon-purple blur-3xl opacity-20 animate-pulse-neon" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-neon-blue blur-3xl opacity-20 animate-pulse-neon" />
      <div className="pointer-events-none absolute inset-0" style={{ maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)' }}>
        <div className="absolute inset-x-0 -top-40 h-[200vh] bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan-line" />
      </div>
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <div className="absolute -left-10 top-20 h-72 w-72 rounded-full border border-white/10 animate-orbit" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full border border-white/10 animate-orbit" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-high-contrast-secondary">
        <span className="h-2 w-2 rounded-full bg-neon-blue animate-pulse" />
        Autonomous • Cloud‑Native • Zero‑Ops
      </div>
      <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-high-contrast animate-neon-text-glow">
        Build on a Futuristic Developer Platform
      </h1>
      <p className="mt-4 md:mt-6 text-lg md:text-xl text-high-contrast-secondary max-w-3xl mx-auto">
        Secure APIs, intelligent webhooks, and autonomous cloud automations. Ship faster with self‑healing rollbacks,
        real‑time monitoring, and continuous content intelligence.
      </p>
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
      <Link href="/developers">
        <a className="group inline-flex items-center gap-2 rounded-md bg-neon-purple px-5 py-3 font-semibold text-black shadow-neon-purple hover:opacity-90 transition">
          <Code2 className="h-5 w-5" /> Developers API
          <span className="ml-2 text-black/60 group-hover:translate-x-0.5 transition">→</span>
        </a>
      </Link>
      <Link href="/reports">
        <a className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-high-contrast hover:bg-white/10 transition">
          <TrendingUp className="h-5 w-5 text-neon-blue" /> Autonomous Reports
        </a>
      </Link>
      <a
        className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-high-contrast hover:bg-white/10 transition"
        href={`https://github.com/${REPO}`}
        target="_blank"
        rel="noreferrer"
      >
        <GitPullRequest className="h-5 w-5 text-neon-green" /> View Repository
      </a>
    </div>
  );
}

function Card({ title, icon: Icon, desc, href }: { title: string; icon: any; desc: string; href: string }) {
  const content = (
    <div className="h-full rounded-xl border border-white/10 bg-glass-dark p-5 hover:shadow-neon-glow transition relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/0 via-white/5 to-neon-purple/0 opacity-0 hover:opacity-100 transition" />
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-white/10 border border-white/10"><Icon className="h-5 w-5 text-neon-blue" /></div>
        <div className="text-lg font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-high-contrast-secondary">{desc}</p>
    </div>
  );
  return href.startsWith('http') ? (
    <a href={href} target="_blank" rel="noreferrer">{content}</a>
  ) : (
    <Link href={href}><a>{content}</a></Link>
  );
}

function FeatureGrid() {
  const items = [
    { title: 'Secure API Keys', icon: Shield, desc: 'Bearer tokens with scopes, rate limits, and audit logs.', href: '/developers' },
    { title: 'Jobs + Talent APIs', icon: Code2, desc: 'View and post jobs, access curated talent profiles.', href: '/developers' },
    { title: 'Intelligent Webhooks', icon: Webhook, desc: 'Create, test, and sign listeners for real‑time events.', href: '/developers' },
    { title: 'Autonomous Rollbacks', icon: Activity, desc: 'Sentry‑aware rollbacks with Slack/Telegram alerts.', href: `https://github.com/${REPO}` },
    { title: 'Cloud Automations', icon: Cloud, desc: 'Trends, audits, link checks, and dependency hygiene.', href: '/reports' },
    { title: 'Auto Merge + Releases', icon: Workflow, desc: 'Fast PR merges and tagged releases for automation.', href: `https://github.com/${REPO}/actions` },
  ];
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold">Platform Highlights</h2>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <Card key={it.title} title={it.title} icon={it.icon} desc={it.desc} href={it.href} />
        ))}
      </div>
    </div>
  );
}

function CapabilityShowcase() {
  const capabilities = [
    { icon: Zap, title: 'Frictionless DX', desc: 'Copy‑paste curl, JS & Python examples; instant API keys.' },
    { icon: Bot, title: 'Autonomy Engine', desc: 'Self‑running cloud jobs generate insights and guardrails.' },
    { icon: Shield, title: 'Enterprise‑grade', desc: 'Scope‑based auth, rate limits, logs, and Sentry monitoring.' },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 relative overflow-hidden">
      <div className="absolute right-10 -top-10 h-40 w-40 rounded-full bg-neon-pink blur-2xl opacity-20 animate-breathe" />
      <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-neon-green blur-2xl opacity-20 animate-breathe" />
      <h2 className="text-2xl md:text-3xl font-bold">Capabilities</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {capabilities.map((c) => (
          <div key={c.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
            <c.icon className="h-6 w-6 text-neon-blue" />
            <div className="mt-3 text-lg font-semibold">{c.title}</div>
            <div className="mt-1 text-sm text-high-contrast-secondary">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Benefits() {
  const stats = [
    { label: 'Faster Integrations', value: 'x5' },
    { label: 'Reduced Incidents', value: '−80%' },
    { label: 'MTTR', value: 'mins' },
    { label: 'Automations', value: '10+' },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
        <h3 className="text-xl font-bold">Why teams choose Zion</h3>
        <ul className="mt-4 space-y-3 text-sm text-high-contrast-secondary">
          <li>• Developer‑first APIs and docs</li>
          <li>• Built‑in observability and rollback safety‑nets</li>
          <li>• Always‑on autonomy: trends, audits, link checks, and more</li>
          <li>• Production‑ready security: scopes, rate limits, signed webhooks</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
        <h3 className="text-xl font-bold">Impact at a glance</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-white/10 bg-black/20 p-4 text-center">
              <div className="text-2xl font-extrabold animate-neon-text-glow">{s.value}</div>
              <div className="text-xs text-high-contrast-secondary mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center text-sm">
      <Link href="/developers"><a className="underline underline-offset-4 hover:text-neon-blue">Developers</a></Link>
      <span className="text-white/30">•</span>
      <Link href="/reports"><a className="underline underline-offset-4 hover:text-neon-blue">Reports</a></Link>
      <span className="text-white/30">•</span>
      <a className="underline underline-offset-4 hover:text-neon-blue" href={`https://github.com/${REPO}`} target="_blank" rel="noreferrer">GitHub</a>
      <span className="text-white/30">•</span>
      <a className="underline underline-offset-4 hover:text-neon-blue" href={`https://github.com/${REPO}/actions`} target="_blank" rel="noreferrer">Workflows</a>
    </div>
  );
}