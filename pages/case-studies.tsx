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
  Atom,
  Shield,
  Cloud,
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
    { id: 'all', label: 'All Industries', icon: Building, count: 25 },
    { id: 'healthcare', label: 'Healthcare', icon: Users, count: 8 },
    { id: 'finance', label: 'Financial Services', icon: DollarSign, count: 6 },
    { id: 'manufacturing', label: 'Manufacturing', icon: Building, count: 5 },
    { id: 'retail', label: 'Retail & E-commerce', icon: ShoppingBag, count: 4 },
    { id: 'government', label: 'Government', icon: Shield, count: 2 }
  ];

  const services = [
    { id: 'all', label: 'All Services', icon: Star, count: 25 },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'quantum', label: 'Quantum Computing', icon: Atom, count: 6 },
    { id: 'space-tech', label: 'Space Technology', icon: Rocket, count: 3 },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield, count: 8 },
    { id: 'cloud', label: 'Cloud Infrastructure', icon: Cloud, count: 10 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Drug Discovery Platform',
      client: 'Global Pharma Solutions',
      industry: 'healthcare',
      services: ['ai-ml', 'cloud'],
      challenge: 'Traditional drug discovery was taking 10+ years and costing billions. The company needed to accelerate the process while reducing costs.',
      solution: 'Developed an AI-powered platform that analyzes molecular structures, predicts drug efficacy, and identifies potential side effects in weeks instead of years.',
      results: [
        'Reduced drug discovery time from 10+ years to 18 months',
        'Cut research costs by 60%',
        'Increased success rate from 5% to 23%',
        'Identified 3 breakthrough drug candidates in first year'
      ],
      metrics: {
        timeReduction: '85%',
        costSavings: '$2.8B',
        successRate: '23%',
        roi: '340%'
      },
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum Financial Trading System',
      client: 'Quantum Capital Markets',
      industry: 'finance',
      services: ['quantum', 'ai-ml'],
      challenge: 'Traditional trading algorithms couldn\'t process market data fast enough to capitalize on microsecond opportunities.',
      solution: 'Built a quantum-enhanced trading platform that processes market data in real-time and executes trades with unprecedented speed and accuracy.',
      results: [
        'Increased trading speed by 1000x',
        'Improved prediction accuracy by 47%',
        'Generated $450M in additional revenue',
        'Reduced risk exposure by 35%'
      ],
      metrics: {
        speedIncrease: '1000x',
        accuracy: '47%',
        revenue: '$450M',
        riskReduction: '35%'
      },
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Platform',
      client: 'Asteroid Mining Corp',
      industry: 'manufacturing',
      services: ['space-tech', 'ai-ml'],
      challenge: 'Identifying valuable asteroids for mining required extensive manual analysis of astronomical data.',
      solution: 'Created an AI-powered platform that analyzes space data to identify, classify, and prioritize asteroids for mining operations.',
      results: [
        'Identified 15 high-value asteroids in 6 months',
        'Reduced analysis time from months to hours',
        'Increased resource discovery rate by 300%',
        'Generated $2.1B in potential mining value'
      ],
      metrics: {
        asteroidsFound: '15',
        timeReduction: '99%',
        discoveryRate: '300%',
        potentialValue: '$2.1B'
      },
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Zero-Trust Security Architecture',
      client: 'National Defense Systems',
      industry: 'government',
      services: ['cybersecurity'],
      challenge: 'Government systems faced increasing cyber threats and needed impenetrable security architecture.',
      solution: 'Implemented a comprehensive zero-trust security framework with AI-powered threat detection and automated response systems.',
      results: [
        'Prevented 100% of attempted breaches',
        'Reduced security incidents by 95%',
        'Cut incident response time from hours to seconds',
        'Achieved highest security compliance rating'
      ],
      metrics: {
        breachPrevention: '100%',
        incidentReduction: '95%',
        responseTime: '99%',
        compliance: '100%'
      },
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'AI Customer Success Platform',
      client: 'TechCorp Enterprise',
      industry: 'retail',
      services: ['ai-ml', 'cloud'],
      challenge: 'Customer churn was high due to poor support and lack of proactive engagement.',
      solution: 'Developed an AI platform that predicts customer needs, automates support, and provides personalized recommendations.',
      results: [
        'Reduced customer churn by 42%',
        'Increased customer satisfaction to 94%',
        'Automated 78% of support requests',
        'Boosted upsell revenue by 156%'
      ],
      metrics: {
        churnReduction: '42%',
        satisfaction: '94%',
        automation: '78%',
        revenueIncrease: '156%'
      },
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Quantum Cloud Infrastructure',
      client: 'CloudTech Solutions',
      industry: 'finance',
      services: ['quantum', 'cloud'],
      challenge: 'Traditional cloud computing couldn\'t handle the computational demands of financial modeling.',
      solution: 'Built a hybrid quantum-classical cloud platform that combines quantum processing with classical cloud infrastructure.',
      results: [
        'Increased computational power by 100x',
        'Reduced processing time by 90%',
        'Cut infrastructure costs by 40%',
        'Enabled real-time risk modeling'
      ],
      metrics: {
        powerIncrease: '100x',
        timeReduction: '90%',
        costSavings: '40%',
        realTime: '100%'
      },
      featured: false,
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.services.includes(selectedService);
    return industryMatch && serviceMatch;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

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
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover how organizations worldwide are transforming their businesses with our 
                cutting-edge AI consciousness, quantum computing, and space technology solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">25+</div>
                  <div className="text-gray-400">Case Studies</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">$15B+</div>
                  <div className="text-gray-400">Value Generated</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">98%</div>
                  <div className="text-gray-400">Success Rate</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">6</div>
                  <div className="text-gray-400">Industries</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-16 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Industry Filter */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Filter by Industry</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`p-3 rounded-xl border transition-all duration-300 text-left ${
                        selectedIndustry === industry.id
                          ? 'border-cyan-400 bg-cyan-900/20'
                          : 'border-gray-700 bg-gray-800/30 hover:border-cyan-400/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <industry.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-white">{industry.label}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{industry.count} cases</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Filter */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Filter by Service</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-3 rounded-xl border transition-all duration-300 text-left ${
                        selectedService === service.id
                          ? 'border-purple-400 bg-purple-900/20'
                          : 'border-gray-700 bg-gray-800/30 hover:border-purple-400/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <service.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-white">{service.label}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{service.count} cases</div>
                    </button>
                  ))}
                </div>
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Featured Success Stories
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Transformative Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful implementations that demonstrate the power of next-generation technology
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden border border-gray-700/50"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-cyan-900/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                          {industries.find(ind => ind.id === study.industry)?.label}
                        </span>
                        <span className="px-3 py-1 bg-purple-900/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                          {study.services.map(s => services.find(serv => serv.id === s)?.label).join(', ')}
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                        {study.title}
                      </h3>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Client</h4>
                        <p className="text-gray-300">{study.client}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-3 text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                        Read Full Case Study
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <h4 className="text-2xl font-bold text-white mb-6">Impact Metrics</h4>
                        <div className="grid grid-cols-2 gap-6">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                              <div className="text-sm text-gray-400 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Case Studies Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">More Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Additional case studies showcasing our diverse range of solutions and industries
              </p>
            </motion.div>

            {regularCaseStudies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularCaseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center">
                      <Building className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-cyan-900/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                          {industries.find(ind => ind.id === study.industry)?.label}
                        </span>
                        <span className="px-2 py-1 bg-purple-900/20 text-purple-400 text-xs rounded-full border border-purple-400/30">
                          {study.services[0]}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {study.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {study.challenge}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Client</h4>
                        <p className="text-gray-300 text-sm">{study.client}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Results</h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 2).map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-2 text-gray-300 text-xs">
                              <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-2">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 text-sm">
                        Read Case Study
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Building className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl text-gray-400 mb-2">No case studies match your current filters</h3>
                <p className="text-gray-500">Try adjusting your industry or service filters to see more results.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the hundreds of organizations already transforming their businesses with our technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
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