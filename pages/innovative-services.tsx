import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Grid3X3, List, Phone, Mail, MapPin, 
  ArrowRight, Star, TrendingUp, Clock, DollarSign, 
  ShieldCheck, Zap, Brain, Atom, Rocket, Dna, Lock, 
  Globe, Factory, Satellite, Cpu, Database, Cloud
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedQuantumBackground from '../components/ui/UltraAdvancedQuantumBackground';
import InnovativeServiceCard from '../components/ui/InnovativeServiceCard';
import { innovativeNewServices, getInnovativeServicesByCategory } from '../data/innovative-new-services';

export default function InnovativeServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'roi' | 'category'>('name');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const heroStats = [
    { value: '10+', label: 'Revolutionary Services', icon: <Rocket className="w-6 h-6 text-cyan-400" /> },
    { value: '99.99%', label: 'Uptime Guarantee', icon: <ShieldCheck className="w-6 h-6 text-fuchsia-400" /> },
    { value: '30+', label: 'Day Free Trials', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { value: '1500%+', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6 text-green-400" /> }
  ];

  const categories = [
    { name: 'Quantum Computing & AI', icon: <Atom className="w-5 h-5" />, count: 3 },
    { name: 'Neural Technology & AI', icon: <Brain className="w-5 h-5" />, count: 1 },
    { name: 'Financial Technology', icon: <DollarSign className="w-5 h-5" />, count: 1 },
    { name: 'Industrial AI & Automation', icon: <Factory className="w-5 h-5" />, count: 1 },
    { name: 'Space Technology', icon: <Satellite className="w-5 h-5" />, count: 1 },
    { name: 'Biotechnology & Healthcare', icon: <Dna className="w-5 h-5" />, count: 1 },
    { name: 'Cybersecurity', icon: <Lock className="w-5 h-5" />, count: 1 },
    { name: 'Metaverse & Gaming', icon: <Globe className="w-5 h-5" />, count: 1 },
    { name: 'IoT & Edge Computing', icon: <Cpu className="w-5 h-5" />, count: 1 }
  ];

  const filteredServices = useMemo(() => {
    let filtered = innovativeNewServices.slice();

    if (selectedCategory) {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'roi': {
          const ra = parseFloat((a.roi.match(/(\d+)/)?.[1] || '0'));
          const rb = parseFloat((b.roi.match(/(\d+)/)?.[1] || '0'));
          return rb - ra;
        }
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <UltraAdvancedQuantumBackground>
      <Head>
        <title>Innovative Services - Zion Tech Group | Quantum AI, Neural Technology & Advanced Solutions</title>
        <meta name="description" content="Discover revolutionary quantum AI, neural technology, and cutting-edge micro SaaS services. Experience the future of technology with Zion Tech Group's innovative solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Innovative Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our revolutionary quantum AI, neural interfaces, and cutting-edge micro SaaS solutions. 
              Transform your business with unprecedented innovation and performance.
            </p>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold ${stat.icon.props.className.includes('text-cyan') ? 'text-cyan-400' : stat.icon.props.className.includes('text-fuchsia') ? 'text-fuchsia-400' : stat.icon.props.className.includes('text-blue') ? 'text-blue-400' : 'text-green-400'}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode and Sort */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-cyan-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="roi">Sort by ROI</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={viewMode === 'list' ? 'col-span-1' : ''}
                >
                  <InnovativeServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the revolution in quantum computing, AI, and neural technology. 
              Transform your business with our cutting-edge innovative services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg"
                onClick={() => window.open(`mailto:${contactInfo.email}?subject=Innovative Services Inquiry`, '_blank')}
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={() => window.open(`tel:${contactInfo.mobile}`, '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Now</span>
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us at {contactInfo.email} or {contactInfo.mobile}</p>
              <p>{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraAdvancedQuantumBackground>
  );
}