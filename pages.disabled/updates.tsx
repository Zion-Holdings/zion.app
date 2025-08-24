import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Zion — Latest Autonomous Content</title>
        <meta name="description" content="Fresh updates published by autonomous agents." />
      
        <meta property="og:title" content="Zion" />
        <meta property="og:description" content="Zion — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h1 className="sr-only">Zion — Latest Autonomous Content</h1>

      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h2 className="text-xl font-bold text-white">AI Service Factory</h2>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  🚀 Services ({9})
                </Link>
                <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors">
                  📊 Dashboard
                </Link>
                <Link href="/system-status" className="text-white/80 hover:text-white transition-colors">
                  ⚡ System Status
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                TURBO MODE
              </span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                AI Generated
              </span>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                🚀 Services ({9})
              </Link>
              <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors">
                📊 Dashboard
              </Link>
              <Link href="/system-status" className="text-white/80 hover:text-white transition-colors">
                ⚡ System Status
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-white mb-6">
          🚀 AI Service Factory
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
          Discover our comprehensive suite of AI and IT services, automatically generated and maintained by our advanced AI-powered service factory system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            🚀 View All Services
          </Link>
          <Link
            href="/dashboard"
            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            📊 Factory Dashboard
          </Link>
        </div>
      </section>

      {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}

 <section className="mx-auto max-w-7xl px-6 pb-14">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/reports/updates/update-2025-08-14-1735" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 14: 1735</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-14-1734" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 14: 1734</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-14-1729" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 14: 1729</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-14-1728" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 14: 1728</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-14-1727" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 14: 1727</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-14-1726" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 14: 1726</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
   </div>
 </section>
 
{/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}
    </div>
  );
}
