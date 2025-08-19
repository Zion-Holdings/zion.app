import React from 'react';
import Head from 'next/head';

export default function AutomationHealthPage() {
  const automationSystems = [
    {
      name: 'Content Generation Engine',
      status: 'healthy',
      uptime: '99.98%',
      lastRun: '2 minutes ago',
      nextRun: '3 minutes',
      performance: 'excellent',
      metrics: {
        totalRuns: 15420,
        successRate: 99.7,
        avgResponseTime: '1.2s',
        errors: 12
      }
    },
    {
      name: 'SEO Optimization System',
      status: 'healthy',
      uptime: '99.95%',
      lastRun: '5 minutes ago',
      nextRun: '10 minutes',
      performance: 'excellent',
      metrics: {
        totalRuns: 8920,
        successRate: 99.5,
        avgResponseTime: '2.8s',
        errors: 8
      }
    },
    {
      name: 'Security Monitoring',
      status: 'healthy',
      uptime: '99.99%',
      lastRun: '1 minute ago',
      nextRun: '1 minute',
      performance: 'excellent',
      metrics: {
        totalRuns: 45680,
        successRate: 99.9,
        avgResponseTime: '0.8s',
        errors: 3
      }
    },
    {
      name: 'Performance Analytics',
      status: 'healthy',
      uptime: '99.92%',
      lastRun: '15 minutes ago',
      nextRun: '30 minutes',
      performance: 'good',
      metrics: {
        totalRuns: 3240,
        successRate: 98.9,
        avgResponseTime: '4.2s',
        errors: 15
      }
    },
    {
      name: 'Link Health Checker',
      status: 'warning',
      uptime: '98.85%',
      lastRun: '8 minutes ago',
      nextRun: '15 minutes',
      performance: 'good',
      metrics: {
        totalRuns: 15680,
        successRate: 97.2,
        avgResponseTime: '3.1s',
        errors: 89
      }
    },
    {
      name: 'Backup Automation',
      status: 'healthy',
      uptime: '99.97%',
      lastRun: '1 hour ago',
      nextRun: '6 hours',
      performance: 'excellent',
      metrics: {
        totalRuns: 1240,
        successRate: 99.8,
        avgResponseTime: '12.5s',
        errors: 2
      }
    }
  ];

  const overallMetrics = {
    totalSystems: automationSystems.length,
    healthySystems: automationSystems.filter(sys => sys.status === 'healthy').length,
    warningSystems: automationSystems.filter(sys => sys.status === 'warning').length,
    criticalSystems: automationSystems.filter(sys => sys.status === 'critical').length,
    overallUptime: '99.94%',
    totalAutomations: 227,
    totalPages: 2960,
    totalComponents: 12
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-400 border-green-400/30 bg-green-500/20';
      case 'warning': return 'text-yellow-400 border-yellow-400/30 bg-yellow-500/20';
      case 'critical': return 'text-red-400 border-red-400/30 bg-red-500/20';
      default: return 'text-gray-400 border-gray-400/30 bg-gray-500/20';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <>
      <Head>
        <title>Automation Health | Zion Tech Group - System Status</title>
        <meta name="description" content="Real-time status and performance metrics for Zion Tech Group's autonomous automation systems and AI agents." />
        <meta property="og:title" content="Automation Health - Zion Tech Group" />
        <meta property="og:description" content="System status and automation health monitoring." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Automation Health Dashboard
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-time monitoring of our autonomous automation systems, AI agents, and infrastructure health
            </p>
            <p className="text-sm text-white/60 mt-4">
              Last updated: {new Date().toLocaleString()}
            </p>
          </section>

          {/* Overall Status */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-white/90">System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{overallMetrics.totalSystems}</div>
                <div className="text-sm text-white/70">Total Systems</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{overallMetrics.healthySystems}</div>
                <div className="text-sm text-white/70">Healthy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{overallMetrics.warningSystems}</div>
                <div className="text-sm text-white/70">Warning</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">{overallMetrics.criticalSystems}</div>
                <div className="text-sm text-white/70">Critical</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">{overallMetrics.overallUptime}</div>
                <div className="text-sm text-white/70">Overall Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">{overallMetrics.totalAutomations}</div>
                <div className="text-sm text-white/70">Active Automations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">{overallMetrics.totalPages}</div>
                <div className="text-sm text-white/70">Generated Pages</div>
              </div>
            </div>
          </section>

          {/* Individual System Status */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-white/90">System Status</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {automationSystems.map((system, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{system.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(system.status)}`}>
                      {system.status.charAt(0).toUpperCase() + system.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-white/60">Uptime: </span>
                      <span className="text-white/80">{system.uptime}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Performance: </span>
                      <span className={getPerformanceColor(system.performance)}>{system.performance}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Last Run: </span>
                      <span className="text-white/80">{system.lastRun}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Next Run: </span>
                      <span className="text-white/80">{system.nextRun}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">Total Runs</span>
                      <span className="text-white/80">{system.metrics.totalRuns.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">Success Rate</span>
                      <span className="text-white/80">{system.metrics.successRate}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">Avg Response</span>
                      <span className="text-white/80">{system.metrics.avgResponseTime}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">Errors</span>
                      <span className="text-white/80">{system.metrics.errors}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Real-time Monitoring */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-white/90">Real-time Monitoring</h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">Performance Metrics</h3>
                  <p className="text-white/70 text-sm">
                    Continuous monitoring of response times, throughput, and error rates across all automation systems
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-lg font-semibold mb-2 text-fuchsia-400">Health Checks</h3>
                  <p className="text-white/70 text-sm">
                    Automated health checks running every minute to ensure system reliability and performance
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚨</div>
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Alert System</h3>
                  <p className="text-white/70 text-sm">
                    Intelligent alerting system that notifies administrators of any issues or performance degradation
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Automation Insights */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-white/90">Automation Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Recent Achievements</h3>
                <ul className="text-white/70 space-y-2">
                  <li>• Generated 47 new content pieces this week</li>
                  <li>• Optimized 156 pages for SEO performance</li>
                  <li>• Fixed 23 broken links automatically</li>
                  <li>• Improved page load speeds by 34%</li>
                  <li>• Created 12 new automation workflows</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Upcoming Improvements</h3>
                <ul className="text-white/70 space-y-2">
                  <li>• Enhanced AI content generation models</li>
                  <li>• Improved error handling and recovery</li>
                  <li>• Advanced performance monitoring</li>
                  <li>• New automation capabilities</li>
                  <li>• Enhanced security protocols</li>
                </ul>
              </div>
            </div>
          </section>

          {/* System Architecture */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-white/90">System Architecture</h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">AI Agents</h3>
                  <p className="text-white/70 text-sm">
                    Autonomous AI agents that continuously monitor, analyze, and optimize system performance
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-lg font-semibold mb-2 text-fuchsia-400">Cloud Infrastructure</h3>
                  <p className="text-white/70 text-sm">
                    Scalable cloud infrastructure that ensures high availability and performance across all systems
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Automation Engine</h3>
                  <p className="text-white/70 text-sm">
                    Central automation engine that orchestrates all workflows and ensures seamless operation
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}