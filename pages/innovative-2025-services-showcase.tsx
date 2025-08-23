import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import SimpleServiceCard from '../components/ui/SimpleServiceCard';
import { motion } from 'framer-motion';
import { 
  Search, Star, TrendingUp, Award, Brain, Atom, Rocket,
  Shield, Cloud, Cpu, Target, Lightbulb, Users, Globe, ArrowRight
} from 'lucide-react';
import { innovative2025AdvancedServicesExpansion } from '../data/innovative-2025-advanced-services-expansion';
import { innovative2025EnterpriseSolutions } from '../data/innovative-2025-enterprise-solutions';

const Innovative2025ServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = [
    ...innovative2025AdvancedServicesExpansion,
    ...innovative2025EnterpriseSolutions
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-4 h-4" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation & DevOps', icon: <Cpu className="w-4 h-4" /> },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: <Target className="w-4 h-4" /> }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    });

  const getVariantForService = (service: { category: string }) => {
    if (service.category.toLowerCase().includes('quantum')) return 'quantum';
    if (service.category.toLowerCase().includes('ai')) return 'ai';
    if (service.category.toLowerCase().includes('space')) return 'space';
    if (service.category.toLowerCase().includes('security')) return 'security';
    if (service.category.toLowerCase().includes('cloud')) return 'cloud';
    if (service.category.toLowerCase().includes('automation')) return 'automation';
    return 'ai';
  };

  const stats = [
    { number: allServices.length, label: 'Innovative Services', description: 'Cutting-edge solutions' },
    { number: allServices.filter(s => s.popular).length, label: 'Popular Services', description: 'High-demand solutions' },
    { number: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length, label: 'Quantum Solutions', description: 'Next-gen computing' },
    { number: allServices.filter(s => s.category.toLowerCase().includes('ai')).length, label: 'AI Services', description: 'Intelligent automation' }
  ];

  return (
    <Layout>
      <SEO 
        title="Innovative 2025 Services Showcase - Zion Tech Group"
        description="Explore our comprehensive showcase of innovative 2025 technology services including AI, quantum computing, space technology, and enterprise solutions."
        keywords={["innovative services", "2025 technology", "AI solutions", "quantum computing", "space technology", "enterprise solutions", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>Innovative 2025 Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovation Showcase 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our most innovative and cutting-edge technology solutions designed to transform your business and unlock new possibilities in the digital age.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-4 group hover:bg-white/5 rounded-xl transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 font-medium">Filter by:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-500 focus:outline-none transition-colors"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-black text-white">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-500 focus:outline-none transition-colors"
              >
                <option value="name" className="bg-black text-white">Name</option>
                <option value="price" className="bg-black text-white">Price</option>
                <option value="popularity" className="bg-black text-white">Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search criteria or filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {filteredServices.length} Services Found
                </h2>
                <p className="text-xl text-gray-300">
                  Discover innovative solutions tailored to your needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <SimpleServiceCard
                      service={service}
                    />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose from our innovative services and start your journey towards digital transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact">
                <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg">
                  Get Started Today
                </button>
              </a>
              <a href="/services">
                <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                  View All Services
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Innovative2025ServicesShowcase;
