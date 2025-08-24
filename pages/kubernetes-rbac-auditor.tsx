import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function KubernetesRbacAuditorPage() {
  return (
    <Layout>
      <Head>
        <title>Kubernetes RBAC Auditor | Zion Tech Group</title>
        <meta name="description" content="Detect over-permissive Kubernetes roles and unused bindings with least-privilege recommendations." />
        <link rel="canonical" href="https://ziontechgroup.com/kubernetes-rbac-auditor" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Kubernetes RBAC Auditor</h1>
          <p className="text-slate-300">Over-permission detection, wildcard checks, unused bindings, and least-privilege recommendations.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'Cluster-wide RBAC inventory', 'Over-permission & wildcard detection', 'Unused binding analysis', 'Least-privilege recommendations' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-sky-500/30 text-slate-200">{f}</div>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-700 text-white">Start from $179/mo</a>
            <a href="/market-pricing" className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200">See market pricing</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

