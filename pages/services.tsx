import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - Autonomous Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services including AI solutions, cloud infrastructure, and intelligent automation systems." />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive range of autonomous technology services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive autonomous technology solutions designed to transform your business 
                and drive innovation across all industries.
              </p>
            </header>

            {/* AI & Machine Learning Services */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Artificial Intelligence & Machine Learning</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">Predictive Analytics</h3>
                  <p className="text-white/70 mb-4">
                    Advanced machine learning models that predict trends, behaviors, and outcomes 
                    to drive strategic decision-making.
                  </p>
                  <ul className="text-sm text-white/60 space-y-1">
                    <li>• Customer behavior prediction</li>
                    <li>• Market trend analysis</li>
                    <li>• Risk assessment models</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-300">Natural Language Processing</h3>
                  <p className="text-white/70 mb-4">
                    Intelligent text and speech processing systems that understand, interpret, 
                    and generate human language.
                  </p>
                  <ul className="text-sm text-white/60 space-y-1">
                    <li>• Chatbot development</li>
                    <li>• Sentiment analysis</li>
                    <li>• Content generation</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">👁️</div>
                  <h3 className="text-xl font-semibold mb-3 text-green-300">Computer Vision</h3>
                  <p className="text-white/70 mb-4">
                    Advanced image and video analysis systems that can identify, classify, 
                    and process visual information.
                  </p>
                  <ul className="text-sm text-white/60 space-y-1">
                    <li>• Object recognition</li>
                    <li>• Quality control automation</li>
                    <li>• Security monitoring</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cloud & Infrastructure Services */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Cloud Infrastructure & DevOps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">Cloud Migration</h3>
                  <p className="text-white/70 mb-4">
                    Seamless migration of legacy systems to modern cloud infrastructure 
                    with zero downtime and enhanced performance.
                  </p>
                  <ul className="text-sm text-white/60 space-y-1">
                    <li>• Infrastructure assessment</li>
                    <li>• Migration planning</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-300">DevOps Automation</h3>
                  <p className="text-white/70 mb-4">
                    Automated CI/CD pipelines, infrastructure as code, and monitoring systems 
                    for rapid, reliable deployments.
                  </p>
                  <ul className="text-sm text-white/60 space-y-1">
                    <li>• Automated testing</li>
                    <li>• Deployment pipelines</li>
                    <li>• Infrastructure monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-violet-900/30 to-purple-900/30 p-6 rounded-xl border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-semibold mb-3 text-violet-300">Microservices Architecture</h3>
                  <p className="text-white/70 mb-4">
                    Scalable, maintainable systems built with modern microservices architecture 
                    and container orchestration.
                  </p>
                  <ul className="text-sm text-white/60 space-y-1">
                    <li>• Service design</li>
                    <li>• Container orchestration</li>
                    <li>• API management</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Automation Services */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Intelligent Automation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-rose-900/30 to-pink-900/30 p-8 rounded-xl border border-rose-500/30">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-semibold mb-4 text-rose-300">Process Automation</h3>
                  <p className="text-white/80 mb-6">
                    Intelligent automation systems that streamline business processes, 
                    reduce manual work, and improve operational efficiency.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-rose-400">✓</span>
                      <span className="text-white/70">Workflow automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-rose-400">✓</span>
                      <span className="text-white/70">Data processing automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-rose-400">✓</span>
                      <span className="text-white/70">Report generation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-rose-400">✓</span>
                      <span className="text-white/70">Customer service automation</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 p-8 rounded-xl border border-indigo-500/30">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Intelligent Monitoring</h3>
                  <p className="text-white/80 mb-6">
                    Advanced monitoring systems that provide real-time insights, 
                    predictive maintenance, and automated issue resolution.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-400">✓</span>
                      <span className="text-white/70">Real-time analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-400">✓</span>
                      <span className="text-white/70">Predictive maintenance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-400">✓</span>
                      <span className="text-white/70">Automated alerting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-400">✓</span>
                      <span className="text-white/70">Performance optimization</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Digital Transformation Services */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Digital Transformation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-8 rounded-xl border border-emerald-500/30">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-300">Legacy Modernization</h3>
                  <p className="text-white/80 mb-6">
                    Transform outdated systems into modern, scalable, and efficient 
                    digital solutions that drive business growth.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• System architecture redesign</li>
                    <li>• Database modernization</li>
                    <li>• API development and integration</li>
                    <li>• User experience enhancement</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-8 rounded-xl border border-amber-500/30">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-2xl font-semibold mb-4 text-amber-300">Digital Strategy</h3>
                  <p className="text-white/80 mb-6">
                    Comprehensive digital transformation strategies that align technology 
                    with business objectives and market opportunities.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Technology roadmap planning</li>
                    <li>• Change management</li>
                    <li>• Digital culture development</li>
                    <li>• Innovation strategy</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Industry Solutions */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Industry-Specific Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center">
                  <div className="text-4xl mb-4">🏥</div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">Healthcare</h3>
                  <p className="text-white/70 text-sm">
                    AI-powered diagnostics, patient monitoring, and healthcare automation systems.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center">
                  <div className="text-4xl mb-4">🏭</div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">Manufacturing</h3>
                  <p className="text-white/70 text-sm">
                    Smart factory solutions, predictive maintenance, and quality control automation.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center">
                  <div className="text-4xl mb-4">🏦</div>
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Finance</h3>
                  <p className="text-white/70 text-sm">
                    Fraud detection, risk assessment, and automated trading systems.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center">
                  <div className="text-4xl mb-4">🛒</div>
                  <h3 className="text-lg font-semibold mb-2 text-orange-400">Retail</h3>
                  <p className="text-white/70 text-sm">
                    Customer analytics, inventory management, and personalized marketing automation.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-12 rounded-2xl border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our autonomous technology solutions can drive innovation, 
                improve efficiency, and create competitive advantages for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-200">
                  Get Started Today
                </Link>
                <Link href="/about" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                  Learn More About Us
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}