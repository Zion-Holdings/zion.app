import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
          </section>

          {/* FEATURED CONTENT SECTION */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore Our Innovation Hub</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/about" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">About Zion Tech Group</h3>
                <p className="mt-1 text-sm text-white/75">Discover our mission, vision, and autonomous innovation capabilities.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Learn More <span aria-hidden>→</span></div>
              </a>
              <a href="/automation" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Automation</h3>
                <p className="mt-1 text-sm text-white/75">Experience self-managing, self-improving technology systems.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Explore <span aria-hidden>→</span></div>
              </a>
              <a href="/blog" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Innovation Blog</h3>
                <p className="mt-1 text-sm text-white/75">Latest insights on autonomous innovation and AI automation.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </a>
              <a href="/contact" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Get in Touch</h3>
                <p className="mt-1 text-sm text-white/75">Ready to explore autonomous innovation? Let's discuss your needs.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Contact Us <span aria-hidden>→</span></div>
              </a>
              <a href="/automation#capabilities" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Core Capabilities</h3>
                <p className="mt-1 text-sm text-white/75">Discover our autonomous innovation and self-healing systems.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Learn More <span aria-hidden>→</span></div>
              </a>
              <a href="/blog#newsletter" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Stay Updated</h3>
                <p className="mt-1 text-sm text-white/75">Get the latest insights on autonomous innovation delivered to your inbox.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Subscribe <span aria-hidden>→</span></div>
              </a>
            </div>
          </section>
          {/* FEATURED CONTENT SECTION END */}
        </main>
      </div>
    </>
  );
}
