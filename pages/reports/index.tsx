import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

type ReportsIndexProps = {
  updates: Array<{ slug: string; title: string; dateDisplay: string }>;
};

export async function getStaticProps() {
  const updatesDir = path.join(process.cwd(), 'pages', 'reports', 'updates');
  let updates: Array<{ slug: string; title: string; dateDisplay: string }> = [];

  try {
    const files = fs.readdirSync(updatesDir).filter((f) => f.endsWith('.tsx'));
    updates = files
      .map((filename) => {
        const slug = filename.replace(/\.tsx$/, '');
        // Slugs look like: update-YYYY-MM-DD-HHMM
        const parts = slug.split('-');
        let dateDisplay = '';
        if (parts.length >= 5) {
          const year = parts[1];
          const month = parts[2];
          const day = parts[3];
          const time = parts[4];
          const hh = time.slice(0, 2);
          const mm = time.slice(2, 4);
          dateDisplay = `${year}-${month}-${day} ${hh}:${mm}`;
        } else {
          dateDisplay = slug.replace('update-', '');
        }
        return {
          slug,
          title: `Autonomous Update — ${dateDisplay}`,
          dateDisplay,
        };
      })
      .sort((a, b) => (a.slug < b.slug ? 1 : -1));
  } catch {
    updates = [];
  }

  return {
    props: { updates },
  };
}

export default function ReportsIndexPage({ updates }: ReportsIndexProps) {
  return (
    <>
      <Head>
        <title>Reports & Analytics | Zion Tech Group</title>
        <meta name="description" content="Browse autonomous platform reports, live updates, and analytics." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Home</Link>
          </nav>

          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Reports & Analytics</h1>
            <p className="text-white/80 max-w-3xl mx-auto">Latest autonomous updates and performance insights from our self-healing platform.</p>
          </header>

          <section className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-6 text-white/90">Latest Updates</h2>
            {updates.length === 0 ? (
              <p className="text-white/70">No updates found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {updates.map((u) => (
                  <Link key={u.slug} href={`/reports/updates/${u.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <h3 className="text-lg font-semibold">{u.title}</h3>
                    <p className="mt-1 text-sm text-white/70">Freshly published by autonomous agents.</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}

