import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, Users, TrendingUp, Award, Star, CheckCircle,
  ArrowRight, Filter, Search, Globe, Rocket, Brain, Atom, Shield, DollarSign, Clock,
  Heart, ShoppingCart, Cpu, Zap
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', count: 8 },
    { id: 'healthcare', name: 'Healthcare', count: 2 },
    { id: 'finance', name: 'Financial Services', count: 2 },
    { id: 'manufacturing', name: 'Manufacturing', count: 2 },
    { id: 'retail', name: 'Retail & E-commerce', count: 1 },
    { id: 'energy', name: 'Energy & Utilities', count: 1 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 8 },
    { id: 'ai', name: 'AI & Consciousness', count: 3 },
    { id: 'quantum', name: 'Quantum Computing', count: 2 },
    { id: 'space', name: 'Space Technology', count: 1 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 }
  ];

  const caseStudies = [
    {
      id: 'healthcare-ai-diagnosis',
      title: 'AI-Powered Medical Diagnosis Platform',
      company: 'MedTech Innovations Inc.',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'Traditional medical diagnosis was time-consuming and prone to human error, leading to delayed treatments and increased healthcare costs.',
      solution: 'Implemented an AI consciousness evolution platform that could analyze medical images, patient data, and symptoms to provide accurate diagnoses in real-time.',
      results: [
        '95% improvement in diagnosis accuracy',
        '60% reduction in diagnosis time',
        '40% decrease in healthcare costs',
        'Enhanced patient outcomes and satisfaction'
      ],
      technologies: ['AI Consciousness Platform', 'Machine Learning', 'Computer Vision', 'Natural Language Processing'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'quantum-financial-modeling',
      title: 'Quantum Computing for Financial Risk Assessment',
      company: 'Global Finance Corp.',
      industry: 'finance',
      service: 'quantum',
      challenge: 'Complex financial modeling and risk assessment required computational power beyond traditional systems, limiting the ability to process large datasets and complex algorithms.',
      solution: 'Deployed quantum computing infrastructure with quantum neural networks to process financial data and perform risk assessments at unprecedented speeds.',
      results: [
        '1000x faster financial modeling',
        'Enhanced risk prediction accuracy',
        'Real-time market analysis capabilities',
        'Competitive advantage in trading'
      ],
      technologies: ['Quantum Computing', 'Quantum Neural Networks', 'Financial Modeling', 'Risk Assessment'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'manufacturing-automation',
      title: 'Autonomous Manufacturing with AI Consciousness',
      company: 'Advanced Manufacturing Solutions',
      industry: 'manufacturing',
      service: 'ai',
      challenge: 'Manufacturing processes were heavily dependent on human operators, leading to inconsistencies, safety risks, and limited production capacity.',
      solution: 'Implemented autonomous AI systems that could manage entire manufacturing workflows, from quality control to predictive maintenance and production optimization.',
      results: [
        '99.9% production consistency',
        '80% reduction in safety incidents',
        '50% increase in production capacity',
        '24/7 autonomous operation'
      ],
      technologies: ['AI Consciousness Platform', 'Autonomous Systems', 'IoT Integration', 'Predictive Analytics'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'space-resource-intelligence',
      title: 'Space Resource Intelligence Platform',
      company: 'Space Exploration Technologies',
      industry: 'energy',
      service: 'space',
      challenge: 'Traditional resource exploration methods were limited in scope and efficiency, unable to analyze vast amounts of space data for resource identification.',
      solution: 'Developed an AI-powered space resource intelligence platform that could analyze satellite data, identify valuable resources, and optimize exploration strategies.',
      results: [
        '90% improvement in resource discovery',
        '70% reduction in exploration costs',
        'Real-time resource mapping',
        'Enhanced space exploration capabilities'
      ],
      technologies: ['Space Technology', 'AI Intelligence', 'Satellite Data Analysis', 'Resource Mapping'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum-Resistant Cybersecurity Infrastructure',
      company: 'SecureNet Solutions',
      industry: 'finance',
      service: 'cybersecurity',
      challenge: 'Traditional cybersecurity measures were vulnerable to quantum computing attacks, putting sensitive financial data at risk.',
      solution: 'Implemented quantum-resistant encryption protocols and quantum cybersecurity infrastructure to protect against future quantum threats.',
      results: [
        'Quantum-resistant security protocols',
        'Enhanced data protection',
        'Future-proof security infrastructure',
        'Regulatory compliance assurance'
      ],
      technologies: ['Quantum Cybersecurity', 'Post-Quantum Cryptography', 'Security Infrastructure', 'Compliance'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'retail-ai-personalization',
      title: 'AI-Powered Customer Personalization',
      company: 'NextGen Retail',
      industry: 'retail',
      service: 'ai',
      challenge: 'Customer experience was generic and lacked personalization, leading to lower engagement and reduced sales conversion rates.',
      solution: 'Deployed AI consciousness systems that could understand customer preferences, behavior patterns, and provide personalized recommendations in real-time.',
      results: [
        '85% improvement in customer engagement',
        '60% increase in conversion rates',
        'Personalized shopping experiences',
        'Enhanced customer loyalty'
      ],
      technologies: ['AI Consciousness', 'Customer Analytics', 'Personalization Engine', 'Real-time Processing'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'healthcare-quantum-research',
      title: 'Quantum Computing for Drug Discovery',
      company: 'PharmaTech Research',
      industry: 'healthcare',
      service: 'quantum',
      challenge: 'Drug discovery processes were extremely slow and expensive, with traditional computing unable to simulate complex molecular interactions effectively.',
      solution: 'Leveraged quantum computing to simulate molecular interactions and accelerate drug discovery processes by orders of magnitude.',
      results: [
        '1000x faster molecular simulation',
        'Accelerated drug discovery timeline',
        'Reduced research and development costs',
        'Enhanced drug efficacy prediction'
      ],
      technologies: ['Quantum Computing', 'Molecular Simulation', 'Drug Discovery', 'Biotechnology'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'manufacturing-cybersecurity',
      title: 'Industrial Cybersecurity with Zero Trust',
      company: 'Industrial Security Corp.',
      industry: 'manufacturing',
      service: 'cybersecurity',
      challenge: 'Industrial control systems were vulnerable to cyber attacks, posing risks to production safety and operational continuity.',
      solution: 'Implemented zero-trust security architecture with advanced threat detection and autonomous response systems for industrial environments.',
      results: [
        '99.9% threat detection accuracy',
        'Zero successful cyber attacks',
        'Enhanced operational security',
        'Regulatory compliance achievement'
      ],
      technologies: ['Zero Trust Security', 'Industrial Cybersecurity', 'Threat Detection', 'Autonomous Response'],
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesService && matchesSearch;
  });

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'ai': return Brain;
      case 'quantum': return Atom;
      case 'space': return Rocket;
      case 'cybersecurity': return Shield;
      default: return Building;
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'healthcare': return Heart;
      case 'finance': return DollarSign;
      case 'manufacturing': return Cpu;
      case 'retail': return ShoppingCart;
      case 'energy': return Zap;
      default: return Building;
    }
  };

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore real-world success stories of how Zion Tech Group's revolutionary technology solutions have transformed businesses across industries." />
        <meta name="keywords" content="Zion Tech Group case studies, success stories, AI implementation, quantum computing, technology transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories of technology transformation across industries." />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how our revolutionary AI, quantum computing, and space technology solutions have transformed businesses across industries, delivering measurable results and competitive advantages.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors duration-300"
                />
              </div>

              {/* Industry Filters */}
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {industry.name} ({industry.count})
                  </button>
                ))}
              </div>

              {/* Service Filters */}
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedService === service.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {service.name} ({service.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Featured Success Stories
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Our most impactful implementations that showcase the transformative power of revolutionary technology
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {featuredCaseStudies.map((study, index) => (
                  <motion.article
                    key={study.id}
                    variants={fadeInUp}
                    className="group"
                  >
                    <Link href={`/case-studies/${study.id}`}>
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                          <div className="p-8 lg:p-12">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                                {React.createElement(getServiceIcon(study.service), { className: "w-4 h-4" })}
                                {services.find(s => s.id === study.service)?.name}
                              </div>
                              <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                                {React.createElement(getIndustryIcon(study.industry), { className: "w-4 h-4" })}
                                {industries.find(i => i.id === study.industry)?.name}
                              </div>
                            </div>
                            
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                              {study.title}
                            </h3>
                            
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-cyan-400 mb-2">The Challenge</h4>
                              <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                            </div>
                            
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-purple-400 mb-2">Our Solution</h4>
                              <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                            </div>
                            
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-emerald-400 mb-2">Results</h4>
                              <ul className="space-y-2">
                                {study.results.map((result, resultIndex) => (
                                  <li key={resultIndex} className="flex items-start text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {study.technologies.slice(0, 3).map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-md border border-gray-600/50"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center p-8">
                            <div className="text-center">
                              <Building className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                              <p className="text-gray-400 font-medium">{study.company}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Case Studies */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                More Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore additional case studies demonstrating the transformative impact of our technology solutions
              </p>
            </motion.div>

            {regularCaseStudies.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {regularCaseStudies.map((study, index) => (
                  <motion.article
                    key={study.id}
                    variants={fadeInUp}
                    className="group"
                  >
                    <Link href={`/case-studies/${study.id}`}>
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                        <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center">
                          <Building className="w-16 h-16 text-cyan-400" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md border border-cyan-500/30">
                              {services.find(s => s.id === study.service)?.name}
                            </span>
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-md border border-purple-500/30">
                              {industries.find(i => i.id === study.industry)?.name}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                            {study.title}
                          </h3>
                          
                          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                            {study.challenge}
                          </p>
                          
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-emerald-400 mb-2">Key Results</h4>
                            <ul className="space-y-1">
                              {study.results.slice(0, 2).map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-start text-gray-400 text-sm">
                                  <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 font-medium">{study.company}</span>
                            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Building className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No case studies found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our revolutionary technology solutions can transform your business and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Start Your Transformation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-gray-600 text-gray-300 rounded-2xl font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;