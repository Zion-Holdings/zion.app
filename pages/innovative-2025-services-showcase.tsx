import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, Check, ArrowRight,
  Brain, Atom, Shield, Cpu, Code, Rocket, Users,
  Zap, Lock, Database, Server, Mail, FileText, 
  MessageCircle, Target, Search as SearchIcon, TrendingUp
} from 'lucide-react';
import Link from 'next/link';

// Import our new services
import { innovative2025AIAutonomousServices } from '../data/innovative-2025-ai-autonomous-services';
import { innovative2025ITInfrastructureServices } from '../data/innovative-2025-it-infrastructure-services';
import { innovative2025MicroSaasExpansionV2 } from '../data/innovative-2025-micro-saas-expansion-v2';

const Innovative2025ServicesShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services
  const allServices = [
    ...innovative2025AIAutonomousServices,
    ...innovative2025ITInfrastructureServices,
    ...innovative2025MicroSaasExpansionV2
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI Autonomous', icon: <Brain className="w-5 h-5" />, count: innovative2025AIAutonomousServices.length },
    { id: 'it', name: 'IT Infrastructure', icon: <Server className="w-5 h-5" />, count: innovative2025ITInfrastructureServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Code className="w-5 h-5" />, count: innovative2025MicroSaasExpansionV2.length }
  ];

  const ServiceCard: React.FC<{ service: any; viewMode: 'grid' | 'list' }> = ({ service, viewMode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
        viewMode === 'list' ? 'flex items-center space-x-6' : ''
      }`}
    >
      {viewMode === 'grid' ? (
        <>
          {/* Service Icon */}
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {service.category === 'AI Autonomous' && <Brain className="w-8 h-8 text-white" />}
            {service.category === 'IT Infrastructure' && <Server className="w-8 h-8 text-white" />}
            {service.category === 'Micro SAAS' && <Code className="w-8 h-8 text-white" />}
          </div>

          {/* Service Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              {service.badge && (
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                  {service.badge}
                </span>
              )}
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">{service.tagline}</p>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>{service.category}</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <div className="text-2xl font-bold text-cyan-400 mb-2">
              {service.pricing?.starter || 'Contact for pricing'}
            </div>
            <p className="text-sm text-gray-400">Starting price</p>
          </div>

          {/* Features Preview */}
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex flex-wrap gap-2">
              {service.features.slice(0, 3).map((feature: string, index: number) => (
                <span key={index} className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-lg">
                  {feature}
                </span>
              ))}
              {service.features.length > 3 && (
                <span className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-lg">
                  +{service.features.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Link href={`/services/${service.id}`}>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* Service Icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
            {service.category === 'AI Autonomous' && <Brain className="w-10 h-10 text-white" />}
            {service.category === 'IT Infrastructure' && <Server className="w-10 h-10 text-white" />}
            {service.category === 'Micro SAAS' && <Code className="w-10 h-10 text-white" />}
          </div>

          {/* Service Info */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              {service.badge && (
                <span className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                  {service.badge}
                </span>
              )}
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">{service.description}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>{service.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Market: {service.marketSize}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Growth: {service.growthRate}</span>
              </div>
            </div>
          </div>

          {/* Pricing and CTA */}
          <div className="flex flex-col items-end space-y-4 flex-shrink-0">
            <div className="text-right">
              <div className="text-3xl font-bold text-cyan-400 mb-1">
                {service.pricing?.starter || 'Contact for pricing'}
              </div>
              <p className="text-sm text-gray-400">Starting price</p>
            </div>
            
            <Link href={`/services/${service.id}`}>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </>
      )}
    </motion.div>
  );

  return (
    <>
      <SEO 
        title="Innovative 2025 Services Showcase - Zion Tech Group"
        description="Discover our revolutionary 2025 services including AI Autonomous platforms, Quantum-Ready Infrastructure, and innovative Micro SAAS solutions. Transform your business with cutting-edge technology."
        keywords={["AI Autonomous Services", "Quantum Infrastructure", "Micro SAAS", "2025 Technology", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen py-12 px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovative 2025 Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Experience the future of technology with our revolutionary services that combine AI autonomy, 
              quantum computing, and intelligent automation to transform your business.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-gray-400">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-gray-400">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400">Autonomous Operation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-gray-400">Future Possibilities</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filters and Search */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="px-2 py-1 text-xs bg-gray-700 rounded-full">{category.count}</span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-gray-900/50 border border-gray-700/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length > 0 ? (
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or category filter</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the future of technology with Zion Tech Group. Our innovative 2025 services are designed 
              to propel your business into the next generation of digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+1 302 464 0950" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25">
                Call Now: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Email Us
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Innovative2025ServicesShowcase;
