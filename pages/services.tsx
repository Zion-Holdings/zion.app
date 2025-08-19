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

            {/* Advanced AI Services Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Advanced AI Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🧠</div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Deep Learning Solutions</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Custom neural network architectures for complex pattern recognition and prediction tasks.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Convolutional Neural Networks (CNN)</li>
                    <li>• Recurrent Neural Networks (RNN)</li>
                    <li>• Transformer Models</li>
                    <li>• Custom Architectures</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Computer Vision</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Advanced image and video analysis for automation, quality control, and insights extraction.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Object Detection & Recognition</li>
                    <li>• Image Segmentation</li>
                    <li>• Video Analytics</li>
                    <li>• Quality Assurance</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">Natural Language Processing</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Language understanding and generation systems for enhanced communication and automation.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Sentiment Analysis</li>
                    <li>• Text Classification</li>
                    <li>• Language Generation</li>
                    <li>• Translation Services</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Predictive Analytics</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Data-driven forecasting and trend analysis for strategic decision-making and optimization.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Time Series Forecasting</li>
                    <li>• Risk Assessment</li>
                    <li>• Demand Prediction</li>
                    <li>• Anomaly Detection</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🤖</div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Robotic Process Automation</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Intelligent automation of repetitive tasks and business processes for increased efficiency.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Process Mining</li>
                    <li>• Workflow Automation</li>
                    <li>• Document Processing</li>
                    <li>• Integration Services</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🔐</div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">AI Security & Compliance</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Comprehensive security solutions for AI systems and regulatory compliance frameworks.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Model Security</li>
                    <li>• Data Privacy</li>
                    <li>• Compliance Auditing</li>
                    <li>• Threat Detection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Industry Solutions Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-fuchsia-400">Industry-Specific Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">🏥 Healthcare</h3>
                    <p className="text-white/70 text-sm mb-3">
                      AI-powered diagnostic tools, patient care optimization, and medical research acceleration.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Medical Imaging Analysis</li>
                      <li>• Drug Discovery Support</li>
                      <li>• Patient Risk Assessment</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-green-400">🏦 Financial Services</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Fraud detection, risk assessment, algorithmic trading, and customer service automation.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Credit Scoring Models</li>
                      <li>• Market Analysis</li>
                      <li>• Regulatory Compliance</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">🏭 Manufacturing</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Predictive maintenance, quality control, supply chain optimization, and production planning.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• IoT Integration</li>
                      <li>• Quality Assurance</li>
                      <li>• Energy Optimization</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-yellow-400">🛒 Retail & E-commerce</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Customer behavior analysis, inventory optimization, personalized marketing, and demand forecasting.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Recommendation Systems</li>
                      <li>• Price Optimization</li>
                      <li>• Customer Segmentation</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-purple-400">🚚 Logistics & Transportation</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Route optimization, fleet management, predictive maintenance, and supply chain visibility.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Route Planning</li>
                      <li>• Demand Forecasting</li>
                      <li>• Real-time Tracking</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-cyan-400">🏢 Real Estate</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Property valuation, market analysis, investment optimization, and customer relationship management.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Market Analysis</li>
                      <li>• Investment Modeling</li>
                      <li>• Customer Insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Support & Maintenance Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-green-400">Support & Maintenance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">24/7 Monitoring</h3>
                  <p className="text-white/70 text-sm">
                    Continuous monitoring and alerting for all AI systems with proactive issue resolution.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Performance Optimization</h3>
                  <p className="text-white/70 text-sm">
                    Regular performance reviews and optimization to ensure systems operate at peak efficiency.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">🆘</div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Emergency Support</h3>
                  <p className="text-white/70 text-sm">
                    Rapid response team for critical issues with guaranteed response times and resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Tiers Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-yellow-400">Service Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Starter</h3>
                  <p className="text-white/70 text-sm mb-4">Perfect for small businesses and startups</p>
                  <ul className="text-xs text-white/60 space-y-2 mb-6">
                    <li>• Basic AI Implementation</li>
                    <li>• Standard Support</li>
                    <li>• Monthly Reports</li>
                    <li>• Email Support</li>
                  </ul>
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300">
                    Get Started
                  </button>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-cyan-400/30 text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold">Most Popular</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Professional</h3>
                  <p className="text-white/70 text-sm mb-4">Ideal for growing enterprises</p>
                  <ul className="text-xs text-white/60 space-y-2 mb-6">
                    <li>• Advanced AI Solutions</li>
                    <li>• Priority Support</li>
                    <li>• Real-time Monitoring</li>
                    <li>• Phone & Email Support</li>
                    <li>• Custom Integrations</li>
                  </ul>
                  <button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
                    Choose Professional
                  </button>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Enterprise</h3>
                  <p className="text-white/70 text-sm mb-4">For large organizations with complex needs</p>
                  <ul className="text-xs text-white/60 space-y-2 mb-6">
                    <li>• Full AI Transformation</li>
                    <li>• Dedicated Support Team</li>
                    <li>• Custom Development</li>
                    <li>• 24/7 Support</li>
                    <li>• SLA Guarantees</li>
                  </ul>
                  <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}