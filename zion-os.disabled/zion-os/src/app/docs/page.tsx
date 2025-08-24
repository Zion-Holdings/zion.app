import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Zion OS Documentation</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Everything you need to know about deploying and managing sovereign AI-powered digital economies
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <nav className="space-y-2">
              <a href="#getting-started" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                Getting Started
              </a>
              <a href="#deployment" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                Deployment Guide
              </a>
              <a href="#features" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                Core Features
              </a>
              <a href="#governance" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                Governance Systems
              </a>
              <a href="#api" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                API Reference
              </a>
              <a href="#troubleshooting" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                Troubleshooting
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Getting Started */}
          <section id="getting-started">
            <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">What is Zion OS?</h3>
                <p className="text-gray-300 mb-4">
                  Zion OS is a unified deployment protocol that enables you to launch sovereign AI-powered 
                  digital economies with a single click. It provides a complete toolkit including marketplace 
                  infrastructure, governance systems, identity verification, and AI-powered tools.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Key Benefits</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Deploy complete digital economies in minutes</li>
                    <li>• Modular architecture - choose only what you need</li>
                    <li>• Built-in AI governance and moderation</li>
                    <li>• Multi-currency and token support</li>
                    <li>• Enterprise-grade security and compliance</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <span>Navigate to the Launch Wizard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <span>Configure your economy settings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <span>Select features and add-ons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <span>Deploy and monitor your instance</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/multiverse/launch" className="btn-primary">
                    Start Deployment
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Deployment Guide */}
          <section id="deployment">
            <h2 className="text-3xl font-bold mb-6">Deployment Guide</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Step-by-Step Deployment</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Step 1: Basic Configuration</h4>
                    <p className="text-gray-300 mb-3">
                      Start by providing the fundamental details for your digital economy:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400 ml-4">
                      <li>• Instance name (required)</li>
                      <li>• Industry vertical selection</li>
                      <li>• Domain configuration (optional)</li>
                      <li>• Geographic region and country</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Step 2: Governance & Tokens</h4>
                    <p className="text-gray-300 mb-3">
                      Configure how your economy will be governed and managed:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400 ml-4">
                      <li>• Token system (shared or local)</li>
                      <li>• Governance type (admin, DAO-lite, or full DAO)</li>
                      <li>• Regional settings and compliance</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Step 3: Feature Selection</h4>
                    <p className="text-gray-300 mb-3">
                      Choose from 14 core features including:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400 ml-4">
                      <li>• Marketplace & job systems</li>
                      <li>• AI-powered tools (ZionGPT, resume builder)</li>
                      <li>• Identity verification (KYC/AML)</li>
                      <li>• Smart contracts and blockchain integration</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Step 4: Add-ons & Extensions</h4>
                    <p className="text-gray-300 mb-3">
                      Enhance your economy with optional capabilities:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400 ml-4">
                      <li>• Payment gateway integration</li>
                      <li>• Sovereign treasury management</li>
                      <li>• AI moderation systems</li>
                      <li>• Government affiliate panels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section id="features">
            <h2 className="text-3xl font-bold mb-6">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Marketplace & Jobs</h3>
                <p className="text-gray-300 text-sm">
                  Complete marketplace infrastructure with job posting, talent matching, 
                  and project management capabilities.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-3">AI Governance</h3>
                <p className="text-gray-300 text-sm">
                  Intelligent governance systems with DAO voting, proposal management, 
                  and automated decision-making.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Token Systems</h3>
                <p className="text-gray-300 text-sm">
                  Flexible token economics with rewards, staking, and multi-currency 
                  support for your economy.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Identity & KYC</h3>
                <p className="text-gray-300 text-sm">
                  Secure identity verification with KYC/AML compliance and 
                  Web3 wallet integration.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-3">ZionGPT Integration</h3>
                <p className="text-gray-300 text-sm">
                  Core AI assistant for your economy with natural language 
                  processing and intelligent automation.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Smart Contracts</h3>
                <p className="text-gray-300 text-sm">
                  On-chain contract builder and management for automated 
                  business logic and agreements.
                </p>
              </div>
            </div>
          </section>

          {/* Governance Systems */}
          <section id="governance">
            <h2 className="text-3xl font-bold mb-6">Governance Systems</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Governance Types</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-400">Admin Control</h4>
                    <p className="text-gray-300 text-sm">
                      Centralized control with administrative oversight. Best for 
                      organizations that need direct management control.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">DAO-lite</h4>
                    <p className="text-gray-300 text-sm">
                      Hybrid approach with some decentralized decision-making while 
                      maintaining administrative oversight for critical functions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400">Full DAO</h4>
                    <p className="text-gray-300 text-sm">
                      Complete decentralized governance where all decisions are made 
                      through community voting and consensus mechanisms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section id="api">
            <h2 className="text-3xl font-bold mb-6">API Reference</h2>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">REST API Endpoints</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded">POST</span>
                    <code className="text-blue-400">/api/deploy</code>
                  </div>
                  <p className="text-sm text-gray-300">Deploy a new digital economy instance</p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">GET</span>
                    <code className="text-blue-400">/api/instances</code>
                  </div>
                  <p className="text-sm text-gray-300">Retrieve all deployed instances</p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded">GET</span>
                    <code className="text-blue-400">/api/health</code>
                  </div>
                  <p className="text-sm text-gray-300">Check system health and status</p>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Common Issues</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-400">Deployment Fails</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      If your deployment fails, check the following:
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4">
                      <li>• Ensure all required fields are filled</li>
                      <li>• Check that your instance name is unique</li>
                      <li>• Verify domain/subdomain availability</li>
                      <li>• Review deployment logs for specific errors</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-yellow-400">Performance Issues</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      For performance optimization:
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4">
                      <li>• Start with essential features only</li>
                      <li>• Monitor resource usage in your dashboard</li>
                      <li>• Consider scaling options for high-traffic instances</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Getting Help</h3>
                <p className="text-gray-300 mb-4">
                  If you need additional support or encounter issues not covered here:
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Check the deployment logs for detailed error information</p>
                  <p>• Review the instance management dashboard for status updates</p>
                  <p>• Contact support through the admin panel</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}