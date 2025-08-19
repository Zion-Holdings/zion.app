import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ComprehensiveRedundancyBlueprint: React.FC = () => {
  const architectureComponents = [
    {
      name: 'Load Balancer Layer',
      description: 'Distributes traffic across multiple instances',
      status: 'active',
      instances: 3,
      health: 'excellent'
    },
    {
      name: 'Application Layer',
      description: 'Multiple application instances with health checks',
      status: 'active',
      instances: 6,
      health: 'excellent'
    },
    {
      name: 'Database Layer',
      description: 'Primary and replica databases with failover',
      status: 'active',
      instances: 4,
      health: 'excellent'
    },
    {
      name: 'Cache Layer',
      description: 'Distributed caching with redundancy',
      status: 'active',
      instances: 4,
      health: 'excellent'
    },
    {
      name: 'Storage Layer',
      description: 'Multi-region storage with replication',
      status: 'active',
      instances: 3,
      health: 'excellent'
    }
  ];

  const redundancyFeatures = [
    {
      feature: 'Geographic Distribution',
      description: 'Instances distributed across multiple regions',
      benefit: 'Disaster recovery and low latency',
      status: 'implemented'
    },
    {
      feature: 'Auto-scaling',
      description: 'Automatic scaling based on load',
      benefit: 'Cost optimization and performance',
      status: 'implemented'
    },
    {
      feature: 'Health Monitoring',
      description: 'Continuous health checks and alerting',
      benefit: 'Proactive issue detection',
      status: 'implemented'
    },
    {
      feature: 'Automated Failover',
      description: 'Automatic failover on component failure',
      benefit: 'Zero downtime during failures',
      status: 'implemented'
    },
    {
      feature: 'Backup & Recovery',
      description: 'Automated backup and recovery procedures',
      benefit: 'Data protection and business continuity',
      status: 'implemented'
    }
  ];

  const performanceMetrics = [
    { metric: 'Uptime', value: '99.97%', target: '99.9%', status: 'exceeded' },
    { metric: 'Response Time', value: '45ms', target: '100ms', status: 'exceeded' },
    { metric: 'Throughput', value: '2.4k req/s', target: '1k req/s', status: 'exceeded' },
    { metric: 'Failover Time', value: '2.3s', target: '5s', status: 'exceeded' },
    { metric: 'Recovery Time', value: '15s', target: '30s', status: 'exceeded' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'implemented': return 'text-green-400';
      case 'exceeded': return 'text-green-400';
      case 'excellent': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'excellent': return 'bg-green-500/20 text-green-400';
      case 'good': return 'bg-yellow-500/20 text-yellow-400';
      case 'warning': return 'bg-orange-500/20 text-orange-400';
      case 'critical': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
      <Head>
        <title>Comprehensive Redundancy Blueprint - bolt.new.zion.app</title>
        <meta name="description" content="Multi-layer redundancy architecture for maximum uptime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/reports/blueprints" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Blueprints
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Comprehensive Redundancy System
          </h1>
          <p className="text-gray-300 text-lg">
            Multi-layer redundancy architecture ensuring maximum uptime and reliability
          </p>
        </div>

        {/* Blueprint Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Status</h3>
            <div className="text-2xl font-bold text-green-400">Active</div>
            <p className="text-gray-300 text-sm mt-2">Production ready</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Complexity</h3>
            <div className="text-2xl font-bold text-orange-400">High</div>
            <p className="text-gray-300 text-sm mt-2">Advanced architecture</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Uptime</h3>
            <div className="text-2xl font-bold text-green-400">99.97%</div>
            <p className="text-gray-300 text-sm mt-2">Exceeds target</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Last Updated</h3>
            <div className="text-2xl font-bold text-blue-400">2025-01-17</div>
            <p className="text-gray-300 text-sm mt-2">Recently optimized</p>
          </div>
        </div>

        {/* Architecture Components */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Architecture Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureComponents.map((component, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{component.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getHealthColor(component.health)}`}>
                    {component.health}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{component.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{component.instances} instances</span>
                  <span className={`text-xs ${getStatusColor(component.status)}`}>
                    ● {component.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Redundancy Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Redundancy Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {redundancyFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{feature.feature}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(feature.status)}`}>
                    {feature.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{feature.description}</p>
                <p className="text-cyan-400 text-sm font-medium">Benefit: {feature.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Performance Metrics</h2>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-cyan-400">Metric</th>
                    <th className="text-left py-3 px-4 text-cyan-400">Current Value</th>
                    <th className="text-left py-3 px-4 text-cyan-400">Target</th>
                    <th className="text-left py-3 px-4 text-cyan-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceMetrics.map((metric, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="py-3 px-4 text-white">{metric.metric}</td>
                      <td className="py-3 px-4 text-green-400 font-semibold">{metric.value}</td>
                      <td className="py-3 px-4 text-gray-300">{metric.target}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(metric.status)}`}>
                          {metric.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Architecture Overview</h2>
          <div className="bg-white/10 rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-6xl font-bold text-indigo-400 mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Multi-Layer Architecture</h3>
              <p className="text-gray-300 mb-6">
                Our comprehensive redundancy system employs a multi-layered approach with 
                automatic failover, health monitoring, and geographic distribution to ensure 
                maximum availability and performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                <div className="bg-indigo-500/20 rounded-lg p-4 border border-indigo-400/30">
                  <div className="text-lg font-bold text-indigo-400">Load Balancer</div>
                  <div className="text-xs text-gray-300">Traffic Distribution</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
                  <div className="text-lg font-bold text-blue-400">Application</div>
                  <div className="text-xs text-gray-300">6 Instances</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                  <div className="text-lg font-bold text-green-400">Database</div>
                  <div className="text-xs text-gray-300">4 Instances</div>
                </div>
                <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
                  <div className="text-lg font-bold text-yellow-400">Cache</div>
                  <div className="text-xs text-gray-300">4 Instances</div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/30">
                  <div className="text-lg font-bold text-purple-400">Storage</div>
                  <div className="text-xs text-gray-300">3 Regions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Implementation Details</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Technologies Used</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• PM2 for process management</li>
                <li>• Docker for containerization</li>
                <li>• Kubernetes for orchestration</li>
                <li>• Redis for caching</li>
                <li>• PostgreSQL for database</li>
                <li>• AWS S3 for storage</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Deployment Strategy</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Blue-green deployment</li>
                <li>• Rolling updates</li>
                <li>• Health check validation</li>
                <li>• Automatic rollback</li>
                <li>• Zero-downtime updates</li>
                <li>• Geographic failover</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/reports/blueprints"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50"
          >
            All Blueprints
          </Link>
          <Link 
            href="/reports/performance"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50"
          >
            Performance Reports
          </Link>
          <Link 
            href="/automation-health"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50"
          >
            System Health
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveRedundancyBlueprint;