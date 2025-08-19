import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const InnovationReports = () => {
  const innovationMetrics = [
    {
      id: 'ai-automation',
      title: 'AI Automation Progress',
      description: 'Machine learning and automation implementation status',
      status: 'In Progress',
      progress: 78,
      lastUpdated: '2025-01-17',
      category: 'AI/ML'
    },
    {
      id: 'new-features',
      title: 'Feature Development',
      description: 'New features and capabilities being developed',
      status: 'Active',
      progress: 65,
      lastUpdated: '2025-01-17',
      category: 'Development'
    },
    {
      id: 'research-projects',
      title: 'Research Projects',
      description: 'Experimental and research initiatives',
      status: 'Planning',
      progress: 45,
      lastUpdated: '2025-01-17',
      category: 'Research'
    },
    {
      id: 'partnerships',
      title: 'Strategic Partnerships',
      description: 'New partnerships and collaborations',
      status: 'Active',
      progress: 82,
      lastUpdated: '2025-01-17',
      category: 'Business'
    }
  ];

  const upcomingInnovations = [
    {
      title: 'Advanced AI Orchestration',
      description: 'Next-generation automation with machine learning',
      expectedDate: '2025-Q2',
      impact: 'High',
      category: 'AI/ML'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Live monitoring and analytics platform',
      expectedDate: '2025-Q1',
      impact: 'Medium',
      category: 'Analytics'
    },
    {
      title: 'Blockchain Integration',
      description: 'Decentralized features and security enhancements',
      expectedDate: '2025-Q3',
      impact: 'High',
      category: 'Blockchain'
    },
    {
      title: 'Advanced SEO Automation',
      description: 'AI-powered SEO optimization and content generation',
      expectedDate: '2025-Q2',
      impact: 'Medium',
      category: 'SEO'
    }
  ];

  const innovationHighlights = [
    {
      title: 'Automated Content Generation',
      description: 'Successfully implemented AI-powered content creation',
      date: '2025-01-15',
      metrics: '+40% content output, +25% engagement'
    },
    {
      title: 'Smart Monitoring System',
      description: 'Intelligent error detection and self-healing capabilities',
      date: '2025-01-12',
      metrics: '-60% downtime, +35% reliability'
    },
    {
      title: 'Performance Optimization',
      description: 'Advanced caching and optimization algorithms',
      date: '2025-01-10',
      metrics: '+30% speed, +20% user satisfaction'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Head>
        <title>Innovation Reports - bolt.new.zion.app</title>
        <meta name="description" content="Innovation metrics and research progress for bolt.new.zion.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Innovation Reports
          </h1>
          <p className="text-gray-300 mt-2 text-lg">
            Research progress, new features, and innovation metrics
          </p>
        </div>

        {/* Innovation Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {innovationMetrics.map((metric) => (
            <div key={metric.id} className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-purple-300">{metric.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  metric.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                  metric.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                  metric.status === 'Planning' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-gray-500/20 text-gray-300'
                }`}>
                  {metric.status}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.progress}%</div>
              <p className="text-gray-400 text-sm mb-2">{metric.description}</p>
              <div className="text-xs text-gray-500">Last updated: {metric.lastUpdated}</div>
            </div>
          ))}
        </div>

        {/* Upcoming Innovations */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">Upcoming Innovations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingInnovations.map((innovation, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white text-lg">{innovation.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    innovation.impact === 'High' ? 'bg-red-500/20 text-red-300' :
                    innovation.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {innovation.impact}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{innovation.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Expected: {innovation.expectedDate}</span>
                  <span className="text-purple-400">{innovation.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Highlights */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">Recent Innovation Highlights</h2>
          <div className="space-y-4">
            {innovationHighlights.map((highlight, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white text-lg">{highlight.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{highlight.description}</p>
                  </div>
                  <span className="text-xs text-gray-500">{highlight.date}</span>
                </div>
                <div className="text-green-400 font-semibold text-sm">{highlight.metrics}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Trends */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">Innovation Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">+45%</div>
              <div className="text-gray-400">Innovation Velocity</div>
              <div className="text-xs text-gray-500">Last 6 months</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">+28%</div>
              <div className="text-gray-400">Feature Adoption</div>
              <div className="text-xs text-gray-500">Last 6 months</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">+62%</div>
              <div className="text-gray-400">Research Output</div>
              <div className="text-xs text-gray-500">Last 6 months</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/reports" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors">
            All Reports
          </Link>
          <Link href="/reports/performance" className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold rounded-lg transition-colors">
            Performance Reports
          </Link>
          <Link href="/automation" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-colors">
            Automation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InnovationReports;