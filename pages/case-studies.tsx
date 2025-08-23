import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Award, 
  TrendingUp, 
  Users, 
  Building, 
  Globe, 
  Search, 
  Filter,
  ArrowRight,
  Clock,
  Star,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Zap,
  CheckCircle,
  BarChart3,
  Target,
  Lightbulb
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building, count: 25 },
    { id: 'healthcare', name: 'Healthcare', icon: Users, count: 8 },
    { id: 'finance', name: 'Financial Services', icon: BarChart3, count: 6 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Target, count: 5 },
    { id: 'technology', name: 'Technology', icon: Brain, count: 6 }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Star, count: 25 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 12 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 6 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 4 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostics Platform",
      client: "Global Health Systems Inc.",
      industry: 'healthcare',
      service: 'ai',
      challenge: "Traditional diagnostic processes were time-consuming and error-prone, leading to delayed treatments and increased healthcare costs.",
      solution: "Implemented Zion's AI consciousness evolution platform with advanced medical imaging analysis capabilities.",
      results: [
        "95% reduction in diagnostic time",
        "99.2% accuracy rate in disease detection",
        "40% reduction in healthcare costs",
        "Improved patient outcomes by 60%"
      ],
      metrics: {
        implementationTime: "6 months",
        teamSize: "15 developers",
        roi: "340%",
        userAdoption: "98%"
      },
      featured: true,
      image: "/images/case-studies/healthcare-diagnostics.jpg",
      tags: ['AI', 'Healthcare', 'Diagnostics', 'Machine Learning'],
      url: '/case-studies/healthcare-diagnostics-platform'
    },
    {
      id: 2,
      title: "Quantum Financial Trading System",
      client: "Quantum Capital Markets",
      industry: 'finance',
      service: 'quantum',
      challenge: "Traditional trading algorithms couldn't process market data fast enough to capitalize on microsecond opportunities.",
      solution: "Deployed Zion's quantum computing platform with advanced financial modeling algorithms.",
      results: [
        "1000x faster market analysis",
        "45% increase in trading profits",
        "99.99% system uptime",
        "Real-time risk assessment"
      ],
      metrics: {
        implementationTime: "8 months",
        teamSize: "20 developers",
        roi: "280%",
        userAdoption: "100%"
      },
      featured: true,
      image: "/images/case-studies/quantum-trading.jpg",
      tags: ['Quantum Computing', 'Finance', 'Trading', 'High-Frequency'],
      url: '/case-studies/quantum-financial-trading'
    },
    {
      id: 3,
      title: "Space Resource Intelligence for Mining Operations",
      client: "Interplanetary Resources Corp",
      industry: 'manufacturing',
      service: 'space',
      challenge: "Manual resource assessment in space was inefficient and dangerous, limiting exploration capabilities.",
      solution: "Integrated Zion's space resource intelligence platform with autonomous drones and AI analysis.",
      results: [
        "90% faster resource mapping",
        "75% reduction in exploration costs",
        "Enhanced safety for astronauts",
        "Real-time resource data"
      ],
      metrics: {
        implementationTime: "12 months",
        teamSize: "25 developers",
        roi: "420%",
        userAdoption: "95%"
      },
      featured: false,
      image: "/images/case-studies/space-mining.jpg",
      tags: ['Space Technology', 'Mining', 'AI', 'Autonomous Systems'],
      url: '/case-studies/space-resource-intelligence'
    },
    {
      id: 4,
      title: "Zero-Trust Cybersecurity Framework",
      client: "Fortress Bank International",
      industry: 'finance',
      service: 'security',
      challenge: "Increasing cyber threats and regulatory requirements demanded a more robust security architecture.",
      solution: "Implemented Zion's quantum-resistant cybersecurity platform with advanced threat detection.",
      results: [
        "99.99% threat detection rate",
        "Zero security breaches in 18 months",
        "60% reduction in security incidents",
        "Full regulatory compliance"
      ],
      metrics: {
        implementationTime: "4 months",
        teamSize: "12 developers",
        roi: "180%",
        userAdoption: "100%"
      },
      featured: false,
      image: "/images/case-studies/cybersecurity.jpg",
      tags: ['Cybersecurity', 'Zero Trust', 'Quantum Security', 'Compliance'],
      url: '/case-studies/zero-trust-cybersecurity'
    },
    {
      id: 5,
      title: "AI Autonomous Manufacturing Optimization",
      client: "Smart Factory Solutions",
      industry: 'manufacturing',
      service: 'ai',
      challenge: "Production inefficiencies and quality control issues were costing millions annually.",
      solution: "Deployed Zion's AI autonomous research platform for predictive maintenance and quality control.",
      results: [
        "85% reduction in production downtime",
        "95% improvement in product quality",
        "30% increase in production efficiency",
        "Predictive maintenance alerts"
      ],
      metrics: {
        implementationTime: "7 months",
        teamSize: "18 developers",
        roi: "250%",
        userAdoption: "92%"
      },
      featured: false,
      image: "/images/case-studies/manufacturing-ai.jpg",
      tags: ['AI', 'Manufacturing', 'Predictive Maintenance', 'Quality Control'],
      url: '/case-studies/ai-manufacturing-optimization'
    },
    {
      id: 6,
      title: "Edge Computing Orchestration Platform",
      client: "CloudTech Enterprises",
      industry: 'technology',
      service: 'ai',
      challenge: "Distributed computing infrastructure was difficult to manage and optimize across multiple locations.",
      solution: "Implemented Zion's edge computing orchestration platform with autonomous management capabilities.",
      results: [
        "99.99% system uptime achieved",
        "50% reduction in infrastructure costs",
        "Real-time performance optimization",
        "Automated scaling and management"
      ],
      metrics: {
        implementationTime: "5 months",
        teamSize: "16 developers",
        roi: "200%",
        userAdoption: "96%"
      },
      featured: false,
      image: "/images/case-studies/edge-computing.jpg",
      tags: ['Edge Computing', 'Infrastructure', 'Automation', 'Performance'],
      url: '/case-studies/edge-computing-orchestration'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesSearch && matchesIndustry && matchesService;
  });

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'healthcare': return Users;
      case 'finance': return BarChart3;
      case 'manufacturing': return Target;
      case 'technology': return Brain;
      default: return Building;
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'ai': return Brain;
      case 'quantum': return Atom;
      case 'space': return Rocket;
      case 'security': return Shield;
      default: return Star;
    }
  };

  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case 'healthcare': return 'from-green-500 to-emerald-500';
      case 'finance': return 'from-blue-500 to-indigo-500';
      case 'manufacturing': return 'from-orange-500 to-red-500';
      case 'technology': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'ai': return 'from-purple-500 to-pink-500';
      case 'quantum': return 'from-blue-500 to-cyan-500';
      case 'space': return 'from-indigo-500 to-purple-500';
      case 'security': return 'from-red-500 to-orange-500';
      default: return 'from-yellow-500 to-orange-500';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Discover how organizations across industries are transforming their operations 
                with Zion Tech Group's cutting-edge technology solutions.
              </p>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg"
                >
                  <Award className="w-6 h-6" />
                  Proven Results
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies, clients, or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              
              {/* Industry Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <industry.icon className="w-4 h-4" />
                    {industry.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {industry.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Service Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                      selectedService === service.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <service.icon className="w-4 h-4" />
                    {service.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {service.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <section className="py-12 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Featured Success Stories
                </h2>
                <p className="text-xl text-gray-400">
                  Outstanding results and breakthrough implementations
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredCaseStudies.map((study, index) => (
                  <motion.article
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"
                  >
                    <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${getIndustryColor(study.industry)} rounded-full flex items-center justify-center`}>
                        {React.createElement(getIndustryIcon(study.industry), { className: "w-10 h-10 text-white" })}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getIndustryColor(study.industry)} text-white`}>
                          {industries.find(i => i.id === study.industry)?.name}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getServiceColor(study.service)} text-white`}>
                          {services.find(s => s.id === study.service)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {study.title}
                      </h3>
                      
                      <p className="text-cyan-400 font-semibold mb-3">{study.client}</p>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {study.challenge}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {study.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={study.url}
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:gap-3"
                        >
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Case Studies */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Success Stories
              </h2>
              <p className="text-xl text-gray-400">
                Comprehensive case studies and implementation results
              </p>
            </motion.div>

            <div className="space-y-6">
              {regularCaseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Basic Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getIndustryColor(study.industry)} text-white`}>
                          {industries.find(i => i.id === study.industry)?.name}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getServiceColor(study.service)} text-white`}>
                          {services.find(s => s.id === study.service)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {study.title}
                      </h3>
                      
                      <p className="text-cyan-400 font-semibold mb-3">{study.client}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Middle Column - Challenge & Solution */}
                    <div className="lg:col-span-1">
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-red-400" />
                          Challenge
                        </h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-yellow-400" />
                          Solution
                        </h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>
                    
                    {/* Right Column - Results & Metrics */}
                    <div className="lg:col-span-1">
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          Key Results
                        </h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 3).map((result, resultIndex) => (
                            <li key={resultIndex} className="text-gray-300 text-sm flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-blue-400" />
                          Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-400">ROI:</span>
                            <span className="text-green-400 ml-1">{study.metrics.roi}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Time:</span>
                            <span className="text-cyan-400 ml-1">{study.metrics.implementationTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <a
                        href={study.url}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:gap-3"
                      >
                        View Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-400/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the organizations that have transformed their operations with Zion Tech Group's 
                cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Services
                  <Star className="w-5 h-5" />
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