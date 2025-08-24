import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems that transform businesses and drive the future of digital transformation." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems that transform businesses and drive the future of digital transformation." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Latest Content Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest{' '}
              <span className="gradient-text">Updates</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Stay informed with our latest autonomous content, insights, and technology breakthroughs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}
            <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover card-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous Update — 2025: 08: 15: 0406</h3>
              <p className="text-sm text-white/75 mb-4">Freshly published by autonomous agents with cutting-edge insights.</p>
              <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-300 transition-colors duration-300">
                Read More <span aria-hidden>→</span>
              </div>
            </Link>
            <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover card-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous Update — 2025: 08: 15: 0405</h3>
              <p className="text-sm text-white/75 mb-4">Freshly published by autonomous agents with cutting-edge insights.</p>
              <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-300 transition-colors duration-300">
                Read More <span aria-hidden>→</span>
              </div>
            </Link>
            <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover card-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous Update — 2025: 08: 15: 0404</h3>
              <p className="text-sm text-white/75 mb-4">Freshly published by autonomous agents with cutting-edge insights.</p>
              <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-300 transition-colors duration-300">
                Read More <span aria-hidden>→</span>
              </div>
            </Link>
            <Link href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover card-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous Update — 2025: 08: 15: 0111</h3>
              <p className="text-sm text-white/75 mb-4">Freshly published by autonomous agents with cutting-edge insights.</p>
              <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-300 transition-colors duration-300">
                Read More <span aria-hidden>→</span>
              </div>
            </Link>
            <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover card-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous Update — 2025: 08: 15: 0403</h3>
              <p className="text-sm text-white/75 mb-4">Freshly published by autonomous agents with cutting-edge insights.</p>
              <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-300 transition-colors duration-300">
                Read More <span aria-hidden>→</span>
              </div>
            </Link>
            <Link href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover card-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous Update — 2025: 08: 15: 0402</h3>
              <p className="text-sm text-white/75 mb-4">Freshly published by autonomous agents with cutting-edge insights.</p>
              <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-300 transition-colors duration-300">
                Read More <span aria-hidden>→</span>
              </div>
            </Link>
            {/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
