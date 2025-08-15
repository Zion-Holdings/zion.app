import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface SystemStatus {
  name: string;
  status: 'online' | 'offline' | 'error' | 'starting';
  uptime: string;
  memory: string;
  cpu: string;
  lastActivity: string;
}

interface MarketTrend {
  category: string;
  trendType: 'hot' | 'emerging' | 'stable' | 'declining';
  score: number;
  confidence: number;
  recommendation: string;
}

interface ServiceOptimization {
  serviceId: string;
  optimizationType: 'performance' | 'quality' | 'market_fit';
  improvements: string[];
  improvement: string;
  timestamp: string;
}

interface ServiceGeneration {
  serviceId: string;
  name: string;
  type: string;
  status: 'active' | 'beta' | 'development';
  timestamp: string;
}

const AdvancedDashboard: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState<SystemStatus[]>([]);
  const [marketTrends, setMarketTrends] = useState<MarketTrend[]>([]);
  const [serviceOptimizations, setServiceOptimizations] = useState<ServiceOptimization[]>([]);
  const [serviceGenerations, setServiceGenerations] = useState<ServiceGeneration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading real-time data
    const loadDashboardData = async () => {
      try {
        // Simulate system status
        const mockSystemStatus: SystemStatus[] = [
          {
            name: 'AI Service Generator',
            status: 'online',
            uptime: '2d 14h 32m',
            memory: '64.2 MB',
            cpu: '2.3%',
            lastActivity: '2 minutes ago'
          },
          {
            name: 'AI Service Scheduler',
            status: 'online',
            uptime: '1d 8h 15m',
            memory: '128.7 MB',
            cpu: '1.8%',
            lastActivity: '5 minutes ago'
          },
          {
            name: 'AI Market Intelligence',
            status: 'online',
            uptime: '3d 6h 42m',
            memory: '256.1 MB',
            cpu: '4.2%',
            lastActivity: '1 minute ago'
          },
          {
            name: 'AI Service Optimizer',
            status: 'online',
            uptime: '1d 12h 28m',
            memory: '189.3 MB',
            cpu: '3.1%',
            lastActivity: '8 minutes ago'
          }
        ];

        // Simulate market trends
        const mockMarketTrends: MarketTrend[] = [
          {
            category: 'AI/ML',
            trendType: 'hot',
            score: 0.92,
            confidence: 0.95,
            recommendation: 'High demand detected. Create multiple services immediately.'
          },
          {
            category: 'IoT & Edge',
            trendType: 'emerging',
            score: 0.78,
            confidence: 0.82,
            recommendation: 'Strong growth detected. Consider creating services soon.'
          },
          {
            category: 'Blockchain',
            trendType: 'stable',
            score: 0.65,
            confidence: 0.71,
            recommendation: 'Market is stable. Maintain existing services.'
          },
          {
            category: 'Quantum Computing',
            trendType: 'emerging',
            score: 0.71,
            confidence: 0.76,
            recommendation: 'Emerging technology. Consider early adoption.'
          }
        ];

        // Simulate service optimizations
        const mockServiceOptimizations: ServiceOptimization[] = [
          {
            serviceId: 'ai-ml-service-001',
            optimizationType: 'performance',
            improvements: ['Added caching', 'Optimized Docker', 'Load balancing'],
            improvement: '+25%',
            timestamp: '2025-01-15T10:30:00Z'
          },
          {
            serviceId: 'iot-edge-service-002',
            optimizationType: 'quality',
            improvements: ['Enhanced docs', 'Added testing', 'Error handling'],
            improvement: '+30%',
            timestamp: '2025-01-15T09:15:00Z'
          },
          {
            serviceId: 'blockchain-service-003',
            optimizationType: 'market_fit',
            improvements: ['New features', 'Pricing optimization', 'UX improvements'],
            improvement: '+20%',
            timestamp: '2025-01-15T08:45:00Z'
          }
        ];

        // Simulate service generations
        const mockServiceGenerations: ServiceGeneration[] = [
          {
            serviceId: 'ai-ml-service-004',
            name: 'Advanced AI Analytics Platform',
            type: 'AI/ML Service',
            status: 'development',
            timestamp: '2025-01-15T10:15:00Z'
          },
          {
            serviceId: 'iot-edge-service-005',
            name: 'Smart IoT Orchestrator',
            type: 'IoT & Edge Service',
            status: 'beta',
            timestamp: '2025-01-15T09:30:00Z'
          },
          {
            serviceId: 'quantum-service-006',
            name: 'Quantum Algorithm Simulator',
            type: 'Quantum Computing Service',
            status: 'development',
            timestamp: '2025-01-15T08:20:00Z'
          }
        ];

        setSystemStatus(mockSystemStatus);
        setMarketTrends(mockMarketTrends);
        setServiceOptimizations(mockServiceOptimizations);
        setServiceGenerations(mockServiceGenerations);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
        setLoading(false);
      }
    };

    loadDashboardData();
    
    // Refresh data every 30 seconds
    const interval = setInterval(loadDashboardData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-500';
      case 'offline': return 'text-red-500';
      case 'error': return 'text-yellow-500';
      case 'starting': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  const getTrendColor = (trendType: string) => {
    switch (trendType) {
      case 'hot': return 'text-red-500';
      case 'emerging': return 'text-yellow-500';
      case 'stable': return 'text-green-500';
      case 'declining': return 'text-gray-500';
      default: return 'text-blue-500';
    }
  };

  const getOptimizationColor = (type: string) => {
    switch (type) {
      case 'performance': return 'text-blue-500';
      case 'quality': return 'text-green-500';
      case 'market_fit': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
          <p className="text-white text-xl mt-4">Loading Advanced AI Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Advanced AI Dashboard - AI Service Factory</title>
        <meta name="description" content="Advanced dashboard for monitoring AI Service Factory systems" />
      
        <meta property="og:title" content="Advanced AI Dashboard" />
        <meta property="og:description" content="Advanced AI Dashboard — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>

      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                🚀 AI Service Factory
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-white/90 hover:text-white transition-colors">
                  🏠 Home
                </Link>
                <Link href="/dashboard/" className="text-white/90 hover:text-white transition-colors">
                  📊 Dashboard
                </Link>
                <Link href="/advanced-dashboard/" className="text-white/90 hover:text-white transition-colors">
                  🔬 Advanced Dashboard
                </Link>
                <Link href="/system-status/" className="text-white/90 hover:text-white transition-colors">
                  🔧 System Status
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-full">⚡ TURBO MODE</span>
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">🧠 AI Intelligence</span>
        </div>
      </div>
    </div>
  </nav>

  {/* Hero Section */}
  <div className="text-center py-16 px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Advanced AI Dashboard</h1>
    <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
      Real-time monitoring and intelligence for the AI Service Factory ecosystem
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg text-sm font-medium">
        🟢 All Systems Operational
      </span>
      <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium">
        📊 4 AI Systems Active
      </span>
      <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium">
        🎯 3 Services Optimized Today
      </span>
    </div>
  </div>

  {/* Dashboard Grid */}
  <div className="px-4 pb-20">
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* System Status Overview */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">🤖 AI System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemStatus.map((system, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">{system.name}</h3>
                <span className={`text-sm font-medium ${getStatusColor(system.status)}`}>
                  ● {system.status}
                </span>
              </div>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>Uptime:</span>
                  <span className="text-white">{system.uptime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Memory:</span>
                  <span className="text-white">{system.memory}</span>
                </div>
                <div className="flex justify-between">
                  <span>CPU:</span>
                  <span className="text-white">{system.cpu}</span>
                </div>
                <div className="flex justify-between">
                  <span>Activity:</span>
                  <span className="text-white text-xs">{system.lastActivity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Intelligence */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">📊 Market Intelligence & Trends</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">🔥 Hot Trends</h3>
            <div className="space-y-3">
              {marketTrends.filter(t => t.trendType === 'hot').map((trend, index) => (
                <div key={index} className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{trend.category}</span>
                    <span className="text-red-400 text-sm font-bold">{trend.score.toFixed(2)}</span>
                  </div>
                  <p className="text-white/80 text-sm">{trend.recommendation}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">📈 Emerging Trends</h3>
            <div className="space-y-3">
              {marketTrends.filter(t => t.trendType === 'emerging').map((trend, index) => (
                <div key={index} className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{trend.category}</span>
                    <span className="text-yellow-400 text-sm font-bold">{trend.score.toFixed(2)}</span>
                  </div>
                  <p className="text-white/80 text-sm">{trend.recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Optimization */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">⚡ Service Optimization</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-4">Service ID</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Improvements</th>
                <th className="text-left py-3 px-4">Impact</th>
                <th className="text-left py-3 px-4">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {serviceOptimizations.map((optimization, index) => (
                <tr key={index} className="border-b border-white/10">
                  <td className="py-3 px-4">
                    <span className="font-mono text-sm">{optimization.serviceId}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOptimizationColor(optimization.optimizationType)}`}>
                      {optimization.optimizationType}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="space-y-1">
                      {optimization.improvements.map((improvement, i) => (
                        <span key={i} className="block text-xs bg-white/10 px-2 py-1 rounded">
                          {improvement}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-green-400 font-bold">{optimization.improvement}</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-white/70">
                    {new Date(optimization.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Service Generation */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">🚀 Recent Service Generation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceGenerations.map((service, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">{service.name}</h3>
                  <p className="text-white/60 text-xs">{service.type}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  service.status === 'active' ? 'bg-green-500/20 text-green-300' : 
                  service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' : 
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {service.status}
                </span>
              </div>
              <div className="text-xs text-white/50">
                <div className="font-mono mb-1">{service.serviceId}</div>
                <div>Generated: {new Date(service.timestamp).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">⚡ Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            🔄 Force Service Generation
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            ⚡ Force Optimization
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            📊 Generate Market Report
          </button>
        </div>
      </div>

      {/* System Metrics */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">📈 System Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">7</div>
            <div className="text-white/70 text-sm">Total Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">3</div>
            <div className="text-white/70 text-sm">Optimized Today</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">4</div>
            <div className="text-white/70 text-sm">Active Trends</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">99.7%</div>
            <div className="text-white/70 text-sm">System Uptime</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* Footer */}
  <footer className="bg-white/5 backdrop-blur-md border-t border-white/20 py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-white/60">🧠 Advanced AI Dashboard - Powered by Autonomous AI Intelligence</p>
      <p className="text-white/40 text-sm mt-2">Real-time monitoring, market analysis, and service optimization</p>
    </div>
  </footer>

</div>
);
};

export default AdvancedDashboard;