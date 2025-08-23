import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Rocket, 
  Shield, 
  Cloud, 
  Target,
  Star,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Zap,
  Shopping,
  Clock
} from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'healthcare', name: 'Healthcare', icon: Users },
    { id: 'manufacturing', name: 'Manufacturing', icon: Target },
    { id: 'retail', name: 'Retail & E-commerce', icon: Shopping },
    { id: 'government', name: 'Government', icon: Shield },
    { id: 'energy', name: 'Energy & Utilities', icon: Zap }
  ];

  const technologies = [
    { id: 'all', name: 'All Technologies', icon: Star },
    { id: 'ai-consciousness', name: 'AI Consciousness', icon: Brain },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom },
    { id: 'space-tech', name: 'Space Technology', icon: Rocket },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud },
    { id: 'autonomous', name: 'Autonomous Systems', icon: Zap }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Global Bank Transforms Risk Management with AI Consciousness",
      company: "Fortune 500 Global Bank",
      industry: "finance",
      technology: "ai-consciousness",
      challenge: "Complex risk assessment across 50+ countries with real-time decision making requirements",
      solution: "Implemented AI consciousness platform for autonomous risk analysis and decision making",
      results: [
        "99.7% reduction in risk assessment time",
        "$2.3B in risk mitigation savings",
        "Real-time global risk monitoring across all operations"
      ],
      metrics: {
        timeframe: "6 months",
        investment: "$15M",
        roi: "1,400%",
        efficiency: "99.7% improvement"
      },
      featured: true,
      image: "/api/placeholder/600/400",
      tags: ["AI Consciousness", "Risk Management", "Global Operations", "Real-time Analytics"]
    },
    {
      id: 2,
      title: "Healthcare Network Achieves Breakthrough in Patient Care with Quantum AI",
      company: "Regional Healthcare Network",
      industry: "healthcare",
      technology: "quantum-computing",
      challenge: "Complex patient diagnosis requiring analysis of millions of data points in real-time",
      solution: "Deployed quantum AI platform for advanced medical imaging and diagnosis",
      results: [
        "95% improvement in early disease detection",
        "60% reduction in diagnostic errors",
        "Real-time patient monitoring across 25 facilities"
      ],
      metrics: {
        timeframe: "8 months",
        investment: "$8.5M",
        roi: "800%",
        efficiency: "95% improvement"
      },
      featured: true,
      image: "/api/placeholder/600/400",
      tags: ["Quantum AI", "Healthcare", "Diagnostics", "Patient Care"]
    },
    {
      id: 3,
      title: "Manufacturing Giant Optimizes Supply Chain with Autonomous AI",
      company: "Global Manufacturing Corporation",
      industry: "manufacturing",
      technology: "autonomous",
      challenge: "Complex supply chain optimization across 30+ countries with dynamic demand patterns",
      solution: "Implemented autonomous AI system for real-time supply chain optimization",
      results: [
        "40% reduction in supply chain costs",
        "99.9% on-time delivery rate",
        "Real-time optimization across 500+ suppliers"
      ],
      metrics: {
        timeframe: "12 months",
        investment: "$12M",
        roi: "600%",
        efficiency: "40% improvement"
      },
      featured: true,
      image: "/api/placeholder/600/400",
      tags: ["Autonomous AI", "Supply Chain", "Manufacturing", "Optimization"]
    },
    {
      id: 4,
      title: "Government Agency Secures Critical Infrastructure with Quantum Cybersecurity",
      company: "Federal Cybersecurity Agency",
      industry: "government",
      technology: "cybersecurity",
      challenge: "Protecting critical infrastructure from advanced quantum threats and cyber attacks",
      solution: "Deployed quantum-resistant cybersecurity platform with AI threat detection",
      results: [
        "100% threat detection rate",
        "Zero successful cyber attacks",
        "Real-time monitoring of 10,000+ critical systems"
      ],
      metrics: {
        timeframe: "10 months",
        investment: "$25M",
        roi: "Infinite (prevented attacks)",
        efficiency: "100% improvement"
      },
      featured: false,
      image: "/api/placeholder/400/250",
      tags: ["Quantum Security", "Government", "Critical Infrastructure", "Threat Detection"]
    },
    {
      id: 5,
      title: "Retail Chain Revolutionizes Customer Experience with AI Consciousness",
      company: "International Retail Chain",
      industry: "retail",
      technology: "ai-consciousness",
      challenge: "Personalized customer experience across 1,000+ locations with real-time adaptation",
      solution: "Implemented AI consciousness platform for personalized customer interactions",
      results: [
        "85% increase in customer satisfaction",
        "60% improvement in conversion rates",
        "Real-time personalization across all touchpoints"
      ],
      metrics: {
        timeframe: "9 months",
        investment: "$18M",
        roi: "700%",
        efficiency: "85% improvement"
      },
      featured: false,
      image: "/api/placeholder/400/250",
      tags: ["AI Consciousness", "Retail", "Customer Experience", "Personalization"]
    },
    {
      id: 6,
      title: "Energy Company Optimizes Grid Operations with Space Technology",
      company: "National Energy Corporation",
      industry: "energy",
      technology: "space-tech",
      challenge: "Optimizing energy grid operations across vast geographic areas with renewable integration",
      solution: "Deployed space-based monitoring and AI optimization platform",
      results: [
        "35% improvement in grid efficiency",
        "90% reduction in outage response time",
        "Real-time monitoring of 50,000+ grid components"
      ],
      metrics: {
        timeframe: "14 months",
        investment: "$30M",
        roi: "500%",
        efficiency: "35% improvement"
      },
      featured: false,
      image: "/api/placeholder/400/250",
      tags: ["Space Technology", "Energy", "Grid Optimization", "Renewable Energy"]
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const technologyMatch = selectedTechnology === 'all' || study.technology === selectedTechnology;
    return industryMatch && technologyMatch;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how organizations worldwide are transforming their operations with 
                our revolutionary AI consciousness, quantum computing, and autonomous solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Industry Filter */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <span className="text-gray-300 font-medium whitespace-nowrap">Industry:</span>
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                      selectedIndustry === industry.id
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white border-transparent'
                        : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-400/50'
                    }`}
                  >
                    <industry.icon className="w-4 h-4" />
                    <span>{industry.name}</span>
                  </button>
                ))}
              </div>

              {/* Technology Filter */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <span className="text-gray-300 font-medium whitespace-nowrap">Technology:</span>
                {technologies.map((technology) => (
                  <button
                    key={technology.id}
                    onClick={() => setSelectedTechnology(technology.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                      selectedTechnology === technology.id
                        ? 'bg-gradient-to-r from-purple-400 to-pink-600 text-white border-transparent'
                        : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-purple-400/50'
                    }`}
                  >
                    <technology.icon className="w-4 h-4" />
                    <span>{technology.name}</span>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transformative results achieved by leading organizations across industries.
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl border border-cyan-400/20 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                          {industries.find(i => i.id === study.industry)?.name}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                          {technologies.find(t => t.id === study.technology)?.name}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                        {study.title}
                      </h3>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Company</h4>
                        <p className="text-gray-300">{study.company}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                          <div className="text-2xl font-bold text-cyan-400">{study.metrics.timeframe}</div>
                          <div className="text-sm text-gray-400">Implementation</div>
                        </div>
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-400">${formatNumber(study.metrics.investment)}</div>
                          <div className="text-sm text-gray-400">Investment</div>
                        </div>
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                          <div className="text-2xl font-bold text-green-400">{study.metrics.roi}</div>
                          <div className="text-sm text-gray-400">ROI</div>
                        </div>
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                          <div className="text-2xl font-bold text-yellow-400">{study.metrics.efficiency}</div>
                          <div className="text-sm text-gray-400">Efficiency</div>
                        </div>
                      </div>

                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>

                    {/* Image/Visual */}
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Star className="w-12 h-12 text-white" />
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
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                More Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Additional examples of how our technology is transforming industries worldwide.
              </p>
            </motion.div>

            {regularCaseStudies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularCaseStudies.map((study, index) => (
                  <motion.article
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/case-studies/${study.id}`}>
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                        {/* Image */}
                        <div className="relative h-48 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 group-hover:scale-110 transition-transform duration-500"></div>
                          <div className="absolute top-4 left-4 flex space-x-2">
                            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30">
                              {industries.find(i => i.id === study.industry)?.name}
                            </span>
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30">
                              {technologies.find(t => t.id === study.technology)?.name}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                            {study.title}
                          </h3>

                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-cyan-400 mb-1">Company</h4>
                            <p className="text-gray-300 text-sm">{study.company}</p>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-cyan-400 mb-1">Challenge</h4>
                            <p className="text-gray-300 text-sm line-clamp-2">{study.challenge}</p>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-cyan-400 mb-1">Key Results</h4>
                            <ul className="space-y-1">
                              {study.results.slice(0, 2).map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm line-clamp-1">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quick Metrics */}
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{study.metrics.timeframe}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="w-4 h-4" />
                              <span>{study.metrics.roi} ROI</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No case studies found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your industry or technology filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedIndustry('all');
                    setSelectedTechnology('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-3xl border border-cyan-400/20"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the organizations already transforming their operations with our 
                revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CaseStudiesPage;