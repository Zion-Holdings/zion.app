import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Building,
  Rocket,
  Brain,
  Shield,
  Globe,
  Award,
  BarChart3,
  Zap,
  ShoppingBag
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 25 },
    { id: 'finance', name: 'Financial Services', count: 8 },
    { id: 'healthcare', name: 'Healthcare', count: 6 },
    { id: 'manufacturing', name: 'Manufacturing', count: 5 },
    { id: 'retail', name: 'Retail & E-commerce', count: 4 },
    { id: 'government', name: 'Government', count: 2 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 25 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 12 },
    { id: 'quantum', name: 'Quantum Computing', count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
    { id: 'space-tech', name: 'Space Technology', count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Global Bank AI Transformation',
      company: 'Fortune 500 Financial Institution',
      industry: 'finance',
      service: 'ai-ml',
      challenge: 'A major global bank needed to modernize their legacy systems and implement AI-powered fraud detection to handle millions of transactions daily.',
      solution: 'Implemented our AI consciousness platform with advanced fraud detection algorithms, real-time transaction monitoring, and autonomous risk assessment.',
      results: [
        '99.7% fraud detection accuracy',
        '60% reduction in false positives',
        '$50M annual savings in fraud prevention',
        'Real-time transaction processing'
      ],
      metrics: {
        efficiency: 85,
        costSavings: 60,
        accuracy: 99.7,
        timeReduction: 75
      },
      featured: true,
      duration: '8 months',
      teamSize: '25 engineers'
    },
    {
      id: 2,
      title: 'Healthcare AI Diagnosis Platform',
      company: 'Leading Medical Center',
      industry: 'healthcare',
      service: 'ai-ml',
      challenge: 'A prestigious medical center required an AI-powered diagnostic system to improve patient outcomes and reduce diagnostic errors.',
      solution: 'Developed a comprehensive AI diagnostic platform with medical imaging analysis, patient data integration, and predictive health analytics.',
      results: [
        '95% diagnostic accuracy improvement',
        '40% faster diagnosis time',
        '30% reduction in medical errors',
        'Enhanced patient outcomes'
      ],
      metrics: {
        efficiency: 90,
        costSavings: 45,
        accuracy: 95,
        timeReduction: 40
      },
      featured: true,
      duration: '12 months',
      teamSize: '18 engineers'
    },
    {
      id: 3,
      title: 'Quantum Cybersecurity Implementation',
      company: 'Defense Contractor',
      industry: 'government',
      service: 'quantum',
      challenge: 'A defense contractor needed quantum-resistant cybersecurity solutions to protect classified information from future quantum attacks.',
      solution: 'Implemented quantum-resistant encryption protocols, quantum key distribution systems, and advanced threat detection algorithms.',
      results: [
        'Quantum-resistant security achieved',
        'Zero security breaches',
        'Future-proof encryption',
        'Enhanced threat detection'
      ],
      metrics: {
        efficiency: 95,
        costSavings: 35,
        accuracy: 100,
        timeReduction: 50
      },
      featured: false,
      duration: '18 months',
      teamSize: '30 engineers'
    },
    {
      id: 4,
      title: 'Manufacturing AI Optimization',
      company: 'Global Manufacturing Corp',
      industry: 'manufacturing',
      service: 'ai-ml',
      challenge: 'A manufacturing company needed to optimize production processes, reduce waste, and improve quality control across multiple facilities.',
      solution: 'Deployed AI-powered predictive maintenance, quality control automation, and supply chain optimization systems.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in material waste',
        '99.9% quality control accuracy',
        'Predictive maintenance success'
      ],
      metrics: {
        efficiency: 80,
        costSavings: 25,
        accuracy: 99.9,
        timeReduction: 30
      },
      featured: false,
      duration: '10 months',
      teamSize: '20 engineers'
    },
    {
      id: 5,
      title: 'Space Resource Intelligence Platform',
      company: 'Space Exploration Company',
      industry: 'retail',
      service: 'space-tech',
      challenge: 'A space exploration company needed advanced resource intelligence and mining optimization for asteroid mining operations.',
      solution: 'Developed a comprehensive space resource intelligence platform with AI-powered resource identification and mining optimization.',
      results: [
        '90% resource identification accuracy',
        '50% mining efficiency improvement',
        'Real-time space analytics',
        'Autonomous mining operations'
      ],
      metrics: {
        efficiency: 85,
        costSavings: 50,
        accuracy: 90,
        timeReduction: 60
      },
      featured: false,
      duration: '24 months',
      teamSize: '35 engineers'
    },
    {
      id: 6,
      title: 'Retail AI Customer Experience',
      company: 'E-commerce Giant',
      industry: 'retail',
      service: 'ai-ml',
      challenge: 'An e-commerce company needed to personalize customer experiences and optimize inventory management using AI.',
      solution: 'Implemented AI-powered recommendation engines, customer behavior analysis, and intelligent inventory management systems.',
      results: [
        '35% increase in conversion rates',
        '40% improvement in customer satisfaction',
        '25% reduction in inventory costs',
        'Personalized shopping experiences'
      ],
      metrics: {
        efficiency: 75,
        costSavings: 25,
        accuracy: 92,
        timeReduction: 45
      },
      featured: false,
      duration: '9 months',
      teamSize: '22 engineers'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.service === selectedService;
    return industryMatch && serviceMatch;
  });

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'ai-ml': return Brain;
      case 'quantum': return Zap;
      case 'cybersecurity': return Shield;
      case 'space-tech': return Rocket;
      default: return Target;
    }
  };

  const getIndustryIcon = (industryId: string) => {
    switch (industryId) {
      case 'finance': return DollarSign;
      case 'healthcare': return Users;
      case 'manufacturing': return Building;
      case 'retail': return ShoppingBag;
      case 'government': return Shield;
      default: return Building;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                Success Stories
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how Zion Tech Group has transformed businesses across industries with 
                cutting-edge technology solutions that drive real results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Successful Projects', value: '200+', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
                { label: 'Client Satisfaction', value: '99.9%', icon: Star, color: 'from-yellow-500 to-orange-500' },
                { label: 'Industries Served', value: '25+', icon: Building, color: 'from-blue-500 to-cyan-500' },
                { label: 'Countries Reached', value: '50+', icon: Globe, color: 'from-purple-500 to-pink-500' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Industry Filter */}
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">Industry:</span>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
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
                <Target className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">Service:</span>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Featured Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful client transformations that showcase the power of our technology solutions.
              </p>
            </motion.div>

            <div className="space-y-12">
              {filteredCaseStudies.filter(study => study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 lg:p-12 border border-gray-700/50"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Content */}
                    <div>
                      {/* Header */}
                      <div className="flex items-center space-x-3 mb-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          Featured Case Study
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                          {industries.find(ind => ind.id === study.industry)?.name}
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-lg text-cyan-400 font-semibold mb-6">{study.company}</p>

                      {/* Challenge */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-white mb-3">The Challenge</h4>
                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-white mb-3">Our Solution</h4>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-white mb-4">Results & Impact</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                        <div className="text-center">
                          <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                          <div className="text-white font-semibold">Duration</div>
                          <div className="text-gray-400">{study.duration}</div>
                        </div>
                        <div className="text-center">
                          <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                          <div className="text-white font-semibold">Team Size</div>
                          <div className="text-gray-400">{study.teamSize}</div>
                        </div>
                        <div className="text-center">
                          <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                          <div className="text-white font-semibold">Status</div>
                          <div className="text-green-400">Completed</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Metrics */}
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">Performance Metrics</h4>
                      
                      <div className="space-y-6">
                        {[
                          { label: 'Efficiency Improvement', value: study.metrics.efficiency, unit: '%', color: 'from-green-500 to-emerald-500' },
                          { label: 'Cost Savings', value: study.metrics.costSavings, unit: '%', color: 'from-blue-500 to-cyan-500' },
                          { label: 'Accuracy Rate', value: study.metrics.accuracy, unit: '%', color: 'from-purple-500 to-pink-500' },
                          { label: 'Time Reduction', value: study.metrics.timeReduction, unit: '%', color: 'from-orange-500 to-red-500' }
                        ].map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-gray-800/30 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-gray-300 font-medium">{metric.label}</span>
                              <span className="text-2xl font-bold text-white">{metric.value}{metric.unit}</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                              <div 
                                className={`h-3 bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${metric.value}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8 text-center lg:text-left">
                        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                          View Full Case Study
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">All Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete portfolio of client transformations and success stories.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          {industries.find(ind => ind.id === study.industry)?.name}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                          {services.find(serv => serv.id === study.service)?.name}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>

                      {/* Challenge Preview */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {study.challenge}
                      </p>

                      {/* Key Results */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 2).map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center space-x-2 text-xs text-gray-400">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Project Details */}
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {study.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {study.teamSize}
                        </span>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="text-sm font-medium">Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of organizations that have transformed their business with Zion Tech Group's 
                innovative technology solutions. Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <Rocket className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
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