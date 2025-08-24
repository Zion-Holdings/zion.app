import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Zap, Shield, Globe, Microscope, Atom, Cpu, Database, Lock, Eye, Code, Palette, Cloud, Server, Network, TestTube, Dna, Car, Gamepad2, ShieldCheck } from 'lucide-react';
import { innovative2026MicroSaasV4Services } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';
import { nextGenAI2026Services } from '../data/next-gen-ai-2026-services';
import { aiAutonomousServices2026 } from '../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../data/2026-metaverse-digital-reality-services';
import UltraAdvancedFuturisticBackground2026V2 from '../components/ui/UltraAdvancedFuturisticBackground2026V2';
import UltraAdvancedNavigation2026V2 from '../components/layout/UltraAdvancedNavigation2026V2';

export default function EnhancedServicesShowcase2026V2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Combine all services for comprehensive showcase
  const allServices = [
    ...innovative2026MicroSaasV4Services,
    ...emergingTech2026ServicesV4,
    ...ultimate2026Services,
    ...revolutionary2026Innovations,
    ...nextGenAI2026Services,
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service => 
    service.category?.includes('AI') || 
    service.category?.includes('Machine Learning') || 
    service.category?.includes('AI Autonomous') || 
    service.category?.includes('AI Consciousness') || 
    service.category?.includes('AI Legal') || 
    service.category?.includes('AI Scientific') || 
    service.category?.includes('AI Creative') || 
    service.category?.includes('AI Healthcare') || 
    service.category?.includes('AI Education') ||
    service.category?.includes('AI & Legal Tech') ||
    service.category?.includes('AI & Content Creation') ||
    service.category?.includes('AI & Healthcare') ||
    service.category?.includes('AI & Research') ||
    service.category?.includes('AI & Environmental Tech') ||
    service.category?.includes('AI & Transportation')
  ).length;

  const quantumCount = allServices.filter(service => 
    service.category?.includes('Quantum') || 
    service.category?.includes('Space') || 
    service.category?.includes('Quantum Space') ||
    service.category?.includes('Quantum & Cybersecurity') ||
    service.category?.includes('Quantum & Fintech') ||
    service.category?.includes('Quantum & Internet Infrastructure') ||
    service.category?.includes('Quantum & AI') ||
    service.category?.includes('Quantum & Blockchain')
  ).length;

  const emergingTechCount = allServices.filter(service => 
    service.category?.includes('Emerging Tech') ||
    service.category?.includes('Emerging Tech & AI') ||
    service.category?.includes('Emerging Tech & Data Storage') ||
    service.category?.includes('Emerging Tech & Biotech') ||
    service.category?.includes('Emerging Tech & Energy') ||
    service.category?.includes('Emerging Tech & Neuroscience') ||
    service.category?.includes('Emerging Tech & Virtual Reality')
  ).length;

  const microSaasCount = allServices.filter(service => 
    service.category?.includes('Micro SaaS')
  ).length;

  const metaverseCount = allServices.filter(service => 
    service.category?.includes('Metaverse') || 
    service.category?.includes('Digital Reality') || 
    service.category?.includes('Consciousness Interface') || 
    service.category?.includes('Holographic')
  ).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length, color: 'from-purple-600 to-pink-600' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🤖', count: aiCount, color: 'from-blue-600 to-cyan-600' },
    { id: 'quantum', name: 'Quantum & Space Tech', icon: '⚛️', count: quantumCount, color: 'from-indigo-600 to-purple-600' },
    { id: 'emerging', name: 'Emerging Technologies', icon: '🔬', count: emergingTechCount, color: 'from-green-600 to-teal-600' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💼', count: microSaasCount, color: 'from-orange-600 to-red-600' },
    { id: 'metaverse', name: 'Metaverse & VR', icon: '🌌', count: metaverseCount, color: 'from-purple-600 to-blue-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $500', range: 'Under $500' },
    { id: 'medium', name: '$500 - $1,500', range: '$500 - $1,500' },
    { id: 'high', name: '$1,500 - $3,000', range: '$1,500 - $3,000' },
    { id: 'enterprise', name: 'Over $3,000', range: 'Over $3,000' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'newest', name: 'Newest First' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
        (selectedCategory === 'ai' && (service.category?.includes('AI') || service.category?.includes('Machine Learning'))) ||
        (selectedCategory === 'quantum' && service.category?.includes('Quantum')) ||
        (selectedCategory === 'emerging' && service.category?.includes('Emerging Tech')) ||
        (selectedCategory === 'micro-saas' && service.category?.includes('Micro SaaS')) ||
        (selectedCategory === 'metaverse' && (service.category?.includes('Metaverse') || service.category?.includes('Virtual Reality')));

      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 500) ||
        (selectedPriceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 500 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 1500) ||
        (selectedPriceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) > 1500 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 3000) ||
        (selectedPriceRange === 'enterprise' && parseInt(service.price.replace(/[^0-9]/g, '')) > 3000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getCategoryIcon = (category: string) => {
    if (category?.includes('AI') || category?.includes('Machine Learning')) return <Brain className="w-5 h-5" />;
    if (category?.includes('Quantum')) return <Atom className="w-5 h-5" />;
    if (category?.includes('Emerging Tech')) return <Microscope className="w-5 h-5" />;
    if (category?.includes('Micro SaaS')) return <Code className="w-5 h-5" />;
    if (category?.includes('Metaverse') || category?.includes('Virtual Reality')) return <Gamepad2 className="w-5 h-5" />;
    if (category?.includes('Cybersecurity')) return <ShieldCheck className="w-5 h-5" />;
    if (category?.includes('Space')) return <Rocket className="w-5 h-5" />;
    if (category?.includes('Biotech')) return <TestTube className="w-5 h-5" />;
    if (category?.includes('Blockchain')) return <Database className="w-5 h-5" />;
    if (category?.includes('Transportation')) return <Car className="w-5 h-5" />;
    return <Zap className="w-5 h-5" />;
  };

  return (
    <>
      <Head>
        <title>Enhanced 2026 Services Showcase V2 - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum technologies, and emerging tech platforms. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, emerging technologies, 2026 innovations, Zion Tech Group" />
        <meta property="og:title" content="Enhanced 2026 Services Showcase V2 - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum technologies, and emerging tech platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/enhanced-services-showcase-2026-v2" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-showcase-2026-v2" />
      </Head>

      <UltraAdvancedFuturisticBackground2026V2>
        <div className="min-h-screen">
          <UltraAdvancedNavigation2026V2 />

          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
                  Enhanced 2026 Services Showcase V2
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Discover our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and emerging tech platforms that will transform your business in 2026 and beyond.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full text-white font-semibold">
                    {allServices.length}+ Services
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full text-white font-semibold">
                    Cutting-Edge Tech
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 rounded-full text-white font-semibold">
                    Market Ready
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services by name, description, or category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                    <select
                      value={selectedPriceRange}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.id} value={range.id}>
                          {range.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mt-6 text-center">
                  <p className="text-gray-300">
                    Showing <span className="text-purple-400 font-semibold">{filteredServices.length}</span> of{' '}
                    <span className="text-purple-400 font-semibold">{allServices.length}</span> services
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <AnimatePresence>
                {filteredServices.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
                    <p className="text-gray-400">Try adjusting your search criteria or filters</p>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="group"
                      >
                        <div className="relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                          {/* Popular Badge */}
                          {service.popular && (
                            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                              POPULAR
                            </div>
                          )}

                          {/* Service Icon and Category */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-4xl">{service.icon}</div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              {getCategoryIcon(service.category)}
                              <span>{service.category}</span>
                            </div>
                          </div>

                          {/* Service Name and Tagline */}
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                            {service.tagline}
                          </p>

                          {/* Price */}
                          <div className="mb-4">
                            <span className="text-3xl font-bold text-purple-400">{service.price}</span>
                            <span className="text-gray-400">{service.period}</span>
                          </div>

                          {/* Features */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                                  <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                  <span className="line-clamp-1">{feature}</span>
                                </li>
                              ))}
                              {service.features.length > 3 && (
                                <li className="text-xs text-purple-400">
                                  +{service.features.length - 3} more features
                                </li>
                              )}
                            </ul>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                            <div>
                              <div className="text-lg font-bold text-purple-400">{service.rating}</div>
                              <div className="text-xs text-gray-400">Rating</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-blue-400">{service.customers}</div>
                              <div className="text-xs text-gray-400">Customers</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-green-400">{service.trialDays}</div>
                              <div className="text-xs text-gray-400">Trial Days</div>
                            </div>
                          </div>

                          {/* Market Info */}
                          <div className="mb-6 text-xs text-gray-400">
                            <div className="flex items-center gap-2 mb-1">
                              <TrendingUp className="w-3 h-3" />
                              <span>{service.growthRate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-3 h-3" />
                              <span>{service.marketSize}</span>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Link href={service.link}>
                            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                              Learn More
                              <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </button>
                          </Link>

                          {/* Contact Info */}
                          <div className="mt-4 text-center text-xs text-gray-400">
                            <p>Contact: {service.contactInfo.email}</p>
                            <p>Phone: {service.contactInfo.mobile}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
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
                  Our team of experts is ready to help you implement these cutting-edge solutions and drive innovation in your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Get Started Today
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/services">
                    <button className="border border-white/20 hover:border-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10">
                      View All Services
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </UltraAdvancedFuturisticBackground2026V2>
    </>
  );
}