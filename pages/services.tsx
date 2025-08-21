import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, SortAsc, Star, ExternalLink, ArrowRight, Check, 
  Phone, Mail, MapPin, Globe, Brain, Factory, FlaskConical, 
  DollarSign, Shield, Rocket, Zap, Users, TrendingUp, Clock, 
  Target, Building, Award, ChartBar, Code, BookOpen, Activity, 
  Smartphone, Palette, MessageSquare, FileText, Calendar, 
  CreditCard, Settings, ChevronRight, Play, Sparkles, Atom, 
  Eye, Trophy, Car, Leaf, Truck, Microscope, GraduationCap, 
  ShieldCheck, Globe2, Bot, Cloud, RefreshCw, BarChart3, 
  Lock, Cpu, Database
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(enhancedRealMicroSaasServices.map(s => s.category))];
    return cats.sort();
  }, []);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = enhancedRealMicroSaasServices;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'roi': {
          const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0');
          const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0');
          return bRoi - aRoi;
        }
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Get popular services
  const getPopularServices = () => {
    return enhancedRealMicroSaasServices.filter(service => service.popular).slice(0, 6);
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const advertisingContent = {
    headline: "500+ Revolutionary Micro SaaS Services",
    subheadline: "Transform Your Business with Cutting-Edge AI, Quantum Computing & Autonomous Systems",
    benefits: [
      "🚀 First-to-Market Solutions",
      "💎 Industry-Leading Technology", 
      "🌍 Global Deployment",
      "💰 Competitive Pricing",
      "⚡ Lightning-Fast Setup",
      "🛡️ Enterprise Security"
    ],
    marketPosition: "Zion Tech Group leads the global micro SaaS revolution with patent-pending quantum AI and autonomous systems.",
    pricing: "Services range from $49/month to $5,999/month with 30-day free trials and comprehensive support.",
    contactCTA: "Ready to revolutionize your business? Contact our expert team today!"
  };

  const getVariantForCategory = (category: string) => {
    const categoryVariants: { [key: string]: any } = {
      'AI & Content Creation': 'quantum',
      'Quantum Computing & AI': 'quantum',
      'Autonomous Systems': 'neural',
      'Healthcare & Biotechnology': 'holographic',
      'Blockchain & Web3': 'cyberpunk',
      'Cybersecurity': 'quantum',
      'Logistics & Transportation': 'neural',
      'Financial Technology': 'quantum-holographic',
      'Legal Technology': 'cyberpunk',
      'Environmental Technology': 'holographic',
      'Energy & Sustainability': 'neural'
    };
    return categoryVariants[category] || 'default';
  };

  return (
    <div>
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | AI, Quantum Computing & Emerging Tech</title>
        <meta name="description" content="Explore 500+ revolutionary micro SaaS services from Zion Tech Group. AI, quantum computing, autonomous systems, blockchain, and emerging technology solutions." />
        <meta name="keywords" content="micro SaaS services, AI services, quantum computing, autonomous systems, blockchain, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="Explore 500+ revolutionary micro SaaS services including AI, quantum computing, and autonomous systems." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <UltraFuturisticBackground variant="quantum-holographic">
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    Revolutionary
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Micro SaaS Services
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Discover 500+ cutting-edge micro SaaS solutions that are transforming industries worldwide. 
                    From quantum AI to autonomous systems, we have the technology to revolutionize your business.
                  </p>
                </motion.div>

                {/* Search and Filters */}
                <div className="max-w-4xl mx-auto mb-12">
                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    {/* Search Bar */}
                    <div className="relative mb-6">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search services by name, description, or category..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      />
                    </div>

                    {/* Filters and Sort */}
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex flex-wrap gap-4">
                        {/* Category Filter */}
                        <div className="flex items-center gap-2">
                          <Filter className="w-4 h-4 text-cyan-400" />
                          <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                          >
                            {categories.map((category) => (
                              <option key={category} value={category} className="bg-gray-800 text-white">
                                {category === 'all' ? 'All Categories' : category}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Sort Options */}
                        <div className="flex items-center gap-2">
                          <SortAsc className="w-4 h-4 text-purple-400" />
                          <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400"
                          >
                            <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                            <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                            <option value="popularity" className="bg-gray-800 text-white">Sort by Popularity</option>
                            <option value="category" className="bg-gray-800 text-white">Sort by Category</option>
                            <option value="roi" className="bg-gray-800 text-white">Sort by ROI</option>
                          </select>
                        </div>
                      </div>

                      <div className="text-gray-400 text-sm">
                        {filteredServices.length} services found
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Zion Tech Group</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span>{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Most Popular Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our most requested and highest-performing micro SaaS solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getPopularServices().map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      variant={getVariantForCategory(service.category)}
                      className="h-full"
                      glowIntensity="high"
                      animationSpeed="normal"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                            <span className="text-2xl">{service.icon}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                            <div className="text-lg font-bold text-cyan-400">{service.price}{service.period}</div>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full">
                          <Star className="w-4 h-4 inline mr-1" />
                          Popular
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                      <div className="mb-4">
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                              <div className="w-2 h-2 rounded-full bg-cyan-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4 text-sm">
                        <div className="flex items-center justify-between text-gray-400 mb-2">
                          <span>Category:</span>
                          <span className="text-cyan-400">{service.category}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-400 mb-2">
                          <span>Setup Time:</span>
                          <span className="text-green-400">{service.setupTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-400">
                          <span>ROI:</span>
                          <span className="text-yellow-400">{service.roi.split(' ')[0]}</span>
                        </div>
                      </div>

                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                        className="w-full"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </UltraFuturisticCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* All Services Section */}
          <section className="py-20 bg-black/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  All Services ({filteredServices.length})
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our complete portfolio of revolutionary micro SaaS solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      variant={getVariantForCategory(service.category)}
                      className="h-full"
                      glowIntensity="medium"
                      animationSpeed="normal"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                            <span className="text-2xl">{service.icon}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                            <div className="text-lg font-bold text-cyan-400">{service.price}{service.period}</div>
                          </div>
                        </div>
                        {service.popular && (
                          <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full">
                            <Star className="w-4 h-4 inline mr-1" />
                            Popular
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">{service.description}</p>

                      <div className="mb-4">
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                              <div className="w-2 h-2 rounded-full bg-cyan-400" />
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4 text-sm">
                        <div className="flex items-center justify-between text-gray-400 mb-2">
                          <span>Category:</span>
                          <span className="text-cyan-400">{service.category}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-400 mb-2">
                          <span>Setup Time:</span>
                          <span className="text-green-400">{service.setupTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-400">
                          <span>ROI:</span>
                          <span className="text-yellow-400">{service.roi.split(' ')[0]}</span>
                        </div>
                      </div>

                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                        className="w-full"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </UltraFuturisticCard>
                  </motion.div>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                  <p className="text-gray-400 mb-8">Try adjusting your search terms or filters</p>
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSortBy('name');
                    }}
                    variant="secondary"
                    size="lg"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {advertisingContent.contactCTA}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    href={`tel:${contactInfo.mobile}`}
                    variant="secondary"
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>

                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span>{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </UltraFuturisticBackground>
    </div>
  );
}