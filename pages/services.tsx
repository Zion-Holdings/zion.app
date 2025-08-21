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
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(enhancedMicroSaasServices.map(s => s.category))];
    return cats.sort();
  }, []);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = enhancedMicroSaasServices;

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
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
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
    return enhancedMicroSaasServices.filter(service => service.popular).slice(0, 6);
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

  const popularServices = getPopularServices();

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <Brain className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Quantum Computing' || s.category === 'AI & Machine Learning').length
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and risk assessment',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Financial Technology').length
    },
    {
      name: 'Cybersecurity & Defense',
      description: 'Quantum-resistant cybersecurity and advanced threat protection',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Cybersecurity').length
    },
    {
      name: 'Space & Aerospace',
      description: 'AI-powered space exploration and satellite management',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Aerospace & Space Technology').length
    }
  ];

  // Featured revolutionary services
  const featuredServices = [
    {
      name: 'Quantum AI Cognitive Platform',
      description: 'Revolutionary quantum AI platform combining quantum computing with advanced cognitive AI for unprecedented problem-solving capabilities.',
      icon: '🧠',
      price: '$1,299/month',
      category: 'Quantum Computing',
      features: ['Quantum-enhanced neural networks', 'Cognitive reasoning engine', 'Multi-dimensional problem solving'],
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      popular: true
    },
    {
      name: 'Autonomous AI Factory',
      description: 'Complete autonomous manufacturing system powered by AI that runs 24/7 with zero human intervention.',
      icon: '🏭',
      price: '$2,499/month',
      category: 'Manufacturing & Industry 4.0',
      features: ['Fully autonomous operation', 'AI-powered quality control', 'Predictive maintenance'],
      link: 'https://ziontechgroup.com/autonomous-ai-factory',
      popular: true
    },
    {
      name: 'Quantum Cybersecurity Fortress',
      description: 'Future-proof cybersecurity using quantum-resistant encryption and AI-powered threat detection.',
      icon: '🛡️',
      price: '$1,599/month',
      category: 'Cybersecurity',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      popular: true
    }
  ];

  return (
    <div>
      <Head>
        <title>500+ Revolutionary Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge micro SaaS services. AI, quantum computing, autonomous systems, and emerging technology solutions with 99.99% uptime guarantee." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, autonomous systems, biomedical AI, Zion Tech Group, technology solutions, business transformation" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="500+ Revolutionary Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions. 500+ real micro SaaS services with 99.99% uptime guarantee." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <UltraFuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 mr-2" />
                    500+ Revolutionary Micro SaaS Services
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    Transform Your Business
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      With Revolutionary Technology
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Experience the future of technology with Zion Tech Group's cutting-edge micro SaaS services. 
                    AI, quantum computing, autonomous systems, and emerging technology solutions with 
                    <span className="text-cyan-400 font-semibold"> 99.99% uptime guarantee</span>.
                  </p>
                </div>

                {/* Hero Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">500+</div>
                    <div className="text-sm text-gray-400">Real Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-fuchsia-400 mb-2">99.99%</div>
                    <div className="text-sm text-gray-400">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">30</div>
                    <div className="text-sm text-gray-400">Day Free Trials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-400">AI Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">$1B+</div>
                    <div className="text-sm text-gray-400">Market Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">2500%+</div>
                    <div className="text-sm text-gray-400">Average ROI</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Button
                    href="#services"
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    Explore Services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h3>
                    <p className="text-gray-300 mb-6">Get in touch with our experts today for a free consultation and discover how our revolutionary services can drive unprecedented growth</p>
                    
                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <h4 className="font-semibold text-white mb-1">Call Us</h4>
                        <p className="text-cyan-400 font-medium">{contactInfo.mobile}</p>
                      </div>
                      <div className="text-center">
                        <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <h4 className="font-semibold text-white mb-1">Email Us</h4>
                        <p className="text-purple-400 font-medium">{contactInfo.email}</p>
                      </div>
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                        <p className="text-green-400 font-medium text-sm">{contactInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-gray-300 mb-4">Visit our website for more information</p>
                      <a 
                        href={contactInfo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                      >
                        {contactInfo.website}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prominent Advertising Section */}
          <section className="py-16 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 border-y border-purple-500/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {advertisingContent.headline}
                </h2>
                <p className="text-xl text-cyan-300 mb-8 max-w-4xl mx-auto font-medium">
                  {advertisingContent.subheadline}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {advertisingContent.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl mb-3">{benefit.split(' ')[0]}</div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {benefit.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mb-8">
                <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
                  {advertisingContent.marketPosition}
                </p>
                <p className="text-lg text-cyan-300 mb-6 max-w-4xl mx-auto">
                  {advertisingContent.pricing}
                </p>
                <p className="text-lg text-white mb-8 max-w-4xl mx-auto">
                  {advertisingContent.contactCTA}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button
                  href="#services"
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  View All 500+ Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary Service Categories
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our comprehensive portfolio of cutting-edge technology solutions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {enhancedCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      title={category.name}
                      description={category.description}
                      icon={category.icon}
                      color="from-cyan-500 to-blue-600"
                      textColor="text-cyan-400"
                      gradient="from-cyan-500 to-blue-600"
                      variant="quantum"
                      className="h-full cursor-pointer"
                    >
                      <div className="text-center mt-4">
                        <div className="text-2xl font-bold text-white">{category.count}</div>
                        <div className="text-sm text-gray-400">Services Available</div>
                      </div>
                    </UltraFuturisticCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Services Section */}
          <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  Featured Revolutionary Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience our most innovative and game-changing solutions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      title={service.name}
                      description={service.description}
                      icon={<div className="text-4xl">{service.icon}</div>}
                      color="from-purple-500 to-pink-600"
                      textColor="text-purple-400"
                      gradient="from-purple-500 to-pink-600"
                      features={service.features}
                      link={service.link}
                      popular={service.popular}
                      price={service.price}
                      period="/month"
                      variant="holographic"
                      className="h-full cursor-pointer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Search and Filter Section */}
          <section id="services" className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  All Revolutionary Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Browse our complete portfolio of 500+ cutting-edge micro SaaS services
                </p>
              </motion.div>

              {/* Search and Filter Controls */}
              <div className="mb-12">
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                  {/* Search Bar */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm"
                    />
                  </div>

                  {/* Filter and Sort Controls */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    {/* Category Filter */}
                    <div className="relative">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm pr-10"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category === 'all' ? 'All Categories' : category}
                          </option>
                        ))}
                      </select>
                      <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>

                    {/* Sort Options */}
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm pr-10"
                      >
                        <option value="name">Sort by Name</option>
                        <option value="price">Sort by Price</option>
                        <option value="popularity">Sort by Popularity</option>
                        <option value="category">Sort by Category</option>
                        <option value="roi">Sort by ROI</option>
                      </select>
                      <SortAsc className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mt-6 text-center">
                  <p className="text-gray-400">
                    Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
                    <span className="text-cyan-400 font-semibold">{enhancedMicroSaasServices.length}</span> services
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      title={service.name}
                      description={service.description}
                      icon={<div className="text-4xl">{service.icon}</div>}
                      color="from-cyan-500 to-blue-600"
                      textColor="text-cyan-400"
                      gradient="from-cyan-500 to-blue-600"
                      features={service.features}
                      link={service.link}
                      popular={service.popular}
                      price={service.price}
                      period={service.period}
                      variant={service.variant as any}
                      className="h-full cursor-pointer"
                    />
                  </motion.div>
                ))}
              </div>

              {/* No Results Message */}
              {filteredServices.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">No Services Found</h3>
                  <p className="text-gray-400 mb-8">
                    Try adjusting your search terms or category filter to find what you're looking for.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    variant="secondary"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join thousands of forward-thinking companies already transforming their business with Zion Tech Group's revolutionary solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    href="tel:+13024640950"
                    variant="secondary"
                    size="lg"
                  >
                    Call Now: {contactInfo.mobile}
                  </Button>
                </div>

                {/* Final Contact Info */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Get in Touch Today</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Mobile</div>
                      <div className="text-white font-semibold">{contactInfo.mobile}</div>
                      <div className="text-xs text-cyan-400 mt-1">Available 24/7</div>
                    </div>
                    <div className="text-center">
                      <Mail className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-semibold">{contactInfo.email}</div>
                      <div className="text-xs text-green-400 mt-1">Response within 2 hours</div>
                    </div>
                    <div className="text-center">
                      <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                      <div className="text-xs text-purple-400 mt-1">Global headquarters</div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm">
                      <Globe className="w-4 h-4 mr-2" />
                      Visit us at: {contactInfo.website}
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