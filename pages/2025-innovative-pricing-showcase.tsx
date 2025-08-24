import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid, List, Star, Check, X,
  Brain, Atom, Shield, Target, Rocket, Globe, Cpu, Database, Server,
  DollarSign, TrendingUp, Users, Zap, Sparkles, ArrowRight
} from 'lucide-react';

// Import all our innovative ecosystem services
import { innovativeAIAutonomousEcosystem2025 } from '../data/2025-innovative-ai-autonomous-ecosystem';
import { innovativeITInfrastructureEcosystem2025 } from '../data/2025-innovative-it-infrastructure-ecosystem';
import { innovativeMicroSaasEcosystem2025 } from '../data/2025-innovative-micro-saas-ecosystem';
import { innovativeCybersecurityEcosystem2025 } from '../data/2025-innovative-cybersecurity-ecosystem';
import { innovativeEmergingTechEcosystem2025 } from '../data/2025-innovative-emerging-tech-ecosystem';

const InnovativePricingShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovativeAIAutonomousEcosystem2025,
    ...innovativeITInfrastructureEcosystem2025,
    ...innovativeMicroSaasEcosystem2025,
    ...innovativeCybersecurityEcosystem2025,
    ...innovativeEmergingTechEcosystem2025
  ];

  // Filter services based on search, category, and pricing tier
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.some((cat: string) => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.some((cat: string) => cat.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    const matchesPricing = selectedPricingTier === 'all' || 
                           (selectedPricingTier === 'budget' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) < 1000) ||
                           (selectedPricingTier === 'mid-range' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) >= 1000 && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) < 5000) ||
                           (selectedPricingTier === 'enterprise' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) >= 5000);
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const categories = [
    { id: 'all', name: 'All Categories', icon: Sparkles, count: allServices.length },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Security', icon: Shield, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server, count: allServices.filter(s => s.category.includes('Infrastructure') || s.category.includes('Cloud') || s.category.includes('Network')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Target, count: allServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket, count: allServices.filter(s => s.type === 'Emerging Technology Service').length }
  ];

  const pricingTiers = [
    { id: 'all', name: 'All Pricing', icon: DollarSign, count: allServices.length },
    { id: 'budget', name: 'Budget (<$1K)', icon: DollarSign, count: allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) < 1000).length },
    { id: 'mid-range', name: 'Mid-Range ($1K-$5K)', icon: DollarSign, count: allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) >= 1000 && parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) < 5000).length },
    { id: 'enterprise', name: 'Enterprise ($5K+)', icon: DollarSign, count: allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) >= 5000).length }
  ];

  const stats = [
    { number: allServices.length.toString(), label: 'Innovative Services', icon: Star },
    { number: '3', label: 'Pricing Tiers', icon: DollarSign },
    { number: '25+', label: 'Technology Categories', icon: Cpu },
    { number: '$2.5B+', label: 'Total Market Value', icon: TrendingUp }
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

  const getPricingColor = (price: string) => {
    const numPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    if (numPrice < 1000) return 'text-green-400';
    if (numPrice < 5000) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <>
      <SEO 
        title="2025 Innovative Ecosystem Pricing Showcase - Zion Tech Group"
        description="Comprehensive pricing for Zion Tech Group's revolutionary 2025 innovative ecosystem services. Compare pricing tiers for AI consciousness, quantum computing, cybersecurity, and emerging technologies."
        keywords={["2025 innovative services pricing", "AI consciousness pricing", "quantum computing pricing", "cybersecurity pricing", "emerging technologies pricing", "Zion Tech Group"]}
        canonical="https://ziontechgroup.com/2025-innovative-pricing-showcase"
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
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pricing Showcase
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transparent pricing for revolutionary AI consciousness, quantum computing, and emerging technologies
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-cyan-500/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
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
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or category..."
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

            {/* Category and Pricing Filters */}
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <div className="flex flex-wrap gap-3">
                <span className="text-sm text-gray-400 font-medium flex items-center">Categories:</span>
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
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex flex-wrap gap-3">
                <span className="text-sm text-gray-400 font-medium flex items-center">Pricing Tiers:</span>
                {pricingTiers.map((tier) => (
                  <motion.button
                    key={tier.id}
                    onClick={() => setSelectedPricingTier(tier.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                      selectedPricingTier === tier.id
                        ? 'border-green-400 bg-green-400/20 text-green-400'
                        : 'border-gray-600 bg-white/5 text-gray-300 hover:border-green-400/50 hover:bg-green-400/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <tier.icon className="w-4 h-4" />
                    <span>{tier.name}</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{tier.count}</span>
                  </motion.button>
                ))}
              </div>
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
                    className="group relative bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Pricing Tiers */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-cyan-400 mb-3">Pricing Tiers</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Starter:</span>
                          <span className={`font-bold ${getPricingColor(service.pricing.starter)}`}>
                            {service.pricing.starter}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Professional:</span>
                          <span className={`font-bold ${getPricingColor(service.pricing.professional)}`}>
                            {service.pricing.professional}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Enterprise:</span>
                          <span className={`font-bold ${getPricingColor(service.pricing.enterprise)}`}>
                            {service.pricing.enterprise}
                          </span>
                        </div>
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
                      <a
                        href={service.contactInfo.website}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
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
                    className="group bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      {/* Service Info */}
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.category.slice(0, 4).map((cat, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Pricing */}
                      <div className="lg:col-span-1">
                        <h4 className="text-sm font-medium text-cyan-400 mb-3">Pricing</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Starter:</span>
                            <span className={`font-bold ${getPricingColor(service.pricing.starter)}`}>
                              {service.pricing.starter}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Professional:</span>
                            <span className={`font-bold ${getPricingColor(service.pricing.professional)}`}>
                              {service.pricing.professional}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Enterprise:</span>
                            <span className={`font-bold ${getPricingColor(service.pricing.enterprise)}`}>
                              {service.pricing.enterprise}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="lg:col-span-1 text-center">
                        <div className="text-xs text-gray-500 mb-3">
                          {service.type}
                        </div>
                        <a
                          href={service.contactInfo.website}
                          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                        >
                          View Details
                        </a>
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
                <p className="text-gray-500">Try adjusting your search terms, category, or pricing filters</p>
              </motion.div>
            )}
          </motion.div>

          {/* Pricing Summary */}
          <motion.div 
            className="max-w-6xl mx-auto px-4 pb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center text-white mb-8">Pricing Summary</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-green-500/10 border border-green-500/30">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Budget Tier</h4>
                  <p className="text-gray-300 mb-4">Perfect for startups and small businesses</p>
                  <div className="text-2xl font-bold text-green-400 mb-2">Under $1K/month</div>
                  <div className="text-sm text-gray-400">
                    {allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) < 1000).length} services available
                  </div>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">Mid-Range Tier</h4>
                  <p className="text-gray-300 mb-4">Ideal for growing businesses and enterprises</p>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">$1K - $5K/month</div>
                  <div className="text-sm text-gray-400">
                    {allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) >= 1000 && parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) < 5000).length} services available
                  </div>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-red-500/10 border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Enterprise Tier</h4>
                  <p className="text-gray-300 mb-4">For large corporations and government agencies</p>
                  <div className="text-2xl font-bold text-red-400 mb-2">$5K+/month</div>
                  <div className="text-sm text-gray-400">
                    {allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) >= 5000).length} services available
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-300 mb-4">
                  All pricing includes enterprise-grade support, 99.99% uptime guarantee, and 24/7 AI assistance
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-8 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                >
                  Contact Sales for Custom Pricing
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InnovativePricingShowcase2025;