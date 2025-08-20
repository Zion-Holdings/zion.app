import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ReportsIndexPage() {
  const updates = [
    { slug: 'update-2025-08-15-0406', title: 'Autonomous Update — 2025: 08: 15: 0406' },
    { slug: 'update-2025-08-15-0405', title: 'Autonomous Update — 2025: 08: 15: 0405' },
    { slug: 'update-2025-08-15-0404', title: 'Autonomous Update — 2025: 08: 15: 0404' },
    { slug: 'update-2025-08-15-0403', title: 'Autonomous Update — 2025: 08: 15: 0403' },
    { slug: 'update-2025-08-15-0402', title: 'Autonomous Update — 2025: 08: 15: 0402' },
    { slug: 'update-2025-08-15-0111', title: 'Autonomous Update — 2025: 08: 15: 0111' },
  ];

  return (
    <>
      <Head>
        <title>Reports & Analytics — Zion Tech Group</title>
        <meta name="description" content="Explore platform reports, analytics, and the latest autonomous updates from Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Reports & Analytics
            </h1>
            <p className="mt-3 text-white/85">Live insights, platform health, and autonomous system updates.</p>
          </header>

          <section className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Latest Updates</h2>
              <Link href="/" className="text-cyan-300 hover:text-cyan-200">← Back to Home</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {updates.map(update => (
                <Link key={update.slug} href={`/reports/updates/${update.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{update.title}</h3>
                  <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl mt-12">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <h2 className="text-xl font-semibold mb-3">More Reports</h2>
              <p className="text-white/80 mb-4">We continuously publish performance, reliability, and innovation reports as our autonomous systems evolve.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/privacy" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20">Privacy & Security</Link>
                <Link href="/case-studies" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20">Case Studies</Link>
                <Link href="/resources" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20">Resources</Link>
                <Link href="/contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">Talk to Us</Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

