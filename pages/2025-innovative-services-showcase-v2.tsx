import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  DollarSign, BarChart3, Palette, Cloud, Network, ShoppingCart, Settings, Building, Monitor,
  Layers, Globe2, Lock, Code, Server, Phone, Search, Filter, Grid, List, Eye as EyeIcon, X
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2025AIAutonomousEcosystemV2 } from '../data/2025-innovative-ai-autonomous-ecosystem-v2';
import { emergingTechBreakthroughs2025V4 } from '../data/2025-emerging-tech-breakthroughs-v4';
import { innovative2025ITInfrastructureV2 } from '../data/2025-innovative-it-infrastructure-v2';

const InnovativeServicesShowcase2025V2: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);

  // Combine all innovative services
  const allInnovativeServices = [
    ...innovative2025AIAutonomousEcosystemV2,
    ...emergingTechBreakthroughs2025V4,
    ...innovative2025ITInfrastructureV2
  ];

  // Filter services by category and search
  const getFilteredServices = () => {
    let filtered = allInnovativeServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        service.type.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allInnovativeServices.length },
    { id: 'ai', name: 'AI & Autonomous', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: innovative2025AIAutonomousEcosystemV2.length },
    { id: 'quantum', name: 'Quantum & Emerging', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: emergingTechBreakthroughs2025V4.length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-emerald-500 to-teal-500', count: innovative2025ITInfrastructureV2.length }
  ];

  const stats = [
    { number: `${allInnovativeServices.length}+`, label: "Innovative Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Intelligence Available", icon: Brain },
    { number: "300+", label: "Countries Served", icon: Globe }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2025 Innovative Services
              </span>
              <br />
              <span className="text-white">Showcase V2</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our revolutionary micro SAAS services, IT solutions, and AI platforms that are shaping the future of technology
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <category.icon className="w-4 h-4" />
                      {category.name}
                      <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
            }
          >
            {getFilteredServices().map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className={`group relative ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105'
                    : 'bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300'
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  {/* Pricing */}
                  <div className="bg-gray-800/30 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Pricing Plans</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-gray-300">
                        <span className="font-medium">Starter:</span> {service.pricing.starter}
                      </div>
                      <div className="text-gray-300">
                        <span className="font-medium">Pro:</span> {service.pricing.professional}
                      </div>
                      <div className="text-gray-300">
                        <span className="font-medium">Enterprise:</span> {service.pricing.enterprise}
                      </div>
                    </div>
                  </div>

                  {/* Market Size */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Market Size:</span>
                    <span className="text-cyan-400 font-semibold">{service.marketSize}</span>
                  </div>

                  {/* Category */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-blue-400 font-medium">{service.category}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                  >
                    <EyeIcon className="w-4 h-4 inline mr-2" />
                    View Details
                  </button>
                  <Link
                    href={service.slug}
                    className="px-4 py-2 border border-cyan-500/50 text-cyan-400 rounded-xl font-medium hover:bg-cyan-500/10 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>

                {/* Hover Effect */}
                {hoveredService === service.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {getFilteredServices().length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                    <p className="text-xl text-cyan-400 mb-4">{selectedService.tagline}</p>
                    <p className="text-gray-300 leading-relaxed">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Use Cases</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedService.useCases.map((useCase: string, index: number) => (
                      <div key={index} className="bg-gray-800/50 rounded-lg px-3 py-2 text-center text-sm text-gray-300">
                        {useCase}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-cyan-400 font-medium">Email:</span>
                      <div className="text-gray-300">{selectedService.contact}</div>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-medium">Phone:</span>
                      <div className="text-gray-300">{selectedService.mobile}</div>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-medium">Website:</span>
                      <div className="text-gray-300">{selectedService.website}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of organizations already leveraging our innovative AI, quantum, and IT infrastructure solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025V2;