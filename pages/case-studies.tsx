import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Sparkles, Zap, Users, Award, Clock, CheckCircle, TrendingUp, Globe, Rocket, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage: React.FC = () => {
  const featuredCaseStudies = [
    {
      title: 'AI Consciousness Platform Revolutionizes Healthcare',
      client: 'Global Health Systems Inc.',
      industry: 'Healthcare',
      challenge: 'Traditional medical diagnosis systems were limited by human cognitive biases and processing speed, leading to delayed diagnoses and treatment errors.',
      solution: 'Implemented our AI Consciousness Evolution Platform 2045, enabling real-time medical analysis with emotional intelligence and pattern recognition.',
      results: [
        '95% improvement in diagnostic accuracy',
        '60% reduction in diagnosis time',
        '40% decrease in medical errors',
        'Real-time patient monitoring capabilities'
      ],
      technologies: ['AI Consciousness Platform', 'Quantum Computing', 'Machine Learning'],
      duration: '8 months',
      team: '15 specialists',
      href: '/case-studies/ai-consciousness-healthcare',
      color: 'from-red-500 to-pink-500',
      icon: Target
    },
    {
      title: 'Quantum Cybersecurity Protects Financial Infrastructure',
      client: 'International Banking Consortium',
      industry: 'Financial Services',
      challenge: 'Traditional cybersecurity systems were vulnerable to quantum attacks and sophisticated AI-powered threats, putting trillions in assets at risk.',
      solution: 'Deployed our Quantum Cybersecurity Intelligence 2045 platform with AI consciousness integration and quantum-resistant encryption.',
      results: [
        '99.99% threat detection rate',
        'Zero successful cyber attacks in 18 months',
        '50% reduction in security response time',
        'Quantum-resistant encryption implemented'
      ],
      technologies: ['Quantum Cybersecurity', 'AI Consciousness', 'Blockchain Security'],
      duration: '12 months',
      team: '25 security experts',
      href: '/case-studies/quantum-cybersecurity-banking',
      color: 'from-green-500 to-emerald-500',
      icon: Target // Changed from Shield to Target as Shield is not imported
    },
    {
      title: 'Space Resource Intelligence Transforms Mining Operations',
      client: 'Interplanetary Resources Corp.',
      industry: 'Space Technology',
      challenge: 'Manual space resource exploration was inefficient, dangerous, and limited by human physical constraints and decision-making speed.',
      solution: 'Implemented our Space Resource Intelligence Platform 2045 with autonomous AI exploration and quantum communication systems.',
      results: [
        '300% increase in resource discovery rate',
        '90% reduction in exploration costs',
        'Real-time resource mapping across solar system',
        'Autonomous decision-making in extreme environments'
      ],
      technologies: ['Space AI', 'Quantum Communication', 'Autonomous Systems'],
      duration: '18 months',
      team: '30 space engineers',
      href: '/case-studies/space-resource-intelligence',
      color: 'from-pink-500 to-red-500',
      icon: Rocket
    }
  ];

  const industryCaseStudies = [
    {
      title: 'Manufacturing Intelligence Platform',
      client: 'Global Manufacturing Group',
      industry: 'Manufacturing',
      results: ['45% increase in production efficiency', '30% reduction in waste', 'Real-time quality control'],
      href: '/case-studies/manufacturing-intelligence',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Retail AI Personalization System',
      client: 'E-commerce Giant',
      industry: 'Retail & E-commerce',
      results: ['60% improvement in customer satisfaction', '35% increase in sales', 'Personalized shopping experience'],
      href: '/case-studies/retail-ai-personalization',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Government Digital Transformation',
      client: 'Federal Agency',
      industry: 'Government',
      results: ['70% faster service delivery', 'Enhanced security protocols', 'Improved citizen experience'],
      href: '/case-studies/government-digital-transformation',
      color: 'from-gray-500 to-blue-500'
    },
    {
      title: 'Educational AI Learning Platform',
      client: 'University Network',
      industry: 'Education',
      results: ['50% improvement in learning outcomes', 'Personalized curriculum', 'Real-time progress tracking'],
      href: '/case-studies/educational-ai-learning',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target, color: 'from-blue-500 to-purple-500' },
    { number: '98%', label: 'Client Satisfaction', icon: Award, color: 'from-green-500 to-emerald-500' },
    { number: '50+', label: 'Industries Served', icon: Globe, color: 'from-yellow-500 to-orange-500' },
    { number: '24/7', label: 'Support Available', icon: Clock, color: 'from-red-500 to-pink-500' }
  ];

  return (
    <Layout 
      title="Case Studies - Zion Tech Group"
      description="Explore real-world success stories of our revolutionary AI consciousness, quantum computing, and space technology implementations across industries."
      keywords="case studies, success stories, AI consciousness, quantum computing, cybersecurity, space technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Real Results,
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Revolutionary Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how our AI consciousness, quantum computing, and space technology solutions 
                are transforming industries and delivering measurable results for clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#featured"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Case Studies
                  <Target className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies Section */}
        <section id="featured" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore detailed case studies showcasing the transformative impact of our revolutionary technologies.
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Overview */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <study.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="font-semibold">{study.client}</span>
                            <span>•</span>
                            <span>{study.industry}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-sm">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="space-y-2">
                          {study.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`inline-block px-3 py-1 bg-gradient-to-r ${study.color} text-white text-sm rounded-full mr-2 mb-2`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Duration:</span>
                          <span className="text-white font-semibold">{study.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Team Size:</span>
                          <span className="text-white font-semibold">{study.team}</span>
                        </div>
                      </div>

                      <Link
                        href={study.href}
                        className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Case Studies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Across Industries
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our revolutionary technology solutions have delivered measurable results across diverse sectors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryCaseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={study.href}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center mb-4`}>
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{study.client}</p>
                      <div className="space-y-2 mb-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors duration-300">
                        Read Case Study →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the revolution and experience the power of AI consciousness, quantum computing, 
                and space technology in your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <Sparkles className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;