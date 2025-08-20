import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TestingPage() {
  return (
    <>
      <Head>
        <title>Testing | Zion Tech Group</title>
        <meta name="description" content="Testing strategy, quality assurance, and validation pipelines." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">← Back to Home</Link>
          </nav>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Testing</h1>
          <p className="text-white/80 max-w-3xl mb-8">Robust automated testing across unit, integration, end-to-end, and performance ensures reliability at scale.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h2 className="text-lg font-semibold text-amber-400 mb-3">Coverage</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Unit and integration testing</li>
                <li>• E2E and smoke tests</li>
                <li>• Security and accessibility checks</li>
                <li>• Continuous test health monitoring</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h2 className="text-lg font-semibold text-amber-400 mb-3">Documentation</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/TESTING.md" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200">Testing Guide →</a>
                </li>
                <li>
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/pr-smoke-report.md" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200">PR Smoke Report →</a>
                </li>
                <li>
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/playwright-smoke-report.md" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200">Playwright Smoke →</a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

