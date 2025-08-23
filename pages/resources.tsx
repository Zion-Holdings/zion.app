import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Knowledge Hub</title>
        <meta name="description" content="Access comprehensive resources including whitepapers, guides, tools, and learning materials for AI and automation implementation." />
        <meta property="og:title" content="Resources - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and automation resources, guides, and tools." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive knowledge hub featuring whitepapers, implementation guides, tools, and learning resources 
              to help you succeed with AI and automation initiatives.
            </p>
          </section>

          <section className="mx-auto max-w-6xl space-y-16">
            {/* Featured Resources */}
            <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-8 border border-cyan-400/20">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">AI Implementation Roadmap</h3>
                  <p className="text-white/70 text-sm mb-4">
                    A comprehensive 12-month roadmap for implementing AI solutions in your organization, 
                    from initial assessment to production deployment.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-300 text-sm font-semibold">Free Download</span>
                    <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                      Get Access →
                    </Link>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Automation Toolkit</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Collection of templates, scripts, and frameworks to accelerate your automation projects 
                    and reduce development time by 60%.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-fuchsia-300 text-sm font-semibold">Premium</span>
                    <Link href="/contact" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                      Learn More →
                    </Link>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">AI Ethics Workshop</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Interactive workshop materials for building ethical AI systems, including case studies, 
                    frameworks, and best practices.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-300 text-sm font-semibold">Free Workshop</span>
                    <Link href="/contact" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                      Register →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Whitepapers & Research */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-white">Whitepapers & Research</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full border border-blue-400/30">
                        Healthcare
                      </span>
                      <span className="text-white/60 text-xs">45 min read</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">
                      AI in Medical Imaging: Current State and Future Directions
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      Comprehensive analysis of AI applications in medical imaging, including technical challenges, 
                      regulatory considerations, and implementation strategies.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Free Download</span>
                      <Link href="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                        Download PDF →
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full border border-green-400/30">
                        Manufacturing
                      </span>
                      <span className="text-white/60 text-xs">60 min read</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-green-400">
                      Predictive Maintenance: ROI Analysis and Implementation Guide
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      Detailed cost-benefit analysis of predictive maintenance systems, including case studies, 
                      ROI calculations, and step-by-step implementation guidance.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-300 text-sm">Premium</span>
                      <Link href="/contact" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                        Get Access →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full border border-purple-400/30">
                        Financial Services
                      </span>
                      <span className="text-white/60 text-xs">35 min read</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-purple-400">
                      AI-Powered Fraud Detection: Balancing Security and User Experience
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      Analysis of modern fraud detection approaches, including machine learning techniques, 
                      real-time processing, and strategies for minimizing false positives.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300 text-sm">Free Download</span>
                      <Link href="/contact" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                        Download PDF →
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs rounded-full border border-orange-400/30">
                        Retail
                      </span>
                      <span className="text-white/60 text-xs">50 min read</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-orange-400">
                      Personalization at Scale: AI Strategies for Modern Retail
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      Comprehensive guide to implementing AI-powered personalization in retail, covering 
                      customer segmentation, recommendation engines, and omnichannel strategies.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-300 text-sm">Premium</span>
                      <Link href="/contact" className="text-orange-400 hover:text-orange-300 text-sm font-semibold">
                        Get Access →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Guides */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-white">Implementation Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">Getting Started with AI</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Step-by-step guide for organizations new to AI, covering team building, 
                    infrastructure setup, and first project selection.
                  </p>
                  <ul className="text-white/60 text-xs space-y-1 mb-4">
                    <li>• Team composition and skills</li>
                    <li>• Infrastructure requirements</li>
                    <li>• Project selection criteria</li>
                    <li>• Success metrics definition</li>
                  </ul>
                  <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    Access Guide →
                  </Link>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">AI Security Best Practices</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Comprehensive security guide for AI systems, including data protection, 
                    model security, and compliance considerations.
                  </p>
                  <ul className="text-white/60 text-xs space-y-1 mb-4">
                    <li>• Data encryption and privacy</li>
                    <li>• Model poisoning prevention</li>
                    <li>• Access control and monitoring</li>
                    <li>• Regulatory compliance</li>
                  </ul>
                  <Link href="/contact" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                    Access Guide →
                  </Link>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Data Preparation for AI</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Essential guide to preparing data for AI projects, covering collection, 
                    cleaning, labeling, and quality assurance processes.
                  </p>
                  <ul className="text-white/60 text-xs space-y-1 mb-4">
                    <li>• Data collection strategies</li>
                    <li>• Cleaning and preprocessing</li>
                    <li>• Labeling and annotation</li>
                    <li>• Quality metrics and validation</li>
                  </ul>
                  <Link href="/contact" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                    Access Guide →
                  </Link>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-4">🤖</div>
                  <h3 className="text-lg font-semibold mb-3 text-fuchsia-400">Automation Strategy</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Strategic framework for planning and implementing automation initiatives, 
                    from process assessment to ROI measurement.
                  </p>
                  <ul className="text-white/60 text-xs space-y-1 mb-4">
                    <li>• Process assessment methodology</li>
                    <li>• Automation opportunity identification</li>
                    <li>• Implementation planning</li>
                    <li>• ROI calculation and measurement</li>
                  </ul>
                  <Link href="/contact" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                    Access Guide →
                  </Link>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-4">☁️</div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Cloud AI Deployment</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Guide to deploying AI systems in cloud environments, covering architecture, 
                    scaling, cost optimization, and monitoring.
                  </p>
                  <ul className="text-white/60 text-xs space-y-1 mb-4">
                    <li>• Cloud architecture patterns</li>
                    <li>• Auto-scaling strategies</li>
                    <li>• Cost optimization techniques</li>
                    <li>• Performance monitoring</li>
                  </ul>
                  <Link href="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                    Access Guide →
                  </Link>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-4">📈</div>
                  <h3 className="text-lg font-semibold mb-3 text-yellow-400">AI Project Management</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Project management methodologies specifically designed for AI projects, 
                    including agile approaches and risk management strategies.
                  </p>
                  <ul className="text-white/60 text-xs space-y-1 mb-4">
                    <li>• AI-specific project methodologies</li>
                    <li>• Risk identification and mitigation</li>
                    <li>• Stakeholder management</li>
                    <li>• Success measurement frameworks</li>
                  </ul>
                  <Link href="/contact" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
                    Access Guide →
                  </Link>
                </div>
              </div>
            </div>

            {/* Tools & Frameworks */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-white">Tools & Frameworks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Open Source Tools</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-cyan-300 mb-2">Machine Learning</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• TensorFlow & PyTorch for deep learning</li>
                        <li>• Scikit-learn for traditional ML</li>
                        <li>• MLflow for experiment tracking</li>
                        <li>• Weights & Biases for model management</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-cyan-300 mb-2">Data Processing</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Apache Spark for big data processing</li>
                        <li>• Pandas for data manipulation</li>
                        <li>• Dask for parallel computing</li>
                        <li>• Apache Airflow for workflow orchestration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Commercial Platforms</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-fuchsia-300 mb-2">Cloud AI Services</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• AWS SageMaker for ML workflows</li>
                        <li>• Google Cloud AI Platform</li>
                        <li>• Azure Machine Learning</li>
                        <li>• IBM Watson Studio</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-fuchsia-300 mb-2">Enterprise Tools</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• DataRobot for automated ML</li>
                        <li>• H2O.ai for enterprise AI</li>
                        <li>• RapidMiner for data science</li>
                        <li>• Alteryx for analytics automation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-white">Learning Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Online Courses</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-green-300 mb-2">Beginner Level</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Introduction to AI and Machine Learning</li>
                        <li>• Python for Data Science</li>
                        <li>• Fundamentals of Automation</li>
                        <li>• AI Ethics and Responsible Development</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-green-300 mb-2">Advanced Level</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Deep Learning Specialization</li>
                        <li>• MLOps and Model Deployment</li>
                        <li>• Advanced Automation Strategies</li>
                        <li>• AI System Architecture Design</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Books & Publications</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-blue-300 mb-2">Essential Reading</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• "Hands-On Machine Learning" by Aurélien Géron</li>
                        <li>• "Deep Learning" by Ian Goodfellow</li>
                        <li>• "Automate This" by Christopher Steiner</li>
                        <li>• "AI Superpowers" by Kai-Fu Lee</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-blue-300 mb-2">Industry Reports</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Gartner AI Hype Cycle Reports</li>
                        <li>• McKinsey AI Adoption Studies</li>
                        <li>• MIT Technology Review Insights</li>
                        <li>• Industry-specific AI adoption surveys</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community & Events */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-white">Community & Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Upcoming Events</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">AI Implementation Workshop</h4>
                      <p className="text-white/70 text-sm mb-2">Hands-on workshop covering AI project planning and implementation</p>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-300 text-xs">February 15, 2025</span>
                        <Link href="/contact" className="text-purple-400 hover:text-purple-300 text-xs font-semibold">
                          Register →
                        </Link>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Automation Summit</h4>
                      <p className="text-white/70 text-sm mb-2">Annual conference on automation trends and best practices</p>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-300 text-xs">March 20, 2025</span>
                        <Link href="/contact" className="text-purple-400 hover:text-purple-300 text-xs font-semibold">
                          Register →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-400">Community Resources</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-orange-300 mb-2">Online Forums</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• AI/ML Stack Overflow communities</li>
                        <li>• Reddit AI and automation subreddits</li>
                        <li>• LinkedIn AI professional groups</li>
                        <li>• Discord AI development servers</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-orange-300 mb-2">Networking</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Local AI meetup groups</li>
                        <li>• Industry conferences and trade shows</li>
                        <li>• Professional AI associations</li>
                        <li>• University AI research groups</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-8 border border-cyan-400/20 text-center">
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">
                Need Custom Resources?
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team can create custom resources, guides, 
                and training materials tailored to your specific needs and industry requirements.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold text-lg transition-colors">
                  Request Custom Resources
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold text-lg transition-colors border border-white/20">
                  View Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default ResourcesPage;