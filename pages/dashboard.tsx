import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface SystemMetric {
  name: string;
  value: string | number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  change: string;
}

interface AutomationStatus {
  id: string;
  name: string;
  status: 'running' | 'idle' | 'error' | 'maintenance';
  uptime: string;
  lastRun: string;
  nextRun: string;
  performance: number;
}

const systemMetrics: SystemMetric[] = [
  {
    name: 'System Uptime',
    value: '99.97%',
    unit: '',
    status: 'healthy',
    trend: 'up',
    change: '+0.02%'
  },
  {
    name: 'Active Automations',
    value: 227,
    unit: '',
    status: 'healthy',
    trend: 'up',
    change: '+12'
  },
  {
    name: 'Response Time',
    value: 45,
    unit: 'ms',
    status: 'healthy',
    trend: 'down',
    change: '-8ms'
  },
  {
    name: 'CPU Usage',
    value: 23,
    unit: '%',
    status: 'healthy',
    trend: 'stable',
    change: '0%'
  },
  {
    name: 'Memory Usage',
    value: 67,
    unit: '%',
    status: 'warning',
    trend: 'up',
    change: '+5%'
  },
  {
    name: 'Storage Usage',
    value: 78,
    unit: '%',
    status: 'warning',
    trend: 'up',
    change: '+3%'
  }
];

