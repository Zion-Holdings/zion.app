import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

type UpdateEntry = {
  slug: string;
  title: string;
};

export async function getStaticProps() {
  const updatesDir = path.join(process.cwd(), 'pages', 'reports', 'updates');
  let updates: UpdateEntry[] = [];

  try {
    const files = fs.readdirSync(updatesDir)
      .filter((f) => f.endsWith('.tsx'))
      .sort()
      .reverse();

    updates = files.map((file) => {
      const slug = file.replace(/\.tsx$/, '');
      const parts = slug.split('update-').pop() || '';
      const human = parts.replace(/-/g, ': ').trim();
      return {
        slug,
        title: `Autonomous Update — ${human}`
      };
    });
  } catch (e) {
    updates = [];
  }

  return { props: { updates } };
}

export default function ReportsIndex({ updates }: { updates: UpdateEntry[] }) {
  return (
    <>
      <Head>
        <title>Reports & Updates — Zion Tech Group</title>
        <meta name="description" content="Browse the latest autonomous updates, reports, and analytics from Zion Tech Group." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-10">
            <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Reports & Updates</h1>
            <p className="text-white/85 max-w-3xl mx-auto">Latest autonomous system updates, platform reports, and performance analytics.</p>
          </section>

          <section className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
            {updates.length === 0 ? (
              <p className="text-white/70">No updates found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {updates.map((u) => (
                  <Link key={u.slug} href={`/reports/updates/${u.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <h3 className="text-lg font-semibold">{u.title}</h3>
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

