import React, { useState, useMemo } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  TrendingUp, 
  Zap,
  Brain,
  Atom,
  Rocket,
  Shield,
  Eye,
  Car,
  TestTube,
  Heart,
  BarChart3,
  Settings,
  Truck,
  BookOpen,
  Building,
  Target,
  FileText,
  Code,
  Video,
  Handshake,
  MapPin,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  Award,
  Sparkles,
  Infinity
} from 'lucide-react';

// Import service data
import { innovativeMicroSaasServices2025V2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { emergingTechServices2025V2 } from '../data/2025-emerging-tech-services-v2';

const ServicesShowcase2040: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all services
  const allServices = useMemo(() => {
    return [...innovativeMicroSaasServices2025V2, ...emergingTechServices2025V2];
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(allServices.map(service => service.category))];
    return cats;
  }, [allServices]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
        default:
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.rating - a.rating;
      }
    });

    return filtered;
  }, [allServices, searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Consciousness':
        return <Brain className="w-5 h-5" />;
      case 'Quantum Computing':
      case 'Quantum & Internet':
      case 'Quantum & Chemistry':
      case 'Quantum & Sensing':
        return <Atom className="w-5 h-5" />;
      case 'Space Technology':
      case 'Space Tech & AI':
        return <Rocket className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'Emerging Tech':
      case 'Communication & Holographics':
        return <Eye className="w-5 h-5" />;
      case 'Autonomous Vehicles & AI':
        return <Car className="w-5 h-5" />;
      case 'Synthetic Biology & Automation':
        return <TestTube className="w-5 h-5" />;
      case 'Neural Tech & BCI':
        return <Brain className="w-5 h-5" />;
      case 'Healthcare AI':
        return <Heart className="w-5 h-5" />;
      case 'FinTech & AI':
        return <BarChart3 className="w-5 h-5" />;
      case 'Legal Tech':
        return <Shield className="w-5 h-5" />;
      case 'Supply Chain & Logistics':
        return <Truck className="w-5 h-5" />;
      case 'Creative & Design':
        return <Eye className="w-5 h-5" />;
      case 'Customer Service & AI':
        return <Users className="w-5 h-5" />;
      case 'Blockchain & Quantum':
        return <Atom className="w-5 h-5" />;
      default:
        return <Settings className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Consciousness':
      case 'Healthcare AI':
      case 'Neural Tech & BCI':
        return 'from-pink-500 to-rose-600';
      case 'Quantum Computing':
      case 'Quantum & Internet':
      case 'Quantum & Chemistry':
      case 'Quantum & Sensing':
      case 'Blockchain & Quantum':
        return 'from-blue-500 to-cyan-600';
      case 'Space Technology':
      case 'Space Tech & AI':
        return 'from-purple-500 to-indigo-600';
      case 'Cybersecurity':
      case 'Legal Tech':
        return 'from-green-500 to-emerald-600';
      case 'Emerging Tech':
      case 'Communication & Holographics':
        return 'from-yellow-500 to-orange-600';
      case 'Autonomous Vehicles & AI':
        return 'from-cyan-500 to-blue-600';
      case 'Synthetic Biology & Automation':
        return 'from-green-500 to-teal-600';
      case 'FinTech & AI':
        return 'from-green-500 to-emerald-600';
      case 'Supply Chain & Logistics':
        return 'from-orange-500 to-red-600';
      case 'Creative & Design':
        return 'from-pink-500 to-rose-600';
      case 'Customer Service & AI':
        return 'from-green-500 to-teal-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const seoConfig = {
    title: "Revolutionary Services Showcase 2040 - Zion Tech Group",
    description: "Explore our comprehensive portfolio of 100+ innovative technology services including AI, quantum computing, space technology, and emerging tech solutions.",
    keywords: "AI services, quantum computing, space technology, cybersecurity, emerging tech, Zion Tech Group, technology solutions, 2040 services",
    image: "/og-image.svg",
    url: "https://ziontechgroup.com/services-showcase-2040",
    type: "website"
  };

  return (
    <Layout seo={seoConfig}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary Services Showcase 2040
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive portfolio of cutting-edge technology solutions that are transforming industries worldwide
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                  <div className="text-gray-400">Innovative Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">15+</div>
                  <div className="text-gray-400">Technology Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">4.9/5</div>
                  <div className="text-gray-400">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-gray-400">Countries Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="px-4 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price">Price: Low to High</option>
                    <option value="name">Alphabetical</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or category filter</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                    >
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
                          Popular
                        </div>
                      )}

                      {/* Service Icon */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-2xl">{service.icon}</div>
                      </div>

                      {/* Service Info */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {service.tagline}
                          </p>
                        </div>

                        {/* Price and Rating */}
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-cyan-400">
                            ${service.price.monthly}
                            <span className="text-sm text-gray-400 font-normal">/month</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{service.rating}</span>
                            <span className="text-xs text-gray-500">({service.reviews})</span>
                          </div>
                        </div>

                        {/* Features Preview */}
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Category and Market Info */}
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-2">
                            {getCategoryIcon(service.category)}
                            <span>{service.category}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-cyan-400 font-medium">{service.marketSize}</div>
                            <div>{service.growthRate}</div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <a
                          href={service.link}
                          className="block w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of companies already leveraging our revolutionary technology solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
                >
                  Contact Us Today
                </a>
                <a
                  href="/demo"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Request Demo
                </a>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Middletown, DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesShowcase2040;