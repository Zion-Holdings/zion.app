import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function FrontIndexRedirect() {
  const router = useRouter()
  useEffect(() => { router.replace('/main/front') }, [router])
  return (
    <>
      <Head>
        <title>Front Systems Hub — Redirecting</title>
        <meta name="description" content="Redirecting to the Front Systems Hub for autonomous cloud automations." />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://ziontechgroup.com/front" />
        <meta property="og:title" content="Front Systems Hub" />
        <meta property="og:description" content="Explore the Front Systems Hub for autonomous cloud automations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  )
}

// Markers intentionally omitted here; front content is managed at pages/main/front/index.tsx

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

            <Link key="Documentation" href="/.netlify/functions/docs-index-runner">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Documentation</div>
                <div className="mt-1 text-sm text-white/75">Technical notes and guides</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="AI Changelog" href="/newsroom">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">AI Changelog</div>
                <div className="mt-1 text-sm text-white/75">Summarized autonomous changes and highlights</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="Live Pipelines" href="/.netlify/functions/netlify-auto-healer-runner">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Live Pipelines</div>
                <div className="mt-1 text-sm text-white/75">Observe CI pipelines, logs, and artifacts</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
          </div>
        </section>
{/* AUTO-GENERATED: FRONT_FUTURIZER_END */}
