import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TestingPage() {
  return (
    <>
      <Head>
        <title>Testing & Quality — Zion Tech Group</title>
        <meta name="description" content="Automated testing suites, QA pipelines, and continuous validation for autonomous systems." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Testing & Quality</h1>
            <p className="mt-4 text-white/85 max-w-3xl mx-auto">Reliability at scale via automated tests, smoke checks, and continuous quality gates embedded in our CI/CD.</p>
          </section>

          <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <h2 className="text-fuchsia-400 font-semibold mb-3">Automation</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Unit & integration coverage</li>
                <li>• Visual & regression checks</li>
                <li>• Lint & type validation</li>
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <h2 className="text-fuchsia-400 font-semibold mb-3">Pipelines</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Pre‑commit and PR smoke tests</li>
                <li>• Build health auto‑healing</li>
                <li>• Performance budgets</li>
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <h2 className="text-fuchsia-400 font-semibold mb-3">Observability</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Metrics & dashboards</li>
                <li>• Error tracking</li>
                <li>• Release verification</li>
              </ul>
            </div>
          </section>

          <section className="mx-auto max-w-5xl mt-10 text-center">
            <Link href="https://github.com/Zion-Holdings/zion.app/blob/main/TESTING.md" className="text-fuchsia-300 hover:text-fuchsia-200 font-semibold">
              Read the full Testing guide →
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

