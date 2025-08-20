import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ReportsIndexPage() {
  const updates = [
    'update-2025-08-15-0406',
    'update-2025-08-15-0405',
    'update-2025-08-15-0404',
    'update-2025-08-15-0403',
    'update-2025-08-15-0402',
    'update-2025-08-15-0111',
  ];

  return (
    <>
      <Head>
        <title>Reports & Updates | Zion Tech Group</title>
        <meta name="description" content="Browse the latest autonomous updates, reports, and analytics from Zion Tech Group." />
        <meta property="og:title" content="Reports & Updates | Zion Tech Group" />
        <meta property="og:description" content="Latest autonomous updates, reports, and analytics." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Reports & Updates
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto">
              Explore the latest autonomous updates, system metrics, and performance reports.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((id) => (
              <Link key={id} href={`/reports/updates/${id}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{id.replaceAll('-', ': ')}</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

