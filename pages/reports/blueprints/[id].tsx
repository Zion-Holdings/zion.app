import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const BlueprintPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Sample blueprint data - in a real app this would come from an API
  const blueprintData = {
    id: id || 'blueprint-2025-08-18-122901',
    title: 'Zion.app Platform Blueprint',
    version: '2.1.0',
    created: '2025-08-18',
    status: 'Active',
    description: 'Comprehensive blueprint for the Zion.app autonomous platform architecture and implementation.',
    sections: [
      {
        title: 'Platform Architecture',
        content: 'Multi-layered architecture with autonomous agents, cloud automation, and self-healing systems.',
        status: 'Implemented'
      },
      {
        title: 'AI Content Factory',
        content: 'Automated content generation, SEO optimization, and performance monitoring.',
        status: 'Active'
      },
      {
        title: 'Redundancy Systems',
        content: 'Comprehensive redundancy with PM2, GitHub Actions, and automated failover.',
        status: 'Operational'
      },
      {
        title: 'Monitoring & Analytics',
        content: 'Real-time dashboard, performance metrics, and automated health checks.',
        status: 'Monitoring'
      }
    ],
    metrics: {
      uptime: '98.7%',
      pages: '2,960',
      automations: '227',
      performance: '95/100'
    }
  };

  return (
    <>
      <Head>
        <title>{blueprintData.title} - Zion.app</title>
        <meta name="description" content={blueprintData.description} />
        <meta name="keywords" content="blueprint, architecture, Zion, platform, automation" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {blueprintData.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                {blueprintData.description}
              </p>
              <div className="flex justify-center space-x-6 text-sm">
                <span className="text-gray-400">Version: {blueprintData.version}</span>
                <span className="text-gray-400">Created: {blueprintData.created}</span>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full">{blueprintData.status}</span>
              </div>
            </header>

            <div className="grid gap-8">
              {/* Blueprint Overview */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Blueprint Overview</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Key Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Platform Uptime</span>
                        <span className="text-green-400 font-semibold">{blueprintData.metrics.uptime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Total Pages</span>
                        <span className="text-blue-400 font-semibold">{blueprintData.metrics.pages}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Active Automations</span>
                        <span className="text-purple-400 font-semibold">{blueprintData.metrics.automations}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Performance Score</span>
                        <span className="text-yellow-400 font-semibold">{blueprintData.metrics.performance}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Blueprint Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Blueprint ID</span>
                        <span className="text-blue-400 font-mono text-sm">{blueprintData.id}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Current Version</span>
                        <span className="text-green-400">{blueprintData.version}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Creation Date</span>
                        <span className="text-gray-300">{blueprintData.created}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Status</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">{blueprintData.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Blueprint Sections */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Blueprint Sections</h2>
                
                <div className="space-y-6">
                  {blueprintData.sections.map((section, index) => (
                    <div key={index} className="bg-gray-700/50 p-4 rounded border-l-4 border-blue-500">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-medium text-green-400">{section.title}</h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          section.status === 'Implemented' ? 'bg-green-600 text-white' :
                          section.status === 'Active' ? 'bg-blue-600 text-white' :
                          section.status === 'Operational' ? 'bg-purple-600 text-white' :
                          'bg-yellow-600 text-white'
                        }`}>
                          {section.status}
                        </span>
                      </div>
                      <p className="text-gray-300">{section.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Status */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Implementation Status</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Completed Features</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Autonomous cloud automations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">AI content generation system</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Redundancy and failover systems</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Performance monitoring dashboard</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-yellow-400 mb-3">In Progress</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Advanced AI agent orchestration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Multi-region deployment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Enhanced security protocols</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Predictive analytics engine</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Technical Specifications</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Frontend</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Framework</span>
                        <span className="text-blue-400">Next.js 15</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Styling</span>
                        <span className="text-blue-400">Tailwind CSS</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Language</span>
                        <span className="text-blue-400">TypeScript</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Backend</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Runtime</span>
                        <span className="text-blue-400">Node.js</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Process Manager</span>
                        <span className="text-blue-400">PM2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Automation</span>
                        <span className="text-blue-400">GitHub Actions</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Infrastructure</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Hosting</span>
                        <span className="text-blue-400">Netlify</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Monitoring</span>
                        <span className="text-blue-400">Custom + PM2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">CI/CD</span>
                        <span className="text-blue-400">GitHub Actions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Blueprint History */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Blueprint History</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400">2025-08-18</span>
                    <span className="text-gray-300">Blueprint v2.1.0 released</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400">2025-08-15</span>
                    <span className="text-gray-300">Redundancy systems implemented</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-400">2025-08-10</span>
                    <span className="text-gray-300">AI content factory activated</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-400">2025-08-05</span>
                    <span className="text-gray-300">Performance monitoring deployed</span>
                  </div>
                </div>
              </section>

              {/* Actions */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Blueprint Actions</h2>
                <p className="text-gray-300 mb-6">
                  Manage and update your blueprint implementation
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Update Blueprint
                  </button>
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                    Export PDF
                  </button>
                  <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    Share Blueprint
                  </button>
                  <button className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
                    View All Blueprints
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueprintPage;