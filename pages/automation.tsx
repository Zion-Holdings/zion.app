import React from 'react';
import Head from 'next/head';

export default function AutomationPage() {
  const automationFeatures = [
    {
      icon: '🤖',
      title: 'Autonomous Cloud Management',
      description: 'Self-managing cloud infrastructure that automatically scales, optimizes, and heals itself.',
      benefits: ['Auto-scaling', 'Performance optimization', 'Cost management', 'Security hardening']
    },
    {
      icon: '🔧',
      title: 'Self-Healing Applications',
      description: 'Applications that detect and resolve issues automatically without human intervention.',
      benefits: ['Error detection', 'Automatic recovery', 'Performance monitoring', 'Proactive maintenance']
    },
    {
      icon: '📊',
      title: 'Intelligent Monitoring',
      description: 'AI-powered monitoring systems that predict and prevent issues before they occur.',
      benefits: ['Predictive analytics', 'Real-time alerts', 'Performance insights', 'Trend analysis']
    },
    {
      icon: '🚀',
      title: 'Continuous Deployment',
      description: 'Automated CI/CD pipelines that ensure seamless, reliable software delivery.',
      benefits: ['Automated testing', 'Zero-downtime deployment', 'Rollback capabilities', 'Quality gates']
    },
    {
      icon: '🌐',
      title: 'Global Synchronization',
      description: 'Multi-region systems that automatically sync and maintain consistency across the globe.',
      benefits: ['Multi-region deployment', 'Data synchronization', 'Load balancing', 'Disaster recovery']
    },
    {
      icon: '🔒',
      title: 'Security Automation',
      description: 'Proactive security systems that continuously monitor and protect your infrastructure.',
      benefits: ['Threat detection', 'Vulnerability scanning', 'Access control', 'Compliance monitoring']
    }
  ];

  const automationStats = [
    { number: '227', label: 'Active Automations', color: 'text-cyan-400' },
    { number: '99.9%', label: 'Uptime', color: 'text-green-400' },
    { number: '95%', label: 'Issue Prevention', color: 'text-fuchsia-400' },
    { number: '24/7', label: 'Operation', color: 'text-blue-400' }
  ];

  return (
    <>
      <Head>
        <title>Automation | Zion Tech Group - Autonomous Systems & AI</title>
        <meta name="description" content="Discover Zion Tech Group's cutting-edge autonomous automation systems that operate 24/7, self-heal, and continuously optimize performance." />
        <meta property="og:title" content="Automation - Zion Tech Group" />
        <meta property="og:description" content="Autonomous automation systems that operate 24/7, self-heal, and continuously optimize performance." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </a>
          </nav>

          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Autonomous Automation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the future of technology with systems that think, learn, and operate independently. 
              Our autonomous automation platforms work 24/7 to ensure your business never stops innovating.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {automationStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Automation Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-cyan-400/30">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">{feature.title}</h3>
                  <p className="text-white/70 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-white/60 flex items-center gap-2">
                        <span className="text-cyan-400">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">How Autonomous Automation Works</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-cyan-400/20 to-cyan-400/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl">🔍</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">1. Monitor</h3>
                  <p className="text-white/70">
                    Our AI systems continuously monitor your infrastructure, applications, and performance metrics in real-time.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-fuchsia-400/20 to-fuchsia-400/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl">🧠</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">2. Analyze</h3>
                  <p className="text-white/70">
                    Advanced machine learning algorithms analyze patterns and predict potential issues before they occur.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-400/20 to-green-400/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl">⚡</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-400">3. Act</h3>
                  <p className="text-white/70">
                    Systems automatically implement solutions, optimizations, and fixes without human intervention.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Real-World Applications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">E-commerce Platforms</h3>
                <p className="text-white/70 mb-4">
                  Autonomous systems manage traffic spikes, optimize database performance, and ensure seamless shopping experiences during peak periods.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div>• Automatic scaling during Black Friday sales</div>
                  <div>• Real-time inventory optimization</div>
                  <div>• Proactive fraud detection</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Financial Services</h3>
                <p className="text-white/70 mb-4">
                  AI-powered systems monitor transactions, detect anomalies, and ensure compliance while maintaining 99.99% uptime.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div>• Real-time fraud detection</div>
                  <div>• Automated compliance reporting</div>
                  <div>• Risk assessment automation</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 rounded-2xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Automate Your Future?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the revolution of autonomous technology. Let our AI systems work for you 24/7, 
                ensuring your business operates at peak efficiency without interruption.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105">
                  Get Started Today
                </a>
                <a href="/services" className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
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