import React from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Comprehensive autonomous technology services including AI, robotics, cybersecurity, and cloud automation from Zion Tech Group." />
        <meta property="og:title" content="Services | Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Comprehensive autonomous technology services including AI, robotics, cybersecurity, and cloud automation from Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive autonomous technology solutions that transform businesses and drive innovation
              </p>
            </header>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white/90">🤖 AI & Machine Learning</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Neural Network Development</h3>
                  <p className="text-white/80 mb-4">
                    Custom neural network architectures optimized for your specific use case, 
                    achieving state-of-the-art performance metrics.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">Deep Learning</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Custom Models</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Computer Vision Systems</h3>
                  <p className="text-white/80 mb-4">
                    Advanced computer vision solutions for object detection, recognition, 
                    and analysis with 99.8% accuracy.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-fuchsia-500/20 text-fuchsia-300 px-3 py-1 rounded-full text-sm">Object Detection</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Image Analysis</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">Natural Language Processing</h3>
                  <p className="text-white/80 mb-4">
                    Intelligent language understanding systems for chatbots, 
                    content analysis, and automated customer support.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">NLP</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Chatbots</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white/90">☁️ Cloud & Infrastructure</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Cloud Migration</h3>
                  <p className="text-white/80 mb-4">
                    Seamless migration to cloud platforms with zero downtime, 
                    optimizing costs and improving scalability.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">AWS</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Azure</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-300">DevOps Automation</h3>
                  <p className="text-white/80 mb-4">
                    Automated CI/CD pipelines, infrastructure as code, and 
                    monitoring solutions for continuous delivery.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-fuchsia-500/20 text-fuchsia-300 px-3 py-1 rounded-full text-sm">CI/CD</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Infrastructure</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">Performance Optimization</h3>
                  <p className="text-white/80 mb-4">
                    Application and database optimization for maximum performance, 
                    reducing latency and improving user experience.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Performance</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Optimization</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white/90">🛡️ Cybersecurity</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Threat Detection</h3>
                  <p className="text-white/80 mb-4">
                    AI-powered threat detection systems that identify and 
                    respond to security threats in real-time.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">AI Security</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Real-time</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Incident Response</h3>
                  <p className="text-white/80 mb-4">
                    Automated incident response systems that resolve security 
                    issues within seconds, minimizing damage and downtime.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-fuchsia-500/20 text-fuchsia-300 px-3 py-1 rounded-full text-sm">Automation</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Response</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">Compliance & Auditing</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive compliance solutions for GDPR, SOC 2, ISO 27001, 
                    and other industry standards.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Compliance</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Standards</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white/90">⚙️ Robotics & Automation</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🏭</div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Industrial Automation</h3>
                  <p className="text-white/80 mb-4">
                    Smart manufacturing solutions that increase efficiency by 300%+ 
                    while reducing defects and operational costs.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">Manufacturing</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Efficiency</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Service Robotics</h3>
                  <p className="text-white/80 mb-4">
                    Autonomous service robots for healthcare, retail, and hospitality, 
                    enhancing customer experience and operational efficiency.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-fuchsia-500/20 text-fuchsia-300 px-3 py-1 rounded-full text-sm">Service</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Robots</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">Logistics Automation</h3>
                  <p className="text-white/80 mb-4">
                    Autonomous warehouse and delivery systems that optimize 
                    supply chain operations and reduce delivery times.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Logistics</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Supply Chain</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white/90">📊 Business Intelligence</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Predictive Analytics</h3>
                  <p className="text-white/80 mb-4">
                    AI-powered predictive models that forecast market trends, 
                    customer behavior, and business outcomes with 94%+ accuracy.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">Predictive</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Analytics</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Market Intelligence</h3>
                  <p className="text-white/80 mb-4">
                    Real-time market monitoring and competitive analysis 
                    providing actionable insights for strategic decision-making.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-fuchsia-500/20 text-fuchsia-300 px-3 py-1 rounded-full text-sm">Market</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Intelligence</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">Data Strategy</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive data strategy consulting including collection, 
                    analysis, and monetization of business data assets.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Strategy</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Data</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-white/90">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let our autonomous technology experts help you implement cutting-edge solutions 
                that drive innovation and competitive advantage.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300">
                  Get Started
                </a>
                <a href="/" className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300">
                  Learn More
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}