import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Building,
  Brain,
  Atom,
  Rocket,
  Filter,
  Search
} from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Financial Services' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'retail', name: 'Retail & E-commerce' },
    { id: 'technology', name: 'Technology' },
    { id: 'government', name: 'Government' }
  ];

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'space', name: 'Space Technology' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud Infrastructure' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostics Platform",
      company: "MedTech Innovations Inc.",
      industry: "healthcare",
      service: "ai",
      challenge: "Reducing diagnostic errors and improving patient outcomes through intelligent medical imaging analysis.",
      solution: "Developed a comprehensive AI platform that analyzes medical images with 99.7% accuracy, reducing diagnostic time by 80%.",
      results: [
        "99.7% diagnostic accuracy",
        "80% reduction in diagnostic time",
        "30% improvement in patient outcomes",
        "$2.5M annual cost savings"
      ],
      duration: "6 months",
      teamSize: "12 engineers",
      featured: true,
      metrics: {
        accuracy: "99.7%",
        timeReduction: "80%",
        costSavings: "$2.5M",
        roi: "450%"
      }
    },
    {
      id: 2,
      title: "Quantum Financial Trading Algorithm",
      company: "Global Capital Markets",
      industry: "finance",
      service: "quantum",
      challenge: "Optimizing trading strategies in volatile markets using quantum computing for real-time decision making.",
      solution: "Implemented quantum-enhanced algorithms that process market data 1000x faster than classical systems.",
      results: [
        "1000x faster market analysis",
        "25% improvement in trading performance",
        "15% reduction in risk exposure",
        "$15M additional annual revenue"
      ],
      duration: "8 months",
      teamSize: "8 quantum engineers",
      featured: false,
      metrics: {
        speed: "1000x",
        performance: "25%",
        riskReduction: "15%",
        revenue: "$15M"
      }
    },
    {
      id: 3,
      title: "Space Resource Mining Operations",
      company: "Asteroid Mining Corp",
      industry: "technology",
      service: "space",
      challenge: "Establishing autonomous mining operations on asteroids for rare earth elements and precious metals.",
      solution: "Deployed AI-driven autonomous mining robots with quantum navigation systems for precise resource extraction.",
      results: [
        "100% autonomous operations",
        "95% resource extraction efficiency",
        "Zero human risk exposure",
        "$50M annual resource value"
      ],
      duration: "18 months",
      teamSize: "15 space engineers",
      featured: false,
      metrics: {
        autonomy: "100%",
        efficiency: "95%",
        safety: "100%",
        value: "$50M"
      }
    },
    {
      id: 4,
      title: "Zero-Trust Cybersecurity Framework",
      company: "National Defense Systems",
      industry: "government",
      service: "cybersecurity",
      challenge: "Protecting critical infrastructure from advanced persistent threats and cyber attacks.",
      solution: "Implemented a comprehensive zero-trust security architecture with AI-powered threat detection and response.",
      results: [
        "99.99% threat detection rate",
        "Zero successful breaches",
        "60% reduction in security incidents",
        "100% compliance achievement"
      ],
      duration: "12 months",
      teamSize: "20 security experts",
      featured: false,
      metrics: {
        detection: "99.99%",
        breaches: "0",
        incidents: "60%",
        compliance: "100%"
      }
    },
    {
      id: 5,
      title: "AI-Powered Manufacturing Optimization",
      company: "Industrial Dynamics Ltd",
      industry: "manufacturing",
      service: "ai",
      challenge: "Optimizing production efficiency and reducing waste in complex manufacturing processes.",
      solution: "Deployed machine learning algorithms that continuously optimize production parameters in real-time.",
      results: [
        "35% increase in production efficiency",
        "45% reduction in material waste",
        "20% improvement in quality control",
        "$8M annual cost savings"
      ],
      duration: "9 months",
      teamSize: "10 AI engineers",
      featured: false,
      metrics: {
        efficiency: "35%",
        wasteReduction: "45%",
        quality: "20%",
        savings: "$8M"
      }
    },
    {
      id: 6,
      title: "Quantum Cloud Infrastructure",
      company: "CloudTech Solutions",
      industry: "technology",
      service: "quantum",
      challenge: "Building quantum-ready cloud infrastructure for next-generation computing applications.",
      solution: "Developed hybrid classical-quantum cloud platform with seamless integration and quantum security.",
      results: [
        "Quantum-ready infrastructure",
        "50x faster quantum simulations",
        "100% quantum security compliance",
        "$12M annual revenue growth"
      ],
      duration: "15 months",
      teamSize: "18 quantum architects",
      featured: false,
      metrics: {
        readiness: "100%",
        speed: "50x",
        security: "100%",
        growth: "$12M"
      }
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

  const featuredCaseStudy = caseStudies.find(study => study.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
          >
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Real-world transformations and measurable business outcomes from our innovative technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case studies..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Success Story</h2>
              <p className="text-gray-300">Our most impactful transformation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-sm rounded-full border border-yellow-600/30">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                      {featuredCaseStudy.industry.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredCaseStudy.title}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4">{featuredCaseStudy.company}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                    <p className="text-gray-300 leading-relaxed">{featuredCaseStudy.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                    <p className="text-gray-300 leading-relaxed">{featuredCaseStudy.solution}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{featuredCaseStudy.metrics.accuracy}</div>
                      <div className="text-sm text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{featuredCaseStudy.metrics.timeReduction}</div>
                      <div className="text-sm text-gray-400">Time Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{featuredCaseStudy.metrics.costSavings}</div>
                      <div className="text-sm text-gray-400">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{featuredCaseStudy.metrics.roi}</div>
                      <div className="text-sm text-gray-400">ROI</div>
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${featuredCaseStudy.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🏆</div>
                    <p className="text-gray-300">Featured Success</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">All Success Stories</h2>
            <p className="text-xl text-gray-300">
              Discover how we've transformed businesses across industries
            </p>
          </motion.div>

          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                        {study.industry.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full border border-purple-600/30">
                        {study.service.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-4">{study.company}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {study.solution}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {Object.entries(study.metrics).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {study.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {study.teamSize}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <span
                            key={resultIndex}
                            className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No case studies found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('all');
                  setSelectedService('all');
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudiesPage;