import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Zap, 
  Brain, Atom, Shield, Rocket, Star,
  CheckCircle, ArrowRight, TrendingUp, DollarSign,
  Filter, ChevronDown, Building, Cpu
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Financial Services' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'retail', name: 'Retail & E-commerce' },
    { id: 'technology', name: 'Technology' },
    { id: 'energy', name: 'Energy & Utilities' },
    { id: 'government', name: 'Government' }
  ];

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'space', name: 'Space Technology' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud Infrastructure' },
    { id: 'micro-saas', name: 'Micro SaaS' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Drug Discovery Platform',
      company: 'PharmaTech Solutions',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'Traditional drug discovery processes were taking 10-15 years and costing billions of dollars, with high failure rates.',
      solution: 'Implemented an AI consciousness platform that analyzes molecular structures, predicts drug efficacy, and accelerates the discovery process.',
      results: [
        'Reduced drug discovery timeline by 70%',
        'Increased success rate from 5% to 35%',
        'Saved $2.8 billion in R&D costs',
        'Identified 15 new drug candidates in 18 months'
      ],
      metrics: {
        roi: '450%',
        timeline: '70% reduction',
        costSavings: '$2.8B',
        efficiency: '85% improvement'
      },
      featured: true,
      logo: 'P',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum-Secure Financial Trading System',
      company: 'Global Capital Markets',
      industry: 'finance',
      service: 'quantum',
      challenge: 'Traditional encryption methods were vulnerable to quantum attacks, putting billions in financial transactions at risk.',
      solution: 'Deployed quantum-resistant cryptography and quantum computing algorithms for real-time trading optimization.',
      results: [
        'Enhanced security against quantum threats',
        'Improved trading algorithm performance by 300%',
        'Reduced transaction latency by 95%',
        'Increased trading volume capacity by 500%'
      ],
      metrics: {
        roi: '320%',
        security: 'Quantum-resistant',
        performance: '300% improvement',
        capacity: '500% increase'
      },
      featured: true,
      logo: 'G',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Platform',
      company: 'Asteroid Mining Corp',
      industry: 'energy',
      service: 'space',
      challenge: 'Manual analysis of satellite data for asteroid mining was inefficient and missed valuable opportunities.',
      solution: 'Developed AI-powered space resource intelligence platform for automated asteroid analysis and resource identification.',
      results: [
        'Identified 3x more viable mining targets',
        'Reduced analysis time from weeks to hours',
        'Increased resource discovery accuracy by 90%',
        'Generated $150M in new mining opportunities'
      ],
      metrics: {
        roi: '280%',
        discovery: '3x increase',
        accuracy: '90% improvement',
        revenue: '$150M generated'
      },
      featured: false,
      logo: 'A',
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Zero-Trust Cybersecurity Implementation',
      company: 'National Defense Systems',
      industry: 'government',
      service: 'cybersecurity',
      challenge: 'Legacy security systems were vulnerable to advanced persistent threats and insider attacks.',
      solution: 'Implemented comprehensive zero-trust security architecture with AI-powered threat detection.',
      results: [
        'Eliminated 99.9% of security breaches',
        'Reduced incident response time by 85%',
        'Achieved SOC 2 Type II compliance',
        'Protected $50B in critical assets'
      ],
      metrics: {
        roi: '400%',
        security: '99.9% breach prevention',
        response: '85% faster',
        compliance: 'SOC 2 Type II'
      },
      featured: false,
      logo: 'N',
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Autonomous Manufacturing Intelligence',
      company: 'Smart Manufacturing Inc',
      industry: 'manufacturing',
      service: 'ai',
      challenge: 'Production inefficiencies and quality control issues were costing millions annually.',
      solution: 'Deployed AI-powered autonomous manufacturing systems for predictive maintenance and quality optimization.',
      results: [
        'Increased production efficiency by 45%',
        'Reduced defect rates by 80%',
        'Lowered maintenance costs by 60%',
        'Improved product quality by 95%'
      ],
      metrics: {
        roi: '380%',
        efficiency: '45% increase',
        quality: '95% improvement',
        costReduction: '60% decrease'
      },
      featured: false,
      logo: 'S',
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Micro SaaS Customer Success Platform',
      company: 'TechStart Ventures',
      industry: 'technology',
      service: 'micro-saas',
      challenge: 'Manual customer success processes were scaling poorly and leading to customer churn.',
      solution: 'Built intelligent customer success automation platform with AI-powered insights and proactive engagement.',
      results: [
        'Reduced customer churn by 65%',
        'Increased customer lifetime value by 200%',
        'Automated 80% of customer success tasks',
        'Improved customer satisfaction scores by 40%'
      ],
      metrics: {
        roi: '520%',
        churnReduction: '65% decrease',
        clv: '200% increase',
        automation: '80% automated'
      },
      featured: false,
      logo: 'T',
      image: '/api/placeholder/600/400'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => 
    (selectedIndustry === 'all' || study.industry === selectedIndustry) &&
    (selectedService === 'all' || study.service === selectedService)
  );

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <Layout seo={{
      title: 'Case Studies - Zion Tech Group | Customer Success Stories',
      description: 'Discover how Zion Tech Group has transformed businesses across industries with AI, quantum computing, and space technology solutions.',
      keywords: 'case studies, customer success, Zion Tech Group, AI solutions, quantum computing, space technology',
      url: 'https://ziontechgroup.com/case-studies'
    }}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Customer Success Stories
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover how Zion Tech Group has transformed businesses across industries 
                with revolutionary AI, quantum computing, and space technology solutions.
              </p>
              
              {/* Filters */}
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="relative">
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="appearance-none px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 pr-10"
                  >
                    {industries.map((industry) => (
                      <option key={industry.id} value={industry.id}>
                        {industry.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                
                <div className="relative">
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="appearance-none px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 pr-10"
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Featured Success Stories
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Our most impactful customer transformations that showcase the power of 
                  revolutionary technology solutions.
                </p>
              </motion.div>
              
              <div className="space-y-8">
                {featuredCaseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 p-8">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                            {study.logo}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{study.title}</h3>
                            <p className="text-blue-400 font-medium text-lg">{study.company}</p>
                            <div className="flex items-center space-x-3 mt-2">
                              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                                {industries.find(i => i.id === study.industry)?.name}
                              </span>
                              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                                {services.find(s => s.id === study.service)?.name}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">The Challenge</h4>
                            <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Our Solution</h4>
                            <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                            <ul className="space-y-2">
                              {study.results.map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                  <span className="text-gray-300">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-l border-gray-700/50">
                        <h4 className="text-xl font-bold text-white mb-6 text-center">Impact Metrics</h4>
                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-1">{study.metrics.roi}</div>
                            <div className="text-gray-400 text-sm">ROI</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400 mb-1">{study.metrics.timeline}</div>
                            <div className="text-gray-400 text-sm">Timeline</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400 mb-1">{study.metrics.costSavings}</div>
                            <div className="text-gray-400 text-sm">Cost Savings</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-400 mb-1">{study.metrics.efficiency}</div>
                            <div className="text-gray-400 text-sm">Efficiency</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Case Studies */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                More Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore additional customer transformations across various industries and technology domains.
              </p>
            </motion.div>
            
            {regularCaseStudies.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {regularCaseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                          {study.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                          <p className="text-purple-400 font-medium">{study.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          {industries.find(i => i.id === study.industry)?.name}
                        </span>
                        <span className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          {services.find(s => s.id === study.service)?.name}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {study.challenge}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-xl font-bold text-blue-400">{study.metrics.roi}</div>
                          <div className="text-gray-400 text-xs">ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">{study.metrics.efficiency}</div>
                          <div className="text-gray-400 text-xs">Efficiency</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-400">{study.metrics.costReduction || study.metrics.costSavings}</div>
                          <div className="text-gray-400 text-xs">Cost Impact</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Building className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No case studies found matching your criteria.</p>
                <p className="text-gray-500 mt-2">Try adjusting your industry or service filters.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Impact by the Numbers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Quantifying the success and transformation we've delivered to our clients.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Enterprise Clients', icon: <Building className="w-8 h-8 text-blue-400" /> },
                { number: '$15B+', label: 'Value Generated', icon: <DollarSign className="w-8 h-8 text-green-400" /> },
                { number: '95%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8 text-yellow-400" /> },
                { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-8 h-8 text-purple-400" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of enterprises that have transformed their business with 
                our revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
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