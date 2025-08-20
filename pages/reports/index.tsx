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
    const files = fs.readdirSync(updatesDir);
    updates = files
      .filter((file) => file.endsWith('.tsx'))
      .map((file) => file.replace(/\.tsx$/, ''))
      .sort()
      .reverse()
      .map((slug) => ({ slug, title: slug.replace(/update-/i, 'Update — ').replace(/-/g, ': ') }));
  } catch {
    updates = [];
  }

  return { props: { updates } };
}

export default function ReportsIndex({ updates }: { updates: UpdateEntry[] }) {
  return (
    <>
      <Head>
        <title>Reports & Analytics — Zion Tech Group</title>
        <meta name="description" content="Browse the latest autonomous updates, live reports, performance audits, and analytics from Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Reports & Analytics</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/lighthouse-live-report.md" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
              <h2 className="text-xl font-semibold">Lighthouse Live Report</h2>
              <p className="mt-1 text-sm text-white/75">Latest performance budgets and audits.</p>
              <div className="mt-3 text-xs text-cyan-300">Open →</div>
            </Link>
            <Link href="/playwright-smoke-report.md" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
              <h2 className="text-xl font-semibold">Playwright Smoke Report</h2>
              <p className="mt-1 text-sm text-white/75">Automated UI verification runs.</p>
              <div className="mt-3 text-xs text-fuchsia-300">Open →</div>
            </Link>
            <Link href="/performance-weekly-report.md" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-green-400/30">
              <h2 className="text-xl font-semibold">Performance Weekly Report</h2>
              <p className="mt-1 text-sm text-white/75">Trends, regressions and wins.</p>
              <div className="mt-3 text-xs text-green-300">Open →</div>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-white/90">Latest Autonomous Updates</h2>
          {updates.length === 0 ? (
            <p className="text-white/70">No updates found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {updates.slice(0, 18).map((u) => (
                <Link key={u.slug} href={`/reports/updates/${u.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-indigo-400/30">
                  <h3 className="text-lg font-semibold">{u.title}</h3>
                  <p className="mt-1 text-sm text-white/75">Published by autonomous agents.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-indigo-300/90">Open <span aria-hidden>→</span></div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12">
            <Link href="/" className="text-white/80 hover:text-white">← Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  );
}

