import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function IncidentPostmortemGeneratorPage() {
  return (
    <Layout>
      <Head>
        <title>Incident Postmortem Generator | Zion Tech Group</title>
        <meta name="description" content="AI-assisted incident RCA with timeline, impact, stakeholder comms, templates, and reviewer workflows." />
        <link rel="canonical" href="https://ziontechgroup.com/incident-postmortem-generator" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">Incident Postmortem Generator</h1>
          <p className="text-slate-300">Generate high-quality RCAs by stitching logs, alerts, deploys, and chat history with templates and reviewer loops.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'RCA timeline assembly', 'Impact summary & customer comms', 'Template library & reviewer flow', 'Action items with owners & SLAs' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-purple-500/30 text-slate-200">{f}</div>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-700 text-white">Start from $79/mo</a>
            <a href="/market-pricing" className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200">See market pricing</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

