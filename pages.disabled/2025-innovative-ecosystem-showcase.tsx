import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket, Globe, Cpu, Database,
  ArrowRight, Check, Star, Sparkles, Zap, Eye, Users, TrendingUp,
  Lock, Cloud, Network, Server, Code, Palette, BarChart3, X
} from 'lucide-react';

// Import all our innovative ecosystem services
import { innovativeAIAutonomousEcosystem2025 } from '../data/2025-innovative-ai-autonomous-ecosystem';
import { innovativeITInfrastructureEcosystem2025 } from '../data/2025-innovative-it-infrastructure-ecosystem';
import { innovativeMicroSaasEcosystem2025 } from '../data/2025-innovative-micro-saas-ecosystem';
import { innovativeCybersecurityEcosystem2025 } from '../data/2025-innovative-cybersecurity-ecosystem';
import { innovativeEmergingTechEcosystem2025 } from '../data/2025-innovative-emerging-tech-ecosystem';

const InnovativeEcosystemShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);

  // Combine all services
  const allServices = [
    ...innovativeAIAutonomousEcosystem2025,
    ...innovativeITInfrastructureEcosystem2025,
    ...innovativeMicroSaasEcosystem2025,
    ...innovativeCybersecurityEcosystem2025,
    ...innovativeEmergingTechEcosystem2025
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.some((cat: string) => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.some((cat: string) => cat.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-cyan-500 to-blue-500', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Server, color: 'from-emerald-500 to-teal-500', count: allServices.filter(s => s.category.includes('Infrastructure') || s.category.includes('Cloud') || s.category.includes('Network')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Target, color: 'from-yellow-500 to-orange-500', count: allServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket, color: 'from-pink-500 to-purple-500', count: allServices.filter(s => s.type === 'Emerging Technology Service').length }
  ];

  const stats = [
    { number: allServices.length.toString(), label: 'Innovative Services', icon: Star },
    { number: '25+', label: 'Technology Categories', icon: Cpu },
    { number: '99.99%', label: 'Uptime Guarantee', icon: Check },
    { number: '24/7', label: 'AI Support Available', icon: Brain }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <SEO 
        title="2025 Innovative Ecosystem Services Showcase - Zion Tech Group"
        description="Discover Zion Tech Group's revolutionary 2025 innovative ecosystem services including AI consciousness, quantum computing, cybersecurity, and emerging technologies."
        keywords={["2025 innovative services", "AI consciousness", "quantum computing", "cybersecurity", "emerging technologies", "Zion Tech Group"]}
        canonical="https://ziontechgroup.com/2025-innovative-ecosystem-showcase"
      />

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.3),transparent_50%)]"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: 999999,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center py-20 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              2025 Innovative Ecosystem
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolutionary AI consciousness, quantum computing, and emerging technologies that will transform your business in 2025 and beyond
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-cyan-500/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                  <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div 
            className="max-w-6xl mx-auto px-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                      : 'border-gray-600 bg-white/5 text-gray-300 hover:border-cyan-400/50 hover:bg-cyan-400/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="max-w-7xl mx-auto px-4 pb-20"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="group relative bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => setSelectedService(service)}
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-cyan-400 mb-2">Key Features</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                            <Check className="w-3 h-3 text-green-400" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-cyan-400 mb-2">Starting Price</h4>
                      <div className="text-lg font-bold text-white">
                        {service.pricing.starter}
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.category.slice(0, 3).map((cat, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Market Size */}
                    <div className="text-xs text-gray-500 mb-4">
                      Market Size: {service.marketSize}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="text-xs text-gray-500">
                        {service.type}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="group bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {service.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <h4 className="text-sm font-medium text-cyan-400 mb-2">Features</h4>
                            <div className="space-y-1">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                                  <Check className="w-3 h-3 text-green-400" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-cyan-400 mb-2">Pricing</h4>
                            <div className="space-y-1 text-sm text-gray-300">
                              <div>Starter: {service.pricing.starter}</div>
                              <div>Professional: {service.pricing.professional}</div>
                              <div>Enterprise: {service.pricing.enterprise}</div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-cyan-400 mb-2">Market</h4>
                            <div className="text-sm text-gray-300">
                              <div>Size: {service.marketSize}</div>
                              <div>Type: {service.type}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="ml-6">
                        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Search className="w-16 h-16 mx-auto mb-4 text-gray-500" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
                <p className="text-gray-500">Try adjusting your search terms or category filters</p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <p className="text-gray-300 text-lg mb-6">{selectedService.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Features</h3>
                      <div className="space-y-2">
                        {selectedService.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-gray-300">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Benefits</h3>
                      <div className="space-y-2">
                        {selectedService.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-gray-300">
                            <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Pricing</h3>
                      <div className="space-y-2 text-gray-300">
                        <div>Starter: {selectedService.pricing.starter}</div>
                        <div>Professional: {selectedService.pricing.professional}</div>
                        <div>Enterprise: {selectedService.pricing.enterprise}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Use Cases</h3>
                      <div className="space-y-1 text-sm text-gray-300">
                        {selectedService.useCases.map((useCase, idx) => (
                          <div key={idx}>• {useCase}</div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Market Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                      <div>
                        <span className="font-medium">Market Size:</span> {selectedService.marketSize}
                      </div>
                      <div>
                        <span className="font-medium">Competitive Advantage:</span> {selectedService.competitiveAdvantage}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedService.contactInfo.website}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                    >
                      Learn More
                    </a>
                    <a
                      href={`mailto:${selectedService.contactInfo.email}`}
                      className="flex-1 bg-white/10 text-white py-3 px-6 rounded-lg font-medium text-center border border-cyan-500/30 hover:bg-white/20 transition-all duration-200"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default InnovativeEcosystemShowcase2025;