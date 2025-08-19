import React from 'react';
import Head from 'next/head';

export default function AutomationPage() {
  const automationCategories = [
    {
      title: 'Content Generation',
      description: 'AI-powered content creation and management',
      icon: '📝',
      count: '2,960+ pages',
      features: ['Blog posts', 'Technical docs', 'Marketing copy', 'SEO optimization']
    },
    {
      title: 'Infrastructure Management',
      description: 'Autonomous cloud infrastructure operations',
      icon: '☁️',
      count: '99.9% uptime',
      features: ['Auto-scaling', 'Self-healing', 'Performance monitoring', 'Security automation']
    },
    {
      title: 'CI/CD Automation',
      description: 'Intelligent build and deployment systems',
      icon: '🚀',
      count: 'Continuous',
      features: ['Automated testing', 'Smart deployments', 'Rollback systems', 'Quality gates']
    },
    {
      title: 'Monitoring & Alerting',
      description: 'Proactive system health management',
      icon: '🔍',
      count: '24/7 monitoring',
      features: ['Real-time alerts', 'Predictive maintenance', 'Performance analytics', 'Incident response']
    },
    {
      title: 'Security Automation',
      description: 'Intelligent threat detection and response',
      icon: '🛡️',
      count: 'Real-time protection',
      features: ['Threat detection', 'Vulnerability scanning', 'Access control', 'Compliance monitoring']
    },
    {
      title: 'Data Processing',
      description: 'Automated data analysis and insights',
      icon: '📊',
      count: 'Real-time processing',
      features: ['ETL pipelines', 'Analytics automation', 'Report generation', 'Data quality checks']
    }
  ];

  const automationStats = [
    { label: 'Active Automations', value: '227', color: 'text-cyan-400' },
    { label: 'Pages Generated', value: '2,960+', color: 'text-fuchsia-400' },
    { label: 'Uptime', value: '99.9%', color: 'text-green-400' },
    { label: 'Response Time', value: '<100ms', color: 'text-blue-400' }
  ];

  return (
    <>
      <Head>
        <title>Automation | Zion Tech Group - Autonomous Systems & AI Automation</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive automation capabilities, from AI-powered content generation to autonomous infrastructure management." />
        <meta property="og:title" content="Automation - Zion Tech Group" />
        <meta property="og:description" content="Autonomous systems and AI automation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Autonomous Automation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the future of automation with Zion Tech Group's intelligent, self-managing systems 
              that operate 24/7 without human intervention.
            </p>
          </section>

          {/* Automation Statistics */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {automationStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Automation Categories */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Automation Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-cyan-400/30">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-cyan-400">{category.title}</h3>
                  <p className="text-white/70 mb-4">{category.description}</p>
                  <div className="text-fuchsia-400 font-semibold mb-4">{category.count}</div>
                  <ul className="space-y-2 text-sm text-white/60">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">How Autonomous Automation Works</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Intelligent Analysis</h3>
                  <p className="text-white/70">
                    Our AI systems continuously analyze data, identify patterns, and make intelligent 
                    decisions about when and how to automate processes.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Autonomous Execution</h3>
                  <p className="text-white/70">
                    Once decisions are made, systems automatically execute actions, monitor results, 
                    and adjust strategies in real-time.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Continuous Learning</h3>
                  <p className="text-white/70">
                    Systems learn from every action, continuously improving performance and adapting 
                    to changing conditions and requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Benefits of Autonomous Automation</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Operational Efficiency</h3>
                  <ul className="space-y-3 text-white/70">
                    <li>• 24/7 operation without human intervention</li>
                    <li>• Instant response to changing conditions</li>
                    <li>• Elimination of human error and delays</li>
                    <li>• Scalable operations that grow with demand</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Cost Optimization</h3>
                  <ul className="space-y-3 text-white/70">
                    <li>• Reduced operational costs through efficiency</li>
                    <li>• Optimal resource utilization</li>
                    <li>• Predictive maintenance prevents costly failures</li>
                    <li>• Automated scaling based on actual demand</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Quality & Consistency</h3>
                  <ul className="space-y-3 text-white/70">
                    <li>• Consistent quality across all operations</li>
                    <li>• Continuous monitoring and improvement</li>
                    <li>• Standardized processes and procedures</li>
                    <li>• Reduced variability in outcomes</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Innovation & Growth</h3>
                  <ul className="space-y-3 text-white/70">
                    <li>• Freed human resources for creative work</li>
                    <li>• Rapid experimentation and iteration</li>
                    <li>• Data-driven insights and optimization</li>
                    <li>• Competitive advantage through automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Automate Your Future?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Join the automation revolution and discover how Zion Tech Group's autonomous systems 
                can transform your operations and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="/blog" className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300">
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