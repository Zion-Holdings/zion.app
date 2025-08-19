import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ReportsPage() {
  return (
    <>
      <Head>
        <title>Reports — Zion Tech Group</title>
        <meta name="description" content="Comprehensive reports and analytics from Zion Tech Group's autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Reports & Analytics
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive insights from our autonomous systems and technology operations.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Updates Section */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Latest Updates</h2>
              <div className="space-y-3">
                <Link href="/reports/updates/update-2025-08-15-0406" className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold">Update 2025-08-15 0406</h3>
                  <p className="text-sm text-white/70">Latest autonomous system update</p>
                </Link>
                <Link href="/reports/updates/update-2025-08-15-0405" className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold">Update 2025-08-15 0405</h3>
                  <p className="text-sm text-white/70">System performance update</p>
                </Link>
                <Link href="/reports/updates/update-2025-08-15-0404" className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold">Update 2025-08-15 0404</h3>
                  <p className="text-sm text-white/70">Security and monitoring update</p>
                </Link>
              </div>
            </div>

            {/* Blueprints Section */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">System Blueprints</h2>
              <div className="space-y-3">
                <Link href="/reports/blueprints/blueprint-2025-08-18-122901" className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold">Blueprint 2025-08-18 122901</h3>
                  <p className="text-sm text-white/70">Infrastructure architecture</p>
                </Link>
                <Link href="/reports/blueprints/blueprint-2025-08-18-122931" className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold">Blueprint 2025-08-18 122931</h3>
                  <p className="text-sm text-white/70">Automation framework</p>
                </Link>
                <Link href="/reports/blueprints/blueprint-2025-08-18-122952" className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold">Blueprint 2025-08-18 122952</h3>
                  <p className="text-sm text-white/70">Security protocols</p>
                </Link>
              </div>
            </div>

            {/* Performance Section */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Performance Metrics</h2>
              <div className="space-y-3">
                <Link href="/reports/performance" className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold">System Performance</h3>
                  <p className="text-sm text-white/70">Real-time metrics and analytics</p>
                </Link>
                <Link href="/reports/automation-health" className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold">Automation Health</h3>
                  <p className="text-sm text-white/70">System status and diagnostics</p>
                </Link>
                <Link href="/reports/security" className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold">Security Reports</h3>
                  <p className="text-sm text-white/70">Threat analysis and protection</p>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}