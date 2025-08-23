import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Atom, Zap, Globe, Shield, Rocket, 
  Heart, Lock, Truck, Cloud, GraduationCap,
  Star, ArrowRight, Search, Filter, Eye,
  DollarSign, Users, TrendingUp, Award
} from 'lucide-react';
import { innovative2037CuttingEdgeServices } from '../data/innovative-2037-cutting-edge-services';
import { innovative2038FutureServices } from '../data/innovative-2038-future-services';
import Link from 'next/link';

const Innovative20372038Showcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const allServices = [...innovative2037CuttingEdgeServices, ...innovative2038FutureServices];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  const years = ['all', '2037', '2038'];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || 
                       (selectedYear === '2037' && service.launchDate.startsWith('2027')) ||
                       (selectedYear === '2038' && service.launchDate.startsWith('2028'));
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.pricing.starter.replace(/[^0-9]/g, '')) - 
               parseFloat(b.pricing.starter.replace(/[^0-9]/g, ''));
      case 'market':
        return parseFloat(a.marketSize.replace(/[^0-9]/g, '')) - 
               parseFloat(b.marketSize.replace(/[^0-9]/g, ''));
      case 'launch':
        return new Date(a.launchDate).getTime() - new Date(b.launchDate).getTime();
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Quantum': return <Brain className="w-6 h-6" />;
      case 'Metaverse & AI': return <Globe className="w-6 h-6" />;
      case 'Space Technology': return <Rocket className="w-6 h-6" />;
      case 'Neural Technology': return <Brain className="w-6 h-6" />;
      case 'Financial Technology': return <DollarSign className="w-6 h-6" />;
      case 'Healthcare & AI': return <Heart className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Supply Chain & AI': return <Truck className="w-6 h-6" />;
      case 'Environmental Technology': return <Cloud className="w-6 h-6" />;
      case 'Education & AI': return <GraduationCap className="w-6 h-6" />;
      case 'Transhumanism & AI': return <Brain className="w-6 h-6" />;
      case 'Quantum Technology': return <Atom className="w-6 h-6" />;
      case 'Virtual Reality & AI': return <Globe className="w-6 h-6" />;
      case 'AI & Machine Learning': return <Brain className="w-6 h-6" />;
      case 'Biotechnology & AI': return <Heart className="w-6 h-6" />;
      case 'Quantum Physics': return <Atom className="w-6 h-6" />;
      case 'Architecture & AI': return <Globe className="w-6 h-6" />;
      case 'AI & Psychology': return <Brain className="w-6 h-6" />;
      case 'AI & Creativity': return <Star className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Quantum': 'from-purple-500 to-cyan-500',
      'Metaverse & AI': 'from-blue-500 to-purple-500',
      'Space Technology': 'from-indigo-500 to-blue-500',
      'Neural Technology': 'from-pink-500 to-purple-500',
      'Financial Technology': 'from-green-500 to-emerald-500',
      'Healthcare & AI': 'from-red-500 to-pink-500',
      'Cybersecurity': 'from-orange-500 to-red-500',
      'Supply Chain & AI': 'from-yellow-500 to-orange-500',
      'Environmental Technology': 'from-teal-500 to-green-500',
      'Education & AI': 'from-indigo-500 to-purple-500',
      'Transhumanism & AI': 'from-violet-500 to-purple-500',
      'Quantum Technology': 'from-cyan-500 to-blue-500',
      'Virtual Reality & AI': 'from-purple-500 to-pink-500',
      'AI & Machine Learning': 'from-blue-500 to-cyan-500',
      'Biotechnology & AI': 'from-green-500 to-teal-500',
      'Quantum Physics': 'from-blue-500 to-indigo-500',
      'Architecture & AI': 'from-orange-500 to-yellow-500',
      'AI & Psychology': 'from-pink-500 to-rose-500',
      'AI & Creativity': 'from-purple-500 to-pink-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <Layout>
      <SEO 
        title="Innovative 2037-2038 Services Showcase | Zion Tech Group"
        description="Explore our cutting-edge 2037-2038 micro SAAS services featuring quantum AI consciousness, holographic metaverse platforms, neural interfaces, and revolutionary space technology solutions."
        keywords={["2037 services", "2038 services", "quantum AI", "holographic metaverse", "neural interfaces", "space technology", "micro SAAS", "Zion Tech Group"]}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-40 h-40 border border-cyan-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-32 w-32 h-32 border border-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 left-1/4 w-24 h-24 border border-blue-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-1/3 w-36 h-36 border border-green-500/20 rounded-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4">
              🚀 Future Technology 2037-2038
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The Future of
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technology
            </span>
            is Here
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Experience our revolutionary 2037-2038 micro SAAS services featuring quantum AI consciousness, 
            holographic metaverse platforms, neural interfaces, and cutting-edge space technology solutions.
          </motion.p>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {years.map(year => (
                  <option key={year} value={year} className="bg-gray-800 text-white">
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                <option value="market" className="bg-gray-800 text-white">Sort by Market Size</option>
                <option value="launch" className="bg-gray-800 text-white">Sort by Launch Date</option>
              </select>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{allServices.length}</div>
              <div className="text-gray-400 text-sm">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$500B+</div>
              <div className="text-gray-400 text-sm">Total Market Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-gray-400 text-sm">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Innovation Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Services Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge 2037-2038 services that are shaping the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {getCategoryIcon(service.category)}
                    <span className="ml-2">{service.category}</span>
                  </span>
                </div>

                {/* Service Icon */}
                <div className="text-4xl mb-6">{service.icon}</div>

                {/* Service Name */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Starting at:</h4>
                  <div className="text-2xl font-bold text-cyan-400">{service.pricing.starter}</div>
                </div>

                {/* Market Info */}
                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className="text-gray-400">
                    <span className="block">Market Size</span>
                    <span className="text-green-400 font-semibold">{service.marketSize}</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Launch Date</span>
                    <span className="text-purple-400 font-semibold">
                      {new Date(service.launchDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Service
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedYear('all');
                }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in building the next generation of technology solutions. 
              Contact our team to learn more about our innovative services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Innovative20372038Showcase;