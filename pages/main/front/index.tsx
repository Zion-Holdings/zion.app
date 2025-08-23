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
                             <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                 <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/ultra-rapid-sync.yml" target="_blank" rel="noopener">Ultra Rapid Sync →</a>
                 <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="/.netlify/functions/accelerated-sync-orchestrator" rel="noopener">Accelerated Sync Orchestrator →</a>
                 <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/knowledge-graph-radar.yml" target="_blank" rel="noopener">Knowledge Graph & Radar →</a>
                 <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/site-health-guardian.yml" target="_blank" rel="noopener">Site Health Guardian →</a>
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
              { label: 'Dependency Auto‑Upgrade', desc: 'Safely bumps deps and verifies a clean build.', href: '/.netlify/functions/deps-auto-upgrade-runner' },
              { label: 'Cron Hub (1m)', desc: 'Intelligently triggers fast functions and commits a heartbeat.', href: '/.netlify/functions/cron-hub' },
              { label: 'Cron Supervisor (5m)', desc: 'Supervises critical jobs and triggers fallbacks when needed.', href: '/.netlify/functions/cron-supervisor' },
              { label: 'Cron Heartbeat (1m)', desc: 'Commits a tiny heartbeat to keep changes flowing.', href: '/.netlify/functions/cron-heartbeat' },
              { label: 'Trigger All & Commit', desc: 'Invokes all functions concurrently and commits a build stamp.', href: '/.netlify/functions/trigger-all-and-commit' }
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
              <Link href="/reports/a11y"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">A11y Alt Text Auditor</div>
  <div className="mt-1 text-sm text-white/75">Find missing alt text</div>
  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/reports/metadata"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
  <div className="text-base font-semibold">Metadata Optimizer</div>
  <div className="mt-1 text-sm text-white/75">Missing meta tags</div>
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
