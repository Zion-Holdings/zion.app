import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

type UpdateEntry = {
  slug: string;
  title: string;
  href: string;
};

type ReportsIndexProps = {
  updates: UpdateEntry[];
};

export async function getStaticProps() {
  const updatesDirectory = path.join(process.cwd(), 'pages', 'reports', 'updates');
  let updates: UpdateEntry[] = [];

  try {
    const files = fs.readdirSync(updatesDirectory)
      .filter((fileName) => fileName.endsWith('.tsx'))
      .sort()
      .reverse();

    updates = files.map((fileName) => {
      const slug = fileName.replace(/\.tsx$/, '');
      const humanTitle = slug
        .replace(/^update-/, '')
        .replace(/-/g, ': ')
        .replace(/\b(\d{4})(: )(\d{2})(: )(\d{2})/, '$1-$3-$5');

      return {
        slug,
        title: `Autonomous Update — ${humanTitle}`,
        href: `/reports/updates/${slug}`,
      };
    });
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
        <title>Reports & Updates — Zion Tech Group</title>
        <meta name="description" content="Browse the latest autonomous updates, performance reports, and analytics from Zion Tech Group." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-10">
            <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Reports & Updates
            </h1>
            <p className="text-white/85 max-w-3xl mx-auto">
              Explore the latest autonomous system updates, health summaries, and operational analytics.
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {updates.length === 0 && (
                <div className="col-span-full text-center text-white/70">No updates found.</div>
              )}
              {updates.map((u) => (
                <Link key={u.slug} href={u.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{u.title}</h3>
                  <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </Link>
              ))}
            </div>
          </section>

          <section className="text-center mt-14">
            <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
              ← Back to Home
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

