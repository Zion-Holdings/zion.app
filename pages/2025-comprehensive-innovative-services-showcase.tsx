import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Lock, Workflow, Headphones,
  TrendingUp, Coins, TestTube, Activity, Eye, Leaf, Zap, RotateCcw,
  Star, Users, Clock, DollarSign, Award, Globe, Zap as Lightning,
  Phone, Mail, MapPin, Key
} from 'lucide-react';

// Import all our new 2025 advanced services
import { advancedEdgeComputingServices } from '../data/2025-advanced-edge-computing-services';
import { advancedCybersecurityAutomationServices } from '../data/2025-advanced-cybersecurity-automation';
import { advancedAIAutonomousSystemServices } from '../data/2025-advanced-ai-autonomous-systems';
import { advancedFintechBlockchainAutomationServices } from '../data/2025-advanced-fintech-blockchain-automation';
import { advancedHealthcareBiotechServices } from '../data/2025-advanced-healthcare-biotech-services';
import { advancedSustainabilityGreenTechServices } from '../data/2025-advanced-sustainability-green-tech';

// Import existing services for comprehensive coverage
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';

const ComprehensiveInnovativeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating'>('popularity');

  // Combine all services
  const allServices = [
    ...advancedEdgeComputingServices,
    ...advancedCybersecurityAutomationServices,
    ...advancedAIAutonomousSystemServices,
    ...advancedFintechBlockchainAutomationServices,
    ...advancedHealthcareBiotechServices,
    ...advancedSustainabilityGreenTechServices,
    ...advancedAIMLServices,
    ...realEnterpriseMicroSaas2025
  ];

  // Get unique categories
  const categories = ['All', ...new Set(allServices.map(service => service.category))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return ((b as any).customers || 0) - ((a as any).customers || 0);
        case 'price':
          return ((a as any).price?.monthly || 0) - ((b as any).price?.monthly || 0);
        case 'rating':
          return ((b as any).rating || 0) - ((a as any).rating || 0);
        default:
          return 0;
      }
    });

  const getServiceIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'cpu': <Cpu className="w-6 h-6" />,
      'database': <Database className="w-6 h-6" />,
      'shield': <Shield className="w-6 h-6" />,
      'workflow': <Workflow className="w-6 h-6" />,
      'headphones': <Headphones className="w-6 h-6" />,
      'brain': <Brain className="w-6 h-6" />,
      'trending-up': <TrendingUp className="w-6 h-6" />,
      'coins': <Coins className="w-6 h-6" />,
      'flask': <TestTube className="w-6 h-6" />,
      'dna': <Activity className="w-6 h-6" />,
      'scan': <Eye className="w-6 h-6" />,
      'leaf': <Leaf className="w-6 h-6" />,
      'zap': <Zap className="w-6 h-6" />,
      'recycle': <RotateCcw className="w-6 h-6" />,
      'shield-check': <Shield className="w-6 h-6" />,
      'lock': <Lock className="w-6 h-6" />,
      'key': <Key className="w-6 h-6" />
    };
    return iconMap[iconName] || <Rocket className="w-6 h-6" />;
  };

  const getServiceColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'blue': 'bg-blue-500',
      'green': 'bg-green-500',
      'red': 'bg-red-500',
      'purple': 'bg-purple-500',
      'yellow': 'bg-yellow-500',
      'indigo': 'bg-indigo-500',
      'teal': 'bg-teal-500'
    };
    return colorMap[color] || 'bg-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Innovative Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge micro SAAS services, IT solutions, and AI innovations. From edge computing to healthcare biotech, we deliver real, market-ready solutions."
        keywords={[
          'micro SAAS', 'IT services', 'AI services', 'edge computing', 'cybersecurity', 
          'fintech', 'healthcare', 'sustainability', 'blockchain', 'automation'
        ]}
        image="https://ziontechgroup.com/og-innovative-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2025 Comprehensive
              </span>
              <br />
              <span className="text-white">Innovative Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our portfolio of cutting-edge micro SAAS services, IT solutions, and AI innovations. 
              Real, market-ready solutions that drive business transformation and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>100+ Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Market Validated</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="popularity" className="bg-gray-800 text-white">Most Popular</option>
                <option value="price" className="bg-gray-800 text-white">Price: Low to High</option>
                <option value="rating" className="bg-gray-800 text-white">Highest Rated</option>
              </select>

              {/* View Mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'
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
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Innovative Services Found
            </h2>
            <p className="text-gray-400">
              Discover cutting-edge solutions across {categories.length - 1} technology categories
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${getServiceColor((service as any).color || 'blue')}`}>
                      {getServiceIcon((service as any).icon || 'rocket')}
                    </div>
                    {(service as any).popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-400">
                      ${(service as any).price?.monthly?.toLocaleString() || (service as any).pricing?.starter || 'Custom'}
                    </div>
                    <div className="text-sm text-gray-400">
                      {(service as any).price?.yearly && `$${(service as any).price.yearly.toLocaleString()}/year`}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features?.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <Check className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center text-sm">
                    <div>
                      <div className="text-white font-semibold">{(service as any).customers || 0}</div>
                      <div className="text-gray-400">Customers</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{(service as any).rating || 0}</div>
                      <div className="text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{(service as any).reviews || 0}</div>
                      <div className="text-gray-400">Reviews</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={(service as any).link || '#'}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                                         {/* Service Icon and Basic Info */}
                     <div className="flex items-center gap-4">
                       <div className={`p-3 rounded-xl ${getServiceColor((service as any).color || 'blue')}`}>
                         {getServiceIcon((service as any).icon || 'rocket')}
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-white">{service.name}</h3>
                         <p className="text-gray-300 text-sm">{service.tagline}</p>
                         <div className="flex items-center gap-2 mt-2">
                           <span className="text-sm text-gray-400">{service.category}</span>
                           {(service as any).popular && (
                             <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                               POPULAR
                             </span>
                           )}
                         </div>
                       </div>
                     </div>

                    {/* Features */}
                    <div className="lg:col-span-2">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features?.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-3 h-3 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400 mb-2">
                        ${(service as any).price?.monthly?.toLocaleString() || (service as any).pricing?.starter || 'Custom'}
                      </div>
                      <a
                        href={(service as any).link || '#'}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Market Validated</h3>
                <p className="text-gray-300">
                  All our services are real, tested, and validated in the market with proven ROI and customer success stories.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-gray-300">
                  24/7 technical support with dedicated specialists and comprehensive training programs for your team.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300">
                  Cutting-edge technology solutions that keep you ahead of the competition with continuous innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative services can drive your digital transformation and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Visit us at: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveInnovativeServicesShowcase;