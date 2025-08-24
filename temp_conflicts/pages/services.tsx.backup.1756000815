import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Shield, Target, Users, 
  Database, Cloud, Network, Zap, Star, CheckCircle,
  ArrowRight, Search, Filter, Grid, List
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Target className="w-5 h-5" /> },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" /> },
    { id: 'enterprise', name: 'Enterprise IT', icon: <Database className="w-5 h-5" /> },
    { id: 'edge', name: 'Edge Computing', icon: <Network className="w-5 h-5" /> },
    { id: 'biotech', name: 'Biotech & Healthcare', icon: <Users className="w-5 h-5" /> }
  ];

  const services = [
    // AI & Machine Learning
    {
      id: 'ai-consciousness-platform',
      title: 'AI Consciousness Platform',
      description: 'Revolutionary AI platform with advanced consciousness capabilities and autonomous decision-making.',
      category: 'ai-ml',
      price: '$2,999/month',
      features: ['Advanced consciousness simulation', 'Autonomous decision making', 'Emotional intelligence', 'Continuous learning'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'quantum-machine-learning',
      title: 'Quantum Machine Learning',
      description: 'Quantum-powered ML algorithms that process data exponentially faster than classical computers.',
      category: 'quantum',
      price: '$3,499/month',
      features: ['Quantum neural networks', 'Exponential speedup', 'Advanced pattern recognition', 'Quantum optimization'],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'autonomous-ai-agents',
      title: 'Autonomous AI Agents',
      description: 'Intelligent agents that operate independently to solve complex business problems.',
      category: 'ai-ml',
      price: '$1,999/month',
      features: ['Independent operation', 'Problem-solving capabilities', 'Multi-agent coordination', 'Adaptive learning'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'ai-content-factory',
      title: 'AI Content Factory',
      description: 'Automated content creation platform generating high-quality text, images, and multimedia.',
      category: 'ai-ml',
      price: '$899/month',
      features: ['Multi-format content generation', 'SEO optimization', 'Brand voice consistency', 'Scalable production'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-600'
    },
    // Quantum Computing
    {
      id: 'quantum-neural-interface',
      title: 'Quantum Neural Interface',
      description: 'Advanced interface connecting quantum computers with neural networks for unprecedented processing power.',
      category: 'quantum',
      price: '$4,999/month',
      features: ['Quantum-classical hybrid', 'Real-time processing', 'Neural optimization', 'Quantum memory'],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'quantum-financial-trading',
      title: 'Quantum Financial Trading',
      description: 'Quantum algorithms for high-frequency trading and portfolio optimization.',
      category: 'quantum',
      price: '$5,999/month',
      features: ['Quantum portfolio optimization', 'Risk assessment', 'Market prediction', 'High-frequency trading'],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    // Cybersecurity
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum Cybersecurity Suite',
      description: 'Future-proof security solutions using quantum-resistant encryption and AI threat detection.',
      category: 'cybersecurity',
      price: '$2,499/month',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture', '24/7 monitoring'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'ai-threat-intelligence',
      title: 'AI Threat Intelligence',
      description: 'Advanced threat detection and response using artificial intelligence and machine learning.',
      category: 'cybersecurity',
      price: '$1,799/month',
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', 'Threat hunting'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600'
    },
    // Space Technology
    {
      id: 'space-resource-intelligence',
      title: 'Space Resource Intelligence',
      description: 'AI-powered platform for space resource discovery, mapping, and optimization.',
      category: 'space',
      price: '$7,999/month',
      features: ['Resource mapping', 'Mission planning', 'Satellite optimization', 'Data analysis'],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 'quantum-communication',
      title: 'Quantum Communication Network',
      description: 'Secure quantum communication infrastructure for space and terrestrial applications.',
      category: 'space',
      price: '$6,499/month',
      features: ['Quantum key distribution', 'Space-based relays', 'Unhackable communication', 'Global coverage'],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600'
    },
    // Enterprise IT
    {
      id: 'autonomous-devops',
      title: 'Autonomous DevOps Platform',
      description: 'AI-powered DevOps automation that continuously optimizes your development pipeline.',
      category: 'enterprise',
      price: '$1,499/month',
      features: ['Automated deployment', 'Performance optimization', 'Continuous monitoring', 'Self-healing systems'],
      icon: <Database className="w-8 h-8" />,
      color: 'from-teal-500 to-green-600'
    },
    {
      id: 'edge-computing-orchestration',
      title: 'Edge Computing Orchestration',
      description: 'Intelligent orchestration platform for edge computing infrastructure and IoT devices.',
      category: 'edge',
      price: '$1,299/month',
      features: ['Edge node management', 'IoT device coordination', 'Real-time optimization', 'Scalable deployment'],
      icon: <Network className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-600'
    },
    // Biotech & Healthcare
    {
      id: 'ai-biomedical-research',
      title: 'AI Biomedical Research Platform',
      description: 'Advanced AI platform accelerating drug discovery and medical research.',
      category: 'biotech',
      price: '$4,499/month',
      features: ['Drug discovery', 'Protein folding', 'Clinical trial optimization', 'Medical imaging analysis'],
      icon: <Users className="w-8 h-8" />,
      color: 'from-lime-500 to-green-600'
    },
    {
      id: 'quantum-drug-discovery',
      title: 'Quantum Drug Discovery',
      description: 'Quantum computing platform for molecular simulation and drug development.',
      category: 'biotech',
      price: '$5,499/month',
      features: ['Molecular simulation', 'Drug optimization', 'Quantum chemistry', 'High-throughput screening'],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Services — Zion Tech Group | Cutting-Edge Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of AI, quantum computing, cybersecurity, and technology services. Transform your business with our innovative solutions." />
        <meta property="og:title" content="Services — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology services including AI, quantum computing, cybersecurity, and more. Transform your business with cutting-edge solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Revolutionary technology solutions that transform industries and accelerate innovation. 
              From AI consciousness to quantum computing, we deliver the future today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:border-cyan-500/50 hover:text-white'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-gray-700/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 ${
                    viewMode === 'grid' ? 'p-8' : 'p-6'
                  }`}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`/services/${service.id}`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you implement cutting-edge technology solutions 
              that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
