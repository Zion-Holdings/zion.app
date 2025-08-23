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
    { id: 'finance', name: 'Financial Services', count: 3 },
    { id: 'manufacturing', name: 'Manufacturing', count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', count: 2 },
    { id: 'government', name: 'Government', count: 3 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 15 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
    { id: 'quantum', name: 'Quantum Computing', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
    { id: 'cloud', name: 'Cloud Infrastructure', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Drug Discovery Platform',
      client: 'PharmaTech Solutions',
      industry: 'healthcare',
      services: ['ai-ml', 'cloud'],
      challenge: 'PharmaTech needed to accelerate drug discovery by 10x while reducing costs by 60%. Traditional methods were too slow and expensive.',
      solution: 'Developed a comprehensive AI platform using quantum-inspired algorithms for molecular modeling, predictive analytics for drug efficacy, and automated lab workflow optimization.',
      results: [
        'Drug discovery speed increased by 12x',
        'Research costs reduced by 65%',
        'Success rate improved from 15% to 28%',
        'Time to market reduced by 40%'
      ],
      metrics: {
        roi: '340%',
        timeline: '18 months',
        teamSize: '25 people',
        technologies: ['AI/ML', 'Quantum Algorithms', 'Cloud Computing']
      },
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum-Secure Banking Infrastructure',
      client: 'GlobalBank International',
      industry: 'finance',
      services: ['quantum', 'cybersecurity'],
      challenge: 'GlobalBank needed to future-proof their security infrastructure against quantum computing threats while maintaining compliance with international banking regulations.',
      solution: 'Implemented a quantum-resistant cryptographic framework, zero-trust architecture, and AI-powered threat detection system with real-time monitoring.',
      results: [
        'Security posture improved by 95%',
        'Compliance score increased to 99.8%',
        'Incident response time reduced by 80%',
        'Zero security breaches in 2 years'
      ],
      metrics: {
        roi: '280%',
        timeline: '24 months',
        teamSize: '18 people',
        technologies: ['Quantum Cryptography', 'Zero Trust', 'AI Security']
      },
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Smart Manufacturing Optimization',
      client: 'Industrial Dynamics Corp',
      industry: 'manufacturing',
      services: ['ai-ml', 'cloud'],
      challenge: 'Industrial Dynamics faced 30% production downtime due to equipment failures and inefficient processes, costing millions annually.',
      solution: 'Deployed AI-powered predictive maintenance system, real-time production optimization, and IoT sensor network for comprehensive monitoring.',
      results: [
        'Production downtime reduced by 85%',
        'Energy efficiency improved by 35%',
        'Maintenance costs decreased by 45%',
        'Overall productivity increased by 28%'
      ],
      metrics: {
        roi: '420%',
        timeline: '12 months',
        teamSize: '22 people',
        technologies: ['IoT', 'Predictive Analytics', 'Cloud Platform']
      },
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'E-commerce Personalization Engine',
      client: 'RetailMax Online',
      industry: 'retail',
      services: ['ai-ml'],
      challenge: 'RetailMax struggled with low conversion rates (2.1%) and poor customer retention due to generic shopping experiences.',
      solution: 'Built an AI-powered personalization engine that analyzes customer behavior, preferences, and purchase history to deliver tailored experiences.',
      results: [
        'Conversion rate increased to 6.8%',
        'Customer retention improved by 45%',
        'Average order value increased by 32%',
        'Customer satisfaction score: 4.8/5'
      ],
      metrics: {
        roi: '380%',
        timeline: '9 months',
        teamSize: '15 people',
        technologies: ['Machine Learning', 'Big Data Analytics', 'Real-time Processing']
      },
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Government Data Security Platform',
      client: 'Department of Homeland Security',
      industry: 'government',
      services: ['cybersecurity', 'quantum'],
      challenge: 'DHS needed to secure sensitive government data against advanced persistent threats and prepare for quantum computing attacks.',
      solution: 'Developed a quantum-resistant security platform with advanced threat detection, automated incident response, and secure data sharing capabilities.',
      results: [
        'Threat detection accuracy: 99.7%',
        'False positive rate reduced to 0.1%',
        'Incident response time: under 5 minutes',
        'Compliance with all federal security standards'
      ],
      metrics: {
        roi: 'N/A (Government)',
        timeline: '30 months',
        teamSize: '35 people',
        technologies: ['Quantum Security', 'AI Threat Detection', 'Zero Trust']
      },
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Healthcare AI Diagnostic System',
      client: 'MediCare Network',
      industry: 'healthcare',
      services: ['ai-ml'],
      challenge: 'MediCare faced diagnostic accuracy issues and long wait times, leading to delayed treatments and increased healthcare costs.',
      solution: 'Implemented an AI-powered diagnostic system that analyzes medical images, patient data, and symptoms to provide accurate, rapid diagnoses.',
      results: [
        'Diagnostic accuracy improved by 23%',
        'Diagnosis time reduced by 70%',
        'Patient wait times decreased by 60%',
        'Healthcare costs reduced by 25%'
      ],
      metrics: {
        roi: '310%',
        timeline: '15 months',
        teamSize: '28 people',
        technologies: ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics']
      },
      featured: false,
      image: '/api/placeholder/600/400'
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
                with cutting-edge technology solutions.
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
                { label: 'Average ROI', value: '320%', icon: TrendingUp }
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
                  Our most impactful and innovative projects
                </p>
              </motion.div>

              {filteredCaseStudies.filter(study => study.featured).map((study, index) => {
                const IndustryIcon = getIndustryIcon(study.industry);
                return (
                  <motion.article
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
                          <IndustryIcon className="w-16 h-16 text-white" />
                        </div>
                      </div>
                      
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30">
                            Featured
                          </span>
                          <span className="text-gray-400 text-sm capitalize">{study.industry}</span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors duration-300">
                          {study.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4">
                          <strong>Client:</strong> {study.client}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">The Challenge</h4>
                          <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Our Solution</h4>
                          <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-lg font-bold text-cyan-400">{value}</div>
                              <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                            </div>
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
                  </motion.article>
                );
              })}
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
                All Case Studies
              </h2>
              <p className="text-lg text-gray-400">
                Explore our complete portfolio of successful implementations
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
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full capitalize">
                            {study.industry}
                          </span>
                          <span className="text-cyan-400 text-sm font-medium">
                            {study.metrics.roi}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {study.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                          {study.challenge}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Building className="w-4 h-4" />
                            <span>{study.client}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{study.metrics.timeline}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.services.slice(0, 2).map((service, serviceIndex) => {
                            const ServiceIcon = getServiceIcon(service);
                            return (
                              <span
                                key={serviceIndex}
                                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full flex items-center space-x-1"
                              >
                                <ServiceIcon className="w-3 h-3" />
                                <span>{service.replace('-', ' ').toUpperCase()}</span>
                              </span>
                            );
                          })}
                        </div>
                        
                        <a
                          href={`/case-studies/${study.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
                        >
                          Read More
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
                Ready to Create Your Success Story?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how our technology solutions can transform your business 
                and deliver measurable results.
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