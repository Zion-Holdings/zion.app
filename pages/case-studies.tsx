import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Award, Star, TrendingUp, Users, Globe, 
  Search, Filter, ArrowRight, ExternalLink,
  Brain, Rocket, Shield, Zap, Target, Atom,
  Building, Cpu, Database, CheckCircle, Clock,
  DollarSign, BarChart3, PieChart
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: <Building className="w-5 h-5" />, count: 25 },
    { id: 'healthcare', name: 'Healthcare', icon: <Shield className="w-5 h-5" />, count: 6 },
    { id: 'finance', name: 'Financial Services', icon: <DollarSign className="w-5 h-5" />, count: 8 },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Cpu className="w-5 h-5" />, count: 5 },
    { id: 'retail', name: 'Retail & E-commerce', icon: <Globe className="w-5 h-5" />, count: 4 },
    { id: 'technology', name: 'Technology', icon: <Rocket className="w-5 h-5" />, count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics Platform',
      company: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      description: 'Revolutionized medical diagnostics with AI-powered image analysis, reducing diagnosis time by 80% and improving accuracy to 95%.',
      challenge: 'Manual diagnosis processes were time-consuming and error-prone, leading to delayed treatments and increased healthcare costs.',
      solution: 'Implemented comprehensive AI diagnostic platform with real-time image analysis, automated reporting, and integration with existing hospital systems.',
      results: [
        '80% reduction in diagnosis time',
        '95% accuracy rate improvement',
        '60% cost reduction in diagnostic processes',
        'Integration with 15+ hospital systems'
      ],
      metrics: {
        roi: '340%',
        timeSaved: '80%',
        costReduction: '60%',
        accuracy: '95%'
      },
      technologies: ['AI/ML', 'Computer Vision', 'Cloud Infrastructure', 'API Integration'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Financial Risk Analysis',
      company: 'Global Finance Corp.',
      industry: 'finance',
      description: 'Implemented quantum computing solutions for real-time risk assessment, enabling faster trading decisions and improved portfolio optimization.',
      challenge: 'Traditional risk analysis methods were too slow for real-time trading, leading to missed opportunities and increased risk exposure.',
      solution: 'Deployed quantum computing infrastructure with custom algorithms for risk assessment, portfolio optimization, and market prediction.',
      results: [
        '300% faster risk calculations',
        '25% improvement in portfolio returns',
        'Real-time risk monitoring',
        'Integration with existing trading systems'
      ],
      metrics: {
        roi: '280%',
        timeSaved: '300%',
        costReduction: '40%',
        accuracy: '92%'
      },
      technologies: ['Quantum Computing', 'AI/ML', 'Real-time Analytics', 'Trading Integration'],
      featured: true
    },
    {
      id: 3,
      title: 'Manufacturing Process Automation',
      company: 'Industrial Manufacturing Ltd.',
      industry: 'manufacturing',
      description: 'Transformed manufacturing operations with intelligent automation, reducing production costs and improving quality control.',
      challenge: 'Manual manufacturing processes were inefficient, prone to errors, and unable to scale with growing demand.',
      solution: 'Implemented comprehensive automation system with AI-powered quality control, predictive maintenance, and real-time monitoring.',
      results: [
        '45% increase in production efficiency',
        '70% reduction in quality defects',
        '30% decrease in operational costs',
        '24/7 automated monitoring'
      ],
      metrics: {
        roi: '220%',
        timeSaved: '45%',
        costReduction: '30%',
        accuracy: '98%'
      },
      technologies: ['Process Automation', 'AI/ML', 'IoT Sensors', 'Predictive Analytics'],
      featured: false
    },
    {
      id: 4,
      title: 'E-commerce Personalization Engine',
      company: 'RetailTech Solutions',
      industry: 'retail',
      description: 'Built AI-powered personalization engine that increased customer engagement and conversion rates significantly.',
      challenge: 'Generic shopping experiences led to low customer engagement and poor conversion rates.',
      solution: 'Developed AI personalization engine with real-time customer behavior analysis and dynamic content optimization.',
      results: [
        '150% increase in customer engagement',
        '85% improvement in conversion rates',
        '40% increase in average order value',
        'Real-time personalization'
      ],
      metrics: {
        roi: '180%',
        timeSaved: '60%',
        costReduction: '35%',
        accuracy: '89%'
      },
      technologies: ['AI/ML', 'Real-time Analytics', 'Personalization Engine', 'E-commerce Integration'],
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity Threat Detection System',
      company: 'SecureNet Technologies',
      industry: 'technology',
      description: 'Implemented advanced AI-powered cybersecurity system that detected and prevented sophisticated cyber threats in real-time.',
      challenge: 'Traditional security systems were unable to detect advanced persistent threats and zero-day attacks.',
      solution: 'Deployed AI-powered threat detection system with behavioral analysis, anomaly detection, and automated response capabilities.',
      results: [
        '99.9% threat detection rate',
        '90% reduction in false positives',
        'Real-time threat response',
        'Integration with existing security infrastructure'
      ],
      metrics: {
        roi: '250%',
        timeSaved: '95%',
        costReduction: '50%',
        accuracy: '99.9%'
      },
      technologies: ['AI/ML', 'Cybersecurity', 'Threat Detection', 'Automated Response'],
      featured: false
    },
    {
      id: 6,
      title: 'Supply Chain Optimization Platform',
      company: 'Logistics Solutions Co.',
      industry: 'manufacturing',
      description: 'Created intelligent supply chain platform that optimized logistics operations and reduced delivery times.',
      challenge: 'Inefficient supply chain management led to delays, increased costs, and poor customer satisfaction.',
      solution: 'Built AI-powered supply chain optimization platform with route optimization, demand forecasting, and real-time tracking.',
      results: [
        '35% reduction in delivery times',
        '25% decrease in logistics costs',
        'Real-time supply chain visibility',
        'Integration with ERP systems'
      ],
      metrics: {
        roi: '190%',
        timeSaved: '35%',
        costReduction: '25%',
        accuracy: '94%'
      },
      technologies: ['AI/ML', 'Supply Chain Analytics', 'Route Optimization', 'ERP Integration'],
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <Layout>
      <main className="relative z-10 pt-8">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real results from real clients. Discover how we've transformed businesses across industries with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#featured-cases"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Success Story
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section id="featured-cases" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300">
                Our most impactful transformations that demonstrate the power of our technology
              </p>
            </motion.div>

            <div className="space-y-8">
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        Featured Case Study
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                        {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                      </span>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                        <p className="text-gray-300 text-lg mb-6">{study.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">The Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Our Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                            <div className="text-2xl font-bold text-cyan-400">{study.metrics.roi}</div>
                            <div className="text-sm text-gray-400">ROI</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                            <div className="text-2xl font-bold text-purple-400">{study.metrics.timeSaved}</div>
                            <div className="text-sm text-gray-400">Time Saved</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                            <div className="text-2xl font-bold text-green-400">{study.metrics.costReduction}</div>
                            <div className="text-sm text-gray-400">Cost Reduction</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
                            <div className="text-2xl font-bold text-orange-400">{study.metrics.accuracy}</div>
                            <div className="text-sm text-gray-400">Accuracy</div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <a
                          href={`/case-studies/${study.id}`}
                          className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                        >
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search case studies by company, industry, or technology..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Industry Filter */}
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedIndustry === industry.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50'
                    }`}
                  >
                    {industry.icon}
                    {industry.name}
                    <span className="text-sm text-gray-400">({industry.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-300">
                Explore our complete portfolio of successful transformations
              </p>
            </motion.div>

            {filteredCaseStudies.length === 0 ? (
              <div className="text-center py-20">
                <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">No case studies found</h3>
                <p className="text-gray-300">Try adjusting your search terms or industry filter.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30">
                        {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{study.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                        <div className="text-lg font-bold text-cyan-400">{study.metrics.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                      <div className="text-center p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                        <div className="text-lg font-bold text-green-400">{study.metrics.timeSaved}</div>
                        <div className="text-xs text-gray-400">Time Saved</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the ranks of successful companies that have transformed their business with our technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CaseStudiesPage;