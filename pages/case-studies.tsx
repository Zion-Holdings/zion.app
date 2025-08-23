import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Brain, 
  Atom, 
  Shield, 
  Rocket,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Calendar,
  Clock,
  DollarSign,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Briefcase,
  Network,
  Gift,
  Headphones,
  FileText,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function CaseStudies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 15 },
    { id: 'healthcare', name: 'Healthcare', count: 4 },
    { id: 'finance', name: 'Financial Services', count: 3 },
    { id: 'manufacturing', name: 'Manufacturing', count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', count: 2 },
    { id: 'government', name: 'Government', count: 2 },
    { id: 'technology', name: 'Technology', count: 1 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 15 },
    { id: 'ai', name: 'AI & Machine Learning', count: 6 },
    { id: 'quantum', name: 'Quantum Computing', count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 3 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics: 95% Accuracy Improvement',
      client: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'Traditional diagnostic methods were only 70% accurate, leading to misdiagnoses and delayed treatments.',
      solution: 'Implemented our AI consciousness evolution platform with custom neural networks trained on millions of medical images.',
      results: [
        'Diagnostic accuracy increased from 70% to 95%',
        'Treatment time reduced by 40%',
        'Cost savings of $2.5M annually',
        'Patient satisfaction improved by 60%'
      ],
      metrics: {
        accuracy: '95%',
        timeReduction: '40%',
        costSavings: '$2.5M',
        satisfaction: '60%'
      },
      duration: '6 months',
      teamSize: '8 people',
      featured: true,
      testimonial: {
        quote: 'Zion Tech Group transformed our diagnostic capabilities. The AI platform has revolutionized how we approach patient care.',
        author: 'Dr. Sarah Johnson',
        role: 'Chief Medical Officer',
        company: 'MedTech Solutions Inc.'
      }
    },
    {
      id: 2,
      title: 'Quantum Computing for Financial Risk Management',
      client: 'Global Financial Corp.',
      industry: 'finance',
      service: 'quantum',
      challenge: 'Complex financial risk calculations were taking days to complete, limiting real-time decision making.',
      solution: 'Deployed our quantum financial risk manager with quantum algorithms optimized for financial modeling.',
      results: [
        'Risk calculation speed increased by 1000x',
        'Real-time risk assessment enabled',
        'Portfolio optimization improved by 35%',
        'Regulatory compliance enhanced'
      ],
      metrics: {
        speed: '1000x',
        optimization: '35%',
        compliance: '100%',
        efficiency: '95%'
      },
      duration: '8 months',
      teamSize: '12 people',
      featured: true,
      testimonial: {
        quote: 'The quantum computing solution has given us a competitive edge in risk management that was previously impossible.',
        author: 'Michael Chen',
        role: 'Head of Risk Management',
        company: 'Global Financial Corp.'
      }
    },
    {
      id: 3,
      title: 'Zero Trust Security Implementation for Government Agency',
      client: 'Department of Defense',
      industry: 'government',
      service: 'cybersecurity',
      challenge: 'Traditional perimeter-based security was vulnerable to advanced persistent threats and insider attacks.',
      solution: 'Implemented comprehensive zero trust security platform with AI-powered threat detection and automated response.',
      results: [
        'Security incidents reduced by 85%',
        'Threat detection time reduced from hours to seconds',
        'Compliance score improved to 98%',
        'Operational efficiency increased by 30%'
      ],
      metrics: {
        incidents: '85%',
        detection: '99%',
        compliance: '98%',
        efficiency: '30%'
      },
      duration: '12 months',
      teamSize: '15 people',
      featured: false,
      testimonial: {
        quote: 'Zion Tech Group delivered a security solution that exceeded our expectations and transformed our cybersecurity posture.',
        author: 'Colonel Robert Martinez',
        role: 'Chief Information Security Officer',
        company: 'Department of Defense'
      }
    },
    {
      id: 4,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Manufacturing Plus Ltd.',
      industry: 'manufacturing',
      service: 'ai',
      challenge: 'Supply chain inefficiencies were causing 20% cost overruns and frequent production delays.',
      solution: 'Deployed our AI autonomous supply chain optimizer with predictive analytics and real-time monitoring.',
      results: [
        'Supply chain costs reduced by 25%',
        'Production delays decreased by 80%',
        'Inventory optimization improved by 40%',
        'Supplier performance enhanced by 35%'
      ],
      metrics: {
        costReduction: '25%',
        delays: '80%',
        optimization: '40%',
        performance: '35%'
      },
      duration: '9 months',
      teamSize: '10 people',
      featured: false,
      testimonial: {
        quote: 'The AI solution has revolutionized our supply chain operations, delivering measurable results in record time.',
        author: 'Jennifer Williams',
        role: 'Operations Director',
        company: 'Manufacturing Plus Ltd.'
      }
    },
    {
      id: 5,
      title: 'Quantum-Secure Cloud Infrastructure',
      client: 'TechInnovate Solutions',
      industry: 'technology',
      service: 'quantum',
      challenge: 'Traditional encryption methods were vulnerable to future quantum computing attacks.',
      solution: 'Implemented quantum-resistant encryption and quantum-secure cloud infrastructure with post-quantum cryptography.',
      results: [
        'Quantum-resistant security achieved',
        'Performance impact minimized to 5%',
        'Future-proof security architecture',
        'Compliance with quantum security standards'
      ],
      metrics: {
        security: '100%',
        performance: '95%',
        compliance: '100%',
        futureProof: '100%'
      },
      duration: '7 months',
      teamSize: '9 people',
      featured: false,
      testimonial: {
        quote: 'Zion Tech Group helped us future-proof our security infrastructure against quantum threats.',
        author: 'David Kim',
        role: 'Chief Technology Officer',
        company: 'TechInnovate Solutions'
      }
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesSearch && matchesIndustry && matchesService;
  });

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Discover how our cutting-edge AI, quantum computing, and cybersecurity solutions 
              are transforming businesses across industries and delivering measurable results.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies, clients, or industries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-white/70" />
                <span className="text-white/70 text-sm">Filter by:</span>
              </div>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
              >
                {industries.map(industry => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name} ({industry.count})
                  </option>
                ))}
              </select>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
              >
                {services.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name} ({service.count})
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
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
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our most impactful and transformative client success stories.
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                        <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                          {industries.find(ind => ind.id === study.industry)?.name}
                        </span>
                        <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                          {services.find(srv => srv.id === study.service)?.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8 mb-8">
                      <div className="lg:col-span-2">
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">The Challenge</h4>
                          <p className="text-white/70 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Our Solution</h4>
                          <p className="text-white/70 leading-relaxed">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-white/70">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20">
                          <h4 className="text-lg font-semibold text-white mb-4 text-center">Project Metrics</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(study.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">{value}</div>
                                <div className="text-white/70 text-sm capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                          <h4 className="text-lg font-semibold text-white mb-4 text-center">Project Details</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-white/70">Duration:</span>
                              <span className="text-white">{study.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/70">Team Size:</span>
                              <span className="text-white">{study.teamSize}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/70">Client:</span>
                              <span className="text-white">{study.client}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {study.testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <blockquote className="text-white/80 italic mb-3">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <div className="text-white/70">
                            <div className="font-semibold">{study.testimonial.author}</div>
                            <div className="text-sm">{study.testimonial.role}, {study.testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Case Studies */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">More Success Stories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Additional case studies demonstrating our expertise across different industries and technologies.
            </p>
          </motion.div>

          {regularCaseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {regularCaseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                        {industries.find(ind => ind.id === study.industry)?.name}
                      </span>
                      <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                        {services.find(srv => srv.id === study.service)?.name}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h3>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm line-clamp-3">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Solution</h4>
                      <p className="text-white/70 text-sm line-clamp-2">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-white/70 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/60">
                        <div>Client: {study.client}</div>
                        <div>Duration: {study.duration}</div>
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <p className="text-white/70 text-lg">No case studies found matching your criteria.</p>
              <p className="text-white/50 text-sm mt-2">Try adjusting your search or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Join the growing list of companies that have transformed their operations with our cutting-edge technology solutions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Start Your Project
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}