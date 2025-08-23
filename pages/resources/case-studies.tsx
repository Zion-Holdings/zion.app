import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BarChart3, Building, Users, Target, Award, Star, 
  TrendingUp, Globe, Brain, Atom, Rocket, Cloud,
  ArrowRight, ExternalLink, Filter, Search, Clock,
  DollarSign, CheckCircle, Eye, Download, Share2
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { value: 'all', label: 'All Industries', count: 45 },
    { value: 'healthcare', label: 'Healthcare', count: 12 },
    { value: 'finance', label: 'Financial Services', count: 15 },
    { value: 'manufacturing', label: 'Manufacturing', count: 8 },
    { value: 'retail', label: 'Retail & E-commerce', count: 6 },
    { value: 'government', label: 'Government', count: 4 }
  ];

  const services = [
    { value: 'all', label: 'All Services', count: 45 },
    { value: 'ai', label: 'AI & Machine Learning', count: 18 },
    { value: 'quantum', label: 'Quantum Computing', count: 12 },
    { value: 'space', label: 'Space Technology', count: 8 },
    { value: 'cybersecurity', label: 'Cybersecurity', count: 15 },
    { value: 'cloud', label: 'Cloud Infrastructure', count: 22 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnosis Revolution',
      company: 'MedTech Innovations Inc.',
      industry: 'healthcare',
      services: ['ai', 'cloud'],
      description: 'How we helped a leading healthcare provider implement AI consciousness technology to improve diagnostic accuracy by 300% and reduce patient wait times by 60%.',
      results: [
        '300% improvement in diagnostic accuracy',
        '60% reduction in patient wait times',
        '$2.5M annual cost savings',
        '95% patient satisfaction increase'
      ],
      metrics: {
        accuracy: '300%',
        efficiency: '60%',
        savings: '$2.5M',
        satisfaction: '95%'
      },
      duration: '6 months',
      teamSize: '8 people',
      featured: true,
      image: '/images/case-studies/healthcare-ai.jpg',
      href: '/case-studies/healthcare-ai-diagnosis'
    },
    {
      id: 2,
      title: 'Quantum Cybersecurity for Global Bank',
      company: 'Global Financial Corp.',
      industry: 'finance',
      services: ['quantum', 'cybersecurity'],
      description: 'Implementation of quantum-resistant cybersecurity solutions protecting $50B+ in assets and securing 10M+ customer accounts worldwide.',
      results: [
        '100% quantum-resistant security',
        '$50B+ assets protected',
        '10M+ customer accounts secured',
        'Zero security breaches in 2 years'
      ],
      metrics: {
        security: '100%',
        assets: '$50B+',
        accounts: '10M+',
        breaches: '0'
      },
      duration: '8 months',
      teamSize: '12 people',
      featured: true,
      image: '/images/case-studies/quantum-banking.jpg',
      href: '/case-studies/quantum-cybersecurity-banking'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Platform',
      company: 'Orbital Mining Ltd.',
      industry: 'manufacturing',
      services: ['space', 'ai'],
      description: 'Development of an AI-powered space resource intelligence platform that increased mining efficiency by 400% and reduced operational costs by 70%.',
      results: [
        '400% increase in mining efficiency',
        '70% reduction in operational costs',
        'Real-time resource mapping',
        'Autonomous operation capability'
      ],
      metrics: {
        efficiency: '400%',
        costReduction: '70%',
        mapping: 'Real-time',
        autonomy: '100%'
      },
      duration: '12 months',
      teamSize: '15 people',
      featured: false,
      image: '/images/case-studies/space-mining.jpg',
      href: '/case-studies/space-resource-intelligence'
    },
    {
      id: 4,
      title: 'Autonomous Business Intelligence System',
      company: 'TechStart Solutions',
      industry: 'retail',
      services: ['ai', 'cloud'],
      description: 'Implementation of autonomous business intelligence that increased sales by 250% and improved customer retention by 180%.',
      results: [
        '250% increase in sales',
        '180% improvement in customer retention',
        'Real-time market analysis',
        'Predictive customer insights'
      ],
      metrics: {
        sales: '250%',
        retention: '180%',
        analysis: 'Real-time',
        insights: 'Predictive'
      },
      duration: '4 months',
      teamSize: '6 people',
      featured: false,
      image: '/images/case-studies/business-intelligence.jpg',
      href: '/case-studies/autonomous-business-intelligence'
    },
    {
      id: 5,
      title: 'Zero Trust Government Network',
      company: 'Federal Defense Agency',
      industry: 'government',
      services: ['cybersecurity', 'cloud'],
      description: 'Complete zero trust security architecture implementation protecting critical government infrastructure and sensitive data.',
      results: [
        '100% zero trust implementation',
        'Zero security incidents',
        'Real-time threat detection',
        'Automated response systems'
      ],
      metrics: {
        implementation: '100%',
        incidents: '0',
        detection: 'Real-time',
        response: 'Automated'
      },
      duration: '10 months',
      teamSize: '20 people',
      featured: true,
      image: '/images/case-studies/government-security.jpg',
      href: '/case-studies/zero-trust-government'
    },
    {
      id: 6,
      title: 'Quantum Neural Network for Drug Discovery',
      company: 'BioPharma Research',
      industry: 'healthcare',
      services: ['quantum', 'ai'],
      description: 'Quantum neural network platform that accelerated drug discovery by 500% and reduced research costs by 80%.',
      results: [
        '500% acceleration in drug discovery',
        '80% reduction in research costs',
        'Advanced molecular modeling',
        'Predictive drug efficacy'
      ],
      metrics: {
        acceleration: '500%',
        costReduction: '80%',
        modeling: 'Advanced',
        efficacy: 'Predictive'
      },
      duration: '18 months',
      teamSize: '25 people',
      featured: false,
      image: '/images/case-studies/drug-discovery.jpg',
      href: '/case-studies/quantum-drug-discovery'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    if (selectedIndustry !== 'all' && study.industry !== selectedIndustry) return false;
    if (selectedService !== 'all' && !study.services.includes(selectedService)) return false;
    return true;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real-world success stories showcasing how our revolutionary technology solutions 
                have transformed businesses across industries and delivered extraordinary results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Industry Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Filter by Industry</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {industries.map((industry) => (
                      <button
                        key={industry.value}
                        onClick={() => setSelectedIndustry(industry.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedIndustry === industry.value
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                        }`}
                      >
                        {industry.label}
                        <span className="ml-2 text-xs opacity-75">({industry.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Filter by Service</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.value}
                        onClick={() => setSelectedService(service.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedService === service.value
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                        }`}
                      >
                        {service.label}
                        <span className="ml-2 text-xs opacity-75">({service.count})</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our revolutionary technology solutions have delivered extraordinary results 
                for leading organizations worldwide.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.filter(study => study.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Building className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-400 text-sm">{study.company}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                      <span className="text-sm text-gray-400">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{study.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(study.metrics).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-400">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <span>Duration: {study.duration}</span>
                      <span>Team: {study.teamSize} people</span>
                    </div>
                    
                    <Link
                      href={study.href}
                      className="inline-flex items-center w-full justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">All Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of success stories and implementation examples.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden"
                >
                  <div className="h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Building className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">{study.company}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-gray-400">{study.industry}</span>
                      {study.featured && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">{study.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {study.results.slice(0, 3).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{study.duration}</span>
                      <span>{study.teamSize} people</span>
                    </div>
                    
                    <Link
                      href={study.href}
                      className="inline-flex items-center w-full justify-center px-4 py-2 rounded-lg border border-blue-500/50 text-blue-400 font-medium hover:bg-blue-500/10 transition-all duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's discuss how our revolutionary technology solutions can transform your business 
                and deliver extraordinary results like the ones you've seen here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Explore Services
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