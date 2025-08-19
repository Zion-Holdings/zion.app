import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PlatformPage() {
  return (
    <>
      <Head>
        <title>AI Automation Platform | Zion Tech Group - Autonomous Technology Platform</title>
        <meta name="description" content="Experience our cutting-edge AI automation platform that powers autonomous systems and intelligent automation across industries." />
        <meta property="og:title" content="AI Automation Platform | Zion Tech Group" />
        <meta property="og:description" content="Experience our cutting-edge AI automation platform that powers autonomous systems and intelligent automation across industries." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-20">
              <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI Automation Platform
              </h1>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Experience the future of autonomous technology with our cutting-edge AI automation platform
              </p>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Powering intelligent systems that learn, adapt, and operate autonomously across industries
              </p>
            </header>

            {/* Platform Overview */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-3xl p-12 border border-cyan-500/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold mb-6 text-white">Platform Overview</h2>
                    <p className="text-xl text-white/80 mb-6">
                      Our AI automation platform represents the convergence of cutting-edge artificial intelligence, 
                      machine learning, and autonomous systems technology. Built on years of research and real-world 
                      implementation experience, it provides the foundation for next-generation automation solutions.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                        <span className="text-white/90">Scalable cloud-native architecture</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-fuchsia-400 rounded-full"></div>
                        <span className="text-white/90">Real-time autonomous decision-making</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-white/90">Continuous learning and adaptation</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 rounded-full flex items-center justify-center mx-auto">
                      <div className="w-48 h-48 bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 rounded-full flex items-center justify-center">
                        <span className="text-6xl">🤖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Components */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center text-white">Platform Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400 text-center">AI Engine</h3>
                  <p className="text-white/80 text-center mb-6">
                    Advanced machine learning models and neural networks that power intelligent decision-making
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Deep Learning Models</li>
                    <li>• Natural Language Processing</li>
                    <li>• Computer Vision</li>
                    <li>• Predictive Analytics</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400 text-center">Automation Core</h3>
                  <p className="text-white/80 text-center mb-6">
                    Intelligent workflow automation and process orchestration systems
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Workflow Engine</li>
                    <li>• Process Orchestration</li>
                    <li>• Task Automation</li>
                    <li>• Business Rules Engine</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🔗</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400 text-center">Integration Hub</h3>
                  <p className="text-white/80 text-center mb-6">
                    Seamless connectivity with existing systems and third-party applications
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• API Gateway</li>
                    <li>• Data Connectors</li>
                    <li>• Webhook Support</li>
                    <li>• Custom Integrations</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400 text-center">Analytics & Insights</h3>
                  <p className="text-white/80 text-center mb-6">
                    Real-time monitoring, analytics, and performance optimization tools
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Real-time Dashboards</li>
                    <li>• Performance Metrics</li>
                    <li>• Predictive Insights</li>
                    <li>• Optimization Recommendations</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">Security & Governance</h3>
                  <p className="text-white/80 text-center mb-6">
                    Enterprise-grade security, compliance, and governance capabilities
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Role-based Access Control</li>
                    <li>• Data Encryption</li>
                    <li>• Audit Logging</li>
                    <li>• Compliance Frameworks</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400 text-center">Deployment Engine</h3>
                  <p className="text-white/80 text-center mb-6">
                    Automated deployment, scaling, and management across environments
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Auto-scaling</li>
                    <li>• Blue-Green Deployments</li>
                    <li>• Environment Management</li>
                    <li>• Infrastructure as Code</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Platform Features */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center text-white">Key Features</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Autonomous Operation</h3>
                    <p className="text-white/80">
                      Systems that can operate independently, making decisions and taking actions 
                      without human intervention while maintaining safety and compliance.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Continuous Learning</h3>
                    <p className="text-white/80">
                      AI models that continuously improve through experience, adapting to changing 
                      conditions and optimizing performance over time.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">Real-time Processing</h3>
                    <p className="text-white/80">
                      Sub-second response times for critical operations, enabling real-time 
                      decision-making and immediate action execution.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">Scalability</h3>
                    <p className="text-white/80">
                      Horizontal scaling capabilities that can handle thousands of concurrent 
                      operations and petabytes of data processing.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reliability</h3>
                    <p className="text-white/80">
                      99.9% uptime with automatic failover, self-healing capabilities, and 
                      comprehensive error handling and recovery.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-purple-400">Interoperability</h3>
                    <p className="text-white/80">
                      Seamless integration with existing enterprise systems, cloud platforms, 
                      and third-party applications through standardized APIs and connectors.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center text-white">Platform Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Manufacturing</h3>
                  <p className="text-white/80 mb-4">
                    Autonomous production lines, predictive maintenance, quality control, and 
                    supply chain optimization.
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Smart Factory Automation</li>
                    <li>• Predictive Maintenance</li>
                    <li>• Quality Control Systems</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 rounded-2xl p-8 border border-fuchsia-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Healthcare</h3>
                  <p className="text-white/80 mb-4">
                    Diagnostic assistance, patient monitoring, drug discovery, and administrative 
                    process automation.
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Medical Imaging Analysis</li>
                    <li>• Patient Care Automation</li>
                    <li>• Administrative Processes</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl p-8 border border-green-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Financial Services</h3>
                  <p className="text-white/80 mb-4">
                    Fraud detection, risk assessment, automated trading, and customer service 
                    automation.
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Fraud Detection Systems</li>
                    <li>• Risk Assessment</li>
                    <li>• Trading Automation</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-blue-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Retail & E-commerce</h3>
                  <p className="text-white/80 mb-4">
                    Inventory management, demand forecasting, personalized recommendations, and 
                    customer service automation.
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Inventory Optimization</li>
                    <li>• Demand Forecasting</li>
                    <li>• Customer Personalization</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Transportation</h3>
                  <p className="text-white/80 mb-4">
                    Autonomous vehicles, traffic optimization, logistics automation, and fleet 
                    management systems.
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Autonomous Vehicles</li>
                    <li>• Traffic Optimization</li>
                    <li>• Fleet Management</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Energy & Utilities</h3>
                  <p className="text-white/80 mb-4">
                    Smart grid management, predictive maintenance, energy optimization, and 
                    renewable energy integration.
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Smart Grid Management</li>
                    <li>• Energy Optimization</li>
                    <li>• Predictive Maintenance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Platform Demo */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center">
                <h2 className="text-4xl font-bold mb-6 text-white">Experience the Platform</h2>
                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                  See our AI automation platform in action with interactive demos and real-world examples
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 text-lg"
                  >
                    Request Demo
                  </Link>
                  <Link 
                    href="/case-studies"
                    className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-lg"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center text-white">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-white/80">Response Time</span>
                      <span className="text-cyan-400 font-semibold">&lt; 100ms</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-white/80">Throughput</span>
                      <span className="text-cyan-400 font-semibold">100,000+ ops/sec</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-white/80">Uptime</span>
                      <span className="text-cyan-400 font-semibold">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-white/80">Scalability</span>
                      <span className="text-cyan-400 font-semibold">Auto-scaling</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-fuchsia-400">Technology Stack</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-white/80">AI/ML Framework</span>
                      <span className="text-fuchsia-400 font-semibold">TensorFlow, PyTorch</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-white/80">Cloud Platform</span>
                      <span className="text-fuchsia-400 font-semibold">AWS, Azure, GCP</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-white/80">Containerization</span>
                      <span className="text-fuchsia-400 font-semibold">Docker, Kubernetes</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-white/80">Databases</span>
                      <span className="text-fuchsia-400 font-semibold">PostgreSQL, MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-3xl p-12 border border-cyan-500/20">
                <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                  Join the autonomous revolution with our AI automation platform. 
                  Experience unprecedented efficiency, innovation, and competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 text-lg"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    href="/services"
                    className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-lg"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}