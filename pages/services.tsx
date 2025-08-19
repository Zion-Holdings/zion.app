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
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 mb-6">
                  End-to-end automation solutions that streamline operations and improve efficiency across your organization.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Smart Workflows</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Infrastructure</h3>
                <p className="text-white/70 mb-6">
                  Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Cloud Migration</li>
                  <li>• Auto-scaling</li>
                  <li>• Performance Optimization</li>
                  <li>• Security Hardening</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">DevOps & CI/CD</h3>
                <p className="text-white/70 mb-6">
                  Streamlined development and deployment pipelines with automated testing, building, and deployment processes.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Automated Testing</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Alerting</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Analytics</h3>
                <p className="text-white/70 mb-6">
                  Advanced analytics and business intelligence solutions that turn your data into actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Real-time Dashboards</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Technology Consulting</h3>
                <p className="text-white/70 mb-6">
                  Strategic technology consulting to help you navigate digital transformation and innovation challenges.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Digital Strategy</li>
                  <li>• Technology Roadmap</li>
                  <li>• Innovation Workshops</li>
                  <li>• Performance Audits</li>
                </ul>
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
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Industry Expertise</h3>
                  <p className="text-white/70">
                    Deep domain knowledge across healthcare, finance, retail, and manufacturing sectors with proven success stories.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Continuous Innovation</h3>
                  <p className="text-white/70">
                    We stay ahead of the curve with the latest AI research, tools, and methodologies to ensure your solutions are future-proof.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Advanced AI Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-fuchsia-300 mb-2">Machine Learning</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Supervised & Unsupervised Learning</li>
                    <li>• Deep Neural Networks</li>
                    <li>• Reinforcement Learning</li>
                    <li>• Transfer Learning</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-cyan-300 mb-2">Natural Language Processing</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Text Classification & Sentiment Analysis</li>
                    <li>• Named Entity Recognition</li>
                    <li>• Language Generation</li>
                    <li>• Multilingual Support</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-green-300 mb-2">Computer Vision</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Image Classification & Detection</li>
                    <li>• Object Recognition</li>
                    <li>• Facial Recognition</li>
                    <li>• Medical Image Analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Industry Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-300">Healthcare & Life Sciences</h3>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-green-200 mb-1">Medical Imaging AI</h4>
                      <p className="text-white/70 text-sm">Advanced diagnostic assistance for radiologists and pathologists</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-green-200 mb-1">Drug Discovery</h4>
                      <p className="text-white/70 text-sm">AI-powered molecular modeling and drug candidate screening</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-green-200 mb-1">Patient Care Optimization</h4>
                      <p className="text-white/70 text-sm">Predictive analytics for patient outcomes and treatment planning</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Financial Services</h3>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-blue-200 mb-1">Fraud Detection</h4>
                      <p className="text-white/70 text-sm">Real-time fraud detection using advanced ML algorithms</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-blue-200 mb-1">Risk Assessment</h4>
                      <p className="text-white/70 text-sm">AI-powered credit scoring and risk modeling</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-blue-200 mb-1">Trading Algorithms</h4>
                      <p className="text-white/70 text-sm">Automated trading strategies with risk management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Service Delivery Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
                  <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                  <p className="text-sm text-white/70">Understanding your needs and objectives</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">2</div>
                  <h3 className="text-lg font-semibold mb-2">Planning</h3>
                  <p className="text-sm text-white/70">Creating detailed roadmap and strategy</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-sm text-white/70">Building and deploying solutions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                  <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                  <p className="text-sm text-white/70">Continuous improvement and support</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}