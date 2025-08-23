import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cloud, Target, Star, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle,
  Lock, Network, FileText, GraduationCap, DollarSign, Satellite, Cpu,
  Atom, Globe, Database, Truck, Building, MessageCircle, Home,
  Search, Filter, Grid, List, ArrowRight, Play, TrendingUp
} from 'lucide-react';
import Layout from '../components/layout/UltraFuturisticLayout2046';

// Import all our new 2026 services
import { advancedInnovativeMicroSaasServices2026 } from '../data/2026-advanced-innovative-micro-saas-services';
import { cuttingEdgeITInfrastructureServices2026 } from '../data/2026-cutting-edge-it-infrastructure-services';
import { emergingTechnologySpaceServices2026 } from '../data/2026-emerging-technology-space-services';

const AdvancedServicesShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Combine all 2026 services
  const allServices2026 = [
    ...advancedInnovativeMicroSaasServices2026,
    ...cuttingEdgeITInfrastructureServices2026,
    ...emergingTechnologySpaceServices2026
  ];

  // Filter services by category and search
  const filteredServices = allServices2026.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (service as any).type?.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500', count: allServices2026.length },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-cyan-500 to-blue-500', count: allServices2026.filter(s => s.category.includes('AI') || s.category.includes('Consciousness')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', count: allServices2026.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', count: allServices2026.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allServices2026.filter(s => (s as any).type === 'Micro SAAS' || s.category.includes('Business')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allServices2026.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'space', name: 'Space Technology', icon: Satellite, color: 'from-indigo-500 to-purple-500', count: allServices2026.filter(s => s.category.includes('Space') || (s as any).type === 'Space Technology').length },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket, color: 'from-pink-500 to-rose-500', count: allServices2026.filter(s => (s as any).type === 'Emerging Technology').length }
  ];

  const stats = [
    { number: `${allServices2026.length}+`, label: "Advanced Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "300+", label: "Countries Served", icon: Globe }
  ];

  return (
    <Layout
      title="2026 Advanced Services Showcase - Zion Tech Group"
      description="Explore our comprehensive collection of revolutionary 2026 technology services including AI, quantum computing, space technology, and emerging innovations."
      keywords="2026 technology services, AI services, quantum computing, space technology, emerging technology, Zion Tech Group"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow text-cyan-400">
              2026 Advanced Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary technology solutions that define the future. From AI consciousness to quantum space technology, 
              discover the next generation of innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 neon-glow mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
                  selectedCategory === category.id
                    ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                    : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Revolutionary Services Found
            </h2>
            <p className="text-gray-400">
              Discover the future of technology with our cutting-edge 2026 solutions
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="futuristic-card p-6 group"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-cyan-400 font-medium">
                        {service.type || 'Service'}
                      </div>
                      <div className="text-xs text-gray-400">
                        {service.category}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span>Starting at {service.pricing.starter}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Globe className="w-4 h-4" />
                      <span>{service.marketSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="futuristic-btn text-sm">
                      Learn More
                    </button>
                    <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="futuristic-card p-6 group"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 mb-2">
                            {service.type} • {service.category}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">
                            {service.pricing.starter}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.marketSize}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <button className="futuristic-btn">
                          Explore Service
                        </button>
                        <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already leveraging our revolutionary 2026 technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="futuristic-btn text-lg px-8 py-4">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AdvancedServicesShowcase2026;