import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Brain,
  Rocket,
  Shield,
  Cloud,
  Target,
  BarChart3,
  Calendar,
  MapPin
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 15 },
    { id: 'healthcare', name: 'Healthcare', count: 4 },
    { id: 'finance', name: 'Financial Services', count: 5 },
    { id: 'manufacturing', name: 'Manufacturing', count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', count: 2 },
    { id: 'government', name: 'Government', count: 1 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 15 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'cloud', name: 'Cloud Infrastructure', count: 5 },
    { id: 'space-tech', name: 'Space Technology', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Drug Discovery Platform',
      client: 'PharmaTech Solutions',
      industry: 'healthcare',
      services: ['ai-ml', 'cloud'],
      challenge: 'PharmaTech needed to accelerate drug discovery by 10x while reducing research costs by 60%. Traditional methods were too slow and expensive.',
      solution: 'Developed an AI consciousness platform that combines machine learning with quantum-inspired algorithms to predict molecular interactions and drug efficacy.',
      results: [
        '10x faster drug discovery process',
        '60% reduction in research costs',
        '85% accuracy in drug efficacy prediction',
        'FDA approval for 3 new drugs in 18 months'
      ],
      metrics: {
        roi: '450%',
        timeframe: '18 months',
        teamSize: '25',
        technologies: ['AI Consciousness', 'Quantum ML', 'Cloud Platform']
      },
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['Healthcare', 'AI', 'Drug Discovery', 'Quantum ML']
    },
    {
      id: 2,
      title: 'Quantum-Secure Banking Infrastructure',
      client: 'GlobalBank International',
      industry: 'finance',
      services: ['quantum', 'cybersecurity'],
      challenge: 'GlobalBank needed to future-proof their security infrastructure against quantum computing threats while maintaining 99.99% uptime.',
      solution: 'Implemented a quantum-resistant cybersecurity platform with zero-trust architecture and quantum key distribution for secure communications.',
      results: [
        'Quantum-resistant security implementation',
        '99.99% system uptime maintained',
        'Zero security breaches in 2 years',
        'Compliance with all regulatory requirements'
      ],
      metrics: {
        roi: '320%',
        timeframe: '24 months',
        teamSize: '40',
        technologies: ['Quantum Security', 'Zero Trust', 'Quantum Key Distribution']
      },
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['Finance', 'Quantum Security', 'Banking', 'Zero Trust']
    },
    {
      id: 3,
      title: 'Smart Manufacturing Optimization',
      client: 'AutoTech Manufacturing',
      industry: 'manufacturing',
      services: ['ai-ml', 'cloud'],
      challenge: 'AutoTech wanted to reduce production downtime by 40% and increase efficiency by 25% through intelligent automation.',
      solution: 'Deployed AI-powered predictive maintenance and autonomous quality control systems with real-time monitoring and optimization.',
      results: [
        '45% reduction in production downtime',
        '28% increase in manufacturing efficiency',
        '30% reduction in quality control costs',
        'Real-time production optimization'
      ],
      metrics: {
        roi: '280%',
        timeframe: '12 months',
        teamSize: '18',
        technologies: ['AI Predictive Maintenance', 'Computer Vision', 'IoT Platform']
      },
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Manufacturing', 'AI', 'Predictive Maintenance', 'IoT']
    },
    {
      id: 4,
      title: 'Space Resource Intelligence Platform',
      client: 'SpaceMining Corp',
      industry: 'government',
      services: ['space-tech', 'ai-ml'],
      challenge: 'SpaceMining needed to identify and map valuable resources in space with 90% accuracy using limited satellite data.',
      solution: 'Developed an AI-powered space resource intelligence platform that analyzes satellite imagery and spectral data to identify valuable minerals and resources.',
      results: [
        '92% accuracy in resource identification',
        '3x faster resource mapping',
        'Discovery of 5 new resource-rich locations',
        'Reduced exploration costs by 70%'
      ],
      metrics: {
        roi: '380%',
        timeframe: '30 months',
        teamSize: '32',
        technologies: ['Space AI', 'Satellite Analytics', 'Resource Intelligence']
      },
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Space Technology', 'AI', 'Resource Mining', 'Satellite Data']
    },
    {
      id: 5,
      title: 'E-commerce AI Personalization',
      client: 'RetailTech Solutions',
      industry: 'retail',
      services: ['ai-ml', 'cloud'],
      challenge: 'RetailTech wanted to increase customer engagement by 50% and boost conversion rates by 35% through personalized experiences.',
      solution: 'Implemented an AI consciousness platform that learns customer preferences and provides personalized product recommendations and experiences.',
      results: [
        '55% increase in customer engagement',
        '38% boost in conversion rates',
        '25% increase in average order value',
        '90% customer satisfaction score'
      ],
      metrics: {
        roi: '290%',
        timeframe: '9 months',
        teamSize: '22',
        technologies: ['AI Personalization', 'Machine Learning', 'Cloud Platform']
      },
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Retail', 'AI', 'Personalization', 'E-commerce']
    },
    {
      id: 6,
      title: 'Quantum Financial Trading System',
      client: 'Quantum Capital',
      industry: 'finance',
      services: ['quantum', 'ai-ml'],
      challenge: 'Quantum Capital needed to process market data 100x faster and execute trades with quantum-level precision for competitive advantage.',
      solution: 'Built a quantum-inspired trading platform that combines quantum algorithms with AI for ultra-fast market analysis and optimal trade execution.',
      results: [
        '100x faster market data processing',
        'Quantum-level trade precision',
        '35% increase in trading profits',
        'Zero system failures in 18 months'
      ],
      metrics: {
        roi: '520%',
        timeframe: '21 months',
        teamSize: '35',
        technologies: ['Quantum Computing', 'AI Trading', 'High-Frequency Trading']
      },
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Finance', 'Quantum Computing', 'Trading', 'AI']
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.services.includes(selectedService);
    return matchesIndustry && matchesService;
  });

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'healthcare': return Building;
      case 'finance': return TrendingUp;
      case 'manufacturing': return Building;
      case 'retail': return Users;
      case 'government': return Shield;
      default: return Building;
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'ai-ml': return Brain;
      case 'quantum': return Rocket;
      case 'cybersecurity': return Shield;
      case 'cloud': return Cloud;
      case 'space-tech': return Rocket;
      default: return Target;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how we've helped organizations across industries transform their operations 
                with cutting-edge AI consciousness, quantum computing, and emerging technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Projects Completed', value: '150+', icon: CheckCircle },
                { label: 'Industries Served', value: '25+', icon: Building },
                { label: 'Client Satisfaction', value: '98%', icon: Star },
                { label: 'Average ROI', value: '350%', icon: TrendingUp }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6 rounded-2xl border border-cyan-400/30 mb-4">
                      <IconComponent className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Industry Filter */}
              <div className="flex items-center space-x-2">
                <Building className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name} ({industry.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Filter */}
              <div className="flex items-center space-x-2">
                <Target className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} ({service.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {filteredCaseStudies.filter(study => study.featured).length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Featured Success Stories
                </h2>
                <p className="text-lg text-gray-400">
                  Our most impactful and transformative projects
                </p>
              </motion.div>

              {filteredCaseStudies.filter(study => study.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 mb-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Building className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30">
                          Featured
                        </span>
                        <span className="text-gray-400 text-sm">{study.industry.toUpperCase()}</span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        {study.title}
                      </h3>
                      
                      <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-800 rounded-lg">
                          <div className="text-2xl font-bold text-cyan-400">{study.metrics.roi}</div>
                          <div className="text-sm text-gray-400">ROI</div>
                        </div>
                        <div className="text-center p-3 bg-gray-800 rounded-lg">
                          <div className="text-2xl font-bold text-purple-400">{study.metrics.timeframe}</div>
                          <div className="text-sm text-gray-400">Timeline</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* All Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Success Stories
              </h2>
              <p className="text-lg text-gray-400">
                Explore our complete portfolio of transformative projects
              </p>
            </motion.div>

            {filteredCaseStudies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.filter(study => !study.featured).map((study, index) => {
                  const IndustryIcon = getIndustryIcon(study.industry);
                  return (
                    <motion.article
                      key={study.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IndustryIcon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full">
                            {study.industry.toUpperCase()}
                          </span>
                          <span className="text-cyan-400 text-sm font-semibold">{study.metrics.roi}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {study.title}
                        </h3>
                        
                        <p className="text-cyan-400 font-medium mb-4">{study.client}</p>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                          {study.challenge}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{study.metrics.timeframe}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>{study.metrics.teamSize} people</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.services.slice(0, 2).map((service, idx) => {
                            const ServiceIcon = getServiceIcon(service);
                            return (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full flex items-center space-x-1"
                              >
                                <ServiceIcon className="w-3 h-3" />
                                <span>{service.toUpperCase()}</span>
                              </span>
                            );
                          })}
                        </div>
                        
                        <a
                          href={`/case-studies/${study.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
                        >
                          Read Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No case studies found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters or browse all case studies.
                </p>
                <button
                  onClick={() => {
                    setSelectedIndustry('all');
                    setSelectedService('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join the hundreds of organizations that have transformed their operations 
                with our cutting-edge technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Services
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