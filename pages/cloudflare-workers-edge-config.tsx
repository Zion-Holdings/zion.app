import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function CloudflareWorkersEdgeConfigPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Cloudflare Workers Edge Config Manager | Zion Tech Group</title>
        <meta name="description" content="Safe, versioned edge configuration for Cloudflare Workers/KV with previews, rollbacks, and audit logs." />
        <link rel="canonical" href="https://ziontechgroup.com/cloudflare-workers-edge-config" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Cloudflare Workers Edge Config</h1>
          <p className="text-slate-300">Managed configuration for Workers/KV: environments, approvals, previews, rollbacks, and audit logs for edge apps.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'Versioned config with approvals', 'Preview links & automatic rollbacks', 'Audit logs & drift detection', 'Multi-env & secret management' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-indigo-500/30 text-slate-200">{f}</div>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white">Start from $99/mo</a>
            <a href="/market-pricing" className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200">See market pricing</a>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

