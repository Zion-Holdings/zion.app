import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TestingPage() {
  return (
    <>
      <Head>
        <title>Testing & Quality | Zion Tech Group</title>
        <meta name="description" content="Automated testing, QA, and continuous validation for reliable autonomous systems." />
        <meta property="og:title" content="Testing & Quality" />
        <meta property="og:description" content="Automated testing, QA, and continuous validation for reliable autonomous systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">Testing & Quality</h1>
            <p className="text-white/80 max-w-3xl mx-auto">Robust suites for unit, integration, performance, and security testing, with continuous validation.</p>
          </section>

          <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-fuchsia-300 mb-3">Quality Capabilities</h2>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Automated testing suites</li>
                <li>• Performance testing</li>
                <li>• Security testing</li>
                <li>• Accessibility audits</li>
                <li>• Continuous validation</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-fuchsia-300 mb-3">Resources</h2>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>
                  <a className="text-fuchsia-300 hover:text-fuchsia-200" href="https://github.com/Zion-Holdings/zion.app/blob/main/TESTING.md" target="_blank" rel="noreferrer">Testing Guide on GitHub →</a>
                </li>
                <li>
                  <Link className="text-cyan-300 hover:text-cyan-200" href="/reports">Reports & Analytics →</Link>
                </li>
              </ul>
            </div>
          </section>

          <div className="text-center mt-10">
            <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  );
}

