import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import UltraFuturisticServiceCard2037 from '../components/ui/UltraFuturisticServiceCard2037';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Zap, Target, Atom, Star, 
  Globe, Cpu, Lock, Cloud,
  Search, Filter
} from 'lucide-react';
import { real2036Q1Additions } from '../data/real-2036-q1-additions';
import { real2036Q2Additions } from '../data/real-2036-q2-additions';

const Ultimate2037FuturisticServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  const allServices = [...real2036Q1Additions, ...real2036Q2Additions];
  
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI')).length, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Quantum')).length, color: 'from-indigo-500 to-purple-500' },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Automation')).length, color: 'from-blue-500 to-cyan-500' },
    { id: 'cybersecurity', name: 'Security', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length, color: 'from-red-500 to-orange-500' },
    { id: 'edge', name: 'Edge AI', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Edge')).length, color: 'from-green-500 to-emerald-500' },
    { id: 'neuromorphic', name: 'Neuromorphic',         icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Neuromorphic')).length, color: 'from-pink-500 to-rose-500' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.name.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.customers - a.customers;
      default:
        return 0;
    }
  });

  const getServiceVariant = (service: { category: string }) => {
    if (service.category.includes('Quantum')) return 'quantum';
    if (service.category.includes('Automation')) return 'automation';
    if (service.category.includes('Security') || service.category.includes('Cybersecurity')) return 'cybersecurity';
    if (service.category.includes('Edge')) return 'edge';
    if (service.category.includes('Neuromorphic')) return 'neuromorphic';
    return 'ai';
  };

  const featuredServices = allServices.filter(service => service.popular).slice(0, 6);
  const latestServices = allServices.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()).slice(0, 6);

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 50, 0],
                y: [0, -50, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
                x: [0, -30, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-4 h-4" />
              <span>2027 Edition - Cutting Edge Technology</span>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Ultimate Services Showcase
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Discover our comprehensive portfolio of {allServices.length}+ cutting-edge micro SAAS services, 
              from quantum computing and neuromorphic AI to autonomous automation and edge intelligence
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <motion.button 
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore All Services
              </motion.button>
              <motion.button 
                className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Services Showcase Inquiry', '_blank')}
              >
                Contact Sales
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{allServices.length}+</div>
                <div className="text-gray-400">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">7</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">2027</div>
                <div className="text-gray-400">Latest Tech</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
                <div className="text-gray-400">Possibilities</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and innovative solutions that are transforming industries worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2037
                    service={service}
                    variant={getServiceVariant(service)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Services Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Latest Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fresh off the development line - our newest cutting-edge solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2037
                    service={service}
                    variant={getServiceVariant(service)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Services Portfolio */}
        <section id="services-grid" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of cutting-edge technology solutions
              </p>
            </motion.div>

            {/* Search, Filter, and Sort */}
            <div className="mb-12 space-y-6">
              {/* Search Bar */}
              <div className="flex justify-center">
                <div className="relative max-w-md w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services by name, description, or features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>
              
              {/* Category Filters */}
              <div className="flex justify-center">
                <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} border-transparent text-black`
                          : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="flex justify-center">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300">Sort by:</span>
                  <div className="flex gap-2">
                    {[
                      { key: 'popularity', label: 'Popularity', icon: <Star className="w-4 h-4" /> },
                      { key: 'rating', label: 'Rating', icon: <div className="w-4 h-4" /> },
                      { key: 'price', label: 'Price', icon: <div className="w-4 h-4" /> },
                      { key: 'name', label: 'Name', icon: <Globe className="w-4 h-4" /> }
                    ].map((option) => (
                      <motion.button
                        key={option.key}
                        onClick={() => setSortBy(option.key as 'name' | 'price' | 'rating' | 'popularity')}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
                          sortBy === option.key
                            ? 'bg-cyan-500 border-cyan-500 text-black'
                            : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {option.icon}
                        <span className="text-sm">{option.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-gray-300">
                Showing <span className="text-white font-semibold">{filteredServices.length}</span> of <span className="text-white font-semibold">{allServices.length}</span> services
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2037
                    service={service}
                    variant={getServiceVariant(service)}
                  />
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Services Showcase - Get Started', '_blank')}
                >
                  Get Started Today
                </motion.button>
                <motion.button 
                  className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('tel:+13024640950', '_blank')}
                >
                  Call +1 302 464 0950
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Ultimate2037FuturisticServicesShowcase;
