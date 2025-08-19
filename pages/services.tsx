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
                  <li>• Neural Network Architecture</li>
                  <li>• AI Model Training & Optimization</li>
                </ul>
                <div className="text-cyan-400 font-semibold">Starting at $15,000</div>
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
                  <li>• Business Process Reengineering</li>
                  <li>• Autonomous Decision Systems</li>
                </ul>
                <div className="text-fuchsia-400 font-semibold">Starting at $12,000</div>
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
                  <li>• Multi-cloud Strategy</li>
                  <li>• Disaster Recovery</li>
                </ul>
                <div className="text-green-400 font-semibold">Starting at $18,000</div>
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
                  <li>• Container Orchestration</li>
                  <li>• Security Scanning</li>
                </ul>
                <div className="text-blue-400 font-semibold">Starting at $10,000</div>
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
                  <li>• Data Warehousing</li>
                  <li>• Advanced Reporting</li>
                </ul>
                <div className="text-purple-400 font-semibold">Starting at $14,000</div>
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
                  <li>• Risk Assessment</li>
                  <li>• Change Management</li>
                </ul>
                <div className="text-yellow-400 font-semibold">Starting at $8,000</div>
              </div>
            </div>

            {/* Technology Stack Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-fuchsia-400">AI & Machine Learning</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• TensorFlow & PyTorch</div>
                    <div>• OpenAI GPT Models</div>
                    <div>• Computer Vision APIs</div>
                    <div>• NLP Frameworks</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Cloud & Infrastructure</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• AWS, Azure, GCP</div>
                    <div>• Kubernetes & Docker</div>
                    <div>• Terraform & Ansible</div>
                    <div>• Serverless Functions</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Development Tools</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• React & Next.js</div>
                    <div>• Python & Node.js</div>
                    <div>• Git & CI/CD</div>
                    <div>• Testing Frameworks</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Data & Analytics</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• PostgreSQL & MongoDB</div>
                    <div>• Apache Kafka</div>
                    <div>• Tableau & Power BI</div>
                    <div>• Apache Spark</div>
                  </div>
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
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">24/7 Autonomous Operation</h3>
                  <p className="text-white/70">
                    Our systems run continuously, monitoring, optimizing, and improving your operations around the clock without human intervention.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">Scalable Solutions</h3>
                  <p className="text-white/70">
                    Built to grow with your business, our solutions automatically scale up or down based on demand and performance requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Delivery Process */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Service Delivery Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
                  <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                  <p className="text-sm text-white/70">Understanding your needs and objectives</p>
                  <div className="text-xs text-white/50 mt-2">• Requirements Analysis</div>
                  <div className="text-xs text-white/50">• Current State Assessment</div>
                  <div className="text-xs text-white/50">• Stakeholder Interviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">2</div>
                  <h3 className="text-lg font-semibold mb-2">Planning</h3>
                  <p className="text-sm text-white/70">Creating detailed roadmap and strategy</p>
                  <div className="text-xs text-white/50 mt-2">• Architecture Design</div>
                  <div className="text-xs text-white/50">• Implementation Plan</div>
                  <div className="text-xs text-white/50">• Risk Mitigation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-sm text-white/70">Building and deploying solutions</p>
                  <div className="text-xs text-white/50 mt-2">• Agile Development</div>
                  <div className="text-xs text-white/50">• Continuous Testing</div>
                  <div className="text-xs text-white/50">• Phased Rollout</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                  <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                  <p className="text-sm text-white/70">Continuous improvement and support</p>
                  <div className="text-xs text-white/50 mt-2">• Performance Monitoring</div>
                  <div className="text-xs text-white/50">• Automated Optimization</div>
                  <div className="text-xs text-white/50">• Ongoing Support</div>
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Service Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Starter</h3>
                  <div className="text-3xl font-bold text-white mb-4">$8,000</div>
                  <p className="text-white/70 mb-6">Perfect for small businesses starting their automation journey</p>
                  <ul className="space-y-2 text-sm text-white/60 mb-6">
                    <li>• Basic AI Integration</li>
                    <li>• Process Automation</li>
                    <li>• 3 Months Support</li>
                    <li>• Basic Analytics</li>
                  </ul>
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-xl p-6 border border-purple-400/30 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Professional</h3>
                  <div className="text-3xl font-bold text-white mb-4">$25,000</div>
                  <p className="text-white/70 mb-6">Comprehensive solution for growing businesses</p>
                  <ul className="space-y-2 text-sm text-white/60 mb-6">
                    <li>• Advanced AI Systems</li>
                    <li>• Full Process Automation</li>
                    <li>• 12 Months Support</li>
                    <li>• Advanced Analytics</li>
                    <li>• Custom Integrations</li>
                  </ul>
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-green-400">Enterprise</h3>
                  <div className="text-3xl font-bold text-white mb-4">$75,000+</div>
                  <p className="text-white/70 mb-6">Full-scale transformation for large organizations</p>
                  <ul className="space-y-2 text-sm text-white/60 mb-6">
                    <li>• Custom AI Development</li>
                    <li>• Enterprise Integration</li>
                    <li>• 24/7 Support</li>
                    <li>• Advanced Security</li>
                    <li>• Dedicated Team</li>
                  </ul>
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Success Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-white/70">Average Efficiency Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">50%</div>
                  <div className="text-white/70">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-white/70">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-white/70">Autonomous Operation</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}