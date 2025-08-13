import Head from 'next/head';
import Link from 'next/link';
import { Cpu, Gauge, GitBranch, Rocket, ShieldCheck, Zap, Activity, Globe, Layers, BarChart3, Search, Link2, Palette, LineChart } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MainFrontIndex() {
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.2 });
  const [showToTop, setShowToTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true } as any);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
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
      {/* Scroll progress bar */}
      <motion.div style={{ scaleX: progressX }} className="fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400" />
      {/* Animated Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Aurora orbs */}
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        {/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 opacity-[0.06] hex-grid" />
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
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/55 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/"><a className="text-white/80 hover:text-white">Home</a></Link>
            <Link href="#command-center"><a className="text-white/80 hover:text-white">Command</a></Link>
            <Link href="#features"><a className="text-white/80 hover:text-white">Features</a></Link>
            <Link href="#feature-map"><a className="text-white/80 hover:text-white">Map</a></Link>
            <Link href="#suites"><a className="text-white/80 hover:text-white">Suites</a></Link>
            <Link href="#capabilities"><a className="text-white/80 hover:text-white">Capabilities</a></Link>
            <Link href="#use-cases"><a className="text-white/80 hover:text-white">Use Cases</a></Link>
            <Link href="#pillars"><a className="text-white/80 hover:text-white">Pillars</a></Link>
            <Link href="#benefits"><a className="text-white/80 hover:text-white">Benefits</a></Link>
            <Link href="#templates"><a className="text-white/80 hover:text-white">Templates</a></Link>
            <Link href="#demos"><a className="text-white/80 hover:text-white">Demos</a></Link>
            <Link href="#highlights"><a className="text-white/80 hover:text-white">Highlights</a></Link>
            <Link href="#cases"><a className="text-white/80 hover:text-white">Cases</a></Link>
            <Link href="#reports"><a className="text-white/80 hover:text-white">Reports</a></Link>
            <Link href="#roadmap"><a className="text-white/80 hover:text-white">Docs</a></Link>
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</a></Link>
          </div>
          <button aria-label="Open menu" onClick={() => setMobileOpen(true)} className="md:hidden rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80">Menu</button>
        </nav>
        {/* Mobile overlay menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-20 w-[92%] max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-semibold">Navigate</div>
                <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs">Close</button>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ['Home','/'],
                  ['Command','#command-center'],
                  ['Features','#features'],
                  ['Map','#feature-map'],
                  ['Suites','#suites'],
                  ['Capabilities','#capabilities'],
                  ['Use Cases','#use-cases'],
                  ['Pillars','#pillars'],
                  ['Benefits','#benefits'],
                  ['Templates','#templates'],
                  ['Demos','#demos'],
                  ['Highlights','#highlights'],
                  ['Cases','#cases'],
                  ['Reports','#reports'],
                  ['Docs','#roadmap'],
                  ['Automations','/automation'],
                ].map(([label, href]) => (
                  (href as string).startsWith('#') ? (
                    <a key={label as string} href={href as string} onClick={() => setMobileOpen(false)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">{label as string}</a>
                  ) : (
                    <Link key={label as string} href={href as string}>
                      <a onClick={() => setMobileOpen(false)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">{label as string}</a>
                    </Link>
                  )
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <Link href="/automation"><a onClick={() => setMobileOpen(false)} className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold">Launch Hub</a></Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <div role="main" className="relative z-10">
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
            <div className="mx-auto mt-3 flex max-w-2xl items-center justify-center gap-2 text-xs text-white/60">
              <a href="#feature-map" className="hover:text-white">Feature Map</a>
              <span aria-hidden>•</span>
              <a href="#capabilities" className="hover:text-white">Capabilities</a>
              <span aria-hidden>•</span>
              <a href="#benefits" className="hover:text-white">Benefits</a>
              <span aria-hidden>•</span>
              <a href="#reports" className="hover:text-white">Integrations</a>
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
              Explore the features, capabilities, and benefits that power Zion's autonomous cloud automations — optimized for your front‑of‑house experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Cloud Automations</a></Link>
            </div>

            {/* Cloud Automations Spotlight */}
            <div className="mx-auto mt-6 max-w-5xl text-left">
              <div className="mb-2 text-xs uppercase tracking-wide text-white/60">Cloud Automations (live)</div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/ultra-rapid-sync.yml" target="_blank" rel="noopener">Ultra Rapid Sync →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/automation-advertiser.yml" target="_blank" rel="noopener">Automation Advertiser →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/knowledge-graph-radar.yml" target="_blank" rel="noopener">Knowledge Graph & Radar →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/site-health-guardian.yml" target="_blank" rel="noopener">Site Health Guardian →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="/.netlify/functions/autonomous-meta-orchestrator">Meta Orchestrator →</a>
              </div>
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
                ['Roadmap Curator','/.netlify/functions/roadmap-curator'],
                ['Revenue Ideas','/.netlify/functions/revenue-ideas-lab'],
                ['Auto Discovery','/.netlify/functions/auto-discovery-runner'],
              ].map(([label, href]) => (
                <Link key={label as string} href={href as string}>
                  <a className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">{label as string}</a>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

                 {/* Showcase */}
         <motion.section
           id="showcase"
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5 }}
           className="mx-auto max-w-7xl px-6 pb-14"
         >
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Showcase: Features, Capabilities, Benefits</h2>
           <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Jump into highlighted areas of the platform. Every card links to a deep section or dedicated page.</p>
           <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Link href="#features">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Explore Features</h3></div>
                <p className="mt-1 text-sm text-white/75">Self‑improving systems, composable factories, observability and more.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#capabilities">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Cpu className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Browse Capabilities</h3></div>
                <p className="mt-1 text-sm text-white/75">Design evolution, SEO, a11y, performance, refactors, and policy.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#benefits">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Gauge className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">See Benefits</h3></div>
                <p className="mt-1 text-sm text-white/75">Momentum, quality, safety, and measurable outcomes.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#feature-map">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Feature Map</h3></div>
                <p className="mt-1 text-sm text-white/75">A quick overview of what you can explore right now.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#guardrails">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Guardrails</h3></div>
                <p className="mt-1 text-sm text-white/75">Defense‑in‑depth checks and safety before shipping.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="/automation">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Automation Hub</h3></div>
                <p className="mt-1 text-sm text-white/75">Factories, agents, and live workflows in one place.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
          </div>
        </motion.section>

        {/* Auto-Promoted Features (auto-generated) */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Automation Hub</div>
  <div className="mt-1 text-sm text-white/75">Live agents & workflows</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Site Health</div>
  <div className="mt-1 text-sm text-white/75">A11y, performance, links</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">AI SEO Auditor</div>
  <div className="mt-1 text-sm text-white/75">On‑site improvements</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">AI Trends Radar</div>
  <div className="mt-1 text-sm text-white/75">Signals powering strategy</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Newsroom</div>
  <div className="mt-1 text-sm text-white/75">Product evolution</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <a href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Docs & Guides</div>
  <div className="mt-1 text-sm text-white/75">Technical notes</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">AI Changelog</div>
  <div className="mt-1 text-sm text-white/75">Summarized updates</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          </div>
        </section>

        {/* Floating Quick-Nav Dock */}
        <aside className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
          <nav aria-label="Quick section navigation" className="space-y-2">
            {[
              ['#command-center', 'Command'],
              ['#feature-map', 'Map'],
              ['#engines', 'Engines'],
              ['#suites', 'Suites'],
              ['#capabilities', 'Capabilities'],
              ['#use-cases', 'Use Cases'],
              ['#pillars', 'Pillars'],
              ['#benefits', 'Benefits'],
              ['#templates', 'Templates'],
              ['#demos', 'Demos'],
              ['#highlights', 'Highlights'],
              ['#cases', 'Cases'],
              ['#reports', 'Reports'],
              ['#guardrails', 'Guardrails'],
              ['#roadmap', 'Docs'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md hover:border-cyan-400/40 hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Engines: Alternative Automation Runtimes */}
        <motion.section
          id="engines"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Engines (Beyond GitHub Actions)</h2>

          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">We run outside GitHub Actions using scheduled cloud functions and orchestrators. Explore the engines below.</p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/.netlify/functions/front-enhancer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Netlify Scheduled Functions</div>
              <p className="mt-1 text-sm text-white/75">Cron-like cloud jobs that run every 20 minutes to enhance the front experience.</p>
              <div className="mt-3 text-xs text-cyan-300/90">View logs via Netlify →</div>
            </a>
            <a
              href="https://github.com/Zion-Holdings/zion.app/tree/main/automation"
              target="_blank" rel="noopener"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Local Orchestrators</div>
              <p className="mt-1 text-sm text-white/75">Node-based orchestrators that can run on any scheduler or platform.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Browse orchestration scripts ↗</div>
            </a>
            <a
              href="/automation"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Autonomous Cloud Orchestrator</div>
              <p className="mt-1 text-sm text-white/75">End-to-end agents launching factories and syncing safe diffs to main.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Open Automation Hub →</div>
            </a>
          </div>
        </motion.section>

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
              { title: 'Cloud Automations', desc: 'Netlify scheduled functions powering jobs 24/7.', href: '/automation' },
              { title: 'Docs', desc: 'Technical notes and guides for the platform.', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/docs', external: true },
              { title: 'AI Changelog', desc: 'Summarized autonomous changes and highlights.', href: 'https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md', external: true }
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

        {/* Netlify Automations */}
        <motion.section
          id="netlify-automations"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Netlify Automations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Zero‑ops scheduled functions power background tasks that improve the site and ship small, safe diffs to main.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[ 
              { label: 'Homepage Advertiser', desc: 'Curates and updates the home explore section.', href: '/.netlify/functions/homepage_advertiser' },
              { label: 'Cloud Orchestrator', desc: 'Runs fast improvement cycle and git sync.', href: '/.netlify/functions/cloud_orchestrator' },
              { label: 'Sitemap Runner', desc: 'Keeps sitemap fresh for SEO visibility.', href: '/.netlify/functions/sitemap_runner' },
              { label: 'SEO Audit Runner', desc: 'Analyzes meta and content signals; writes public report.', href: '/.netlify/functions/seo-audit-runner' },
              { label: 'AI Trends Radar', desc: 'Builds AI trends report from curated sources.', href: '/.netlify/functions/ai-trends-radar-runner' },
              { label: 'Dependency Auto‑Upgrade', desc: 'Safely bumps deps and verifies a clean build.', href: '/.netlify/functions/deps-auto-upgrade-runner' }
            ].map((f) => (
              <a key={f.label} href={f.href} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">{f.label}</div>
                <div className="mt-1 text-sm text-white/75">{f.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* GitHub Actions Automations */}
        <motion.section
          id="github-actions-automations"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">GitHub Actions Automations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Autonomous, cloud‑hosted workflows that run on a fast cadence and sync changes to main automatically.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Ultra Rapid Sync (1m)', desc: 'Continuously syncs and applies safe homepage/front updates.', href: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/ultra-rapid-sync.yml' },
              { label: 'Cloud Autonomous Orchestrator (5m)', desc: 'Runs orchestrator, homepage/front curators, and sitemap.', href: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/cloud-autonomous-orchestrator.yml' },
              { label: 'Docs Intelligence (2h)', desc: 'Refreshes docs pages index, component props, and search index.', href: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/docs-intelligence.yml' },
              { label: 'Media Optimizer (6h)', desc: 'Optimizes and deduplicates media assets.', href: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/media-optimizer.yml' },
              { label: 'Topics & Clusters (6h)', desc: 'Publishes topics map and content clusters.', href: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/topics-and-clusters.yml' },
              { label: 'Security Auto‑Heal (daily)', desc: 'Scans and applies safe security fixes.', href: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/security-auto-heal.yml' }
            ].map((f) => (
              <a key={f.label} href={f.href} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">{f.label}</div>
                <div className="mt-1 text-sm text-white/75">{f.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </motion.section>

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
              { Icon: Gauge, title: 'Observability', desc: 'Dashboards, reports, and cloud automation artifacts.', href: '/site-health' },
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
              { Icon: Search, title: 'Link Integrity', desc: 'Broken links detected and fixed before shipping.', href: '/site-health' },
              { Icon: Palette, title: 'Design System Evolution', desc: 'Consistent, modern UI upgrades across the app.', href: '/newsroom' },
              { Icon: BarChart3, title: 'Analytics Exports', desc: 'Download artifacts and reports for deeper analysis.', href: '/reports/seo' },
              { Icon: Search, title: 'Automated PR Reviews', desc: 'Bots review diffs for quality, style, and policy.', href: '/automation' },
              { Icon: Gauge, title: 'Asset Optimizer', desc: 'Compresses images and scripts for faster pages.', href: '/site-health' },
              { Icon: Layers, title: 'i18n Readiness', desc: 'Prepares content and routes for localization.', href: '/newsroom' },
              { Icon: Globe, title: 'Sitemap & Robots', desc: 'Maintains search‑friendly routing metadata.', href: '/site-health' },
              { Icon: Palette, title: 'Design Tokens', desc: 'Automates consistent theming and spacing.', href: '/newsroom' },
              { Icon: LineChart, title: 'Experiment Telemetry', desc: 'Measures impact across experiments and releases.', href: '/reports/seo' },
              { Icon: Activity, title: 'Automated Dependencies', desc: 'Minor/patch upgrades proposed and merged safely.', href: '/automation' },
              { Icon: Search, title: 'Broken Link Defender', desc: 'Continuously scans and fixes link integrity issues.', href: '/site-health' },
              { Icon: LineChart, title: 'Experimentation', desc: 'Automate A/B setups and monitor telemetry automatically.', href: '/automation' },
              { Icon: Palette, title: 'Design Tokens & Theming', desc: 'Enforce consistent theming, spacing, and motion.', href: '/newsroom' },
              { Icon: Gauge, title: 'Image Pipeline', desc: 'Optimize and transform media assets automatically.', href: '/site-health' },
              { Icon: Layers, title: 'Factory Composer', desc: 'Chains automations into higher‑order workflows.', href: '/automation' },
              { Icon: Layers, title: 'Meta Orchestrator', desc: 'Triggers prioritized cloud functions and syncs changes.', href: '/.netlify/functions/intelligent-meta-orchestrator' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Ships small, safe diffs to main continuously.', href: '/automation' }
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

        {/* AUTO: catalog injection for automated advertising */}
        {/* AUTO:FRONT_INDEX_DIRECTORY_START */

<section id="auto-catalog" className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Catalog</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Auto‑discovered features, capabilities, and resources. Kept fresh by in‑repo Node tools.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Automation Hub</div><div className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Site Health</div><div className="mt-1 text-sm text-white/75">A11y, performance, and link dashboards</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI SEO Auditor</div><div className="mt-1 text-sm text-white/75">Continuous on‑site SEO improvements</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI Trends Radar</div><div className="mt-1 text-sm text-white/75">Signals that inspire new automations</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Newsroom</div><div className="mt-1 text-sm text-white/75">Curated updates and product evolution highlights</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/roadmap"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Roadmap</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Front</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0610"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0610</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0609"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0609</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0608"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0608</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0607"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0607</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0606"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0606</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0605"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0605</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0604"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0604</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0603"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0603</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0602"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0602</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0601"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0601</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0600"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0600</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0559"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0559</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/updates/update-2025-08-13-0558"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Reports Updates Update-2025-08-13-0558</div><div className="mt-1 text-sm text-white/75">Explore more</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
  </div>
</section>

/* AUTO:FRONT_INDEX_DIRECTORY_END */}

        {/* Platform Modules */}
        <motion.section
           id="modules"
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

        {/* Neural Feature Matrix */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Neural Feature Matrix</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A denser, at-a-glance atlas of what Zion ships autonomously. Every tile links to the live hub, report, or docs.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Automation Hub', desc: 'Factories, agents, workflows', href: '/automation' },
              { label: 'Main Sync Engine', desc: 'Safe diffs to main', href: '/automation' },
              { label: 'Zero‑Ops Cloud', desc: 'Run in the cloud, no servers', href: '/automation' },
              { label: 'Guardrails', desc: 'Policy + safety gates', href: '/site-health' },
              { label: 'Site Health', desc: 'A11y, performance, links', href: '/site-health' },
              { label: 'AI SEO Auditor', desc: 'Continuous on‑site SEO', href: '/reports/seo' },
              { label: 'AI Trends Radar', desc: 'Signals powering strategy', href: '/reports/ai-trends' },
              { label: 'Content Curation', desc: 'Promos and deep links', href: '/newsroom' },
              { label: 'Factories Library', desc: 'Composable building blocks', href: '/automation' },
              { label: 'Impact Dashboards', desc: 'Artifacts and telemetry', href: '/site-health' },
              { label: 'Link Integrity', desc: 'Broken links defender', href: '/site-health' },
              { label: 'Design Evolution', desc: 'Futuristic UI upgrades', href: '/newsroom' },
              { label: 'Docs & Guides', desc: 'Technical notes', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/docs', external: true },
              { label: 'AI Changelog', desc: 'Summarized updates', href: 'https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md', external: true },
                             { label: 'Cloud Automations', desc: 'Netlify scheduled functions', href: '/automation' },
               { label: 'Roadmap & Issues', desc: "What's next", href: 'https://github.com/Zion-Holdings/zion.app/issues', external: true }
            ].map((item) => (
              item.external ? (
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{item.label}</div>
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
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

        {/* Extended Feature Directory */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Extended Feature Directory</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A broader tour of autonomous capabilities. Each card links to the relevant hub, report, or live workflow.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: GitBranch, title: 'Automated Changelogs', desc: 'AI-authored CHANGELOG with continuous updates.', href: 'https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md', external: true },
              { Icon: Rocket, title: 'Content Curation', desc: 'Homepage promos and deep links generated on the fly.', href: '/newsroom' },
              { Icon: Search, title: 'Deep Site Index', desc: 'Smarter internal linking and content discovery.', href: '/newsroom' },
              { Icon: ShieldCheck, title: 'Policy & Compliance', desc: 'Safety rails and audits before changes ship.', href: '/site-health' },
              { Icon: BarChart3, title: 'Impact Dashboards', desc: 'Real-time visibility into outcomes and ROI.', href: '/site-health' },
              { Icon: Layers, title: 'Factories Library', desc: 'Composable building blocks for new automations.', href: '/automation' },
              { Icon: Activity, title: 'Health Monitors', desc: 'A11y, links, and performance monitored 24/7.', href: '/site-health' },
              { Icon: Cpu, title: 'Zero-Ops Runtime', desc: 'Fully managed cloud execution with no servers.', href: '/automation' },
              { Icon: Globe, title: 'Intelligence Signals', desc: 'AI + cloud trend tracking fueling new ideas.', href: '/reports/ai-trends' },
            ].map(({ Icon, title, desc, href, external }) => (
              external ? (
                <a key={title} href={href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">{title}</h3></div>
                  <p className="mt-1 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={title} href={href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">{title}</h3></div>
                    <p className="mt-1 text-sm text-white/75">{desc}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {/* Capability Deep Links */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capability Deep Links</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Jump directly to the systems that deliver each capability.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['SEO Automation', 'On-site scans and safe diffs to improve visibility', '/reports/seo'],
              ['Site Health', 'A11y, performance, and resilient links at a glance', '/site-health'],
              ['Automation Hub', 'Factories and live autonomous workflows', '/automation'],
              ['AI Trends Radar', 'Signals inspiring new factories and experiments', '/reports/ai-trends'],
              ['Newsroom', 'Curated updates and product evolution highlights', '/newsroom'],
              ['Live Pipelines', 'Observe CI pipelines, logs, and artifacts', 'https://github.com/Zion-Holdings/zion.app/actions'],
              ['Documentation', 'Technical notes, guides, and changelog', 'https://github.com/Zion-Holdings/zion.app/tree/main/docs'],
              ['AI Changelog', 'Summarized autonomous changes and highlights', 'https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md'],
            ].map(([label, desc, href]) => (
              (href as string).startsWith('http') ? (
                <a key={label as string} href={href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{label as string}</div>
                  <div className="mt-1 text-sm text-white/75">{desc as string}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={label as string} href={href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{label as string}</div>
                    <div className="mt-1 text-sm text-white/75">{desc as string}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
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
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { label: 'Workflows', value: '1,200+', href: 'https://github.com/Zion-Holdings/zion.app/actions', external: true },
              { label: 'Commits Synced', value: '800+', href: '/automation' },
              { label: 'Automated Edits', value: '3,500+', href: '/automation' },
              { label: 'Uptime', value: '99.95%', href: '/site-health' },
              { label: 'A11y Checks', value: '20k+', href: '/site-health' },
              { label: 'SEO Fixes', value: '4.2k+', href: '/reports/seo' },
            ].map((item) => (
              item.external ? (
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                  <div className="text-2xl font-extrabold tracking-tight">{item.value}</div>
                  <div className="mt-1 text-xs text-white/70">{item.label}</div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                    <div className="text-2xl font-extrabold tracking-tight">{item.value}</div>
                    <div className="mt-1 text-xs text-white/70">{item.label}</div>
                  </a>
                </Link>
              )
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
              { Icon: Activity, title: 'Automated Dependencies', desc: 'Minor/patch upgrades proposed and merged safely.', href: '/automation' },
              { Icon: Search, title: 'Broken Link Defender', desc: 'Continuously scans and fixes link integrity issues.', href: '/site-health' },
              { Icon: LineChart, title: 'Experimentation', desc: 'Automate A/B setups and monitor telemetry automatically.', href: '/automation' },
              { Icon: Palette, title: 'Design Tokens & Theming', desc: 'Enforce consistent theming, spacing, and motion.', href: '/newsroom' },
              { Icon: Gauge, title: 'Image Pipeline', desc: 'Optimize and transform media assets automatically.', href: '/site-health' },
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

        {/* Value Pillars */}
        <motion.section
          id="pillars"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Value Pillars</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Four pillars that guide every autonomous change — jump into the systems behind each.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: ShieldCheck, title: 'Security & Safety', desc: 'Guardrails, policy, and quality gates.', href: '/site-health' },
              { Icon: Rocket, title: 'Speed & Momentum', desc: 'Small diffs shipped continuously.', href: '/automation' },
              { Icon: Gauge, title: 'Quality & Reliability', desc: 'A11y, performance, and link integrity.', href: '/site-health' },
              { Icon: Layers, title: 'Scale & Composability', desc: 'Factories chained into higher‑order workflows.', href: '/automation' },
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{desc}</p>
                </a>
              </Link>
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
              'Automated dependency upgrades and security scans',
              'Clear analytics and downloadable artifacts for every run',
              'Composable factories accelerate new initiatives',
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

        {/* AUTO-GENERATED: FRONT_FUTURIZER_START */}

        <section id="front-futurizer" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore More — Features, Capabilities, Benefits</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A quick portal to the most impactful areas across Zion. Every tile and list item links to a live hub, report, or doc.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Features</div>
              <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Self‑improving autonomous agents</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Repo sync to main with safe diffs</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Zero‑ops, cloud‑native runtime</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Defense‑in‑depth guardrails</span>
            </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Capabilities</div>
              <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Code quality and refactors</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">A11y and performance tuning</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Content curation and SEO</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Observability and analytics</span>
            </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Benefits</div>
              <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">24/7 progress without manual ops</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Faster feedback with small edits</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Higher confidence via layered checks</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Links to hubs, reports, and docs</span>
            </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Link key="Automation Hub" href="/automation">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Automation Hub</div>
                <div className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="Site Health" href="/site-health">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Site Health</div>
                <div className="mt-1 text-sm text-white/75">A11y, performance, and link integrity</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="SEO Audit" href="/reports/seo">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">SEO Audit</div>
                <div className="mt-1 text-sm text-white/75">Continuous on‑site improvements and artifacts</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="AI Trends" href="/reports/ai-trends">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">AI Trends</div>
                <div className="mt-1 text-sm text-white/75">Signals inspiring new factories and experiments</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="Newsroom" href="/newsroom">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Newsroom</div>
                <div className="mt-1 text-sm text-white/75">Autonomous updates and product evolution</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <a key="Documentation" href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Documentation</div>
              <div className="mt-1 text-sm text-white/75">Technical notes and guides</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a key="AI Changelog" href="https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">AI Changelog</div>
              <div className="mt-1 text-sm text-white/75">Summarized autonomous changes and highlights</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a key="Live Pipelines" href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Live Pipelines</div>
              <div className="mt-1 text-sm text-white/75">Observe CI pipelines, logs, and artifacts</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>
{/* AUTO-GENERATED: FRONT_FUTURIZER_END */}
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

        {/* Capabilities Matrix */}
        <motion.section
          id="capability-matrix"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities Matrix</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore a broader catalog of Zion capabilities. Each tile links to a live hub, report, or workflow.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { title: 'Autonomous Agents', desc: 'Self‑improving cloud workers', href: '/automation' },
              { title: 'Repo Sync to Main', desc: 'Safe, continuous delivery', href: '/automation' },
              { title: 'AI SEO Auditor', desc: 'On‑site improvements daily', href: '/reports/seo' },
              { title: 'AI Trends Radar', desc: 'Signals for new factories', href: '/reports/ai-trends' },
              { title: 'Site Health', desc: 'A11y, performance, links', href: '/site-health' },
              { title: 'Guardrails', desc: 'Defense‑in‑depth quality', href: '/site-health' },
              { title: 'Design Evolution', desc: 'Cohesive futuristic UI', href: '/newsroom' },
              { title: 'Observability', desc: 'Dashboards & artifacts', href: '/site-health' },
              { title: 'Analytics', desc: 'Outcomes & insights', href: '/site-health' },
              { title: 'Link Integrity', desc: 'Broken link healing', href: '/site-health' },
              { title: 'Factory Composer', desc: 'Higher‑order workflows', href: '/automation' },
              { title: 'Docs & Changelog', desc: 'Technical notes & AI log', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/docs', external: true },
            ].map((item) => (
              item.external ? (
                <a key={item.title} href={item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{item.title}</div>
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={item.title} href={item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {/* Benefits Directory */}
        <motion.section
          id="benefits-directory"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits Directory</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Outcome‑focused advantages with direct links to the systems that deliver them.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: '24/7 Progress', desc: 'Always‑on autonomous delivery', href: '/automation' },
              { label: 'Safe Incremental Diffs', desc: 'Small, reviewable changes', href: '/automation' },
              { label: 'Zero‑Ops Cloud‑Native', desc: 'No servers to babysit', href: '/automation' },
              { label: 'Layered Quality Checks', desc: 'Guardrails & audits', href: '/site-health' },
              { label: 'Faster Iteration Loops', desc: 'Shorten idea‑to‑impact', href: '/newsroom' },
              { label: 'SEO Visibility Gains', desc: 'Continuous improvements', href: '/reports/seo' },
            ].map((b) => (
              <Link key={b.label} href={b.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
                    <h3 className="text-base font-semibold">{b.label}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{b.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Explore <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* AUTO-GENERATED: FRONT_ADS_START */
<section id="auto-promoted" className="mx-auto max-w-7xl px-6 pb-14">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto‑Promoted Features</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Continuously curated promos linking to live hubs, reports, and docs.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Automation Hub</div>
  <div className="mt-1 text-sm text-white/75">Live agents & workflows</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Site Health</div>
  <div className="mt-1 text-sm text-white/75">A11y, performance, links</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">SEO Audit</div>
  <div className="mt-1 text-sm text-white/75">Continuous improvements</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">AI Trends</div>
  <div className="mt-1 text-sm text-white/75">Intelligence signals</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Newsroom</div>
  <div className="mt-1 text-sm text-white/75">Latest autonomous updates</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Front</div>
  <div className="mt-1 text-sm text-white/75">Explore more</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/main/front#features"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Features</div>
  <div className="mt-1 text-sm text-white/75">Explore capabilities</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/main/front#capabilities"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Capabilities</div>
  <div className="mt-1 text-sm text-white/75">What agents can do</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/main/front#benefits"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Benefits</div>
  <div className="mt-1 text-sm text-white/75">Outcomes & ROI</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/.netlify/functions/docs-index-runner"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Docs — technical notes & guides</div>
  <div className="mt-1 text-sm text-white/75">Documentation</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">AI Changelog — highlights</div>
  <div className="mt-1 text-sm text-white/75">Summarized updates</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/.netlify/functions/topic-cluster-builder-runner"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Topic Cluster Builder</div>
  <div className="mt-1 text-sm text-white/75">Clusters content and code topics</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/.netlify/functions/unused-media-scanner"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Unused Media Scanner</div>
  <div className="mt-1 text-sm text-white/75">Find and report unreferenced assets</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/.netlify/functions/orphan-pages-detector"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Orphan Pages Detector</div>
  <div className="mt-1 text-sm text-white/75">Discover pages with no inbound links</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/.netlify/functions/component-size-report"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Component Size Report</div>
  <div className="mt-1 text-sm text-white/75">Largest components by lines and bytes</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
  </div>
</section>
/* AUTO-GENERATED: FRONT_ADS_END */}

        {/* Feature Highlights (new) */}
        <motion.section
          id="feature-highlights"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Highlights</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore deep links across the app that showcase our capabilities and benefits.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'SEO Audit', desc: 'Continuous on‑site improvements and artifacts.', href: '/reports/seo' },
              { title: 'AI Trends', desc: 'Signals that inspire new automation factories.', href: '/reports/ai-trends' },
              { title: 'Site Health', desc: 'A11y, performance and link integrity.', href: '/site-health' },
              { title: 'Automation Hub', desc: 'Factories, agents and live workflows.', href: '/automation' },
              { title: 'Newsroom', desc: 'Autonomous updates and product evolution.', href: '/newsroom' },
              { title: 'Front Systems Hub', desc: 'Futuristic templates, effects and layouts.', href: '/main/front' },
            ].map((card) => (
              <a key={card.title} href={card.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            ))}
          </div>
        </motion.section>

      </div>
      {/* Back to top */}
      {showToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
