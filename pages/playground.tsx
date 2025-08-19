import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Playground: React.FC = () => {
  const [activeTab, setActiveTab] = useState('automation');
  const [demoData, setDemoData] = useState({
    automation: { status: 'running', progress: 65 },
    performance: { score: 92, metrics: { speed: 'Fast', accessibility: 'Good', seo: 'Excellent' } },
    security: { scanStatus: 'completed', vulnerabilities: 0, recommendations: 3 }
  });

  const playgroundTools = [
    {
      id: 'automation',
      name: 'Automation Testing',
      description: 'Test automation workflows and see real-time execution',
      icon: '🤖',
      features: ['Workflow Builder', 'Execution Monitor', 'Performance Metrics']
    },
    {
      id: 'performance',
      name: 'Performance Testing',
      description: 'Analyze application performance and identify bottlenecks',
      icon: '⚡',
      features: ['Lighthouse Integration', 'Speed Analysis', 'Optimization Tips']
    },
    {
      id: 'security',
      name: 'Security Scanner',
      description: 'Scan for vulnerabilities and security best practices',
      icon: '🔒',
      features: ['Vulnerability Detection', 'Security Audit', 'Compliance Check']
    },
    {
      id: 'api',
      name: 'API Testing',
      description: 'Test API endpoints and validate responses',
      icon: '🔌',
      features: ['Request Builder', 'Response Validator', 'Error Testing']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': return '🔄';
      case 'completed': return '✅';
      case 'error': return '❌';
      default: return '⏸️';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Playground - bolt.new.zion.app</title>
        <meta name="description" content="Interactive playground for testing automation, performance, and security features" />
        <meta name="keywords" content="playground, testing, automation, performance, security, demos" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Interactive Playground
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test and experiment with our automation tools, performance testing, and security features 
              in a safe, interactive environment.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/live-dashboard" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Dashboard
              </Link>
              <Link href="/component-library" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Components
              </Link>
            </div>
          </nav>

          {/* Tool Selection */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Tool</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {playgroundTools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`p-6 rounded-lg border-2 transition-all text-center ${
                    activeTab === tool.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                  <div className="space-y-1">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="text-xs text-gray-500">• {feature}</div>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Tool Interface */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {playgroundTools.find(t => t.id === activeTab)?.name}
            </h2>

            {activeTab === 'automation' && (
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Sample Automation Workflow</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(demoData.automation.status)}`}>
                      {demoData.automation.status}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{demoData.automation.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${demoData.automation.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 border border-gray-200 rounded-lg">
                      <div className="text-2xl mb-2">📊</div>
                      <div className="text-sm font-semibold">Data Collection</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                    <div className="text-center p-3 border border-gray-200 rounded-lg">
                      <div className="text-2xl mb-2">🔄</div>
                      <div className="text-sm font-semibold">Processing</div>
                      <div className="text-xs text-gray-500">In Progress</div>
                    </div>
                    <div className="text-center p-3 border border-gray-200 rounded-lg">
                      <div className="text-2xl mb-2">📤</div>
                      <div className="text-sm font-semibold">Output</div>
                      <div className="text-xs text-gray-500">Pending</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Start New Workflow
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    View Logs
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Score</h3>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-blue-600 mb-2">{demoData.performance.score}</div>
                      <div className="text-2xl text-gray-600">/ 100</div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Speed</span>
                        <span className="font-semibold text-green-600">{demoData.performance.metrics.speed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Accessibility</span>
                        <span className="font-semibold text-yellow-600">{demoData.performance.metrics.accessibility}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SEO</span>
                        <span className="font-semibold text-blue-600">{demoData.performance.metrics.seo}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Recommendations</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <span className="text-yellow-600">💡</span>
                      <div>
                        <p className="font-semibold text-yellow-800">Image Optimization</p>
                        <p className="text-yellow-700 text-sm">Consider using WebP format for better compression</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <span className="text-blue-600">💡</span>
                      <div>
                        <p className="font-semibold text-blue-800">Caching Strategy</p>
                        <p className="text-blue-700 text-sm">Implement proper cache headers for static assets</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Run New Test
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Export Report
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <div className="text-4xl mb-2">🔒</div>
                    <div className="text-2xl font-bold text-green-600">{demoData.security.vulnerabilities}</div>
                    <div className="text-sm text-gray-600">Vulnerabilities Found</div>
                  </div>
                  <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <div className="text-4xl mb-2">✅</div>
                    <div className="text-2xl font-bold text-blue-600">{demoData.security.recommendations}</div>
                    <div className="text-sm text-gray-600">Security Recommendations</div>
                  </div>
                  <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <div className="text-4xl mb-2">🛡️</div>
                    <div className="text-2xl font-bold text-green-600">A+</div>
                    <div className="text-sm text-gray-600">Security Grade</div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Scan Results</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <span className="text-green-600">✅</span>
                      <div>
                        <p className="font-semibold text-green-800">HTTPS Configuration</p>
                        <p className="text-green-700 text-sm">Properly configured with valid SSL certificate</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <span className="text-green-600">✅</span>
                      <div>
                        <p className="font-semibold text-green-800">Content Security Policy</p>
                        <p className="text-green-700 text-sm">CSP headers properly implemented</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <span className="text-blue-600">💡</span>
                      <div>
                        <p className="font-semibold text-blue-800">Rate Limiting</p>
                        <p className="text-blue-700 text-sm">Consider implementing rate limiting for API endpoints</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Run Security Scan
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    View Full Report
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">API Endpoint Tester</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Endpoint URL</label>
                      <input
                        type="text"
                        placeholder="https://api.example.com/endpoint"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Method</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>GET</option>
                          <option>POST</option>
                          <option>PUT</option>
                          <option>DELETE</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Timeout</label>
                        <input
                          type="number"
                          placeholder="30"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Request Headers (JSON)</label>
                      <textarea
                        placeholder='{"Authorization": "Bearer token", "Content-Type": "application/json"}'
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Send Request
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Clear Form
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Explore More?</h2>
            <p className="text-blue-700 mb-6">
              Discover more tools and features to enhance your automation workflows.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/automation" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View Automation
              </Link>
              <Link href="/live-dashboard" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Live Dashboard
              </Link>
              <Link href="/component-library" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Component Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;