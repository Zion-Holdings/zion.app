import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Building, 
  TrendingUp, 
  Users, 
  Award, 
  ArrowRight,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Star,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 15 },
    { id: 'finance', name: 'Financial Services', count: 4 },
    { id: 'healthcare', name: 'Healthcare', count: 3 },
    { id: 'manufacturing', name: 'Manufacturing', count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', count: 2 },
    { id: 'government', name: 'Government', count: 2 },
    { id: 'energy', name: 'Energy & Utilities', count: 1 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 15 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
    { id: 'quantum', name: 'Quantum Computing', count: 4 },
    { id: 'space-tech', name: 'Space Technology', count: 2 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Financial Risk Assessment Platform',
      client: 'Global Investment Bank',
      industry: 'finance',
      service: 'ai-ml',
      challenge: 'Traditional risk assessment methods were too slow and inaccurate for real-time trading decisions, leading to missed opportunities and increased risk exposure.',
      solution: 'Developed an AI consciousness platform that analyzes market data, news sentiment, and economic indicators in real-time to provide instant risk assessments with 99.7% accuracy.',
      results: [
        'Reduced risk assessment time from 4 hours to 2 minutes',
        'Increased trading volume by 45% through better risk management',
        'Saved $2.3M annually in operational costs',
        'Achieved 99.7% accuracy in risk predictions'
      ],
      metrics: {
        efficiency: '99.5%',
        costSavings: '$2.3M',
        timeReduction: '99.2%',
        accuracy: '99.7%'
      },
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum Cybersecurity for Healthcare Data',
      client: 'National Healthcare Network',
      industry: 'healthcare',
      service: 'quantum',
      challenge: 'Healthcare network needed quantum-resistant encryption to protect sensitive patient data against future quantum computing threats while maintaining HIPAA compliance.',
      solution: 'Implemented quantum-resistant cryptographic algorithms and quantum key distribution systems to secure patient data with future-proof encryption.',
      results: [
        'Achieved 100% HIPAA compliance with quantum security',
        'Protected 10M+ patient records with quantum encryption',
        'Reduced security audit time by 60%',
        'Future-proofed against quantum computing threats'
      ],
      metrics: {
        efficiency: '95.8%',
        costSavings: '$1.8M',
        timeReduction: '60%',
        accuracy: '100%'
      },
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence for Mining Operations',
      client: 'International Mining Corporation',
      industry: 'manufacturing',
      service: 'space-tech',
      challenge: 'Mining operations needed to identify new resource locations and optimize extraction processes while reducing environmental impact.',
      solution: 'Deployed space-based resource intelligence platform using satellite data and AI analysis to identify mineral deposits and optimize mining operations.',
      results: [
        'Discovered 3 new major mineral deposits worth $450M',
        'Reduced environmental impact by 35%',
        'Increased extraction efficiency by 28%',
        'Reduced exploration costs by 60%'
      ],
      metrics: {
        efficiency: '92.3%',
        costSavings: '$180M',
        timeReduction: '65%',
        accuracy: '94.2%'
      },
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'AI Autonomous Manufacturing System',
      client: 'Automotive Manufacturer',
      industry: 'manufacturing',
      service: 'ai-ml',
      challenge: 'Manufacturing plant needed to increase production efficiency while maintaining quality standards and reducing human error in complex assembly processes.',
      solution: 'Implemented AI-powered autonomous manufacturing system with computer vision, robotic automation, and predictive maintenance capabilities.',
      results: [
        'Increased production output by 40%',
        'Reduced defect rate by 75%',
        'Decreased maintenance downtime by 60%',
        'Improved worker safety by 90%'
      ],
      metrics: {
        efficiency: '88.7%',
        costSavings: '$3.2M',
        timeReduction: '55%',
        accuracy: '96.8%'
      },
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Quantum Financial Trading Platform',
      client: 'Hedge Fund',
      industry: 'finance',
      service: 'quantum',
      challenge: 'Hedge fund needed to process massive amounts of financial data and execute complex trading strategies faster than competitors.',
      solution: 'Built quantum computing platform for financial modeling and algorithmic trading, enabling real-time analysis of market data and instant trade execution.',
      results: [
        'Reduced trade execution time by 99.9%',
        'Increased trading profits by 67%',
        'Processed 1000x more data than traditional systems',
        'Achieved quantum advantage in financial modeling'
      ],
      metrics: {
        efficiency: '99.9%',
        costSavings: '$5.1M',
        timeReduction: '99.9%',
        accuracy: '98.9%'
      },
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'AI Customer Success Platform',
      client: 'SaaS Company',
      industry: 'retail',
      service: 'ai-ml',
      challenge: 'SaaS company struggled with customer churn and needed to predict and prevent customer issues before they occurred.',
      solution: 'Developed AI-powered customer success platform that analyzes user behavior, predicts potential issues, and proactively provides solutions.',
      results: [
        'Reduced customer churn by 35%',
        'Increased customer satisfaction score by 42%',
        'Automated 80% of customer support interactions',
        'Improved customer lifetime value by 28%'
      ],
      metrics: {
        efficiency: '85.2%',
        costSavings: '$1.2M',
        timeReduction: '70%',
        accuracy: '91.5%'
      },
      featured: false,
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'ai-ml': return <Brain className="w-5 h-5" />;
      case 'quantum': return <Atom className="w-5 h-5" />;
      case 'space-tech': return <Rocket className="w-5 h-5" />;
      case 'cybersecurity': return <Shield className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getIndustryIcon = (industryId: string) => {
    switch (industryId) {
      case 'finance': return <DollarSign className="w-5 h-5" />;
      case 'healthcare': return <Users className="w-5 h-5" />;
      case 'manufacturing': return <Building className="w-5 h-5" />;
      case 'retail': return <TrendingUp className="w-5 h-5" />;
      case 'government': return <Shield className="w-5 h-5" />;
      case 'energy': return <Cloud className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  return (
    <Layout>
      <SEO 
        title="Case Studies | Zion Tech Group" 
        description="Explore real-world success stories and technology implementations that have transformed businesses across industries."
        canonical="https://ziontechgroup.com/case-studies/"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how our innovative technology solutions have transformed businesses across industries, 
                delivering measurable results and competitive advantages.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Industry Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-300 font-medium mr-2">Industry:</span>
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? 'bg-cyan-400/20 border-cyan-400/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-400'
                    }`}
                  >
                    {getIndustryIcon(industry.id)}
                    <span>{industry.name}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                      {industry.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Service Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-300 font-medium mr-2">Service:</span>
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedService === service.id
                        ? 'bg-purple-400/20 border-purple-400/50 text-purple-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-purple-400/30 hover:text-purple-400'
                    }`}
                  >
                    {getServiceIcon(service.id)}
                    <span>{service.name}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                      {service.count}
                    </span>
                  </button>
                ))}
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
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Featured Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful implementations that showcase the transformative power of our technology solutions
              </p>
            </motion.div>

            <div className="space-y-12">
              {filteredCaseStudies.filter(study => study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                          {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                        </span>
                        <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                          {study.service === 'ai-ml' ? 'AI & ML' : 
                           study.service === 'space-tech' ? 'Space Tech' : 
                           study.service.charAt(0).toUpperCase() + study.service.slice(1)}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                        {study.title}
                      </h3>
                      
                      <p className="text-cyan-400 font-semibold mb-6">
                        Client: {study.client}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                          <div className="text-2xl font-bold text-cyan-400">{study.metrics.efficiency}</div>
                          <div className="text-sm text-gray-400">Efficiency</div>
                        </div>
                        <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                          <div className="text-2xl font-bold text-purple-400">{study.metrics.costSavings}</div>
                          <div className="text-sm text-gray-400">Cost Savings</div>
                        </div>
                        <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                          <div className="text-2xl font-bold text-green-400">{study.metrics.timeReduction}</div>
                          <div className="text-sm text-gray-400">Time Reduction</div>
                        </div>
                        <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                          <div className="text-2xl font-bold text-pink-400">{study.metrics.accuracy}</div>
                          <div className="text-sm text-gray-400">Accuracy</div>
                        </div>
                      </div>
                      
                      <a
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </div>
                    
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                          {getServiceIcon(study.service)}
                        </div>
                        <p className="text-gray-400">Featured Case Study</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Case Studies */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">More Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Additional case studies demonstrating our expertise across different industries and technologies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gray-700 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="w-16 h-16 bg-gray-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          {getServiceIcon(study.service)}
                        </div>
                        <p className="text-sm">Case Study</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                        {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                      </span>
                      <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full border border-purple-400/30">
                        {study.service === 'ai-ml' ? 'AI & ML' : 
                         study.service === 'space-tech' ? 'Space Tech' : 
                         study.service.charAt(0).toUpperCase() + study.service.slice(1)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-cyan-400 font-medium text-sm mb-3">
                      {study.client}
                    </p>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {study.challenge}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span className="flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {study.results.length} results
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {study.metrics.efficiency} efficiency
                      </span>
                    </div>
                    
                    <a
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Case Study
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No case studies found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedIndustry('all');
                    setSelectedService('all');
                  }}
                  className="mt-4 px-6 py-2 bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/30 transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the companies that have already transformed their businesses with our innovative 
                technology solutions. Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
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