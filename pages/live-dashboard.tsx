import React from 'react';
import Head from 'next/head';

const LiveDashboard = () => {
  return (
    <>
      <Head>
        <title>Live Dashboard - Zion.app</title>
        <meta name="description" content="Real-time monitoring and analytics dashboard for Zion.app platform" />
        <meta name="keywords" content="dashboard, monitoring, analytics, real-time, Zion" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Live Dashboard
              </h1>
              <p className="text-xl text-gray-300">
                Real-time monitoring and analytics for Zion.app platform
              </p>
            </header>

            <div className="grid gap-8">
              {/* Key Metrics */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Key Metrics</h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">2,960</div>
                    <div className="text-gray-300">Total Pages</div>
                    <div className="text-xs text-green-400 mt-1">↑ +12% this week</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">227</div>
                    <div className="text-gray-300">Active Automations</div>
                    <div className="text-xs text-blue-400 mt-1">↑ +5% this week</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">98.7%</div>
                    <div className="text-gray-300">Uptime</div>
                    <div className="text-xs text-green-400 mt-1">↑ +0.3% this week</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">1.2s</div>
                    <div className="text-gray-300">Avg Response</div>
                    <div className="text-xs text-red-400 mt-1">↓ -0.1s this week</div>
                  </div>
                </div>
              </section>

              {/* System Health */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">System Health</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">GitHub Actions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Content Generation</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Healthy</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">SEO Optimization</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Healthy</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Security Scanning</span>
                        <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded">Warning</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Performance Testing</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Healthy</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Infrastructure</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Netlify Deployment</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Online</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Database</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Connected</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">CDN</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Monitoring</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Real-time Activity */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Real-time Activity</h2>
                
                <div className="bg-gray-700/50 p-4 rounded">
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Content generation completed for /services</span>
                      <span className="text-gray-500 text-xs">2 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">SEO optimization running for homepage</span>
                      <span className="text-gray-500 text-xs">5 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Security scan detected minor vulnerability</span>
                      <span className="text-gray-500 text-xs">8 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Performance test completed - Score: 95</span>
                      <span className="text-gray-500 text-xs">12 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">New automation workflow created</span>
                      <span className="text-gray-500 text-xs">15 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Database backup completed successfully</span>
                      <span className="text-gray-500 text-xs">20 min ago</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Performance Metrics */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Performance Metrics</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Lighthouse Scores</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Performance</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                          </div>
                          <span className="text-green-400 text-sm">95</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Accessibility</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
                          </div>
                          <span className="text-green-400 text-sm">98</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Best Practices</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                          </div>
                          <span className="text-green-400 text-sm">92</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">SEO</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '96%'}}></div>
                          </div>
                          <span className="text-green-400 text-sm">96</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Core Web Vitals</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">LCP (Largest Contentful Paint)</span>
                        <span className="text-green-400 text-sm">1.2s</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">FID (First Input Delay)</span>
                        <span className="text-green-400 text-sm">45ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">CLS (Cumulative Layout Shift)</span>
                        <span className="text-green-400 text-sm">0.05</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">TTFB (Time to First Byte)</span>
                        <span className="text-green-400 text-sm">180ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Automation Status */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Automation Status</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Content Generation</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">AI Content Factory</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">SEO Optimization</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Link Management</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Monitoring</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Health Checks</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Performance Monitoring</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Error Tracking</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Deployment</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Auto Deploy</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Rollback System</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Health Monitoring</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Recent Deployments */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Recent Deployments</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left p-2">Environment</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Duration</th>
                        <th className="text-left p-2">Deployed At</th>
                        <th className="text-left p-2">Commit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="p-2">Production</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Success</span>
                        </td>
                        <td className="p-2">2m 34s</td>
                        <td className="p-2">2 hours ago</td>
                        <td className="p-2 text-blue-400">a1b2c3d</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-2">Staging</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Success</span>
                        </td>
                        <td className="p-2">1m 45s</td>
                        <td className="p-2">4 hours ago</td>
                        <td className="p-2 text-blue-400">e4f5g6h</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-2">Development</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded">Warning</span>
                        </td>
                        <td className="p-2">3m 12s</td>
                        <td className="p-2">6 hours ago</td>
                        <td className="p-2 text-blue-400">i7j8k9l</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Quick Actions */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Quick Actions</h2>
                <p className="text-gray-300 mb-6">
                  Manage your platform directly from the dashboard
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Run Health Check
                  </button>
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                    Trigger Backup
                  </button>
                  <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    View Logs
                  </button>
                  <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
                    Performance Test
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

export default LiveDashboard;