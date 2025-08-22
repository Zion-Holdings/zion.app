import React from 'react';
import Head from 'next/head';

export default function StatusPage() {
  return (
    <>
      <Head>
        <title>Status | Zion Tech Group</title>
        <meta name="description" content="System status and uptime information." />
        <link rel="canonical" href="https://ziontechgroup.com/status" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">System Status</h1>
        <p className="text-gray-300">All systems operational.</p>
        <p className="text-gray-300 mt-4">For incident history, see <a href="/status-pages-slo" className="text-cyan-400 underline">Status Pages & SLO</a>.</p>
      </div>
    </>
  );
}