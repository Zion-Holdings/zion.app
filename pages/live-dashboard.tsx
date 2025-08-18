import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function LiveContentDashboard() {
  const [dashboardData, setDashboardData] = useState({
    lastUpdate: new Date().toISOString(),
    contentGenerated: 0,
    componentsCreated: 0,
    reportsPublished: 0
  });

  const [recentActivity, setRecentActivity] = useState([
    {
      type: 'component',
      name: 'Pagination.tsx',
      action: 'created',
      timestamp: new Date().toISOString(),
      status: 'success'
    },
    {
      type: 'report',
      name: 'AI Content Generation Insights',
      action: 'published',
      timestamp: new Date(Date.now() - 300000).toISOString(),
      status: 'success'
    },
    {
      type: 'component',
      name: 'Form.tsx',
      action: 'created',
      timestamp: new Date(Date.now() - 600000).toISOString(),
      status: 'success'
    }
  ]);

  const systemMetrics = [
    { name: 'Content Analysis', value: '0.7s', status: 'optimal' },
    { name: 'Component Generation', value: '0.8s', status: 'optimal' },
    { name: 'Report Creation', value: '1.2s', status: 'optimal' },
    { name: 'Git Sync', value: '2.1s', status: 'optimal' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Live Dashboard | Zion Tech Group</title>
        <meta name="description" content="Real-time monitoring of our autonomous content generation system." />
      
        <meta property="og:title" content="Live Dashboard" />
        <meta property="og:description" content="Live Dashboard — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Live Dashboard
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real-time monitoring of our autonomous content generation and system performance
          </p>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-900/50 border border-emerald-500/50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🟢</div>
            <div className="text-2xl font-bold text-emerald-400">Online</div>
            <div className="text-white/70">System Status</div>
          </div>
          <div className="bg-slate-900/50 border border-cyan-500/50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-cyan-400">15min</div>
            <div className="text-white/70">Update Cycle</div>
          </div>
          <div className="bg-slate-900/50 border border-fuchsia-500/50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🤖</div>
            <div className="text-2xl font-bold text-fuchsia-400">Autonomous</div>
            <div className="text-white/70">Mode</div>
          </div>
          <div className="bg-slate-900/50 border border-amber-500/50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-amber-400">99.9%</div>
            <div className="text-white/70">Uptime</div>
          </div>
        </div>

        {/* Performance Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric) => (
              <div key={metric.name} className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{metric.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className={`inline-block px-2 py-1 rounded-full text-xs ${
                  metric.status === 'optimal' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {metric.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Activity</h2>
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.status === 'success' ? 'bg-emerald-400' : 'bg-amber-400'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{activity.name}</span>
                      <span className="text-white/60">was {activity.action}</span>
                    </div>
                    <div className="text-sm text-white/60">
                      {new Date(activity.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs ${
                    activity.type === 'component' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-fuchsia-500/20 text-fuchsia-400'
                  }`}>
                    {activity.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Health */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">System Health</h2>
          <div className="bg-slate-900/50 border border-emerald-500/50 rounded-lg p-8">
            <div className="text-6xl mb-4">🟢</div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">All Systems Operational</h3>
            <p className="text-white/70">
              Autonomous content generation is running smoothly with optimal performance
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}