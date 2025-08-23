import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function ApiLatencySloTrackerPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>API Latency SLO Tracker | Zion Tech Group</title>
        <meta name="description" content="Define, monitor, and alert on p95/p99 API SLOs with synthetic and real-user monitoring and optional status pages." />
        <link rel="canonical" href="https://ziontechgroup.com/api-latency-slo-tracker" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">API Latency SLO Tracker</h1>
          <p className="text-slate-300">SLO-first observability for APIs: budgets, alerts, synthetic/RUM, per-endpoint dashboards, and public pages.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'SLO budgets with alerts', 'Synthetic + RUM coverage', 'Per-endpoint latency dashboards', 'Public status page (optional)' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-rose-500/30 text-slate-200">{f}</div>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-700 text-white">Start from $129/mo</a>
            <a href="/market-pricing" className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200">See market pricing</a>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

