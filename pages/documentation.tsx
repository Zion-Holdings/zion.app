import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DocumentationPage() {
  return (
    <>
      <Head>
        <title>Documentation — Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation, API references, and tutorials for Zion Tech Group's autonomous AI platform." />
        <meta property="og:title" content="Documentation — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive documentation, API references, and tutorials for Zion Tech Group's autonomous AI platform." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Everything you need to get started with Zion Tech Group's autonomous AI platform.
            </p>
          </section>

          {/* Quick Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#getting-started" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
              Getting Started
            </a>
            <a href="#api-reference" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
              API Reference
            </a>
            <a href="#tutorials" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
              Tutorials
            </a>
            <a href="#examples" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
              Examples
            </a>
            <a href="#troubleshooting" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
              Troubleshooting
            </a>
          </nav>

          {/* Getting Started Section */}
          <section id="getting-started" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Getting Started</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Quick Start Guide</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Create Account</h4>
                      <p className="text-white/70">
                        Sign up for a Zion Tech Group account and verify your email address.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Install Agent</h4>
                      <p className="text-white/70">
                        Download and install the Zion Tech Group agent on your infrastructure.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Configure Settings</h4>
                      <p className="text-white/70">
                        Set up your monitoring preferences and automation rules.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Start Monitoring</h4>
                      <p className="text-white/70">
                        Your AI agents will begin monitoring and optimizing automatically.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Prerequisites</h3>
                <div className="space-y-4">
                  {[
                    'Node.js 18+ or Python 3.8+',
                    'Linux, macOS, or Windows',
                    'Minimum 2GB RAM',
                    'Network access to Zion Tech Group APIs',
                    'Admin/root access to your infrastructure'
                  ].map((prereq, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80">{prereq}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-lg">
                  <h4 className="text-cyan-400 font-semibold mb-2">💡 Pro Tip</h4>
                  <p className="text-white/70 text-sm">
                    Start with our free tier to explore features before upgrading to a paid plan.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">API Reference</h2>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Authentication</h3>
              <p className="text-white/70 mb-4">
                All API requests require authentication using your API key. Include it in the Authorization header:
              </p>
              <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                <span className="text-cyan-400">Authorization:</span> Bearer YOUR_API_KEY
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Monitoring API</h4>
                <div className="space-y-3">
                  <div className="bg-slate-800 rounded p-3">
                    <div className="text-green-400 text-sm font-mono">GET /api/v1/metrics</div>
                    <div className="text-white/60 text-xs mt-1">Retrieve system metrics</div>
                  </div>
                  <div className="bg-slate-800 rounded p-3">
                    <div className="text-blue-400 text-sm font-mono">POST /api/v1/alerts</div>
                    <div className="text-white/60 text-xs mt-1">Create custom alerts</div>
                  </div>
                  <div className="bg-slate-800 rounded p-3">
                    <div className="text-purple-400 text-sm font-mono">GET /api/v1/health</div>
                    <div className="text-white/60 text-xs mt-1">Check system health</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-fuchsia-400 mb-4">Automation API</h4>
                <div className="space-y-3">
                  <div className="bg-slate-800 rounded p-3">
                    <div className="text-green-400 text-sm font-mono">POST /api/v1/automations</div>
                    <div className="text-white/60 text-xs mt-1">Create automation rules</div>
                  </div>
                  <div className="bg-slate-800 rounded p-3">
                    <div className="text-blue-400 text-sm font-mono">PUT /api/v1/automations/:id</div>
                    <div className="text-white/60 text-xs mt-1">Update automation rules</div>
                  </div>
                  <div className="bg-slate-800 rounded p-3">
                    <div className="text-purple-400 text-sm font-mono">GET /api/v1/automations/logs</div>
                    <div className="text-white/60 text-xs mt-1">View automation logs</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Example API Request</h3>
              <div className="bg-slate-800 rounded-lg p-6 font-mono text-sm">
                <div className="text-cyan-400 mb-2">curl -X GET "https://api.ziontech.com/v1/metrics" \</div>
                <div className="text-cyan-400 mb-2">  -H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="text-cyan-400 mb-2">  -H "Content-Type: application/json" \</div>
                <div className="text-cyan-400">  -d '{"server_id": "server_123", "timeframe": "1h"}'</div>
              </div>
            </div>
          </section>

          {/* Tutorials Section */}
          <section id="tutorials" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Tutorials & Guides</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Setting Up Your First AI Agent',
                  description: 'Learn how to configure and deploy your first autonomous AI agent.',
                  duration: '15 min',
                  difficulty: 'Beginner',
                  icon: '🤖',
                  color: 'from-cyan-400 to-blue-500'
                },
                {
                  title: 'Creating Custom Automation Rules',
                  description: 'Build intelligent automation workflows tailored to your infrastructure.',
                  duration: '25 min',
                  difficulty: 'Intermediate',
                  icon: '⚡',
                  color: 'from-fuchsia-400 to-purple-500'
                },
                {
                  title: 'Building Custom Dashboards',
                  description: 'Create personalized monitoring dashboards with real-time data.',
                  duration: '20 min',
                  difficulty: 'Intermediate',
                  icon: '📊',
                  color: 'from-blue-400 to-indigo-500'
                },
                {
                  title: 'Integrating with External Tools',
                  description: 'Connect Zion Tech Group with your existing DevOps toolchain.',
                  duration: '30 min',
                  difficulty: 'Advanced',
                  icon: '🔗',
                  color: 'from-yellow-400 to-orange-500'
                },
                {
                  title: 'Security Best Practices',
                  description: 'Implement security best practices for your autonomous systems.',
                  duration: '20 min',
                  difficulty: 'Intermediate',
                  icon: '🔒',
                  color: 'from-green-400 to-emerald-500'
                },
                {
                  title: 'Performance Optimization',
                  description: 'Optimize your infrastructure performance using AI insights.',
                  duration: '35 min',
                  difficulty: 'Advanced',
                  icon: '🚀',
                  color: 'from-purple-400 to-pink-500'
                }
              ].map((tutorial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${tutorial.color} rounded-xl flex items-center justify-center`}>
                      <span className="text-xl">{tutorial.icon}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/60">{tutorial.duration}</div>
                      <div className="text-xs text-cyan-400 font-medium">{tutorial.difficulty}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tutorial.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{tutorial.description}</p>
                  <button className="w-full px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                    Start Tutorial
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Examples Section */}
          <section id="examples" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Code Examples</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">JavaScript/Node.js</h3>
                <div className="bg-slate-800 rounded-lg p-6 font-mono text-sm">
                  <div className="text-gray-400 mb-2">// Initialize Zion Tech Group client</div>
                  <div className="text-blue-400 mb-2">const</div> <span className="text-white">zionClient = </span>
                  <div className="text-yellow-400">new</div> <span className="text-white">ZionTechGroup({</span>
                  <div className="text-white ml-4">apiKey: </div>
                  <div className="text-green-400">'your-api-key'</div>
                  <div className="text-white">});</div>
                  <br />
                  <div className="text-gray-400 mb-2">// Get system metrics</div>
                  <div className="text-blue-400">const</div> <span className="text-white">metrics = </span>
                  <div className="text-blue-400">await</div> <span className="text-white">zionClient.metrics.get({</span>
                  <div className="text-white ml-4">serverId: </div>
                  <div className="text-green-400">'server-123'</div>
                  <div className="text-white">});</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-6">Python</h3>
                <div className="bg-slate-800 rounded-lg p-6 font-mono text-sm">
                  <div className="text-gray-400 mb-2"># Initialize Zion Tech Group client</div>
                  <div className="text-blue-400">from</div> <span className="text-white">zion_tech_group </span>
                  <div className="text-blue-400">import</div> <span className="text-white">ZionTechGroup</span>
                  <br />
                  <div className="text-white">client = ZionTechGroup(</div>
                  <div className="text-white ml-4">api_key=</div>
                  <div className="text-green-400">'your-api-key'</div>
                  <div className="text-white">)</div>
                  <br />
                  <div className="text-gray-400 mb-2"># Create automation rule</div>
                  <div className="text-white">rule = client.automations.create({</div>
                  <div className="text-white ml-4">name: </div>
                  <div className="text-green-400">'auto-scale'</div>
                  <div className="text-white">,</div>
                  <div className="text-white ml-4">condition: </div>
                  <div className="text-green-400">'cpu > 80%'</div>
                  <div className="text-white">,</div>
                  <div className="text-white ml-4">action: </div>
                  <div className="text-green-400">'scale-up'</div>
                  <div className="text-white">})</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Configuration Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">Docker Compose</h4>
                  <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                    <div className="text-white">version: </div>
                    <div className="text-green-400">'3.8'</div>
                    <div className="text-white">services:</div>
                    <div className="text-white ml-4">zion-agent:</div>
                    <div className="text-white ml-8">image: ziontech/agent:latest</div>
                    <div className="text-white ml-8">environment:</div>
                    <div className="text-white ml-12">- API_KEY=${ZION_API_KEY}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-fuchsia-400 mb-4">Kubernetes</h4>
                  <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                    <div className="text-white">apiVersion: v1</div>
                    <div className="text-white">kind: ConfigMap</div>
                    <div className="text-white">metadata:</div>
                    <div className="text-white ml-4">name: zion-config</div>
                    <div className="text-white">data:</div>
                    <div className="text-white ml-4">api_key: </div>
                    <div className="text-green-400">"your-api-key"</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section id="troubleshooting" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Troubleshooting</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Common Issues</h3>
                <div className="space-y-4">
                  {[
                    'Agent not connecting to API',
                    'High memory usage',
                    'Slow response times',
                    'Authentication errors',
                    'Missing metrics data'
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Quick Fixes</h3>
                <div className="space-y-4">
                  {[
                    'Check network connectivity',
                    'Verify API key validity',
                    'Restart the agent service',
                    'Check system resources',
                    'Review error logs'
                  ].map((fix, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">{fix}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Getting Help</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Documentation</h4>
                  <p className="text-white/70 text-sm">Comprehensive guides and references</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Community</h4>
                  <p className="text-white/70 text-sm">Get help from other users</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎫</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Support</h4>
                  <p className="text-white/70 text-sm">Contact our support team</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </Link>
                <Link href="/blog" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Read Blog
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}