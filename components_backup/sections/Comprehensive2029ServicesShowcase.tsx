import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, TrendingUp, Zap, Brain, Atom, Rocket, 
  Globe, Shield, Microscope, Target, Layers, 
  Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, 
  Scale, Palette, Camera, Video, Music, Gamepad2, 
  Heart, Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye,
  Network, Server, HardDrive, Monitor, Laptop, 
  Watch, Headphones, Speaker, Mic, Keyboard, 
  Mouse, ArrowRight, CheckCircle, Phone, Mail, MapPin,
  DollarSign, Link, Robot
} from 'lucide-react';
import { cuttingEdgeInnovations2029 } from '../../data/2029-cutting-edge-innovations';
import { emergingTechBreakthroughs2029V3 } from '../../data/2029-emerging-tech-breakthroughs-v3';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const Comprehensive2029ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  // Combine all services
  const allServices = [...cuttingEdgeInnovations2029, ...emergingTechBreakthroughs2029V3];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return b.popular ? 1 : -1;
      }
    });

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-600 to-cyan-600' },
    { id: 'AI', name: 'AI & Consciousness', icon: Brain, color: 'from-violet-600 to-purple-600' },
    { id: 'Quantum', name: 'Quantum Tech', icon: Atom, color: 'from-indigo-600 to-blue-600' },
    { id: 'Space', name: 'Space & Mining', icon: Rocket, color: 'from-teal-600 to-emerald-600' },
    { id: 'Biotech', name: 'Biotech & DNA', icon: Heart, color: 'from-green-600 to-emerald-600' },
    { id: 'Finance', name: 'Quantum Finance', icon: DollarSign, color: 'from-yellow-600 to-orange-600' },
    { id: 'Business', name: 'Business AI', icon: Building, color: 'from-blue-600 to-cyan-600' },
    { id: 'Computing', name: 'Advanced Computing', icon: Cpu, color: 'from-purple-600 to-pink-600' },
    { id: 'Robotics', name: 'Swarm Robotics', icon: Robot, color: 'from-gray-600 to-slate-600' },
    { id: 'Metaverse', name: 'Metaverse & VR', icon: Gamepad2, color: 'from-indigo-600 to-purple-600' },
    { id: 'Healthcare', name: 'AI Healthcare', icon: Heart, color: 'from-emerald-600 to-green-600' },
    { id: 'Blockchain', name: 'Blockchain', icon: Link, color: 'from-blue-600 to-cyan-600' },
    { id: 'Security', name: 'Quantum Security', icon: Shield, color: 'from-indigo-600 to-purple-600' },
    { id: 'Analytics', name: 'Business Intelligence', icon: BarChart3, color: 'from-purple-600 to-pink-600' }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            2029 Cutting-Edge
            <span className="block">Innovation Hub</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the future of technology with our comprehensive suite of revolutionary AI, quantum computing, 
            space technology, and emerging tech solutions. Transform your business with cutting-edge innovations.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                      : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:border-gray-500 hover:bg-gray-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="customers">Most Customers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit="hidden"
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
                  {/* Service Card Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Title and Tagline */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {service.tagline}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {service.price}
                      </span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-300 mb-2">Key Features:</div>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-cyan-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                      <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                        <div className="text-cyan-400 font-semibold">{service.rating}</div>
                        <div className="text-gray-400">Rating</div>
                      </div>
                      <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                        <div className="text-purple-400 font-semibold">{service.customers}</div>
                        <div className="text-gray-400">Customers</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.button>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mt-12 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Showing {filteredServices.length} of {allServices.length} cutting-edge services
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the future of technology with our cutting-edge solutions. Contact us today to discuss how 
              these revolutionary services can accelerate your business growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call {contactInfo.mobile}
                </div>
              </motion.button>
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email {contactInfo.email}
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comprehensive2029ServicesShowcase;