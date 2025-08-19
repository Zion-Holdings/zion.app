import React from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - AI & Automation Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of AI development, automation, and technology consulting services." />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="AI development, automation, and technology consulting services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive AI and automation solutions designed to transform your business and drive innovation
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Development</h3>
                <p className="text-white/70 mb-6">
                  Custom AI solutions including machine learning models, natural language processing, and computer vision systems.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Starting at $15K</div>
                  <div className="text-white/60 text-sm">Project-based pricing</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 mb-6">
                  End-to-end automation solutions that streamline operations and improve efficiency across your organization.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Smart Workflows</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400 mb-2">Starting at $12K</div>
                  <div className="text-white/60 text-sm">Monthly subscription available</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Infrastructure</h3>
                <p className="text-white/70 mb-6">
                  Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Cloud Migration</li>
                  <li>• Auto-scaling</li>
                  <li>• Performance Optimization</li>
                  <li>• Security Hardening</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">Starting at $8K</div>
                  <div className="text-white/60 text-sm">Setup + monthly maintenance</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">DevOps & CI/CD</h3>
                <p className="text-white/70 mb-6">
                  Streamlined development and deployment pipelines with automated testing, building, and deployment processes.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Automated Testing</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Alerting</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">Starting at $10K</div>
                  <div className="text-white/60 text-sm">One-time setup + support</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Analytics</h3>
                <p className="text-white/70 mb-6">
                  Advanced analytics and business intelligence solutions that turn your data into actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Real-time Dashboards</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Starting at $18K</div>
                  <div className="text-white/60 text-sm">Custom dashboard development</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Technology Consulting</h3>
                <p className="text-white/70 mb-6">
                  Strategic technology consulting to help you navigate digital transformation and innovation challenges.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Digital Strategy</li>
                  <li>• Technology Roadmap</li>
                  <li>• Innovation Workshops</li>
                  <li>• Performance Audits</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">$250/hour</div>
                  <div className="text-white/60 text-sm">Expert consultation</div>
                </div>
              </div>
            </div>

            {/* New Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Security & Ethics</h3>
                <p className="text-white/80 mb-6">
                  Comprehensive security solutions for AI systems, including ethical AI development, 
                  bias detection, and secure autonomous operations.
                </p>
                <ul className="space-y-2 text-white/70 mb-6">
                  <li>• AI Bias Detection & Mitigation</li>
                  <li>• Secure AI Model Deployment</li>
                  <li>• Ethical AI Guidelines</li>
                  <li>• Compliance & Governance</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Starting at $20K</div>
                  <div className="text-white/60 text-sm">Comprehensive security audit</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 rounded-2xl p-8 border border-fuchsia-500/20">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Edge AI & IoT</h3>
                <p className="text-white/80 mb-6">
                  Deploy AI models at the edge for real-time processing, enabling intelligent IoT devices 
                  and autonomous edge computing solutions.
                </p>
                <ul className="space-y-2 text-white/70 mb-6">
                  <li>• Edge AI Model Optimization</li>
                  <li>• IoT Device Intelligence</li>
                  <li>• Real-time Processing</li>
                  <li>• Edge-to-Cloud Integration</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400 mb-2">Starting at $25K</div>
                  <div className="text-white/60 text-sm">Edge AI platform setup</div>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Service Success Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                  <div className="text-sm text-white/70">Client Satisfaction</div>
                  <div className="text-xs text-white/50 mt-1">Based on 150+ projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">40%</div>
                  <div className="text-sm text-white/70">Average Cost Reduction</div>
                  <div className="text-xs text-white/50 mt-1">For automation clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">3.2x</div>
                  <div className="text-sm text-white/70">ROI Improvement</div>
                  <div className="text-xs text-white/50 mt-1">Within 12 months</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-sm text-white/70">System Reliability</div>
                  <div className="text-xs text-white/50 mt-1">Production uptime</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">AI-Powered Excellence</h3>
                  <p className="text-white/70">
                    Our services leverage cutting-edge AI technology to deliver superior results, faster implementation, and continuous improvement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Proven Results</h3>
                  <p className="text-white/70">
                    With 227 active automations and 2,960+ pages generated, we have a track record of delivering measurable business value.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Service Delivery Process */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Service Delivery Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
                  <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                  <p className="text-sm text-white/70 mb-3">Understanding your needs and objectives</p>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• Requirements Analysis</li>
                    <li>• Stakeholder Interviews</li>
                    <li>• Technical Assessment</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
                  <h3 className="text-lg font-semibold mb-2">Planning</h3>
                  <p className="text-sm text-white/70 mb-3">Creating detailed roadmap and strategy</p>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• Architecture Design</li>
                    <li>• Timeline Planning</li>
                    <li>• Resource Allocation</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-sm text-white/70 mb-3">Building and deploying solutions</p>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• Agile Development</li>
                    <li>• Continuous Testing</li>
                    <li>• Staged Deployment</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
                  <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                  <p className="text-sm text-white/70 mb-3">Continuous improvement and support</p>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• Performance Monitoring</li>
                    <li>• Regular Updates</li>
                    <li>• 24/7 Support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Testimonials */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      GM
                    </div>
                    <div>
                      <div className="font-semibold text-white">Global Manufacturing Corp</div>
                      <div className="text-white/60 text-sm">Manufacturing Industry</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "Zion Tech Group's AI automation solutions transformed our production line. 
                    We saw a 40% increase in efficiency and 60% reduction in downtime within 6 months."
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      DM
                    </div>
                    <div>
                      <div className="font-semibold text-white">Digital Marketing Agency</div>
                      <div className="text-white/60 text-sm">Marketing Industry</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "Their autonomous content generation system scaled our output 10x while maintaining 
                    quality. It's like having an entire content team working 24/7."
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/80 mb-6">
                Let's discuss how our AI and automation services can transform your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-semibold rounded-lg transition-all duration-300">
                  Schedule Consultation
                </a>
                <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 text-white font-semibold rounded-lg transition-all duration-300">
                  View Case Studies
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}