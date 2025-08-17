import Head from 'next/head';
import Link from 'next/link';
import DivineTechnologyPlatform from '../components/DivineTechnologyPlatform';
import DivineCrossDomainOptimizer from '../components/DivineCrossDomainOptimizer';

export default function HomePage() {
  const featuredReports = [
    {
      title: 'Latest Insights',
      description: 'Discover cutting-edge AI and technology insights',
      href: '/reports/insights',
      count: '15+ reports'
    },
    {
      title: 'Strategic Dossiers',
      description: 'Comprehensive analysis and strategic recommendations',
      href: '/reports/dossiers',
      count: '8+ dossiers'
    },
    {
      title: 'Technical Tutorials',
      description: 'Step-by-step guides for developers and engineers',
      href: '/reports/tutorials',
      count: '25+ tutorials'
    },
    {
      title: 'Industry Whitepapers',
      description: 'In-depth research and industry analysis',
      href: '/reports/whitepapers',
      count: '12+ whitepapers'
    }
  ];

  const newFeatures = [
    {
      title: 'Component Library',
      description: 'Explore our new reusable UI components',
      href: '/components',
      icon: '🧩'
    },
    {
      title: 'Content Discovery',
      description: 'AI-powered content recommendations',
      href: '/explore',
      icon: '🔍'
    },
    {
      title: 'Automation Hub',
      description: 'See our autonomous systems in action',
      href: '/automation',
      icon: '🤖'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Zion Tech Group - AI & Cloud Solutions</title>
        <meta name="description" content="Leading provider of AI, cloud computing, and digital transformation solutions with autonomous content generation." />
        <meta property="og:title" content="Zion Tech Group - AI & Cloud Solutions" />
        <meta property="og:description" content="Leading provider of AI, cloud computing, and digital transformation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 mb-8 max-w-4xl mx-auto">
            Autonomous AI & Cloud Solutions with Continuous Content Generation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/components"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Components
            </Link>
            <Link 
              href="/reports"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Reports
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredReports.map((report) => (
              <Link 
                key={report.title}
                href={report.href}
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {report.title}
                </h3>
                <p className="text-white/70 mb-3">{report.description}</p>
                <div className="text-cyan-400 font-medium">{report.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">New Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newFeatures.map((feature) => (
              <Link 
                key={feature.title}
                href={feature.href}
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-fuchsia-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Divine Technology Integration Section */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🌟🌌 Divine Technology Integration</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Divine-powered universal technology integration and transcendent divine capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DivineTechnologyPlatform 
              showMetrics={true}
              maxTechnologies={3}
            />
            
            <DivineCrossDomainOptimizer 
              showMetrics={true}
              maxOptimizations={3}
            />
          </div>
        </div>
      </section>

      {/* Latest Autonomous Content */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/reports/updates/update-2025-08-16-2359" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 16: 2359</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-16-2358" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 16: 2358</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-16-2357" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 16: 2357</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-16-2356" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 16: 2356</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-16-2355" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 16: 2355</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-16-2354" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 16: 2354</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1107" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1107</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1106" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1106</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1105" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1105</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1104" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1104</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1103" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1103</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1102" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1102</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1101" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1101</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17T14-00" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17T14: 00</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1400" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1400</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1059" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1059</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1058" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1058</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1057" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1057</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1056" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1056</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1055" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1055</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1054" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1054</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1053" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1053</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1052" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1052</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1131" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1131</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17T14-30" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17T14: 30</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1430" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1430</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1129" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1129</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1128" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1128</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
          <a href="/reports/updates/update-2025-08-17-1127" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
            <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1127</h3>
            <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </a>
        </div>
      </section>

      {/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Join thousands of developers and organizations using Zion Tech Group's autonomous solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/components"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Components
          </Link>
          <Link 
            href="/reports"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Reports
          </Link>
        </div>
      </section>








 <section className="mx-auto max-w-7xl px-6 pb-14">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/reports/updates/update-2025-08-17-1141" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1141</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17T14-40" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17T14: 40</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1440" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1440</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1139" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1139</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1138" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1138</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1137" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1137</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
   </div>
 </section>
 
{/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}
</section>

    </div>
  );
}