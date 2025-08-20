import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TestingPage() {
  return (
    <>
      <Head>
        <title>Testing & Quality — Zion Tech Group</title>
        <meta name="description" content="Automated testing suites, performance validation, and continuous verification at Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Testing & Quality</h1>
          <p className="text-white/80 max-w-3xl">We run smoke tests, integration tests, and performance checks continuously to ensure reliability.</p>
          <div className="mt-6">
            <Link href="/TESTING.md" className="text-fuchsia-400 hover:text-fuchsia-300 font-semibold">Open TESTING.md →</Link>
          </div>
          <div className="mt-10">
            <Link href="/" className="text-white/80 hover:text-white">← Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  );
}

