import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Cpu, Shield, Building, Zap, Star,
  ArrowRight, Search,
  DollarSign, TrendingUp, Users, Globe
} from 'lucide-react';
import Link from 'next/link';

// Import all service data
import { innovativeMicroSaasExpansionV42026 } from '../data/2026-innovative-micro-saas-expansion-v4';
import { emergingTechBreakthroughs2026 } from '../data/2026-emerging-tech-breakthroughs';
import { itInfrastructureInnovations2026 } from '../data/2026-it-infrastructure-innovations';
import { healthcareBiotechInnovations2026 } from '../data/2026-healthcare-biotech-innovations';
import { innovativeAIAutonomousServicesExpansion2025 } from '../data/2025-innovative-ai-autonomous-services-expansion';
import { innovativeITInfrastructureExpansion2025 } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { newRealServices } from '../data/new-real-services';
import { realOperationalServices } from '../data/real-operational-services';
import { marketReadyServices } from '../data/market-ready-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { industryRealServices } from '../data/industry-real-services';

// Import components
import UltraFuturisticNeonBackground from '../components/ui/UltraFuturisticNeonBackground';
import UltraFuturisticNavigation2026 from '../components/layout/UltraFuturisticNavigation2026';
import UltraFuturisticFooter2026 from '../components/layout/UltraFuturisticFooter2026';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasExpansionV42026,
    ...emergingTechBreakthroughs2026,
    ...itInfrastructureInnovations2026,
    ...healthcareBiotechInnovations2026,
    ...innovativeAIAutonomousServicesExpansion2025,
    ...innovativeITInfrastructureExpansion2025,
    ...innovativeMicroSaasExpansionV32025,
    ...realMicroSaasServices,
    ...innovativeAIServices,
    ...enterpriseITServices,
    ...emergingTechServices,
    ...newRealServices,
    ...realOperationalServices,
    ...marketReadyServices,
    ...marketValidatedServices,
    ...industryRealServices
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (('type' in service) && service.type.toLowerCase().includes(selectedCategory.toLowerCase()));
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price': {
          const aPrice = ('pricing' in a) ? parseFloat(a.pricing.starter.replace(/[^0-9.]/g, '')) : 0;
          const bPrice = ('pricing' in b) ? parseFloat(b.pricing.starter.replace(/[^0-9.]/g, '')) : 0;
          return aPrice - bPrice;
        }
        case 'market': {
          const aMarket = ('marketSize' in a) ? parseFloat(a.marketSize.replace(/[^0-9.]/g, '')) : 0;
          const bMarket = ('marketSize' in b) ? parseFloat(b.marketSize.replace(/[^0-9.]/g, '')) : 0;
          return aMarket - bMarket;
        }
        case 'growth': {
          const aGrowth = ('growthRate' in a) ? parseFloat(a.growthRate.replace(/[^0-9.]/g, '')) : 0;
          const bGrowth = ('growthRate' in b) ? parseFloat(b.growthRate.replace(/[^0-9.]/g, '')) : 0;
          return aGrowth - bGrowth;
        }
        default:
          return 0;
      }
    });

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500', count: allServices.length },
    { id: 'ai', name: 'AI & Autonomous', icon: Brain, color: 'from-cyan-500 to-blue-500', count: allServices.filter(s => ('type' in s && s.type.includes('AI')) || s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', count: allServices.filter(s => ('type' in s && s.type.includes('Quantum')) || s.category.includes('Quantum')).length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, color: 'from-green-500 to-teal-500', count: allServices.filter(s => ('type' in s && s.type.includes('Infrastructure')) || s.category.includes('Infrastructure')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, color: 'from-orange-500 to-red-500', count: allServices.filter(s => ('type' in s && s.type.includes('SAAS')) || s.category.includes('SAAS')).length },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: Shield, color: 'from-emerald-500 to-green-500', count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: Zap, color: 'from-yellow-500 to-orange-500', count: allServices.filter(s => s.category.includes('Emerging') || s.category.includes('Blockchain') || s.category.includes('Metaverse')).length }
  ];

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Autonomous')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Infrastructure') || category.includes('IT')) return Cpu;
    if (category.includes('SAAS') || category.includes('Platform')) return Building;
    if (category.includes('Healthcare') || category.includes('Biotech')) return Shield;
    if (category.includes('Emerging') || category.includes('Blockchain') || category.includes('Metaverse')) return Zap;
    return Star;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI') || category.includes('Autonomous')) return 'from-cyan-500 to-blue-500';
    if (category.includes('Quantum')) return 'from-blue-500 to-indigo-500';
    if (category.includes('Infrastructure') || category.includes('IT')) return 'from-green-500 to-teal-500';
    if (category.includes('SAAS') || category.includes('Platform')) return 'from-orange-500 to-red-500';
    if (category.includes('Healthcare') || category.includes('Biotech')) return 'from-emerald-500 to-green-500';
    if (category.includes('Emerging') || category.includes('Blockchain') || category.includes('Metaverse')) return 'from-yellow-500 to-orange-500';
    return 'from-purple-500 to-pink-500';
  };

  return (
    <UltraFuturisticNeonBackground>
      <SEO 
        title="2026 Comprehensive Services Showcase - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI, quantum, IT infrastructure, and emerging technology solutions. Leading innovation since 2025."
        keywords={[
          'AI autonomous systems',
          'quantum computing',
          'IT infrastructure',
          'micro SAAS',
          'healthcare technology',
          'emerging technology',
          'Zion Tech Group'
        ]}
      />

      <UltraFuturisticNavigation2026 />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="relative pt-32 pb-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2026 Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary portfolio of {allServices.length}+ cutting-edge AI, quantum, and emerging technology solutions that are transforming industries worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold cursor-pointer transition-all duration-300`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="flex items-center gap-2">
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-4 mb-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="market">Sort by Market Size</option>
                <option value="growth">Sort by Growth Rate</option>
              </select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(service.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Header */}
              <div className="relative z-10 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {React.createElement(getCategoryIcon(service.category), { className: 'w-5 h-5 text-white' })}
                  </div>
                  <span className="text-sm text-gray-400">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="relative z-10 mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing */}
              <div className="relative z-10 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-green-400">
                    Starting at {('pricing' in service) ? service.pricing.starter : 'Contact Us'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>Market: {('marketSize' in service) ? service.marketSize : 'N/A'}</span>
                  <span>Growth: {('growthRate' in service) ? service.growthRate : 'N/A'}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="relative z-10 mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits</h4>
                <div className="space-y-1">
                  {('benefits' in service) ? service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      {benefit}
                    </div>
                  )) : (
                    <div className="text-xs text-gray-500">Benefits information available upon request</div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10">
                <Link 
                  href={('website' in service) ? service.website : `/services/${service.id}`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Contact Info */}
              <div className="relative z-10 mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Contact: {('contact' in service && 'email' in service.contact) ? service.contact.email : 'kleber@ziontechgroup.com'}</span>
                  <span>{('contact' in service && 'phone' in service.contact) ? service.contact.phone : '+1 302 464 0950'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or category selection.</p>
          </div>
        )}
      </motion.section>

      {/* Statistics Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
              <div className="text-gray-300">Total Services</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-2xl"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">$500B+</div>
              <div className="text-gray-300">Total Market Size</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-green-500/10 to-teal-600/10 border border-green-500/20 rounded-2xl"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">60%+</div>
              <div className="text-gray-300">Average Growth Rate</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-2xl"
            >
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10 border border-cyan-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations already leveraging our cutting-edge technology solutions to gain competitive advantages and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Get Started Today</span>
              </Link>
              <Link 
                href="/services"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Globe className="w-5 h-5" />
                <span>Explore All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <UltraFuturisticFooter2026 />
    </UltraFuturisticNeonBackground>
  );
};

export default ComprehensiveServicesShowcase2026;