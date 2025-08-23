import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, DollarSign, Clock, ArrowRight, 
  Star, CheckCircle, Globe, Brain, Atom, Shield, Rocket,
  Filter, Search, Building, Zap
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 24 },
    { id: 'healthcare', name: 'Healthcare', count: 6 },
    { id: 'finance', name: 'Financial Services', count: 5 },
    { id: 'manufacturing', name: 'Manufacturing', count: 4 },
    { id: 'retail', name: 'Retail & E-commerce', count: 3 },
    { id: 'technology', name: 'Technology', count: 3 },
    { id: 'government', name: 'Government', count: 2 },
    { id: 'education', name: 'Education', count: 1 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 24 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 8 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 5 },
    { id: 'space-technology', name: 'Space Technology', count: 3 },
    { id: 'business-intelligence', name: 'Business Intelligence', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnosis: 95% Accuracy Improvement",
      company: "MedTech Solutions Inc.",
      industry: "healthcare",
      service: "ai-consciousness",
      challenge: "MedTech was struggling with diagnostic accuracy and patient wait times, leading to delayed treatments and increased healthcare costs.",
      solution: "Implemented our AI consciousness evolution platform with emotional intelligence capabilities to enhance diagnostic accuracy and patient interaction.",
      results: [
        "95% improvement in diagnostic accuracy",
        "60% reduction in patient wait times",
        "$2.3M annual cost savings",
        "Enhanced patient satisfaction scores"
      ],
      metrics: {
        accuracy: "95%",
        timeReduction: "60%",
        costSavings: "$2.3M",
        satisfaction: "4.8/5"
      },
      duration: "6 months",
      teamSize: "8 people",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing for Financial Risk Analysis",
      company: "Global Finance Corp",
      industry: "finance",
      service: "quantum-computing",
      challenge: "Global Finance needed to process complex risk calculations in real-time but traditional computing methods were too slow for market demands.",
      solution: "Deployed our quantum AI hybrid computing platform to accelerate risk analysis and portfolio optimization calculations.",
      results: [
        "1000x faster risk calculations",
        "Real-time portfolio optimization",
        "Enhanced risk prediction accuracy",
        "Competitive advantage in trading"
      ],
      metrics: {
        speed: "1000x",
        accuracy: "99.9%",
        timeReduction: "99.9%",
        roi: "450%"
      },
      duration: "8 months",
      teamSize: "12 people",
      featured: true
    },
    {
      id: 3,
      title: "Zero-Trust Cybersecurity Implementation",
      company: "SecureNet Systems",
      industry: "technology",
      service: "cybersecurity",
      challenge: "SecureNet faced increasing cyber threats and needed a comprehensive security solution that could adapt to evolving attack vectors.",
      solution: "Implemented our quantum cybersecurity intelligence platform with AI-powered threat detection and autonomous response capabilities.",
      results: [
        "99.99% threat detection rate",
        "Zero successful breaches",
        "Automated incident response",
        "Reduced security team workload"
      ],
      metrics: {
        detection: "99.99%",
        breaches: "0",
        response: "<30s",
        efficiency: "85%"
      },
      duration: "4 months",
      teamSize: "6 people",
      featured: true
    },
    {
      id: 4,
      title: "Space Resource Intelligence Platform",
      company: "Asteroid Mining Ltd",
      industry: "technology",
      service: "space-technology",
      challenge: "Asteroid Mining needed to identify and analyze potential mining sites in space with limited human oversight and real-time decision making.",
      solution: "Developed a space resource intelligence platform using AI consciousness and autonomous decision-making capabilities for space exploration.",
      results: [
        "Autonomous space exploration",
        "Real-time resource analysis",
        "Reduced mission costs",
        "Enhanced safety protocols"
      ],
      metrics: {
        autonomy: "95%",
        accuracy: "92%",
        costReduction: "40%",
        safety: "99.9%"
      },
      duration: "12 months",
      teamSize: "15 people",
      featured: false
    },
    {
      id: 5,
      title: "Autonomous Business Intelligence Suite",
      company: "Enterprise Solutions Co",
      industry: "manufacturing",
      service: "business-intelligence",
      challenge: "Enterprise Solutions struggled with data silos and manual reporting processes, leading to delayed decision-making and missed opportunities.",
      solution: "Implemented our autonomous AI business intelligence platform to automate data analysis and provide real-time insights.",
      results: [
        "Real-time business insights",
        "Automated reporting",
        "Improved decision speed",
        "Enhanced operational efficiency"
      ],
      metrics: {
        insightSpeed: "Real-time",
        automation: "90%",
        decisionSpeed: "5x",
        efficiency: "75%"
      },
      duration: "5 months",
      teamSize: "10 people",
      featured: false
    },
    {
      id: 6,
      title: "AI Content Intelligence Platform",
      company: "ContentFlow Media",
      industry: "retail",
      service: "ai-consciousness",
      challenge: "ContentFlow needed to create personalized content at scale while maintaining quality and engagement across multiple channels.",
      solution: "Deployed our AI content intelligence platform with emotional intelligence to create personalized, engaging content automatically.",
      results: [
        "10x content production speed",
        "40% increase in engagement",
        "Personalized content at scale",
        "Reduced content creation costs"
      ],
      metrics: {
        speed: "10x",
        engagement: "+40%",
        personalization: "95%",
        costReduction: "60%"
      },
      duration: "7 months",
      teamSize: "9 people",
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesSearch && matchesIndustry && matchesService;
  });

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'ai-consciousness': return Brain;
      case 'quantum-computing': return Atom;
      case 'cybersecurity': return Shield;
      case 'space-technology': return Rocket;
      case 'business-intelligence': return TrendingUp;
      default: return Zap;
    }
  };

  const getIndustryIcon = (industryId: string) => {
    switch (industryId) {
      case 'healthcare': return Users;
      case 'finance': return DollarSign;
      case 'manufacturing': return Building;
      case 'retail': return Globe;
      case 'technology': return Zap;
      case 'government': return Shield;
      case 'education': return Users;
      default: return Building;
    }
  };

  return (
    <Layout 
      title="Case Studies - Zion Tech Group"
      description="Explore real-world success stories and business transformations achieved through Zion Tech Group's revolutionary technology solutions."
      keywords="Zion Tech Group case studies, AI success stories, quantum computing results, cybersecurity implementations, business transformation"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real-world transformations and measurable results achieved through our revolutionary 
                technology solutions. See how we've helped businesses across industries succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {industries.map((industry) => (
                      <option key={industry.id} value={industry.id}>
                        {industry.name} ({industry.count})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Success Stories</h2>
              <p className="text-xl text-gray-400">Our most impactful client transformations</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                          {React.createElement(getServiceIcon(study.service), { className: "w-6 h-6 text-white" })}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {study.title}
                          </h3>
                          <p className="text-cyan-400 font-medium">{study.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                          {industries.find(i => i.id === study.industry)?.name}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                          {services.find(s => s.id === study.service)?.name}
                        </span>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-400 mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-400">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-800/30 rounded-xl">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {study.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {study.teamSize}
                        </span>
                      </div>
                      
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">All Case Studies</h2>
              <p className="text-xl text-gray-400">Explore our complete portfolio of successful implementations</p>
            </motion.div>

            {filteredCaseStudies.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((study, index) => (
                  <motion.article
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          {React.createElement(getServiceIcon(study.service), { className: "w-5 h-5 text-white" })}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                            {study.title}
                          </h3>
                          <p className="text-purple-400 text-sm">{study.company}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                          {industries.find(i => i.id === study.industry)?.name}
                        </span>
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                          {services.find(s => s.id === study.service)?.name}
                        </span>
                      </div>

                      {/* Challenge Preview */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {study.challenge}
                      </p>

                      {/* Key Results */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                        <div className="space-y-1">
                          {study.results.slice(0, 2).map((result, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-xs">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {study.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {study.teamSize}
                          </span>
                        </div>
                        
                        <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                          Read More
                          <ArrowRight className="w-3 h-3 transition-all duration-300" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-400 mb-4">No case studies match your current filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedIndustry('all');
                    setSelectedService('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join the ranks of successful businesses that have transformed their operations 
                with our revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </a>
                <a
                  href="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
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