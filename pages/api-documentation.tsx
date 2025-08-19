import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function APIDocumentationPage() {
  return (
    <>
      <Head>
        <title>API Documentation — Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's autonomous technology services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                API Documentation
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Integrate with Zion Tech Group's autonomous systems through our comprehensive APIs.
              </p>
            </section>

            {/* Quick Start */}
            <section className="mb-16">
              <div className="bg-white/10 rounded-3xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Quick Start</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Get Your API Key</h3>
                    <p className="text-white/80 mb-4">
                      Sign up for a free account and get your API key to start integrating 
                      with our autonomous systems.
                    </p>
                    <Link href="/contact" className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                      Get API Key
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-green-400">Base URL</h3>
                    <div className="bg-white/5 p-4 rounded-lg font-mono text-cyan-400">
                      https://api.zion.tech/v1
                    </div>
                    <p className="text-sm text-white/60 mt-2">
                      All API endpoints are relative to this base URL
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* API Endpoints */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">API Endpoints</h2>
              
              <div className="space-y-6">
                {/* Authentication */}
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Authentication</h3>
                  <p className="text-white/80 mb-4">
                    All API requests require authentication using your API key in the Authorization header.
                  </p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm">
                    <div className="text-cyan-400">Authorization: Bearer YOUR_API_KEY</div>
                  </div>
                </div>

                {/* System Status */}
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">System Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-yellow-400">GET /status</h4>
                      <p className="text-white/70 mb-3">Get current system status and health metrics</p>
                      <div className="bg-white/5 p-3 rounded-lg font-mono text-sm">
                        <div className="text-green-400">curl -H "Authorization: Bearer YOUR_API_KEY" \</div>
                        <div className="text-white/70">  https://api.zion.tech/v1/status</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-blue-400">Response Example</h4>
                      <div className="bg-white/5 p-3 rounded-lg font-mono text-sm">
                        <div className="text-white/70">{'{'}</div>
                        <div className="text-cyan-400">  "status": "healthy",</div>
                        <div className="text-cyan-400">  "uptime": "99.9%",</div>
                        <div className="text-cyan-400">  "timestamp": "2025-01-15T10:00:00Z"</div>
                        <div className="text-white/70">{'}'}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reports */}
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Reports & Analytics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-cyan-400">GET /reports</h4>
                      <p className="text-white/70 mb-3">Retrieve system reports and analytics</p>
                      <div className="bg-white/5 p-3 rounded-lg font-mono text-sm">
                        <div className="text-green-400">curl -H "Authorization: Bearer YOUR_API_KEY" \</div>
                        <div className="text-white/70">  "https://api.zion.tech/v1/reports?type=performance"</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-blue-400">Parameters</h4>
                      <ul className="text-sm text-white/70 space-y-1">
                        <li>• <strong>type:</strong> performance, security, automation</li>
                        <li>• <strong>date:</strong> YYYY-MM-DD format</li>
                        <li>• <strong>limit:</strong> number of results (max 100)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Automation Control */}
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Automation Control</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-cyan-400">POST /automation/trigger</h4>
                      <p className="text-white/70 mb-3">Trigger specific automation workflows</p>
                      <div className="bg-white/5 p-3 rounded-lg font-mono text-sm">
                        <div className="text-green-400">curl -X POST \</div>
                        <div className="text-green-400">  -H "Authorization: Bearer YOUR_API_KEY" \</div>
                        <div className="text-green-400">  -H "Content-Type: application/json" \</div>
                        <div className="text-green-400">  -d '{"workflow": "security-scan"}' \</div>
                        <div className="text-white/70">  https://api.zion.tech/v1/automation/trigger</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-blue-400">Request Body</h4>
                      <div className="bg-white/5 p-3 rounded-lg font-mono text-sm">
                        <div className="text-white/70">{'{'}</div>
                        <div className="text-cyan-400">  "workflow": "security-scan",</div>
                        <div className="text-cyan-400">  "parameters": {'{}'},</div>
                        <div className="text-cyan-400">  "priority": "high"</div>
                        <div className="text-white/70">{'}'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SDKs and Libraries */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">SDKs & Libraries</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🐍</div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Python SDK</h3>
                  <p className="text-white/70 mb-4">
                    Official Python client library for easy integration
                  </p>
                  <div className="bg-white/5 p-3 rounded-lg font-mono text-sm mb-4">
                    pip install zion-tech-sdk
                  </div>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300">View Documentation →</a>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">☕</div>
                  <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Java SDK</h3>
                  <p className="text-white/70 mb-4">
                    Java client library with full type safety
                  </p>
                  <div className="bg-white/5 p-3 rounded-lg font-mono text-sm mb-4">
                    &lt;dependency&gt;zion-tech-client&lt;/dependency&gt;
                  </div>
                  <a href="#" className="text-fuchsia-400 hover:text-fuchsia-300">View Documentation →</a>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🟨</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">JavaScript SDK</h3>
                  <p className="text-white/70 mb-4">
                    Node.js and browser-compatible client
                  </p>
                  <div className="bg-white/5 p-3 rounded-lg font-mono text-sm mb-4">
                    npm install @zion-tech/sdk
                  </div>
                  <a href="#" className="text-green-400 hover:text-green-300">View Documentation →</a>
                </div>
              </div>
            </section>

            {/* Code Examples */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Code Examples</h2>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Python Example</h3>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm">
                    <div className="text-green-400">from zion_tech import ZionTech</div>
                    <div className="text-white/70"></div>
                    <div className="text-green-400"># Initialize client</div>
                    <div className="text-cyan-400">client = ZionTech(api_key="YOUR_API_KEY")</div>
                    <div className="text-white/70"></div>
                    <div className="text-green-400"># Get system status</div>
                    <div className="text-cyan-400">status = client.get_status()</div>
                    <div className="text-cyan-400">print(f"System status: {status['status']}")</div>
                    <div className="text-white/70"></div>
                    <div className="text-green-400"># Trigger automation</div>
                    <div className="text-cyan-400">result = client.trigger_automation("security-scan")</div>
                    <div className="text-cyan-400">print(f"Workflow ID: {result['workflow_id']}")</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">JavaScript Example</h3>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm">
                    <div className="text-green-400">import { ZionTech } from '@zion-tech/sdk';</div>
                    <div className="text-white/70"></div>
                    <div className="text-green-400">// Initialize client</div>
                    <div className="text-cyan-400">const client = new ZionTech('YOUR_API_KEY');</div>
                    <div className="text-white/70"></div>
                    <div className="text-green-400">// Get system status</div>
                    <div className="text-cyan-400">const status = await client.getStatus();</div>
                    <div className="text-cyan-400">console.log(`System status: ${status.status}`);</div>
                    <div className="text-white/70"></div>
                    <div className="text-green-400">// Trigger automation</div>
                    <div className="text-cyan-400">const result = await client.triggerAutomation('security-scan');</div>
                    <div className="text-cyan-400">console.log(`Workflow ID: ${result.workflow_id}`);</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Rate Limits */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Rate Limits & Quotas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">Free Tier</div>
                  <div className="text-white/70 mb-4">1,000 requests/day</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Basic API access</li>
                    <li>• Standard support</li>
                    <li>• Community forum</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">Pro Tier</div>
                  <div className="text-white/70 mb-4">100,000 requests/day</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Advanced features</li>
                    <li>• Priority support</li>
                    <li>• Custom integrations</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">Enterprise</div>
                  <div className="text-white/70 mb-4">Unlimited requests</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Full access</li>
                    <li>• Dedicated support</li>
                    <li>• SLA guarantees</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Support */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Need Help?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Documentation</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive guides, tutorials, and reference materials to help you 
                    get started quickly.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Getting Started Guide</li>
                    <li>• API Reference</li>
                    <li>• Best Practices</li>
                    <li>• Troubleshooting</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Support</h3>
                  <p className="text-white/80 mb-4">
                    Get help from our technical team and community of developers.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Technical Support</li>
                    <li>• Community Forum</li>
                    <li>• GitHub Issues</li>
                    <li>• Live Chat</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Ready to Integrate?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Start building with our autonomous technology APIs and transform your 
                applications with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                  Get Started
                </Link>
                <Link href="/reports" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  View Live Demo
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}