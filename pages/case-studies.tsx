import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, 
  TrendingUp, 
  Users, 
  Globe, 
  Shield, 
  Rocket,
  Brain,
  Atom,
  Cloud,
  Database,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Users },
    { id: 'finance', name: 'Financial Services', icon: TrendingUp },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building },
    { id: 'retail', name: 'Retail & E-commerce', icon: Globe },
    { id: 'government', name: 'Government', icon: Shield },
    { id: 'technology', name: 'Technology', icon: Rocket }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Rocket },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'data', name: 'Data & Analytics', icon: Database }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics Platform',
      company: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      service: 'ai',
      description: 'Developed an advanced AI platform that analyzes medical imaging data to detect early-stage diseases with 95% accuracy, reducing diagnosis time by 80%.',
      results: [
        '95% diagnostic accuracy rate',
        '80% reduction in diagnosis time',
        '30% improvement in patient outcomes',
        '$2.5M annual cost savings'
      ],
      technologies: ['TensorFlow', 'Computer Vision', 'Cloud AI', 'HIPAA Compliance'],
      image: '/images/case-studies/healthcare-ai.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Financial Trading System',
      company: 'Quantum Capital Group',
      industry: 'finance',
      service: 'quantum',
      description: 'Built a quantum computing-powered trading system that processes market data 1000x faster than traditional systems, enabling real-time algorithmic trading.',
      results: [
        '1000x faster data processing',
        '45% increase in trading efficiency',
        'Real-time market analysis',
        '$15M additional revenue generated'
      ],
      technologies: ['Quantum Computing', 'Financial APIs', 'Real-time Analytics', 'Blockchain'],
      image: '/images/case-studies/quantum-trading.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Autonomous Manufacturing Intelligence',
      company: 'Global Manufacturing Corp.',
      industry: 'manufacturing',
      service: 'ai',
      description: 'Implemented an AI-driven manufacturing system that optimizes production lines, predicts maintenance needs, and reduces downtime by 60%.',
      results: [
        '60% reduction in downtime',
        '25% increase in production efficiency',
        'Predictive maintenance alerts',
        '40% reduction in energy costs'
      ],
      technologies: ['IoT Sensors', 'Machine Learning', 'Predictive Analytics', 'Edge Computing'],
      image: '/images/case-studies/manufacturing-ai.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Zero-Trust Cybersecurity Framework',
      company: 'National Defense Systems',
      industry: 'government',
      service: 'cybersecurity',
      description: 'Designed and deployed a comprehensive zero-trust security framework protecting critical government infrastructure from advanced cyber threats.',
      results: [
        '99.99% threat detection rate',
        'Zero successful breaches',
        'Real-time threat response',
        'Compliance with all security standards'
      ],
      technologies: ['Zero-Trust Architecture', 'AI Threat Detection', 'Blockchain Security', 'Quantum Encryption'],
      image: '/images/case-studies/cybersecurity.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Cloud-Native Data Analytics Platform',
      company: 'DataFlow Technologies',
      industry: 'technology',
      service: 'data',
      description: 'Created a scalable cloud-native analytics platform that processes petabytes of data in real-time, providing actionable insights for enterprise clients.',
      results: [
        'Real-time processing of 1PB+ data',
        '99.9% uptime guarantee',
        '50% reduction in data processing costs',
        'Support for 1000+ concurrent users'
      ],
      technologies: ['Kubernetes', 'Apache Spark', 'Real-time Streaming', 'Multi-cloud Architecture'],
      image: '/images/case-studies/data-analytics.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'AI-Powered Customer Service Platform',
      company: 'RetailConnect Solutions',
      industry: 'retail',
      service: 'ai',
      description: 'Developed an intelligent customer service platform that handles 90% of customer inquiries automatically, improving satisfaction scores by 35%.',
      results: [
        '90% automated inquiry handling',
        '35% improvement in customer satisfaction',
        '24/7 customer support availability',
        '70% reduction in support costs'
      ],
      technologies: ['Natural Language Processing', 'Chatbot AI', 'Sentiment Analysis', 'Multi-language Support'],
      image: '/images/case-studies/customer-service.jpg',
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.service === selectedService;
    return industryMatch && serviceMatch;
  });

  return (
    <Layout>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore successful implementations and success stories from Zion Tech Group clients across various industries." />
        <meta name="keywords" content="case studies, success stories, client implementations, Zion Tech Group, AI solutions, quantum computing" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Success Stories
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover how our cutting-edge technology solutions have transformed businesses 
              across industries and delivered measurable results.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-medium">500+ Successful Implementations</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-medium">$2B+ Value Delivered</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">98% Client Satisfaction</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex flex-col lg:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Industry Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-3">Filter by Industry</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center space-y-2 ${
                        selectedIndustry === industry.id
                          ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300'
                          : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-cyan-500/30 hover:bg-cyan-500/10'
                      }`}
                    >
                      <industry.icon className="w-5 h-5" />
                      <span className="text-xs text-center">{industry.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-3">Filter by Service</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center space-y-2 ${
                        selectedService === service.id
                          ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300'
                          : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-cyan-500/30 hover:bg-cyan-500/10'
                      }`}
                    >
                      <service.icon className="w-5 h-5" />
                      <span className="text-xs text-center">{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className={`group relative ${
                    study.featured ? 'lg:col-span-2' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm text-cyan-400 font-medium">{study.company}</span>
                          {study.featured && (
                            <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                          {study.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        {study.industry !== 'all' && (
                          <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                            {industries.find(i => i.id === study.industry)?.icon && 
                              React.createElement(industries.find(i => i.id === study.industry)!.icon, { className: "w-4 h-4 text-cyan-400" })
                            }
                          </div>
                        )}
                        {study.service !== 'all' && (
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            {services.find(s => s.id === study.service)?.icon && 
                              React.createElement(services.find(s => s.id === study.service)!.icon, { className: "w-4 h-4 text-blue-400" })
                            }
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group">
                        <span className="font-medium">Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredCaseStudies.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Case Studies Found</h3>
                <p className="text-gray-400">
                  Try adjusting your filters to see more case studies.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our innovative technology solutions can transform your business 
                and deliver measurable results like the ones you've seen here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                >
                  Explore Our Services
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