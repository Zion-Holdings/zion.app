import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  benefits: string[];
  technicalDetails: string;
}

const features: Feature[] = [
  {
    id: 'autonomous-automation',
    title: 'Autonomous Automation Systems',
    description: 'AI-powered automation that runs independently, continuously improving and adapting to your business needs.',
    icon: '🤖',
    category: 'Core Technology',
    benefits: [
      'Zero human intervention required',
      'Continuous learning and improvement',
      'Real-time problem detection and resolution',
      'Scalable automation workflows'
    ],
    technicalDetails: 'Built on advanced machine learning algorithms with 99.9% accuracy and sub-second response times.'
  },
  {
    id: 'cloud-native-architecture',
    title: 'Cloud-Native Architecture',
    description: 'Modern, scalable infrastructure designed for the cloud era with microservices and containerization.',
    icon: '☁️',
    category: 'Infrastructure',
    benefits: [
      'Horizontal scaling capabilities',
      'Multi-cloud deployment support',
      'Auto-healing and recovery',
      'Global edge distribution'
    ],
    technicalDetails: 'Kubernetes-native with Istio service mesh, supporting both public and private cloud deployments.'
  },
  {
    id: 'intelligent-monitoring',
    title: 'Intelligent Monitoring & Analytics',
    description: 'Advanced monitoring systems that provide real-time insights and predictive analytics.',
    icon: '📊',
    category: 'Operations',
    benefits: [
      'Predictive failure detection',
      'Real-time performance metrics',
      'Automated alerting and escalation',
      'Historical trend analysis'
    ],
    technicalDetails: 'ML-powered anomaly detection with 95% prediction accuracy and automated incident response.'
  },
  {
    id: 'security-framework',
    title: 'Enterprise Security Framework',
    description: 'Comprehensive security measures protecting your data and systems at every level.',
    icon: '🔒',
    category: 'Security',
    benefits: [
      'Zero-trust architecture',
      'End-to-end encryption',
      'Compliance automation',
      'Threat intelligence integration'
    ],
    technicalDetails: 'SOC 2 Type II compliant with automated security testing and continuous vulnerability scanning.'
  },
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation',
    description: 'Automated content creation that maintains quality and relevance across all platforms.',
    icon: '✍️',
    category: 'Content',
    benefits: [
      'SEO-optimized content',
      'Multi-language support',
      'Brand voice consistency',
      'Real-time content updates'
    ],
    technicalDetails: 'GPT-4 powered with custom fine-tuning for industry-specific terminology and brand guidelines.'
  },
  {
    id: 'workflow-automation',
    title: 'Intelligent Workflow Automation',
    description: 'Streamline business processes with smart automation that adapts to your workflow patterns.',
    icon: '⚡',
    category: 'Business Process',
    benefits: [
      'Process optimization',
      'Error reduction',
      'Faster execution times',
      'Cost savings'
    ],
    technicalDetails: 'BPMN 2.0 compliant with AI-driven process mining and optimization recommendations.'
  },
  {
    id: 'data-analytics',
    title: 'Advanced Data Analytics',
    description: 'Transform raw data into actionable insights with powerful analytics and visualization tools.',
    icon: '📈',
    category: 'Analytics',
    benefits: [
      'Real-time data processing',
      'Interactive dashboards',
      'Predictive modeling',
      'Custom reporting'
    ],
    technicalDetails: 'Apache Spark integration with real-time streaming and machine learning pipeline support.'
  },
  {
    id: 'integration-hub',
    title: 'Universal Integration Hub',
    description: 'Connect all your tools and systems with our comprehensive integration platform.',
    icon: '🔗',
    category: 'Integration',
    benefits: [
      '500+ pre-built connectors',
      'Custom API development',
      'Real-time synchronization',
      'Webhook support'
    ],
    technicalDetails: 'RESTful APIs with GraphQL support, OAuth 2.0 authentication, and webhook management.'
  }
];

const categories = ['All', 'Core Technology', 'Infrastructure', 'Operations', 'Security', 'Content', 'Business Process', 'Analytics', 'Integration'];

export default function FeaturesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const filteredFeatures = selectedCategory === 'All' 
    ? features 
    : features.filter(feature => feature.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Features — Zion Tech Group</title>
        <meta name="description" content="Explore the comprehensive features and capabilities of our autonomous technology platform." />
        <meta property="og:title" content="Features — Zion Tech Group" />
        <meta property="og:description" content="Explore the comprehensive features and capabilities of our autonomous technology platform." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Platform Features
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the cutting-edge capabilities that make Zion Tech Group the leader in autonomous technology solutions.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white shadow-lg'
                      : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedFeature(feature)}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-300 mb-3">
                      {feature.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    Learn More →
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Detail Modal */}
          {selectedFeature && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
              <div className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{selectedFeature.icon}</span>
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 rounded-full text-sm text-cyan-300 mb-2">
                          {selectedFeature.category}
                        </span>
                        <h2 className="text-2xl font-bold text-white">{selectedFeature.title}</h2>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-white/80 text-lg mb-8 leading-relaxed">
                    {selectedFeature.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {selectedFeature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Technical Details</h3>
                      <p className="text-white/70 leading-relaxed">
                        {selectedFeature.technicalDetails}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/contact"
                        className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 text-center"
                      >
                        Get Started
                      </Link>
                      <Link
                        href="/case-studies"
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-all duration-300 text-center"
                      >
                        View Case Studies
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience These Features?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Transform your business with our autonomous technology platform. Get started today and see the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all duration-300">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}