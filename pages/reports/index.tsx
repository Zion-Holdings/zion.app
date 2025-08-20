import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ReportsIndexPage() {
  return (
    <>
      <Head>
        <title>Reports & Updates | Zion Tech Group</title>
        <meta name="description" content="Browse the latest autonomous updates and reports from Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Reports & Updates
            </h1>
            <p className="text-white/80">Latest autonomous system activity and news</p>
          </section>

          <section className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025-08-15 04:06</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025-08-15 04:05</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025-08-15 04:04</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