const automationStatuses: AutomationStatus[] = [
  {
    id: 'content-gen',
    name: 'Content Generation',
    status: 'running',
    uptime: '99.9%',
    lastRun: '2 min ago',
    nextRun: '5 min',
    performance: 98
  },
  {
    id: 'seo-optimizer',
    name: 'SEO Optimization',
    status: 'running',
    uptime: '99.8%',
    lastRun: '1 min ago',
    nextRun: '3 min',
    performance: 95
  },
  {
    id: 'security-scan',
    name: 'Security Scanner',
    status: 'idle',
    uptime: '99.9%',
    lastRun: '15 min ago',
    nextRun: '45 min',
    performance: 100
  },
  {
    id: 'performance-monitor',
    name: 'Performance Monitor',
    status: 'running',
    uptime: '99.9%',
    lastRun: '30 sec ago',
    nextRun: '2 min',
    performance: 97
  },
  {
    id: 'dependency-updater',
    name: 'Dependency Updater',
    status: 'maintenance',
    uptime: '99.7%',
    lastRun: '1 hour ago',
    nextRun: '6 hours',
    performance: 89
  },
  {
    id: 'backup-system',
    name: 'Backup System',
    status: 'idle',
    uptime: '99.9%',
    lastRun: '2 hours ago',
    nextRun: '22 hours',
    performance: 100
  }
];

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMetric, setSelectedMetric] = useState<SystemMetric | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      case 'running': return 'text-green-400';
      case 'idle': return 'text-blue-400';
      case 'error': return 'text-red-400';
      case 'maintenance': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-500/20';
      case 'warning': return 'bg-yellow-500/20';
      case 'critical': return 'bg-red-500/20';
      case 'running': return 'bg-green-500/20';
      case 'idle': return 'bg-blue-500/20';
      case 'error': return 'bg-red-500/20';
      case 'maintenance': return 'bg-orange-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      case 'stable': return '→';
      default: return '→';
    }
  };

  return (
    <>
      <Head>
        <title>Live Dashboard — Zion Tech Group</title>
        <meta name="description" content="Real-time monitoring and performance dashboard for our autonomous systems." />
        <meta property="og:title" content="Live Dashboard — Zion Tech Group" />
        <meta property="og:description" content="Real-time monitoring and performance dashboard for our autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <section className="mb-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                  Live Dashboard
                </h1>
                <p className="text-white/80 text-lg">
                  Real-time monitoring of our autonomous systems and performance metrics
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-mono text-cyan-400">
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="text-white/60">
                  {currentTime.toLocaleDateString()}
                </div>
              </div>
            </div>
          </section>

          {/* System Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemMetrics.map((metric) => (
                <div
                  key={metric.name}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedMetric(metric)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-white">{metric.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBgColor(metric.status)} ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">
                      {metric.value}
                    </span>
                    <span className="text-white/60">{metric.unit}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getTrendIcon(metric.trend)}</span>
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-400' : 
                      metric.trend === 'down' ? 'text-red-400' : 'text-blue-400'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Automation Status */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Automation Status</h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-6 text-white/80 font-medium">Automation</th>
                      <th className="text-left p-6 text-white/80 font-medium">Status</th>
                      <th className="text-left p-6 text-white/80 font-medium">Uptime</th>
                      <th className="text-left p-6 text-white/80 font-medium">Last Run</th>
                      <th className="text-left p-6 text-white/80 font-medium">Next Run</th>
                      <th className="text-left p-6 text-white/80 font-medium">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {automationStatuses.map((automation) => (
                      <tr key={automation.id} className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200">
                        <td className="p-6">
                          <div className="font-medium text-white">{automation.name}</div>
                        </td>
                        <td className="p-6">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusBgColor(automation.status)} ${getStatusColor(automation.status)}`}>
                            <div className={`w-2 h-2 rounded-full ${
                              automation.status === 'running' ? 'bg-green-400' :
                              automation.status === 'idle' ? 'bg-blue-400' :
                              automation.status === 'error' ? 'bg-red-400' : 'bg-orange-400'
                            }`}></div>
                            {automation.status}
                          </span>
                        </td>
                        <td className="p-6 text-white/80">{automation.uptime}</td>
                        <td className="p-6 text-white/80">{automation.lastRun}</td>
                        <td className="p-6 text-white/80">{automation.nextRun}</td>
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-20 bg-white/10 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                                style={{ width: `${automation.performance}%` }}
                              ></div>
                            </div>
                            <span className="text-white/80 text-sm">{automation.performance}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Performance Charts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Performance Trends</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">System Load (24h)</h3>
                <div className="h-48 bg-white/5 rounded-lg flex items-end justify-center gap-1 p-4">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-t"
                      style={{ height: `${Math.random() * 60 + 20}%` }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-white/60 mt-2">
                  <span>00:00</span>
                  <span>12:00</span>
                  <span>24:00</span>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Automation Success Rate</h3>
                <div className="h-48 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="85, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">85%</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-white/60 text-sm">Overall Success Rate</p>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                Restart System
              </button>
              <button className="bg-gradient-to-r from-fuchsia-400 to-purple-500 hover:from-fuchsia-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                Run Diagnostics
              </button>
              <button className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                Backup Now
              </button>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                Update All
              </button>
            </div>
          </section>

          {/* Metric Detail Modal */}
          {selectedMetric && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
              <div className="bg-slate-900 rounded-3xl max-w-2xl w-full">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-white">{selectedMetric.name}</h2>
                    <button
                      onClick={() => setSelectedMetric(null)}
                      className="text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6">
                      <div className="text-4xl font-bold text-white mb-2">
                        {selectedMetric.value}{selectedMetric.unit}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getTrendIcon(selectedMetric.trend)}</span>
                        <span className={`text-sm font-medium ${
                          selectedMetric.trend === 'up' ? 'text-green-400' : 
                          selectedMetric.trend === 'down' ? 'text-red-400' : 'text-blue-400'
                        }`}>
                          {selectedMetric.change}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Status Information</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-white/60">Current Status:</span>
                          <span className={`font-medium ${getStatusColor(selectedMetric.status)}`}>
                            {selectedMetric.status}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Trend:</span>
                          <span className="text-white">{selectedMetric.trend}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Change:</span>
                          <span className="text-white">{selectedMetric.change}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <section className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/features" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                View Features
              </Link>
              <Link href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                About Us
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Contact
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}