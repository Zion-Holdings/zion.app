import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, Users, TrendingUp, Clock, ArrowRight, 
  Filter, Search, Award, Star, CheckCircle
} from 'lucide-react';

export default function CaseStudies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 15 },
    { id: 'financial', name: 'Financial Services', count: 4 },
    { id: 'healthcare', name: 'Healthcare', count: 3 },
    { id: 'manufacturing', name: 'Manufacturing', count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', count: 2 },
    { id: 'technology', name: 'Technology', count: 3 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 15 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
    { id: 'quantum', name: 'Quantum Computing', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 3 },
    { id: 'cloud', name: 'Cloud Infrastructure', count: 2 },
    { id: 'automation', name: 'Process Automation', count: 1 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Fraud Detection for Global Bank',
      client: 'Global Financial Corp',
      industry: 'financial',
      service: 'ai-ml',
      challenge: 'High false positive rates in fraud detection leading to customer friction and operational inefficiency',
      solution: 'Implemented advanced machine learning algorithms with real-time processing capabilities',
      results: [
        'Reduced false positives by 85%',
        'Improved fraud detection accuracy to 99.2%',
        'Decreased processing time by 60%',
        'Saved $12M annually in operational costs'
      ],
      duration: '6 months',
      teamSize: '8 engineers',
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'AWS'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing for Drug Discovery',
      client: 'PharmaTech Solutions',
      industry: 'healthcare',
      service: 'quantum',
      challenge: 'Traditional computing methods taking years to simulate molecular interactions for drug development',
      solution: 'Developed quantum algorithms for molecular simulation and drug discovery optimization',
      results: [
        'Accelerated drug discovery process by 10x',
        'Identified 3 new drug candidates',
        'Reduced computational costs by 70%',
        'Improved molecular modeling accuracy by 95%'
      ],
      duration: '12 months',
      teamSize: '6 researchers',
      technologies: ['Qiskit', 'Python', 'IBM Quantum', 'Custom Algorithms'],
      featured: true
    },
    {
      id: 3,
      title: 'Zero-Trust Security Architecture',
      client: 'TechCorp Industries',
      industry: 'technology',
      service: 'cybersecurity',
      challenge: 'Increasing cyber threats and need for comprehensive security across distributed workforce',
      solution: 'Implemented zero-trust security framework with AI-powered threat detection',
      results: [
        'Eliminated 99.9% of security incidents',
        'Reduced security response time by 80%',
        'Achieved SOC 2 Type II compliance',
        'Improved user experience with seamless authentication'
      ],
      duration: '8 months',
      teamSize: '10 security experts',
      technologies: ['Okta', 'CrowdStrike', 'Splunk', 'Custom AI Models'],
      featured: true
    },
    {
      id: 4,
      title: 'Manufacturing Process Optimization',
      client: 'AutoManufacturing Inc',
      industry: 'manufacturing',
      service: 'ai-ml',
      challenge: 'Inefficient production processes causing delays and increased costs',
      solution: 'AI-powered predictive maintenance and process optimization system',
      results: [
        'Increased production efficiency by 35%',
        'Reduced downtime by 60%',
        'Lowered operational costs by 25%',
        'Improved product quality by 40%'
      ],
      duration: '10 months',
      teamSize: '7 engineers',
      technologies: ['Python', 'TensorFlow', 'IoT Sensors', 'Azure'],
      featured: false
    },
    {
      id: 5,
      title: 'E-commerce Personalization Engine',
      client: 'RetailTech Solutions',
      industry: 'retail',
      service: 'ai-ml',
      challenge: 'Low customer engagement and conversion rates due to generic product recommendations',
      solution: 'AI-powered personalization engine with real-time learning capabilities',
      results: [
        'Increased conversion rates by 45%',
        'Improved customer engagement by 60%',
        'Boosted average order value by 30%',
        'Enhanced customer retention by 50%'
      ],
      duration: '7 months',
      teamSize: '6 developers',
      technologies: ['React', 'Node.js', 'TensorFlow', 'Redis'],
      featured: false
    },
    {
      id: 6,
      title: 'Cloud Migration & Optimization',
      client: 'Enterprise Solutions Ltd',
      industry: 'technology',
      service: 'cloud',
      challenge: 'Legacy infrastructure causing scalability issues and high maintenance costs',
      solution: 'Comprehensive cloud migration with microservices architecture',
      results: [
        'Reduced infrastructure costs by 40%',
        'Improved system performance by 300%',
        'Enhanced scalability and reliability',
        'Reduced deployment time by 80%'
      ],
      duration: '14 months',
      teamSize: '12 engineers',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesSearch && matchesIndustry && matchesService;
  });

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'financial': return <Building className="w-6 h-6" />;
      case 'healthcare': return <Users className="w-6 h-6" />;
      case 'manufacturing': return <Building className="w-6 h-6" />;
      case 'retail': return <Building className="w-6 h-6" />;
      case 'technology': return <Building className="w-6 h-6" />;
      default: return <Building className="w-6 h-6" />;
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'ai-ml': return <TrendingUp className="w-6 h-6" />;
      case 'quantum': return <Star className="w-6 h-6" />;
      case 'cybersecurity': return <Award className="w-6 h-6" />;
      case 'cloud': return <Building className="w-6 h-6" />;
      case 'automation': return <TrendingUp className="w-6 h-6" />;
      default: return <TrendingUp className="w-6 h-6" />;
    }
  };

  return (
    <Layout>
      <Head>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing how Zion Tech Group has transformed businesses with innovative technology solutions." />
        <meta name="keywords" content="case studies, success stories, client projects, Zion Tech Group, technology solutions" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories and client transformations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Head>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped organizations transform their operations, 
            increase efficiency, and achieve remarkable results through innovative technology solutions.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Industry Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Filter by Industry</h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        selectedIndustry === industry.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      {getIndustryIcon(industry.id)}
                      {industry.name}
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {industry.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Filter by Service</h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        selectedService === service.id
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      {getServiceIcon(service.id)}
                      {service.name}
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {service.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Case Studies */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Success Stories</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 rounded-2xl border border-gray-600/20 overflow-hidden hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {industries.find(i => i.id === study.industry)?.name}
                    </span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                      {services.find(s => s.id === study.service)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {study.title}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-gray-300 text-sm mb-2">
                      <span className="font-semibold">Client:</span> {study.client}
                    </p>
                    <p className="text-gray-300 text-sm mb-2">
                      <span className="font-semibold">Duration:</span> {study.duration}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <span className="font-semibold">Team:</span> {study.teamSize}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Case Studies */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">All Case Studies</h2>
          
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No Case Studies Found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or filters to find relevant case studies.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 rounded-2xl border border-gray-600/20 overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {industries.find(i => i.id === study.industry)?.name}
                      </span>
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                        {services.find(s => s.id === study.service)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {study.title}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm mb-2">
                        <span className="font-semibold">Client:</span> {study.client}
                      </p>
                      <p className="text-gray-300 text-sm">
                        <span className="font-semibold">Duration:</span> {study.duration}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm line-clamp-2">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how our technology solutions can transform your business and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}