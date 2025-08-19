import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - Autonomous Innovation Hub</title>
        <meta name="description" content="Comprehensive technology services from Zion Tech Group including AI, automation, infrastructure, and innovation consulting." />
        <meta property="og:title" content="Services | Zion Tech Group - Autonomous Innovation Hub" />
        <meta property="og:description" content="Comprehensive technology services from Zion Tech Group including AI, automation, infrastructure, and innovation consulting." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive technology solutions powered by autonomous intelligence and innovation
              </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              {/* AI & Machine Learning */}
              <section className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 text-cyan-300">AI & Machine Learning</h2>
                  <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Advanced artificial intelligence solutions that learn, adapt, and evolve autonomously
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">Neural Architecture Design</h3>
                    <p className="text-white/80 mb-4">
                      Custom neural network architectures optimized for your specific use case and performance requirements.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Custom architecture design</li>
                      <li>• Performance optimization</li>
                      <li>• Scalability planning</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">Autonomous Learning Systems</h3>
                    <p className="text-white/80 mb-4">
                      Self-improving AI systems that continuously learn and adapt to new data and challenges.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Continuous learning</li>
                      <li>• Adaptive algorithms</li>
                      <li>• Self-optimization</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">Cognitive Computing</h3>
                    <p className="text-white/80 mb-4">
                      Advanced AI systems capable of understanding, reasoning, and solving complex problems.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Natural language processing</li>
                      <li>• Reasoning engines</li>
                      <li>• Problem-solving AI</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Automation & Orchestration */}
              <section className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 text-fuchsia-300">Automation & Orchestration</h2>
                  <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Intelligent automation solutions that streamline operations and optimize performance
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Process Automation</h3>
                    <p className="text-white/80 mb-4">
                      End-to-end automation of complex business processes using intelligent workflows.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Workflow automation</li>
                      <li>• Process optimization</li>
                      <li>• Efficiency improvement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">System Orchestration</h3>
                    <p className="text-white/80 mb-4">
                      Intelligent coordination of multiple systems and services for optimal performance.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Multi-system coordination</li>
                      <li>• Service orchestration</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Intelligent Monitoring</h3>
                    <p className="text-white/80 mb-4">
                      Autonomous monitoring systems that detect and resolve issues before they impact operations.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Proactive monitoring</li>
                      <li>• Automated resolution</li>
                      <li>• Performance tracking</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Infrastructure & Scaling */}
              <section className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 text-green-300">Infrastructure & Scaling</h2>
                  <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Scalable infrastructure solutions designed for growth and reliability
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-green-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-green-300">Cloud Infrastructure</h3>
                    <p className="text-white/80 mb-4">
                      Scalable cloud solutions with intelligent resource management and optimization.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Multi-cloud deployment</li>
                      <li>• Auto-scaling systems</li>
                      <li>• Cost optimization</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-green-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-green-300">High Availability</h3>
                    <p className="text-white/80 mb-4">
                      Robust systems designed for maximum uptime and disaster recovery capabilities.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• 99.99% uptime</li>
                      <li>• Disaster recovery</li>
                      <li>• Fault tolerance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-green-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-green-300">Edge Computing</h3>
                    <p className="text-white/80 mb-4">
                      Distributed computing solutions that bring processing closer to data sources.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Edge deployment</li>
                      <li>• Latency reduction</li>
                      <li>• Local processing</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Research & Development */}
              <section className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 text-yellow-300">Research & Development</h2>
                  <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Cutting-edge research in emerging technologies and breakthrough innovations
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-300">Quantum Computing</h3>
                    <p className="text-white/80 mb-4">
                      Research and development in quantum computing applications and algorithms.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Quantum algorithms</li>
                      <li>• Quantum simulation</li>
                      <li>• Hybrid systems</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-300">Biotechnology</h3>
                    <p className="text-white/80 mb-4">
                      Innovative research in bio-inspired computing and biological systems integration.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Bio-inspired AI</li>
                      <li>• Biological computing</li>
                      <li>• Synthetic biology</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-300">Advanced Materials</h3>
                    <p className="text-white/80 mb-4">
                      Research into new materials for next-generation computing and energy systems.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Nanomaterials</li>
                      <li>• Energy materials</li>
                      <li>• Computing materials</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Security & Compliance */}
              <section className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 text-purple-300">Security & Compliance</h2>
                  <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Comprehensive security solutions ensuring protection and regulatory compliance
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-purple-300">Threat Detection</h3>
                    <p className="text-white/80 mb-4">
                      Advanced AI-powered threat detection and response systems.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• AI threat detection</li>
                      <li>• Automated response</li>
                      <li>• Behavioral analysis</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-purple-300">Compliance Monitoring</h3>
                    <p className="text-white/80 mb-4">
                      Automated compliance checking and regulatory adherence systems.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Regulatory compliance</li>
                      <li>• Automated auditing</li>
                      <li>• Policy enforcement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-purple-300">Security Automation</h3>
                    <p className="text-white/80 mb-4">
                      Intelligent security systems that automatically protect and respond to threats.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Automated protection</li>
                      <li>• Threat response</li>
                      <li>• Security orchestration</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Consulting & Strategy */}
              <section className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 text-red-300">Consulting & Strategy</h2>
                  <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Strategic guidance for digital transformation and autonomous technology adoption
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-red-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-red-300">Digital Transformation</h3>
                    <p className="text-white/80 mb-4">
                      Strategic guidance for implementing autonomous technologies and digital transformation.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Strategy development</li>
                      <li>• Implementation planning</li>
                      <li>• Change management</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-red-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-red-300">Technology Strategy</h3>
                    <p className="text-white/80 mb-4">
                      Comprehensive technology roadmaps aligned with business objectives.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Technology roadmaps</li>
                      <li>• Architecture planning</li>
                      <li>• Innovation strategy</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-red-400/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-red-300">Implementation Support</h3>
                    <p className="text-white/80 mb-4">
                      Hands-on support for implementing autonomous solutions and technologies.
                    </p>
                    <ul className="text-white/70 space-y-2 text-sm">
                      <li>• Project management</li>
                      <li>• Technical implementation</li>
                      <li>• Training & support</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="text-center">
                <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-12 rounded-2xl border border-cyan-400/20">
                  <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
                  <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                    Let's discuss how our autonomous technology solutions can transform your organization 
                    and drive innovation across your operations.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                      Contact Us
                    </Link>
                    <Link href="/about" className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                      Learn More
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}