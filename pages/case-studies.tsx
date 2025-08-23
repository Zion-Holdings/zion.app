import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, Rocket, Target,
  Star, Users, Award, CheckCircle, Globe,
  Zap, Infinity, Eye, Heart, Code, Palette,
  Building, 
  TrendingUp, DollarSign, Clock, ArrowRight, ExternalLink
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: 'Global Bank Transforms Operations with AI Consciousness Platform',
      excerpt: 'A Fortune 500 bank achieved 300% efficiency improvement using our AI consciousness evolution platform for customer service and risk management.',
      industry: 'Financial Services',
      client: 'Global Financial Corp',
      results: [
        '300% increase in operational efficiency',
        '99.9% accuracy in fraud detection',
        '$50M annual cost savings',
        '24/7 autonomous customer service'
      ],
      technologies: ['AI Consciousness', 'Quantum Neural Networks', 'Autonomous Systems'],
      image: '/api/og-image?title=Global Bank AI Transformation',
      featured: true,
      slug: '/case-studies/global-bank-ai-transformation'
    },
    {
      id: 2,
      title: 'Healthcare Network Revolutionizes Patient Care with Quantum AI',
      excerpt: 'A major healthcare network implemented our quantum neural ecosystem to improve diagnostic accuracy and patient outcomes.',
      industry: 'Healthcare',
      client: 'Metro Health Network',
      results: [
        '95% improvement in diagnostic accuracy',
        '40% reduction in patient wait times',
        '60% increase in treatment success rates',
        'Real-time patient monitoring'
      ],
      technologies: ['Quantum Computing', 'AI Diagnostics', 'Healthcare AI'],
      image: '/api/og-image?title=Healthcare Quantum AI',
      featured: true,
      slug: '/case-studies/healthcare-quantum-ai'
    },
    {
      id: 3,
      title: 'Manufacturing Giant Achieves Zero-Downtime with Autonomous Systems',
      excerpt: 'A global manufacturer eliminated production downtime using our autonomous business intelligence and predictive maintenance platform.',
      industry: 'Manufacturing',
      client: 'Global Manufacturing Inc',
      results: [
        '100% uptime achievement',
        '45% reduction in maintenance costs',
        '30% increase in production capacity',
        'Predictive maintenance automation'
      ],
      technologies: ['Autonomous AI', 'Predictive Analytics', 'IoT Integration'],
      image: '/api/og-image?title=Manufacturing Zero-Downtime',
      featured: true,
      slug: '/case-studies/manufacturing-zero-downtime'
    }
  ];

  const caseStudies = [
    {
      id: 4,
      title: 'Space Mining Company Optimizes Resource Extraction with AI',
      excerpt: 'Revolutionary space resource intelligence platform enables autonomous mining operations in asteroid fields.',
      industry: 'Space Technology',
      client: 'Asteroid Mining Corp',
      results: [
        '500% increase in resource discovery',
        'Autonomous mining operations',
        'Real-time space analytics',
        'Cost-effective space exploration'
      ],
      technologies: ['Space AI', 'Autonomous Systems', 'Resource Intelligence'],
      image: '/api/og-image?title=Space Mining AI',
      slug: '/case-studies/space-mining-ai'
    },
    {
      id: 5,
      title: 'Government Agency Secures Critical Infrastructure with Quantum Security',
      excerpt: 'Federal agency implements quantum cybersecurity platform to protect national infrastructure from advanced threats.',
      industry: 'Government',
      client: 'National Security Agency',
      results: [
        '100% threat detection rate',
        'Zero security breaches',
        'Real-time threat response',
        'Quantum-resistant encryption'
      ],
      technologies: ['Quantum Security', 'Cybersecurity', 'Government IT'],
      image: '/api/og-image?title=Government Quantum Security',
      slug: '/case-studies/government-quantum-security'
    },
    {
      id: 6,
      title: 'Retail Chain Personalizes Customer Experience with AI',
      excerpt: 'Major retail chain implements AI content personalization to deliver hyper-personalized shopping experiences.',
      industry: 'Retail',
      client: 'Mega Retail Chain',
      results: [
        '200% increase in customer engagement',
        '35% improvement in conversion rates',
        'Personalized product recommendations',
        'Real-time customer insights'
      ],
      technologies: ['AI Personalization', 'Customer Analytics', 'Retail AI'],
      image: '/api/og-image?title=Retail AI Personalization',
      slug: '/case-studies/retail-ai-personalization'
    },
    {
      id: 7,
      title: 'Energy Company Optimizes Grid Management with Quantum AI',
      excerpt: 'Utility company uses quantum AI to optimize energy distribution and reduce waste across their smart grid.',
      industry: 'Energy',
      client: 'Smart Energy Corp',
      results: [
        '25% reduction in energy waste',
        '99.9% grid reliability',
        'Real-time demand prediction',
        'Autonomous grid optimization'
      ],
      technologies: ['Quantum AI', 'Smart Grid', 'Energy Optimization'],
      image: '/api/og-image?title=Energy Quantum AI',
      slug: '/case-studies/energy-quantum-ai'
    },
    {
      id: 8,
      title: 'Transportation Network Implements Autonomous Vehicle AI',
      excerpt: 'Public transportation system deploys consciousness-based autonomous vehicle technology for safer, more efficient travel.',
      industry: 'Transportation',
      client: 'Metro Transit Authority',
      results: [
        '90% reduction in accidents',
        '40% improvement in efficiency',
        '24/7 autonomous operation',
        'Real-time traffic optimization'
      ],
      technologies: ['Autonomous Vehicles', 'Transportation AI', 'Smart Cities'],
      image: '/api/og-image?title=Transportation Autonomous AI',
      slug: '/case-studies/transportation-autonomous-ai'
    },
    {
      id: 9,
      title: 'Research Institution Advances Scientific Discovery with AI',
      excerpt: 'Leading research institution uses AI autonomous research platform to accelerate scientific breakthroughs.',
      industry: 'Research & Development',
      client: 'Advanced Research Institute',
      results: [
        '10x faster research cycles',
        'Breakthrough discoveries',
        'Automated hypothesis testing',
        'Cross-disciplinary insights'
      ],
      technologies: ['AI Research', 'Scientific AI', 'Autonomous Discovery'],
      image: '/api/og-image?title=Research AI Platform',
      slug: '/case-studies/research-ai-platform'
    }
  ];

  const industries = [
    { name: 'Financial Services', count: 8, icon: <DollarSign className="w-5 h-5" />, color: 'from-emerald-500 to-teal-500' },
    { name: 'Healthcare', count: 6, icon: <Heart className="w-5 h-5" />, color: 'from-red-500 to-pink-500' },
    { name: 'Manufacturing', count: 5, icon: <Building className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Space Technology', count: 4, icon: <Rocket className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Government', count: 7, icon: <Shield className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
    { name: 'Retail', count: 4, icon: <Target className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
    { name: 'Energy', count: 3, icon: <Zap className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { name: 'Transportation', count: 3, icon: <Globe className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' }
  ];

  const technologies = [
    'AI Consciousness', 'Quantum Computing', 'Neural Networks', 'Autonomous Systems',
    'Cybersecurity', 'Predictive Analytics', 'IoT Integration', 'Machine Learning',
    'Space Technology', 'Healthcare AI', 'Financial AI', 'Manufacturing AI'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Real-world transformations powered by Zion Tech Group's revolutionary 
                AI consciousness, quantum computing, and autonomous systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Your Success Story
                </a>
                <a href="/services" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                    <Building className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-400">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                    <Globe className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-gray-400">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">$2B+</div>
                <div className="text-gray-400">Value Delivered</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300">
                Transformative implementations that showcase the power of our revolutionary technology
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={study.slug}>
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full">
                            Featured
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                            {study.industry}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {study.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {study.excerpt}
                        </p>
                        <div className="mb-4">
                          <p className="text-sm text-cyan-400 mb-2">Client: {study.client}</p>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">View Case Study</span>
                          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Industries and Case Studies */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Industries */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Industries We Serve
                  </h3>
                  <div className="space-y-3">
                    {industries.map((industry, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center`}>
                            {industry.icon}
                          </div>
                          <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {industry.name}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm">{industry.count}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/20"
                >
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Ready to Transform?</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Let's discuss how our revolutionary technology can transform your organization.
                  </p>
                  <a href="/contact" className="block w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center">
                    Start a Conversation
                  </a>
                </motion.div>
              </div>

              {/* Case Studies Grid */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    All Case Studies
                  </h3>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudies.map((study, index) => (
                    <motion.article
                      key={study.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <Link href={study.slug}>
                        <div className="p-6 bg-black/40 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                              {study.industry}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {study.title}
                          </h4>
                          <p className="text-gray-400 mb-4 line-clamp-2">
                            {study.excerpt}
                          </p>
                          <div className="mb-4">
                            <p className="text-sm text-cyan-400 mb-2">Client: {study.client}</p>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.slice(0, 2).map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                                  {tech}
                                </span>
                              ))}
                              {study.technologies.length > 2 && (
                                <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                                  +{study.technologies.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">View Details</span>
                            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Showcase */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Proven Results Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our revolutionary technology delivers measurable, transformative results for organizations worldwide.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '300%', label: 'Average Efficiency Increase', icon: <TrendingUp className="w-8 h-8" />, color: 'from-emerald-500 to-teal-500' },
                { metric: '99.9%', label: 'System Reliability', icon: <CheckCircle className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
                { metric: '$2B+', label: 'Total Value Delivered', icon: <DollarSign className="w-8 h-8" />, color: 'from-purple-500 to-pink-500' },
                { metric: '24/7', label: 'Autonomous Operation', icon: <Clock className="w-8 h-8" />, color: 'from-orange-500 to-red-500' }
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {result.icon}
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{result.metric}</div>
                  <div className="text-gray-400">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center p-12 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/20"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the ranks of organizations that have transformed their operations with Zion Tech Group's 
                revolutionary AI consciousness and quantum computing solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Your Transformation
                </a>
                <a href="/services" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;