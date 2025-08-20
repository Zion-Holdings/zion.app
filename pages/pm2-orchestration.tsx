import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Pm2OrchestrationPage() {
  return (
    <>
      <Head>
        <title>PM2 Orchestration — Zion Tech Group</title>
        <meta name="description" content="Learn about process management, auto-restart, and cluster management using PM2." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">PM2 Orchestration</h1>
          <p className="text-white/80 max-w-3xl">PM2 powers resilient process management, clustering, and observability for long-running services.</p>
          <div className="mt-6">
            <Link href="/README_PM2_REDUNDANCY_COMPLETE.md" className="text-green-400 hover:text-green-300 font-semibold">Open README_PM2_REDUNDANCY_COMPLETE.md →</Link>
          </div>
          <div className="mt-10">
            <Link href="/" className="text-white/80 hover:text-white">← Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  );
}

