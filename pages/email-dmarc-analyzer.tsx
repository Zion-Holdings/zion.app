import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function EmailDmarcAnalyzerPage() {
  return (
    <Layout>
      <Head>
        <title>Email DMARC Analyzer | Zion Tech Group</title>
        <meta name="description" content="Monitor DMARC aggregate reports, SPF/DKIM posture, domain reputation hints, and deliverability scorecards." />
        <link rel="canonical" href="https://ziontechgroup.com/email-dmarc-analyzer" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Email DMARC Analyzer</h1>
          <p className="text-slate-300">DMARC reporting, SPF/DKIM audits, DNS change tracking, and mailbox provider insights for small teams.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'DMARC aggregate/forensic reports', 'SPF/DKIM audits & DNS history', 'Provider insights & tips', 'Weekly deliverability scorecard' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-amber-500/30 text-slate-200">{f}</div>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 text-white">Start from $39/mo</a>
            <a href="/market-pricing" className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200">See market pricing</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

