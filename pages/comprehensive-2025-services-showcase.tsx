import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/backgrounds/UltraAdvancedFuturisticBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Users, Shield, 
  Zap, Lock, Database, Cloud, Heart,
  Phone, Search, Grid, List, Sparkles, BarChart3, 
  Lightbulb, Code, Server, Network, ShieldCheck, Atom, Satellite,
  Eye, BarChart, Factory, ShoppingCart, Activity, Brain
} from 'lucide-react';
import Link from 'next/link';

// Import all our service data
import { innovative2045AdvancedServices } from '../data/innovative-2045-advanced-services';
import { innovative2045ITServices } from '../data/innovative-2045-it-services';
import { innovative2045MicroSAASServices } from '../data/innovative-2045-micro-saas-services';
import { aiBusinessIntelligenceServices } from '../data/ai-business-intelligence-services';
import { cybersecurityComplianceServices } from '../data/cybersecurity-compliance-services';
import { digitalTransformationServices } from '../data/digital-transformation-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { industrySpecificSolutions } from '../data/industry-specific-solutions';

const Comprehensive2025ServicesShowcase: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Combine all services for search and filtering
  const allServices = [
    ...innovative2045AdvancedServices,
    ...innovative2045ITServices,
    ...innovative2045MicroSAASServices,
    ...aiBusinessIntelligenceServices,
    ...cybersecurityComplianceServices,
    ...digitalTransformationServices,
    ...emergingTechnologyServices,
    ...industrySpecificSolutions
  ];

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Neuroscience': return <Brain className="w-6 h-6" />;
      case 'Quantum & Emerging Tech': return <Atom className="w-6 h-6" />;
      case 'Cloud Infrastructure': return <Cloud className="w-6 h-6" />;
      case 'DevOps & Automation': return <Code className="w-6 h-6" />;
      case 'Content & Marketing': return <BarChart3 className="w-6 h-6" />;
      case 'Customer Intelligence': return <Users className="w-6 h-6" />;
      case 'Financial Intelligence': return <BarChart className="w-6 h-6" />;
      case 'Supply Chain Intelligence': return <Network className="w-6 h-6" />;
      case 'Customer Experience': return <Heart className="w-6 h-6" />;
      case 'Operational Intelligence': return <Activity className="w-6 h-6" />;
      case 'Threat Intelligence': return <Shield className="w-6 h-6" />;
      case 'Zero Trust Security': return <ShieldCheck className="w-6 h-6" />;
      case 'Compliance Automation': return <Lock className="w-6 h-6" />;
      case 'Quantum Security': return <Atom className="w-6 h-6" />;
      case 'Digital Consulting': return <Lightbulb className="w-6 h-6" />;
      case 'System Modernization': return <Server className="w-6 h-6" />;
      case 'Cloud Migration': return <Cloud className="w-6 h-6" />;
      case 'Data Strategy': return <Database className="w-6 h-6" />;
      case 'IoT & Edge Computing': return <Satellite className="w-6 h-6" />;
      case 'Blockchain & AI': return <Zap className="w-6 h-6" />;
      case 'AR & Computer Vision': return <Eye className="w-6 h-6" />;
      case 'Robotics & Automation': return <Factory className="w-6 h-6" />;
      case 'Healthcare': return <Heart className="w-6 h-6" />;
      case 'Financial Services': return <BarChart className="w-6 h-6" />;
      case 'Manufacturing': return <Factory className="w-6 h-6" />;
      case 'Retail': return <ShoppingCart className="w-6 h-6" />;
      case 'Energy': return <Zap className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Neuroscience': 'from-purple-500 to-pink-600',
      'Quantum & Emerging Tech': 'from-indigo-500 to-purple-600',
      'Cloud Infrastructure': 'from-blue-500 to-cyan-600',
      'DevOps & Automation': 'from-green-500 to-emerald-600',
      'Content & Marketing': 'from-orange-500 to-red-600',
      'Customer Intelligence': 'from-pink-500 to-rose-600',
      'Financial Intelligence': 'from-emerald-500 to-teal-600',
      'Supply Chain Intelligence': 'from-cyan-500 to-blue-600',
      'Customer Experience': 'from-rose-500 to-pink-600',
      'Operational Intelligence': 'from-teal-500 to-green-600',
      'Threat Intelligence': 'from-red-500 to-orange-600',
      'Zero Trust Security': 'from-orange-500 to-yellow-600',
      'Compliance Automation': 'from-yellow-500 to-orange-600',
      'Quantum Security': 'from-indigo-500 to-purple-600',
      'Digital Consulting': 'from-blue-500 to-indigo-600',
      'System Modernization': 'from-gray-500 to-slate-600',
      'Cloud Migration': 'from-cyan-500 to-blue-600',
      'Data Strategy': 'from-purple-500 to-indigo-600',
      'IoT & Edge Computing': 'from-green-500 to-emerald-600',
      'Blockchain & AI': 'from-yellow-500 to-orange-600',
      'AR & Computer Vision': 'from-pink-500 to-purple-600',
      'Robotics & Automation': 'from-red-500 to-pink-600',
      'Healthcare': 'from-green-500 to-emerald-600',
      'Financial Services': 'from-blue-500 to-indigo-600',
      'Manufacturing': 'from-orange-500 to-red-600',
      'Retail': 'from-purple-500 to-pink-600',
      'Energy': 'from-yellow-500 to-orange-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-slate-600';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 mx-auto mb-6"
          >
            <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <Brain className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-4">Loading Zion Tech Group Services...</h1>
          <p className="text-lg text-gray-300">Preparing comprehensive service showcase</p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <SEO 
        title="Comprehensive 2025 Services Showcase | Zion Tech Group"
        description="Discover our comprehensive range of innovative 2025 micro SAAS, IT, and AI services. From quantum computing to space technology, we offer cutting-edge solutions for modern businesses."
        keywords={["micro SAAS", "AI services", "quantum technology", "space technology", "IT solutions", "enterprise services", "2025 innovations"]}
        ogImage="https://ziontechgroup.com/og-image-2025-services.jpg"
      />
      <UltraAdvancedFuturisticBackground />
      
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Comprehensive 2025
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our complete portfolio of innovative AI, IT, and micro SAAS services designed to transform your business and drive digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Explore Services
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filter Controls */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mt-6 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                      viewMode === 'list' ? 'flex gap-6' : ''
                    }`}
                  >
                    {viewMode === 'list' && (
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center text-white`}>
                          {getCategoryIcon(service.category)}
                        </div>
                      </div>
                    )}
                    
                    <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                        </div>
                        {viewMode === 'grid' && (
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center text-white flex-shrink-0`}>
                            {getCategoryIcon(service.category)}
                          </div>
                        )}
                      </div>

                      <p className="text-gray-400 mb-4 line-clamp-3">{service.description}</p>

                      <div className="mb-4">
                        <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {service.category}
                        </span>
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-medium">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviews} reviews)</span>
                        </div>
                        <div className="text-gray-400 text-sm">
                          {service.customers}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link href={service.link}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                          >
                            Learn More
                          </motion.button>
                        </Link>
                        <Link href="/contact">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                          >
                            Contact
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 text-gray-400">
                  <Search className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
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
                Let our team of experts help you implement the right solutions for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
                <a href="tel:+13024640950">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us
                  </motion.button>
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Mobile: +1 302 464 0950</p>
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Comprehensive2025ServicesShowcase;