import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target, 
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Rocket,
  Brain,
  Shield,
  Globe,
  Award,
  BarChart3,
  Zap,
  ShoppingBag,
  Atom
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
    { id: 'space-tech', name: 'Space Technology', count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Financial Risk Assessment Platform',
      client: 'Global Finance Corp',
      industry: 'finance',
      service: 'ai-ml',
      challenge: 'Traditional risk assessment methods were too slow and inaccurate for real-time trading decisions.',
      solution: 'Implemented an AI consciousness platform that analyzes market data, news sentiment, and historical patterns in real-time.',
      results: [
        '300% faster risk assessment',
        '45% improvement in prediction accuracy',
        '$2.5M annual cost savings',
        'Real-time decision making capability'
      ],
      metrics: {
        efficiency: '300%',
        accuracy: '45%',
        savings: '$2.5M',
        timeframe: '6 months'
      },
      featured: true,
      logo: '/api/placeholder/200/100'
    },
    {
      id: 2,
      title: 'Quantum-Secure Healthcare Data Platform',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      service: 'quantum',
      challenge: 'Healthcare provider needed quantum-resistant encryption for sensitive patient data while maintaining fast access.',
      solution: 'Developed a quantum-secure cloud infrastructure with post-quantum cryptography algorithms.',
      results: [
        'Unbreakable encryption security',
        '99.99% uptime guarantee',
        'HIPAA compliance achieved',
        '50% faster data access'
      ],
      metrics: {
        security: 'Quantum-resistant',
        uptime: '99.99%',
        compliance: '100%',
        performance: '50%'
      },
      featured: true,
      logo: '/api/placeholder/200/100'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence for Mining Operations',
      client: 'Asteroid Mining Ltd',
      industry: 'manufacturing',
      service: 'space-tech',
      challenge: 'Company needed to identify and analyze potential mining sites in asteroid belts efficiently.',
      solution: 'Built a space resource intelligence platform using advanced AI and satellite data analysis.',
      results: [
        '90% faster site identification',
        '85% accuracy in resource estimation',
        'Reduced exploration costs by 60%',
        'Real-time monitoring capabilities'
      ],
      metrics: {
        speed: '90%',
        accuracy: '85%',
        costReduction: '60%',
        monitoring: 'Real-time'
      },
      featured: true,
      logo: '/api/placeholder/200/100'
    },
    {
      id: 4,
      title: 'AI Autonomous Research Assistant',
      client: 'Research Institute of Technology',
      industry: 'government',
      service: 'ai-ml',
      challenge: 'Researchers spent 40% of their time on literature review and data collection instead of analysis.',
      solution: 'Created an AI autonomous research platform that automatically gathers, analyzes, and synthesizes research data.',
      results: [
        '70% reduction in research time',
        '3x more research projects completed',
        'Improved collaboration across teams',
        'Automated citation management'
      ],
      metrics: {
        timeReduction: '70%',
        productivity: '3x',
        collaboration: 'Enhanced',
        automation: '100%'
      },
      featured: false,
      logo: '/api/placeholder/200/100'
    },
    {
      id: 5,
      title: 'Zero Trust Cybersecurity Implementation',
      client: 'SecureBank International',
      industry: 'finance',
      service: 'cybersecurity',
      challenge: 'Bank needed to implement zero trust security architecture across all digital touchpoints.',
      solution: 'Designed and deployed a comprehensive zero trust security framework with AI-powered threat detection.',
      results: [
        '99.9% threat detection rate',
        'Zero successful breaches',
        '50% reduction in security incidents',
        'Compliance with all regulations'
      ],
      metrics: {
        detection: '99.9%',
        breaches: '0',
        incidents: '50%',
        compliance: '100%'
      },
      featured: false,
      logo: '/api/placeholder/200/100'
    },
    {
      id: 6,
      title: 'Quantum Neural Network for Drug Discovery',
      client: 'PharmaTech Innovations',
      industry: 'healthcare',
      service: 'quantum',
      challenge: 'Traditional drug discovery methods were too slow and expensive for rapid pharmaceutical development.',
      solution: 'Implemented quantum neural networks to simulate molecular interactions and predict drug efficacy.',
      results: [
        '10x faster drug discovery',
        '80% improvement in prediction accuracy',
        'Reduced R&D costs by 40%',
        'Accelerated time to market'
      ],
      metrics: {
        speed: '10x',
        accuracy: '80%',
        costReduction: '40%',
        timeToMarket: 'Accelerated'
      },
      featured: false,
      logo: '/api/placeholder/200/100'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.service === selectedService;
    return industryMatch && serviceMatch;
  });

  const getIndustryIcon = (industry: string) => {
    const icons = {
      finance: DollarSign,
      healthcare: Users,
      manufacturing: Building,
      retail: ShoppingBag,
      government: Shield
    };
    return icons[industry as keyof typeof icons] || Building;
  };

  const getServiceIcon = (service: string) => {
    const icons = {
      'ai-ml': Brain,
      quantum: Atom,
      'space-tech': Rocket,
      cybersecurity: Shield
    };
    return icons[service as keyof typeof icons] || Zap;
  };

  const getIndustryColor = (industry: string) => {
    const colors = {
      finance: 'from-green-500 to-emerald-500',
      healthcare: 'from-blue-500 to-cyan-500',
      manufacturing: 'from-orange-500 to-red-500',
      retail: 'from-purple-500 to-pink-500',
      government: 'from-indigo-500 to-purple-500'
    };
    return colors[industry as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getServiceColor = (service: string) => {
    const colors = {
      'ai-ml': 'from-purple-500 to-pink-500',
      quantum: 'from-blue-500 to-cyan-500',
      'space-tech': 'from-indigo-500 to-purple-500',
      cybersecurity: 'from-red-500 to-orange-500'
    };
    return colors[service as keyof typeof colors] || 'from-gray-500 to-gray-600';
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
                Case Studies
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real-world transformations and measurable results from our technology solutions. 
                See how we've helped organizations across industries achieve breakthrough success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Successful Projects', value: '500+', icon: CheckCircle },
                { label: 'Industries Served', value: '25+', icon: Building },
                { label: 'Client Satisfaction', value: '99%', icon: Star },
                { label: 'ROI Average', value: '300%', icon: TrendingUp }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Industry Filter */}
              <div className="flex items-center space-x-2">
                <Building className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
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
                <Rocket className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
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
                Our most impactful transformations that showcase the power of our technology solutions
              </p>
            </motion.div>

            <div className="space-y-12">
              {filteredCaseStudies.filter(study => study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <span className={`px-3 py-1 bg-gradient-to-r ${getIndustryColor(study.industry)} text-white rounded-full text-sm font-medium`}>
                          {industries.find(i => i.id === study.industry)?.name}
                        </span>
                        <span className={`px-3 py-1 bg-gradient-to-r ${getServiceColor(study.service)} text-white rounded-full text-sm font-medium`}>
                          {services.find(s => s.id === study.service)?.name}
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        {study.title}
                      </h3>

                      <div className="flex items-center gap-4 mb-6 text-gray-400">
                        <span className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          {study.client}
                        </span>
                      </div>

                      {/* Challenge */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">The Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-purple-400 mb-2">Our Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-3 bg-gray-800/30 rounded-xl">
                            <div className="text-lg font-bold text-cyan-400">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>

                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>

                    {/* Visual */}
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          {React.createElement(getServiceIcon(study.service), { className: "w-12 h-12 text-white" })}
                        </div>
                        <p className="text-gray-400 font-medium">Success Story</p>
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
                Explore our complete portfolio of technology transformations and business success stories
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
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    {/* Header */}
                    <div className="p-6">
                      {/* Categories */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-2 py-1 bg-gradient-to-r ${getIndustryColor(study.industry)} text-white rounded-full text-xs font-medium`}>
                          {industries.find(i => i.id === study.industry)?.name}
                        </span>
                        <span className={`px-2 py-1 bg-gradient-to-r ${getServiceColor(study.service)} text-white rounded-full text-xs font-medium`}>
                          {services.find(s => s.id === study.service)?.name}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {study.title}
                      </h3>

                      {/* Client */}
                      <p className="text-gray-400 text-sm mb-4">{study.client}</p>

                      {/* Challenge Preview */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {study.challenge}
                      </p>

                      {/* Key Results */}
                      <div className="space-y-2 mb-4">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-medium">Read Case Study</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
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
                Join hundreds of organizations that have transformed their business with our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
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