import React from 'react';
import Head from 'next/head';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation | Zion Tech Group - Autonomous Systems Showcase</title>
        <meta name="description" content="Explore Zion Tech Group's cutting-edge autonomous automation systems, AI agents, and self-managing infrastructure solutions." />
        <meta property="og:title" content="Automation - Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge autonomous automation systems and AI agents." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Autonomous Automation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the future of technology with our self-managing, intelligent automation systems
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Live System Status */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Live System Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-green-400/20 border border-green-400/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400">227</div>
                  <div className="text-sm text-white/70">Active Automations</div>
                  <div className="text-xs text-green-400 mt-2">✓ Operational</div>
                </div>
                <div className="bg-blue-400/20 border border-blue-400/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400">2,960</div>
                  <div className="text-sm text-white/70">Pages Generated</div>
                  <div className="text-xs text-blue-400 mt-2">✓ Growing</div>
                </div>
                <div className="bg-purple-400/20 border border-purple-400/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                  <div className="text-xs text-purple-400 mt-2">✓ Reliable</div>
                </div>
                <div className="bg-orange-400/20 border border-orange-400/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-sm text-white/70">Monitoring</div>
                  <div className="text-xs text-orange-400 mt-2">✓ Active</div>
                </div>
              </div>
            </div>

            {/* Core Automation Systems */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Core Automation Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Content Factory</h3>
                  <p className="text-white/70 mb-6">
                    Autonomous content generation system that creates, optimizes, and publishes high-quality content 24/7 without human intervention.
                  </p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• SEO-optimized content creation</div>
                    <div>• Multi-language support</div>
                    <div>• Automatic publishing schedules</div>
                    <div>• Performance analytics</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Self-Healing Infrastructure</h3>
                  <p className="text-white/70 mb-6">
                    Intelligent monitoring and automatic recovery systems that detect and resolve issues before they impact users.
                  </p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Real-time error detection</div>
                    <div>• Automatic rollback systems</div>
                    <div>• Performance optimization</div>
                    <div>• Predictive maintenance</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Orchestration</h3>
                  <p className="text-white/70 mb-6">
                    Multi-cloud management system that automatically scales, optimizes, and maintains infrastructure across different cloud providers.
                  </p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Auto-scaling capabilities</div>
                    <div>• Cost optimization</div>
                    <div>• Multi-region deployment</div>
                    <div>• Load balancing</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">CI/CD Automation</h3>
                  <p className="text-white/70 mb-6">
                    Fully automated development pipeline that builds, tests, and deploys code with intelligent quality gates and rollback capabilities.
                  </p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Automated testing suites</div>
                    <div>• Quality assurance checks</div>
                    <div>• Zero-downtime deployments</div>
                    <div>• Performance monitoring</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Automation Benefits */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Why Choose Autonomous Automation?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">24/7 Operation</h3>
                  <p className="text-white/70">Our systems never sleep, ensuring continuous operation and immediate response to any issues.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Self-Improvement</h3>
                  <p className="text-white/70">AI systems that learn from every interaction and continuously optimize their performance.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Adaptive Scaling</h3>
                  <p className="text-white/70">Automatic resource allocation and scaling based on real-time demand and performance metrics.</p>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-3">☁️</div>
                  <div className="font-semibold">Cloud Platforms</div>
                  <div className="text-sm text-white/60 mt-2">AWS, Azure, GCP</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-3">🤖</div>
                  <div className="font-semibold">AI/ML</div>
                  <div className="text-sm text-white/60 mt-2">TensorFlow, PyTorch</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-3">🐳</div>
                  <div className="font-semibold">Containers</div>
                  <div className="text-sm text-white/60 mt-2">Docker, Kubernetes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-3">⚡</div>
                  <div className="font-semibold">Monitoring</div>
                  <div className="text-sm text-white/60 mt-2">Prometheus, Grafana</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Automate?</h2>
              <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
                Transform your business with autonomous automation systems that work around the clock to drive efficiency and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                  Get Started
                </a>
                <a href="/services" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-200">
                  Learn More
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}