import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Atom, Rocket, Shield, Cloud, Database, Code, Server, 
  Zap, Palette, Cpu, BarChart3, Settings, Target, CheckCircle,
  ArrowRight, ChevronRight, ChevronLeft, Phone, Mail, MapPin,
  Globe, Lock, Users, Award, Star, Eye, Sparkles, Infinity,
  Layers, Network, Smartphone, Monitor, Watch, Search,
  Camera, Mic, Speaker, Wifi, Bluetooth, Satellite,
  Telescope, Plane, Moon, Sun, Heart, FileText, Handshake, TrendingUp, Book, GraduationCap,
  ShoppingCart, Car, Building, Music, Trees, Leaf, DollarSign, Factory, Battery, Newspaper,
  Filter, Grid, List, SortAsc, SortDesc
} from 'lucide-react';

const Revolutionary2045ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="w-5 h-5" />, count: 150, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 45, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: 25, color: 'from-cyan-500 to-blue-500' },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, count: 20, color: 'from-pink-500 to-red-500' },
    { id: 'metaverse', name: 'Metaverse & VR', icon: <Globe className="w-5 h-5" />, count: 15, color: 'from-green-500 to-emerald-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 20, color: 'from-red-500 to-pink-500' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: 25, color: 'from-blue-500 to-indigo-500' },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: 20, color: 'from-indigo-500 to-purple-500' },
    { id: 'devops', name: 'DevOps & Automation', icon: <Settings className="w-5 h-5" />, count: 15, color: 'from-orange-500 to-red-500' }
  ];

  const allServices = [
    // AI & Machine Learning Services
    {
      name: "AI Consciousness Evolution 2045",
      description: "Revolutionary AI consciousness platform with emotional intelligence and self-awareness",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-600 to-pink-700",
      link: "/ai-consciousness-evolution-2045",
      price: "$2,999/month",
      category: "ai",
      features: ["Emotional Intelligence", "Self-Awareness", "Cognitive Evolution", "Ethical Decision Making"],
      badge: "BREAKTHROUGH",
      rating: 5.0,
      reviews: 128
    },
    {
      name: "AI Autonomous Business Process Automation 2045",
      description: "Fully autonomous business process automation with AI decision-making and continuous learning capabilities",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-600 to-indigo-700",
      link: "/ai-autonomous-business-process-automation-2045",
      price: "$1,999/month",
      category: "ai",
      features: ["Autonomous Decision Making", "Continuous Learning", "Process Optimization", "Real-time Analytics"],
      badge: "NEW",
      rating: 4.9,
      reviews: 89
    },
    {
      name: "AI Consciousness Training Platform 2045",
      description: "Advanced AI consciousness training with emotional intelligence development and ethical decision making",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-600 to-pink-700",
      link: "/ai-consciousness-training-platform-2045",
      price: "$3,499/month",
      category: "ai",
      features: ["Emotional Intelligence", "Ethical Training", "Consciousness Development", "Behavioral Analysis"],
      badge: "INNOVATIVE",
      rating: 4.8,
      reviews: 67
    },

    // Quantum Computing Services
    {
      name: "Quantum Neural Ecosystem 2045",
      description: "Hybrid quantum-AI computing for unprecedented computational power",
      icon: <Atom className="w-8 h-8" />,
      color: "from-cyan-600 to-blue-700",
      link: "/quantum-neural-ecosystem-2045",
      price: "$4,999/month",
      category: "quantum",
      features: ["Quantum Processing", "Neural Networks", "Hybrid Computing", "Exponential Performance"],
      badge: "QUANTUM",
      rating: 5.0,
      reviews: 156
    },
    {
      name: "Quantum Bio-Computing Platform 2045",
      description: "Revolutionary quantum computing platform that integrates biological systems for unprecedented processing power",
      icon: <Atom className="w-8 h-8" />,
      color: "from-cyan-600 to-indigo-700",
      link: "/quantum-bio-computing-platform-2045",
      price: "$3,999/month",
      category: "quantum",
      features: ["Biological Integration", "Quantum Processing", "DNA Computing", "Bio-Security"],
      badge: "BREAKTHROUGH",
      rating: 4.9,
      reviews: 92
    },
    {
      name: "Quantum Neural Network Platform 2045",
      description: "Revolutionary quantum neural networks with hybrid quantum-classical computing capabilities",
      icon: <Atom className="w-8 h-8" />,
      color: "from-cyan-600 to-blue-700",
      link: "/quantum-neural-network-platform-2045",
      price: "$4,499/month",
      category: "quantum",
      features: ["Quantum Neural Networks", "Hybrid Computing", "Pattern Recognition", "Learning Optimization"],
      badge: "ADVANCED",
      rating: 4.8,
      reviews: 78
    },

    // Space Technology Services
    {
      name: "Space Resource Intelligence 2045",
      description: "Advanced space technology solutions for resource exploration and management",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-pink-600 to-red-700",
      link: "/space-resource-intelligence-2045",
      price: "$3,999/month",
      category: "space",
      features: ["Space Mining", "Resource Mapping", "Colonization Planning", "Interplanetary Logistics"],
      badge: "FUTURE",
      rating: 4.9,
      reviews: 134
    },
    {
      name: "Space Mining Automation Platform 2045",
      description: "Advanced space mining automation with AI-powered resource discovery and extraction optimization",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-pink-600 to-orange-700",
      link: "/space-mining-automation-platform-2045",
      price: "$2,999/month",
      category: "space",
      features: ["Resource Discovery", "Extraction Optimization", "Autonomous Operations", "Interplanetary Logistics"],
      badge: "FUTURE",
      rating: 4.7,
      reviews: 56
    },
    {
      name: "Space Colonization Services 2045",
      description: "Comprehensive space colonization planning and management with AI-powered optimization",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-pink-600 to-red-700",
      link: "/space-colonization-services-2045",
      price: "$5,999/month",
      category: "space",
      features: ["Colonization Planning", "Resource Management", "Life Support Systems", "Sustainable Development"],
      badge: "REVOLUTIONARY",
      rating: 5.0,
      reviews: 89
    },

    // Metaverse & VR Services
    {
      name: "Metaverse Development Studio Pro 2045",
      description: "Complete metaverse creation and management platform",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-600 to-emerald-700",
      link: "/metaverse-development-studio-pro-2045",
      price: "$1,999/month",
      category: "metaverse",
      features: ["3D World Building", "AI Content Generation", "Blockchain Integration", "User Experience Design"],
      badge: "IMMERSIVE",
      rating: 4.8,
      reviews: 112
    },
    {
      name: "Metaverse Digital Reality Platform 2045",
      description: "Complete metaverse platform with AI-generated content, blockchain integration, and immersive experiences",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-600 to-teal-700",
      link: "/metaverse-digital-reality-platform-2045",
      price: "$1,499/month",
      category: "metaverse",
      features: ["AI Content Generation", "Blockchain Integration", "Immersive Experiences", "Social Networking"],
      badge: "IMMERSIVE",
      rating: 4.6,
      reviews: 78
    },

    // Cybersecurity Services
    {
      name: "Quantum Cybersecurity Platform 2045",
      description: "Next-generation quantum-resistant security solutions",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-600 to-pink-700",
      link: "/quantum-cybersecurity-platform-2045",
      price: "$2,499/month",
      category: "cybersecurity",
      features: ["Quantum Resistance", "AI Threat Detection", "Advanced Encryption", "Real-time Monitoring"],
      badge: "SECURE",
      rating: 4.9,
      reviews: 145
    },
    {
      name: "Quantum Internet Security Gateway 2045",
      description: "Next-generation quantum internet security with advanced encryption and threat detection",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-600 to-purple-700",
      link: "/quantum-internet-security-gateway-2045",
      price: "$2,499/month",
      category: "cybersecurity",
      features: ["Quantum Encryption", "Threat Detection", "Network Security", "Real-time Monitoring"],
      badge: "ADVANCED",
      rating: 4.7,
      reviews: 89
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Revolutionary 2045
              <br />
              <span className="text-6xl md:text-8xl">Services Showcase</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology solutions that will define the future of business and humanity
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-200 font-semibold group"
              >
                Request Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                />
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="reviews">Sort by Reviews</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-800/50 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-400'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {sortedServices.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <motion.div
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
              }
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  variants={fadeInUp}
                  className={viewMode === 'grid' 
                    ? "group p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                    : "group p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
                  }
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                      {service.badge}
                    </span>
                  </div>
                  
                  <div className="text-xs text-cyan-400 mb-2 uppercase tracking-wide">{service.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-gray-500 bg-gray-800/50 rounded px-2 py-1">
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Rating and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({service.reviews})</span>
                    </div>
                    <div className="text-lg font-bold text-cyan-400">
                      {service.price}
                    </div>
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 text-center shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with 2045 Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how our revolutionary services can drive your success into the future
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-cyan-400">
                <Phone className="w-6 h-6" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-purple-400">
                <Mail className="w-6 h-6" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-pink-400">
                <MapPin className="w-6 h-6" />
                <span className="font-semibold text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-200 font-semibold group"
              >
                Request Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Revolutionary2045ServicesShowcase;