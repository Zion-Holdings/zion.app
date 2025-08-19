import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const InnovationPage: React.FC = () => {
  const innovationAreas = [
    {
      category: 'AI Automation',
      innovations: [
        { name: 'Content Generation', status: 'active', impact: 'high', description: 'Automated content creation and optimization' },
        { name: 'SEO Automation', status: 'active', impact: 'high', description: 'Intelligent search engine optimization' },
        { name: 'Performance Monitoring', status: 'active', impact: 'medium', description: 'Real-time system health tracking' },
        { name: 'Deployment Automation', status: 'active', impact: 'high', description: 'Zero-downtime deployments' }
      ]
    },
    {
      category: 'Cloud Infrastructure',
      innovations: [
        { name: 'Multi-Region Redundancy', status: 'active', impact: 'high', description: 'Geographic failover systems' },
        { name: 'Auto-Scaling', status: 'active', impact: 'medium', description: 'Dynamic resource allocation' },
        { name: 'Load Balancing', status: 'active', impact: 'high', description: 'Intelligent traffic distribution' },
        { name: 'Disaster Recovery', status: 'active', impact: 'critical', description: 'Automated backup and recovery' }
      ]
    },
    {
      category: 'Development Practices',
      innovations: [
        { name: 'Continuous Integration', status: 'active', impact: 'high', description: 'Automated testing and deployment' },
        { name: 'Code Quality Gates', status: 'active', impact: 'medium', description: 'Automated code review and standards' },
        { name: 'Performance Budgets', status: 'active', impact: 'high', description: 'Automated performance monitoring' },
        { name: 'Security Scanning', status: 'active', impact: 'critical', description: 'Automated vulnerability detection' }
      ]
    }
  ];

  const recentInnovations = [
    {
      id: 'ai-content-factory-2025-01-17',
      title: 'AI Content Factory Launch',
      date: '2025-01-17',
      summary: 'Automated content generation system with AI-powered optimization',
      status: 'launched',
      impact: 'high'
    },
    {
      id: 'comprehensive-redundancy-2025-01-16',
      title: 'Comprehensive Redundancy System',
      date: '2025-01-16',
      summary: 'Multi-layer redundancy architecture for maximum uptime',
      status: 'deployed',
      impact: 'critical'
    },
    {
      id: 'github-actions-automation-2025-01-15',
      title: 'GitHub Actions Automation Suite',
      date: '2025-01-15',
      summary: 'Complete CI/CD automation with self-healing capabilities',
      status: 'operational',
      impact: 'high'
    }
  ];

  const upcomingInnovations = [
    {
      name: 'Quantum Computing Integration',
      description: 'Exploring quantum algorithms for optimization problems',
      timeline: 'Q2 2025',
      status: 'research'
    },
    {
      name: 'Edge Computing Network',
      description: 'Distributed computing for improved global performance',
      timeline: 'Q3 2025',
      status: 'planning'
    },
    {
      name: 'Advanced AI Orchestration',
      description: 'Multi-agent AI systems for complex automation',
      timeline: 'Q4 2025',
      status: 'development'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'launched': return 'text-blue-400';
      case 'deployed': return 'text-cyan-400';
      case 'operational': return 'text-green-400';
      case 'research': return 'text-yellow-400';
      case 'planning': return 'text-purple-400';
      case 'development': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical': return 'bg-red-500/20 text-red-400';
      case 'high': return 'bg-orange-500/20 text-orange-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Head>
        <title>Innovation Reports - bolt.new.zion.app</title>
        <meta name="description" content="AI automation trends and technological innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Innovation Reports
          </h1>
          <p className="text-gray-300 text-lg">
            Exploring the cutting edge of AI automation and technological advancement
          </p>
        </div>

        {/* Innovation Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Active Innovations</h3>
            <div className="text-4xl font-bold text-green-400">24</div>
            <p className="text-gray-300 text-sm mt-2">Currently deployed</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Success Rate</h3>
            <div className="text-2xl font-bold text-blue-400">98.7%</div>
            <p className="text-gray-300 text-sm mt-2">Innovation success</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Next Milestone</h3>
            <div className="text-2xl font-bold text-purple-400">Q2 2025</div>
            <p className="text-gray-300 text-sm mt-2">Quantum integration</p>
          </div>
        </div>

        {/* Innovation Areas */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Innovation Areas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {innovationAreas.map((area, areaIndex) => (
              <div key={areaIndex} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{area.category}</h3>
                <div className="space-y-4">
                  {area.innovations.map((innovation, innovationIndex) => (
                    <div key={innovationIndex} className="border-l-2 border-purple-400/30 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-white font-medium">{innovation.name}</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getImpactColor(innovation.impact)}`}>
                          {innovation.impact}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{innovation.description}</p>
                      <div className="flex items-center mt-2">
                        <span className={`text-xs ${getStatusColor(innovation.status)}`}>
                          ● {innovation.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Innovations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Recent Innovations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentInnovations.map((innovation) => (
              <div key={innovation.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{innovation.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getImpactColor(innovation.impact)}`}>
                    {innovation.impact}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{innovation.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{innovation.date}</span>
                  <span className={`text-xs ${getStatusColor(innovation.status)}`}>
                    {innovation.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Innovations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Upcoming Innovations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingInnovations.map((innovation, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">{innovation.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{innovation.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{innovation.timeline}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(innovation.status)}`}>
                    {innovation.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Metrics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Innovation Metrics</h2>
          <div className="bg-white/10 rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-400 mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Innovation Pipeline</h3>
              <p className="text-gray-300 mb-6">
                Our continuous innovation pipeline ensures we stay ahead of technological trends 
                and deliver cutting-edge solutions to our users.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">24</div>
                  <div className="text-gray-400 text-sm">Active Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">8</div>
                  <div className="text-gray-400 text-sm">In Development</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">12</div>
                  <div className="text-gray-400 text-sm">Research Phase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">98.7%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/reports"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50"
          >
            All Reports
          </Link>
          <Link 
            href="/reports/performance"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50"
          >
            Performance
          </Link>
          <Link 
            href="/automation"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50"
          >
            Automation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InnovationPage;