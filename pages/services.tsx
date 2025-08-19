import React from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - Autonomous Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services including AI automation, cloud solutions, and intelligent systems." />
        <meta property="og:title" content="Services | Zion Tech Group - Autonomous Technology Solutions" />
        <meta property="og:description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services including AI automation, cloud solutions, and intelligent systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <nav className="mb-6 text-left">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive autonomous technology solutions designed to transform your business operations
              </p>
            </header>

            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Core Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">AI Automation</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Intelligent automation systems that learn, adapt, and optimize your business processes
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Process automation</li>
                    <li>• Machine learning integration</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-xl font-semibold text-green-300 mb-3">Cloud Solutions</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Scalable cloud infrastructure with autonomous management and optimization
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Infrastructure as Code</li>
                    <li>• Auto-scaling systems</li>
                    <li>• Cost optimization</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">Security & Compliance</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Advanced security systems with autonomous threat detection and response
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Threat intelligence</li>
                    <li>• Automated response</li>
                    <li>• Compliance monitoring</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">Data Analytics</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Real-time data processing and insights with autonomous pattern recognition
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Real-time processing</li>
                    <li>• Pattern recognition</li>
                    <li>• Predictive insights</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-xl font-semibold text-orange-300 mb-3">Digital Transformation</h3>
                  <p className="text-white/80 text-sm mb-4">
                    End-to-end digital transformation with autonomous optimization
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Legacy modernization</li>
                    <li>• Process optimization</li>
                    <li>• Change management</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-pink-300 mb-3">Innovation Labs</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Research and development of cutting-edge autonomous technologies
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• R&D partnerships</li>
                    <li>• Prototype development</li>
                    <li>• Innovation consulting</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Industry Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h3 className="text-xl font-semibold text-green-300 mb-2">Healthcare</h3>
                    <p className="text-white/80 text-sm">Autonomous patient monitoring, drug discovery, and healthcare analytics</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">Finance</h3>
                    <p className="text-white/80 text-sm">AI-powered risk assessment, fraud detection, and automated trading</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">Manufacturing</h3>
                    <p className="text-white/80 text-sm">Smart factory automation, predictive maintenance, and quality control</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-cyan-400 pl-6">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">Retail</h3>
                    <p className="text-white/80 text-sm">Autonomous inventory management, customer insights, and supply chain optimization</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-6">
                    <h3 className="text-xl font-semibold text-orange-300 mb-2">Transportation</h3>
                    <p className="text-white/80 text-sm">Autonomous vehicle systems, traffic optimization, and logistics automation</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-6">
                    <h3 className="text-xl font-semibold text-pink-300 mb-2">Energy</h3>
                    <p className="text-white/80 text-sm">Smart grid management, renewable energy optimization, and consumption analytics</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Proven Expertise</h3>
                      <p className="text-white/70 text-sm">Over 5 years of experience in autonomous technology</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">24/7 Support</h3>
                      <p className="text-white/70 text-sm">Round-the-clock monitoring and support</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Global Reach</h3>
                      <p className="text-white/70 text-sm">Services available worldwide with local expertise</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Innovation Focus</h3>
                      <p className="text-white/70 text-sm">Cutting-edge research and development</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Scalable Solutions</h3>
                      <p className="text-white/70 text-sm">Grow with your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">ROI Guarantee</h3>
                      <p className="text-white/70 text-sm">Measurable results and performance metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Ready to Get Started?</h2>
              <div className="text-center">
                <p className="text-lg text-white/90 mb-6">
                  Transform your business with autonomous technology. Let's discuss how we can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Consultation
                  </a>
                  <a 
                    href="/about" 
                    className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}