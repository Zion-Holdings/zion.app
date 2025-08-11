import Head from 'next/head';
import Link from 'next/link';
import { Cpu, Gauge, GitBranch, Rocket, ShieldCheck, Zap, Activity, Globe, Layers, BarChart3, Search, Link2, Palette, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MainFrontIndex() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Zion — Front Systems Hub | Autonomous Cloud Automations</title>
        <meta name="description" content="Futuristic front experience showcasing Zion's autonomous cloud automations — features, capabilities, and benefits." />
        <meta property="og:title" content="Zion — Front Systems Hub" />
        <meta property="og:description" content="Explore the features, capabilities, and benefits behind our autonomous cloud automations." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
      </Head>

      {/* Animated Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Aurora orbs */}
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        {/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        {/* Star field */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="twinkle-field absolute inset-0" />
        </div>
        <div className="absolute inset-0 bg-aurora opacity-[0.18]" />
        {/* Extra futuristic layers */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="absolute h-[52rem] w-[52rem] rounded-full border border-cyan-400/10 animate-[spin_60s_linear_infinite]" />
          <div className="absolute h-[36rem] w-[36rem] rounded-full border border-fuchsia-400/10 animate-[spin_80s_linear_infinite] [animation-direction:reverse]" />
          <div className="absolute h-[24rem] w-[24rem] rounded-full border border-violet-400/10 animate-[spin_100s_linear_infinite]" />
        </div>
        <div className="absolute inset-0 mix-blend-soft-light opacity-[0.07] scanlines" />
        {/* Neural mesh lines */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_400px_at_110%_10%,rgba(168,85,247,0.08),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px),repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]" />
        {/* Futuristic beams layers */}
        <div className="absolute inset-0 beams-layer beams-45" />
        <div className="absolute inset-0 beams-layer beams--45" />
        <div className="pointer-events-none absolute inset-0 beams opacity-[0.06]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/"><a className="text-white/80 hover:text-white">Home</a></Link>
            <Link href="#command-center"><a className="text-white/80 hover:text-white">Command</a></Link>
            <Link href="#agents"><a className="text-white/80 hover:text-white">Agents</a></Link>
            <Link href="#features"><a className="text-white/80 hover:text-white">Features</a></Link>
            <Link href="#feature-map"><a className="text-white/80 hover:text-white">Map</a></Link>
            <Link href="#suites"><a className="text-white/80 hover:text-white">Suites</a></Link>
            <Link href="#use-cases"><a className="text-white/80 hover:text-white">Use&nbsp;Cases</a></Link>
            <Link href="#guardrails"><a className="text-white/80 hover:text-white">Guardrails</a></Link>
            <Link href="#capabilities"><a className="text-white/80 hover:text-white">Capabilities</a></Link>
            <Link href="#benefits"><a className="text-white/80 hover:text-white">Benefits</a></Link>
            <Link href="#reports"><a className="text-white/80 hover:text-white">Reports</a></Link>
            <Link href="#roadmap"><a className="text-white/80 hover:text-white">Docs</a></Link>
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</a></Link>
            <Link href="/automation"><a className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold shadow-[0_0_18px_rgba(34,211,238,0.25)] hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]">Launch Hub</a></Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24"
        >
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Front systems hub — tailored view of our autonomous capabilities
            </div>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              <span className="gradient-text animate-shimmer bg-[length:200%_100%]">Futuristic Front Experience</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
              Explore the features, capabilities, and benefits that power Zion's autonomous cloud automations — optimized for your front‑of‑house experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
              <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Live Workflows</a>
            </div>

            {/* Live metrics strip */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['24/7', 'Autonomous'],
                ['Main', 'Direct Sync'],
                ['0 Ops', 'Cloud‑Native'],
                ['Safety', 'Guardrails'],
              ].map(([k,v]) => (
                <div key={k} className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left">
                  <div className="text-lg font-bold text-white">{k}</div>
                  <div className="text-xs text-white/70">{v}</div>
                </div>
              ))}
            </div>

            {/* Futuristic marquee */}
            <div className="relative mx-auto mt-8 max-w-5xl overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
              <div className="marquee">
                <div className="marquee__track">
                  {[
                    'Autonomous Agents',
                    'Repo Sync to Main',
                    'Zero‑Ops Cloud',
                    'Safety Guardrails',
                    'A11y + Performance',
                    'Observability',
                    'SEO Automation',
                    'Design Evolution',
                  ].flatMap((label) => [label, label]).map((label, idx) => (
                    <span key={`${label}-${idx}`} className="mx-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
              {[
                ['Automation Hub', '/automation'],
                ['SEO Audit', '/reports/seo'],
                ['AI Trends', '/reports/ai-trends'],
                ['Newsroom', '/newsroom'],
                ['Site Health', '/site-health'],
              ].map(([label, href]) => (
                <Link key={label as string} href={href as string}>
                  <a className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">{label as string}</a>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Floating Quick-Nav Dock */}
        <aside className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
          <nav aria-label="Quick section navigation" className="space-y-2">
            {[
              ['#command-center', 'Command'],
              ['#features', 'Features'],
              ['#capabilities', 'Capabilities'],
              ['#benefits', 'Benefits'],
              ['#feature-map', 'Feature Map'],
              ['#reports', 'Reports'],
              ['#guardrails', 'Guardrails'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md hover:border-cyan-400/40 hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Command Center */}
        <section id="command-center" className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Command Center</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Automation Hub', desc: 'Runbooks, factories, and live autonomous agents.', href: '/automation' },
              { title: 'Site Health', desc: 'A11y, performance, and link‑health dashboards.', href: '/site-health' },
              { title: 'SEO Audit', desc: 'Continuous on‑site SEO scans with proposed diffs.', href: '/reports/seo' },
              { title: 'AI Trends', desc: 'Intelligence signals from the AI/cloud ecosystem.', href: '/reports/ai-trends' },
              { title: 'Newsroom', desc: 'Curated updates and product evolution highlights.', href: '/newsroom' },
              { title: 'GitHub Actions', desc: 'Observe pipelines running 24/7 in the cloud.', href: 'https://github.com/Zion-Holdings/zion.app/actions', external: true },
            ].map((card) => (
              <article key={card.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 holo tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                {card.external ? (
                  <a href={card.href} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>
                ) : (
                  <Link href={card.href as string}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a></Link>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Feature Spotlight */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Spotlight</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A quick tour of the most impactful capabilities — each card links to a deep dive.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Rocket, title: 'Automation Hub', desc: 'Factories, agents, and live workflows', href: '/automation' },
              { Icon: Search, title: 'AI SEO Auditor', desc: 'Continuous on‑site SEO improvements', href: '/reports/seo' },
              { Icon: Gauge, title: 'Site Health', desc: 'A11y, performance, and link integrity', href: '/site-health' },
              { Icon: Globe, title: 'AI Trends Radar', desc: 'Signals that inspire new automations', href: '/reports/ai-trends' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Safe, incremental diffs shipped continuously', href: '/automation' },
              { Icon: ShieldCheck, title: 'Guardrails', desc: 'Defense‑in‑depth quality gates', href: '/site-health' },
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Outcome Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Outcome‑Focused Benefits</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Choose an outcome and jump to the relevant systems that make it happen.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Grow organic traffic', desc: 'On‑site SEO improvements, better metadata, richer links', href: '/reports/seo' },
              { label: 'Improve UX quality', desc: 'A11y fixes, performance gains, resilient links', href: '/site-health' },
              { label: 'Reduce engineering toil', desc: 'Automated upgrades, refactors, and maintenance', href: '/automation' },
              { label: 'Ship faster with confidence', desc: 'Small safe diffs synced to main', href: '/automation' },
              { label: 'Stay compliant & accessible', desc: 'Policy guardrails and WCAG checks', href: '/site-health' },
              { label: 'Learn from market signals', desc: 'AI + cloud trends to guide strategy', href: '/reports/ai-trends' },
            ].map((b) => (
              <Link key={b.label} href={b.href}>
                <a className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span className="text-sm text-white/80"><span className="font-semibold text-white">{b.label}</span> — {b.desc} <span className="ml-1 text-cyan-300/90">→</span></span>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Suites */}
        <motion.section
          id="suites"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Suites</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Quick Fixes', desc: 'Build rescue, sitemap/robots, security remediation', href: '/automation' },
              { title: 'Deep Maintenance', desc: 'Orchestrated smoke tests and link checks', href: '/automation' },
              { title: 'Marketing & SEO', desc: 'Content factories and on‑site optimizations', href: '/automation' },
              { title: 'Content Curation', desc: 'Homepage promos generated continuously', href: '/automation' },
              { title: 'Dependency Upgrades', desc: 'Minor/patch bumps with safe auto‑merge', href: '/automation' },
              { title: 'Live Workflows', desc: 'Observe pipelines running 24/7', href: 'https://github.com/Zion-Holdings/zion.app/actions', external: true },
              { title: 'Site Health', desc: 'A11y, performance, link checks dashboards', href: '/site-health' },
              { title: 'AI SEO Auditor', desc: 'Continuous on‑site audits with safe proposed diffs', href: '/reports/seo' },
              { title: 'AI Trends Radar', desc: 'Signal scanning to inspire new factories', href: '/reports/ai-trends' },
            ].map((suite) => (
              <article key={suite.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{suite.title}</h3>
                <p className="mt-1 text-sm text-white/75">{suite.desc}</p>
                {suite.href && (
                  suite.external ? (
                    <a href={suite.href} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>
                  ) : (
                    <Link href={suite.href}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a></Link>
                  )
                )}
              </article>
            ))}
          </div>
        </motion.section>

        {/* Superpowers */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Superpowers</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { Icon: Rocket, title: 'Generative Factories', desc: 'Spins up domain‑specific automation factories that build for you.' },
              { Icon: ShieldCheck, title: 'Safety by Design', desc: 'Layered validations — type checks, builds, a11y, links, and more.' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Small, reviewable edits committed and pushed continuously.' },
            ].map(({ Icon, title, desc }) => (
              <article key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <Icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-white/75">{desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Get Started */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Get Started in Minutes</h2>
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-4">
            <Link href="/automation">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">1. Explore Automations</span></div>
                <p className="mt-1 text-xs text-white/75">See live autonomous suites and workflows.</p>
              </a>
            </Link>
            <Link href="/reports/seo">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Search className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">2. Run SEO Audit</span></div>
                <p className="mt-1 text-xs text-white/75">Get prioritized improvements and artifacts.</p>
              </a>
            </Link>
            <Link href="/site-health">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Gauge className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">3. Check Site Health</span></div>
                <p className="mt-1 text-xs text-white/75">A11y, performance, and link health dashboards.</p>
              </a>
            </Link>
            <Link href="/reports/ai-trends">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">4. Track AI Trends</span></div>
                <p className="mt-1 text-xs text-white/75">Stay ahead with intelligence signals.</p>
              </a>
            </Link>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          id="features"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Zap, title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.', href: '/automation' },
              { Icon: GitBranch, title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.', href: '/automation' },
              { Icon: Cpu, title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.', href: '/automation' },
              { Icon: ShieldCheck, title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.', href: '/site-health' },
              { Icon: Gauge, title: 'Observability', desc: 'Dashboards, reports, and GitHub Actions artifacts.', href: '/site-health' },
              { Icon: Layers, title: 'Composable Systems', desc: 'Chain multiple factories into higher‑order workflows.', href: '/automation' },
              { Icon: Activity, title: 'AI SEO Auditor', desc: 'Continuously scans pages and proposes SEO improvements.', href: '/reports/seo' },
              { Icon: Globe, title: 'AI Trends Radar', desc: 'Tracks AI and cloud signals to inspire new automations.', href: '/reports/ai-trends' },
              { Icon: Search, title: 'Deep Indexing', desc: 'Content and code search powering smart linking and PRs.', href: '/newsroom' },
              { Icon: BarChart3, title: 'Live Dashboards', desc: 'Real‑time quality and impact metrics at a glance.', href: '/site-health' },
              { Icon: Activity, title: 'Health Monitors', desc: 'A11y, links, and performance monitored 24/7.', href: '/site-health' },
              { Icon: Globe, title: 'Intelligence Signals', desc: 'AI research integrated into product improvements.', href: '/reports/ai-trends' },
              { Icon: ShieldCheck, title: 'Security Scans', desc: 'Audit dependencies and surface risks with reports.', href: '/site-health' },
              { Icon: GitBranch, title: 'Automated Changelogs', desc: 'Summarized changes and AI notes published continuously.', href: 'https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md' },
              { Icon: Rocket, title: 'OG Image Maker', desc: 'Auto‑generates rich Open Graph images for content.', href: '/newsroom' },
              { Icon: ShieldCheck, title: 'Policy & Compliance', desc: 'Safety rails and audits applied before shipping.', href: '/site-health' },
              { Icon: Layers, title: 'Factories Library', desc: 'Reusable building blocks for new automations.', href: '/automation' },
              { Icon: Gauge, title: 'Site Health API', desc: 'Programmatic access to health signals and artifacts.', href: '/site-health' },
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className="group glow-card relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Learn more <Link2 className="h-3.5 w-3.5" /></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Outcomes</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">
            Tangible, measurable wins delivered by autonomous cloud agents.
          </p>
          <div className="relative mx-auto mt-6 max-w-6xl overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
            <div className="marquee">
              <div className="marquee__track">
                {[
                  { label: 'Accessibility fixes', href: '/site-health' },
                  { label: 'Performance boosts', href: '/site-health' },
                  { label: 'SEO improvements', href: '/reports/seo' },
                  { label: 'Safer main merges', href: '/automation' },
                  { label: 'Cleaner codebase', href: '/automation' },
                  { label: 'Better content curation', href: '/newsroom' },
                  { label: 'Operational visibility', href: '/site-health' },
                  { label: 'Experiment velocity', href: '/automation' },
                ]
                  .flatMap((item) => [item, item])
                  .map((item, idx) => (
                    <Link key={`${item.label}-${idx}`} href={item.href}>
                      <a className="mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {item.label}
                      </a>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Feature Map */}
        <motion.section
          id="feature-map"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Map</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">
            A fast overview of what you can explore right now across the platform.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Automation Hub', desc: 'Live agents & workflows', href: '/automation' },
              { label: 'Repo Sync to Main', desc: 'Safe, incremental edits', href: '/automation' },
              { label: 'Zero‑Ops Cloud', desc: 'Fully managed execution', href: '/automation' },
              { label: 'Safety Guardrails', desc: 'Defense‑in‑depth checks', href: '/site-health' },
              { label: 'Observability', desc: 'Dashboards & artifacts', href: '/site-health' },
              { label: 'Composable Systems', desc: 'Higher‑order workflows', href: '/automation' },
              { label: 'AI SEO Auditor', desc: 'On‑site improvements', href: '/reports/seo' },
              { label: 'AI Trends Radar', desc: 'Intelligence signals', href: '/reports/ai-trends' },
              { label: 'Deep Indexing', desc: 'Smart linking & PRs', href: '/newsroom' },
              { label: 'Live Dashboards', desc: 'Impact at a glance', href: '/site-health' },
              { label: 'Health Monitors', desc: 'A11y, perf, links', href: '/site-health' },
              { label: 'Docs & Guides', desc: 'Technical notes', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/docs', external: true },
            ].map((item) => (
              item.external ? (
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{item.label}</div>
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{item.label}</div>
                    <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {/* Platform Modules */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Platform Modules</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Rocket, title: 'Autonomous Factories', desc: 'Composable, domain‑specific automation factories.', href: '/automation' },
              { Icon: ShieldCheck, title: 'Guardrails', desc: 'Defense‑in‑depth validations and policy enforcement.', href: '/site-health' },
              { Icon: Gauge, title: 'Observability', desc: 'Dashboards, artifacts, and live CI telemetry.', href: '/site-health' },
              { Icon: Activity, title: 'SEO Ops', desc: 'Continuous audits and safe, suggested diffs.', href: '/reports/seo' },
              { Icon: Globe, title: 'AI Intelligence', desc: 'Trends radar to guide new automation ideas.', href: '/reports/ai-trends' },
              { Icon: Layers, title: 'Workflow Composer', desc: 'Chain factories into higher‑order systems.', href: '/automation' },
              { Icon: GitBranch, title: 'Main Sync Engine', desc: 'Small, reviewable edits merged continuously.', href: '/automation' },
              { Icon: Cpu, title: 'Zero‑Ops Runtime', desc: 'Cloud‑native execution with no servers to manage.', href: '/automation' },
              { Icon: BarChart3, title: 'Impact Analytics', desc: 'Track outcomes and ROI from automations.', href: '/site-health' },
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <Link2 className="h-3.5 w-3.5" /></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section
          id="use-cases"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Use Cases</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'AI SEO Auditor', desc: 'Continuously scans pages and proposes SEO improvements with safe diffs.' },
              { title: 'Design Beautifier', desc: 'Upgrades UI components with modern, cohesive visual language.' },
              { title: 'Content Curator', desc: 'Surfaces and promotes high‑value content with links and metadata.' },
              { title: 'Performance Tuner', desc: 'Optimizes bundles, images, and scripts for faster loads.' },
              { title: 'A11y Guardian', desc: 'Catches and fixes accessibility issues before they ship.' },
              { title: 'Growth Experiments', desc: 'Spins up micro‑experiments and measures impact automatically.' },
            ].map((u) => (
              <article key={u.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{u.title}</h3>
                <p className="mt-1 text-sm text-white/75">{u.desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <div className="neon-divider mx-auto mb-8 h-px w-full max-w-5xl" />
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Live Impact</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ['Workflows', '1,200+'],
              ['Commits Synced', '800+'],
              ['Automated Edits', '3,500+'],
              ['Uptime', '99.95%'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
                <div className="text-2xl font-extrabold tracking-tight">{value}</div>
                <div className="mt-1 text-xs text-white/70">{label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Capabilities */}
        <motion.section
          id="capabilities"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { Icon: Palette, title: 'Design Evolution', desc: 'Autonomously beautifies UI with consistent, futuristic patterns.', href: '/newsroom' },
              { Icon: BarChart3, title: 'Performance & A11y', desc: 'Optimizes bundles, assets, and accessibility with continuous checks.', href: '/site-health' },
              { Icon: LineChart, title: 'Content & SEO', desc: 'Curates content, updates promos, and tunes metadata for reach.', href: '/reports/seo' },
              { Icon: Layers, title: 'Code Quality & Refactors', desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.', href: '/automation' },
              { Icon: Gauge, title: 'Observability & Reports', desc: 'Artifacts, dashboards, and live logs for every automation.', href: '/site-health' },
              { Icon: Globe, title: 'Intelligence Signals', desc: 'AI + cloud trend tracking to spark new factory ideas.', href: '/reports/ai-trends' },
              { Icon: GitBranch, title: 'Repo Sync to Main', desc: 'Small, safe diffs merged continuously for momentum.', href: '/automation' },
              { Icon: ShieldCheck, title: 'Guardrails & Policy', desc: 'Organization‑wide safety rules enforced automatically.', href: '/site-health' },
              { Icon: Cpu, title: 'Zero‑Ops Cloud', desc: 'Fully managed cloud execution with no servers to babysit.', href: '/automation' },
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className="relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{desc}</p>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Why Zion */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Why Zion</h2>
          <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ['🚀', 'Speed', 'Continuous delivery to main with safe, incremental changes.'],
              ['🛡️', 'Safety', 'Conservative edits and guardrails keep production stable.'],
              ['📈', 'Scale', 'Automatically generates new factories as your needs grow.'],
            ].map(([icon, title, desc]) => (
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-2xl">{icon as string}</div>
                <div className="mt-2 text-base font-semibold">{title as string}</div>
                <div className="mt-1 text-sm text-white/75">{desc as string}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section
          id="benefits"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-20"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits</h2>
          {/* Benefits ticker */}
          <div className="relative mx-auto mt-4 max-w-5xl overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
            <div className="marquee">
              <div className="marquee__track">
                {[
                  { label: '24/7 autonomous progress', href: '/automation' },
                  { label: 'Main branch delivery', href: '/automation' },
                  { label: 'A11y & performance wins', href: '/site-health' },
                  { label: 'Continuous SEO gains', href: '/reports/seo' },
                  { label: 'Transparent artifacts', href: '/site-health' },
                  { label: 'Guardrails & policy', href: '/site-health' },
                  { label: 'Faster iteration loops', href: '/newsroom' },
                  { label: 'Lower operational toil', href: '/automation' },
                ].flatMap((i) => [i, i]).map((i, idx) => (
                  <Link key={`${i.label}-${idx}`} href={i.href}>
                    <a className="mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {i.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              '24/7 progress without human intervention',
              'Rapid feedback loop with safe, incremental edits',
              'Continuous delivery directly to main branch',
              'Fewer regressions via layered checks and reports',
              'Higher velocity with automated maintenance',
              'Reduced costs via zero‑ops and automated QA',
              'Consistent design language and UX quality',
              'Transparent artifacts and live workflow logs',
              'Faster experiment velocity with measurable impact',
              'Improved search visibility via continuous SEO',
              'Happier users thanks to performance & a11y wins',
              'Lower operational risk through guardrails',
              'Improved discoverability via deep indexing and SEO',
              'Happier engineers with less toil and more creation',
              'Confident shipping through automated guardrails',
              'Predictable quality gates and SLOs upheld automatically',
              'Auditability for compliance with full traceability',
              'Happier teams: less toil, more product value',
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span className="text-sm text-white/80">{b}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Benefits in Practice */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits in Practice</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">See where each benefit shows up in the product.</p>
          <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: '24/7 progress', desc: 'Agents keep shipping while you sleep', href: '/automation' },
              { label: 'Rapid feedback loop', desc: 'Tight iteration cycles on UX & code', href: '/newsroom' },
              { label: 'Main branch delivery', desc: 'Small, safe diffs merged continuously', href: 'https://github.com/Zion-Holdings/zion.app/actions', external: true },
              { label: 'Fewer regressions', desc: 'Layered checks catch issues early', href: '/site-health' },
              { label: 'Increased reach', desc: 'Continuous SEO improvements', href: '/reports/seo' },
              { label: 'Strategic insights', desc: 'AI + cloud trend tracking', href: '/reports/ai-trends' },
            ].map((b) => (
              b.external ? (
                <a key={b.label} href={b.href as string} target="_blank" rel="noopener" className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span className="text-sm text-white/80"><span className="font-semibold text-white">{b.label}</span> — {b.desc} <span className="ml-1 text-cyan-300/90">↗</span></span>
                </a>
              ) : (
                <Link key={b.label} href={b.href as string}>
                  <a className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                    <span className="text-sm text-white/80"><span className="font-semibold text-white">{b.label}</span> — {b.desc} <span className="ml-1 text-cyan-300/90">→</span></span>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {/* Tailored Value by Team */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Tailored Value by Team</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Developers', desc: 'Code quality, refactors, upgrades, reliability', href: '/automation' },
              { title: 'Product', desc: 'Faster UX improvements, experiments, insights', href: '/newsroom' },
              { title: 'Marketing', desc: 'SEO automation, content curation, reach', href: '/reports/seo' },
              { title: 'Operations', desc: 'A11y, performance, and link‑health dashboards', href: '/site-health' },
            ].map((card) => (
              <Link key={card.title} href={card.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <Link2 className="h-3.5 w-3.5" /></div>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* Ecosystem & Integrations */}
        <motion.section
          id="reports"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Ecosystem & Integrations</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">GitHub Actions</h3>
              </div>
              <p className="mt-1 text-sm text-white/75">Live pipelines, logs, and artifacts powering automations.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Open →</div>
            </a>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Netlify</h3>
              </div>
              <p className="mt-1 text-sm text-white/75">Zero‑ops hosting and functions for maintenance schedules.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Learn more →</div>
            </a>
            <a href="https://supabase.com/" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Supabase</h3>
              </div>
              <p className="mt-1 text-sm text-white/75">Realtime data and storage for emerging automation needs.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Explore →</div>
            </a>
            <a href="https://www.framer.com/motion/" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Framer Motion</h3>
              </div>
              <p className="mt-1 text-sm text-white/75">Futuristic micro‑interactions and motion design system.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Docs →</div>
            </a>
          </div>
        </motion.section>

        {/* Quality Gates & Guardrails */}
        <motion.section
          id="guardrails"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Quality Gates & Guardrails</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Accessibility', desc: 'Automated checks and fixes for WCAG compliance.', href: '/site-health' },
              { title: 'Link Integrity', desc: 'Broken links detected before release.', href: '/site-health' },
              { title: 'Performance', desc: 'Budgets enforced and improved continuously.', href: '/site-health' },
              { title: 'Safe Diffs', desc: 'Conservative, reviewable changes synced to main.', href: '/automation' },
            ].map((g) => (
              <Link key={g.title} href={g.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{g.desc}</p>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Tech */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
            <p className="text-white/70">Powered by modern cloud and AI tooling</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
              {['Next.js','TypeScript','Tailwind','Framer Motion','Supabase','Netlify'].map((t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] glow-pulse">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Quick Start */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Quick Start</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ['Explore', 'Browse live automations', '/automation'],
              ['Audit', 'Check site health', '/site-health'],
              ['Optimize', 'Run the SEO auditor', '/reports/seo'],
              ['Learn', 'Follow AI trends', '/reports/ai-trends'],
            ].map(([title, desc, href]) => (
              <Link key={title as string} href={href as string}>
                <a className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="text-sm font-semibold text-white">{title as string}</div>
                  <div className="mt-1 text-xs text-white/70">{desc as string}</div>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-24"
        >
          <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold">Ready to build with autonomous cloud agents?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Scale development with a tireless fleet of self‑improving automations.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Automations</a></Link>
            </div>
          </div>
        </motion.section>

        {/* Deep Dives */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Deep Dives</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Hub — live agents & reports</span></a></Link>
            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — latest autonomous updates</span></a></Link>
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
            <Link href="/reports/seo"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">SEO Audit Report — continuous improvements</span></a></Link>
            <Link href="/reports/ai-trends"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">AI Trends Radar — intelligence signals</span></a></Link>
            <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">GitHub Actions — live workflows</span></a>
            <a href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Docs — technical notes & guides</span></a>
          </div>
        </motion.section>

        {/* Futuristic Templates & Effects */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Futuristic Templates & Effects</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore shimmering gradients, holographic cards, beams overlays, and animated grids used across the experience.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Holographic Cards', 'Polished surfaces with subtle glow', '/newsroom'],
              ['Neon Rings', 'Animated borders and radial accents', '/newsroom'],
              ['Beams Overlay', 'Diagonal light layers and scanlines', '/site-health'],
              ['Animated Grids', 'Soft motion backgrounds and twinkles', '/automation'],
            ].map(([label, desc, href]) => (
              <Link key={label as string} href={href as string}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{label as string}</div>
                  <div className="mt-1 text-sm text-white/75">{desc as string}</div>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* Demos & Live Data */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Demos & Live Data</h2>
          <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/automation"><a className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">Automation Hub →</a></Link>
            <Link href="/site-health"><a className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">Site Health →</a></Link>
            <Link href="/reports/seo"><a className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">SEO Audit →</a></Link>
            <Link href="/reports/ai-trends"><a className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">AI Trends →</a></Link>
            <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">GitHub Actions ↗</a>
          </div>
        </section>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Highlights</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/automation"><a className="holo tilt-on-hover rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-base font-semibold">Automation Hub</div>
              <div className="mt-1 text-sm text-white/75">Live agents, factories, and workflows</div>
            </a></Link>
            <Link href="/reports/seo"><a className="holo tilt-on-hover rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-base font-semibold">SEO Audit</div>
              <div className="mt-1 text-sm text-white/75">Continuous on‑site improvements</div>
            </a></Link>
            <Link href="/site-health"><a className="holo tilt-on-hover rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-base font-semibold">Site Health</div>
              <div className="mt-1 text-sm text-white/75">A11y, performance, and link checks</div>
            </a></Link>
            <Link href="/reports/ai-trends"><a className="holo tilt-on-hover rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-base font-semibold">AI Trends</div>
              <div className="mt-1 text-sm text-white/75">Signals that inspire new factories</div>
            </a></Link>
          </div>
        </motion.section>

        {/* Case Studies & Stories */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Case Studies & Stories</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Real outcomes from autonomous systems at work — dive into detailed write‑ups.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: 'UX Lift on Homepage', desc: 'Autonomous design evolution and promo curation.', href: '/newsroom' },
              { title: 'SEO Wins in 30 Days', desc: 'Continuous audits and safe diffs improved visibility.', href: '/reports/seo' },
              { title: 'Zero‑Ops Rollouts', desc: 'Pipelines deliver small, safe changes to main.', href: '/automation' },
            ].map((s) => (
              <Link key={s.title} href={s.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{s.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read more <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Roadmap & Docs */}
        <motion.section
          id="roadmap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Roadmap & Docs</h2>
          <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <a href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Documentation</div>
              <div className="mt-1 text-sm text-white/75">Technical notes and guides for the platform.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">AI Changelog</div>
              <div className="mt-1 text-sm text-white/75">Summarized autonomous changes and highlights.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="https://github.com/Zion-Holdings/zion.app/issues" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Open Issues</div>
              <div className="mt-1 text-sm text-white/75">Track roadmap items and discussions.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Browse <span aria-hidden>↗</span></div>
            </a>
            <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Live Pipelines</div>
              <div className="mt-1 text-sm text-white/75">Observe builds, checks, and deployments 24/7.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </motion.section>

        {/* Floating CTA Ribbon */}
        <div className="fixed inset-x-0 bottom-4 z-20 mx-auto max-w-3xl px-4">
          <div className="animated-border flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
            <div className="text-sm text-white/80">Launch automations now — safe diffs, continuous delivery.</div>
            <div className="flex items-center gap-2">
              <Link href="/automation"><a className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold">Open Hub</a></Link>
              <Link href="/reports/seo"><a className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm">SEO Audit</a></Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-lg font-bold tracking-wide">
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
                <Link href="/automation"><a>Automations</a></Link>
                <Link href="/newsroom"><a>Newsroom</a></Link>
                <Link href="/site-health"><a>Site Health</a></Link>
                <a href="https://github.com/Zion-Holdings/zion.app" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>
        </footer>

        {/* AI Agents Gallery */}
        <motion.section
          id="agents"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">AI Agents Gallery</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Meet the autonomous agents powering your outcomes. Each card links to a live system.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Search, title: 'AI SEO Auditor', desc: 'Continuously improves on‑site SEO with safe diffs.', href: '/reports/seo' },
              { Icon: Link2, title: 'Link Healer', desc: 'Finds and fixes broken links with dashboards.', href: '/site-health' },
              { Icon: Palette, title: 'Design Beautifier', desc: 'Evolves UI with cohesive, futuristic patterns.', href: '/newsroom' },
              { Icon: Gauge, title: 'Performance Tuner', desc: 'Optimizes bundles and runtime for speed.', href: '/site-health' },
              { Icon: Layers, title: 'Factory Composer', desc: 'Chains automations into higher‑order workflows.', href: '/automation' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Ships small, safe diffs to main continuously.', href: '/automation' },
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
