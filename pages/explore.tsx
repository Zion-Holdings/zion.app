import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid, List, ArrowRight, ChevronRight,
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Revolutionary AI consciousness and machine learning solutions',
      color: 'from-purple-500 to-pink-500',
      serviceCount: 25,
      featured: true
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Quantum-powered computing and consciousness simulation',
      color: 'from-blue-500 to-cyan-500',
      serviceCount: 18,
      featured: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Quantum-resistant security and AI threat detection',
      color: 'from-red-500 to-orange-500',
      serviceCount: 22,
      featured: true
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Autonomous DevOps and cloud infrastructure',
      color: 'from-emerald-500 to-teal-500',
      serviceCount: 20,
      featured: false
    },
    {
      id: 'edge',
      name: 'Edge Computing',
      icon: Network,
      description: 'Edge computing orchestration and IoT management',
      color: 'from-yellow-500 to-orange-500',
      serviceCount: 15,
      featured: false
    },
    {
      id: 'space',
      name: 'Space Technology',
      icon: Rocket,
      description: 'Space exploration and resource optimization',
      color: 'from-indigo-500 to-purple-500',
      serviceCount: 12,
      featured: true
    },
    {
      id: 'biotech',
      name: 'Biotechnology',
      icon: ZapIcon,
      description: 'Neural interfaces and biomedical innovations',
      color: 'from-pink-500 to-rose-500',
      serviceCount: 16,
      featured: false
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      icon: Code,
      description: 'AI-powered blockchain governance and DeFi',
      color: 'from-green-500 to-emerald-500',
      serviceCount: 14,
      featured: false
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: Zap,
      description: 'Business process automation and AI agents',
      color: 'from-cyan-500 to-blue-500',
      serviceCount: 19,
      featured: false
    },
    {
      id: 'fintech',
      name: 'Financial Technology',
      icon: TrendingUp,
      description: 'Quantum financial trading and AI analytics',
      color: 'from-emerald-500 to-green-500',
      serviceCount: 17,
      featured: false
    }
  ];

  const featuredServices = [
    {
      id: 'ai-consciousness-evolution',
      title: 'AI Consciousness Evolution',
      category: 'ai',
      description: 'Revolutionary AI consciousness platform with emotional intelligence',
      status: 'beta',
      price: '$1,999/month',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      category: 'quantum',
      description: 'Quantum-powered AI with advanced consciousness capabilities',
      status: 'beta',
      price: '$1,299/month',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum Cybersecurity',
      category: 'cybersecurity',
      description: 'Future-proof security with quantum-resistant encryption',
      status: 'active',
      price: '$799/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'space-technology',
      title: 'Space Technology Innovation',
      category: 'space',
      description: 'AI-powered space exploration and resource optimization',
      status: 'beta',
      price: '$2,499/month',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  // Filter categories based on search
  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedCategory === 'all' || category.id === selectedCategory;
    return matchesSearch && matchesFilter;
  });

  // Sort categories
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.serviceCount - a.serviceCount;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Explore Technology Categories | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive technology categories including AI, quantum computing, cybersecurity, space technology, and more. Discover innovative solutions for your business." />
        <meta property="og:title" content="Explore Technology Categories | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology categories and innovative solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/explore" />
      </Head>

      <SmartHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Explore Technology Categories
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive range of cutting-edge technology solutions across AI, 
              quantum computing, cybersecurity, space technology, and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Exploring
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                View All Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                  />
                </div>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="name">Sort by Name</option>
                  <option value="featured">Sort by Featured</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-white/60">
              Explore our most innovative and cutting-edge technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-4 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                      service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {service.status}
                    </span>
                    <span className="text-xs text-white/40">{service.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <a
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Technology Categories
            </h2>
            <p className="text-white/60">
              {sortedCategories.length} categories available for exploration
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {sortedCategories.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Search className="w-12 h-12 text-white/40" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">No categories found</h3>
                <p className="text-white/60 mb-6">
                  Try adjusting your search terms
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors"
                >
                  Clear Search
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                    onClick={() => window.location.href = `/category/${category.id}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="relative z-10">
                      {/* Featured Badge */}
                      {category.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            ⭐ Featured
                          </span>
                        </div>
                      )}
                      
                      {/* Category Icon */}
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} p-5 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Category Info */}
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {category.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{category.serviceCount}</div>
                          <div className="text-xs text-white/60">Services</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">
                            {category.featured ? '⭐' : '🚀'}
                          </div>
                          <div className="text-xs text-white/60">
                            {category.featured ? 'Featured' : 'Active'}
                          </div>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          Explore Category
                        </span>
                        <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Technology Trends */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Emerging Technology Trends
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay ahead of the curve with our insights into the latest technology developments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI Consciousness',
                description: 'The evolution of AI towards true consciousness and emotional intelligence',
                trend: 'Rising',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Atom,
                title: 'Quantum Supremacy',
                description: 'Breakthroughs in quantum computing and quantum AI applications',
                trend: 'Breakthrough',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Shield,
                title: 'Quantum Security',
                description: 'Quantum-resistant cryptography and AI-powered threat detection',
                trend: 'Critical',
                color: 'from-red-500 to-orange-500'
              },
              {
                icon: Rocket,
                title: 'Space Innovation',
                description: 'AI-powered space exploration and resource optimization',
                trend: 'Emerging',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                icon: ZapIcon,
                title: 'Neural Interfaces',
                description: 'Brain-computer interfaces and neural augmentation',
                trend: 'Experimental',
                color: 'from-pink-500 to-rose-500'
              },
              {
                icon: TrendingUp,
                title: 'Autonomous Systems',
                description: 'Self-improving AI systems and autonomous business operations',
                trend: 'Growing',
                color: 'from-emerald-500 to-green-500'
              }
            ].map((trend, index) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${trend.color} p-4 mb-4 flex items-center justify-center`}>
                  <trend.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{trend.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    trend.trend === 'Rising' ? 'bg-green-500/20 text-green-300' :
                    trend.trend === 'Breakthrough' ? 'bg-blue-500/20 text-blue-300' :
                    trend.trend === 'Critical' ? 'bg-red-500/20 text-red-300' :
                    trend.trend === 'Emerging' ? 'bg-yellow-500/20 text-yellow-300' :
                    trend.trend === 'Experimental' ? 'bg-purple-500/20 text-purple-300' :
                    'bg-cyan-500/20 text-cyan-300'
                  }`}>
                    {trend.trend}
                  </span>
                </div>
                
                <p className="text-white/70 leading-relaxed">{trend.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Explore?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Dive deep into our technology categories and discover the perfect solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Get Expert Guidance
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SmartFooter />
    </div>
  );
}