import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, ArrowRight, CheckCircle, 
  Brain, Atom, Rocket, Shield, 
  Target, Microscope, Zap, Globe,
  Phone, Mail, ExternalLink, Search,
  Sparkles, TrendingUp, Users, Award,
  Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap,
  Scale, Palette, Camera, Video, Music, Gamepad2,
  Heart, Leaf, Sun, Moon, Wind, Droplets,
  Mountain, Code, Wrench, Smartphone, BarChart3,
  Eye, Network, Server, HardDrive, Monitor,
  Laptop, Watch, Headphones, Speaker, Mic,
  Keyboard, Mouse, CircuitBoard, Satellite, Dna,
  Microchip, Telescope, Beaker, TestTube, Syringe,
  Pill, Stethoscope, HeartPulse, Activity, Lightbulb,
  Flame, Battery, Power, Wifi, Bluetooth, Radio,
  Antenna, Signal, Compass, Navigation, Map, Globe2
} from 'lucide-react';
import { ultimateFuturisticServices2034 } from '../../data/2034-ultimate-futuristic-services';
import { cuttingEdge2034Services } from '../../data/2034-cutting-edge-innovations';
import { emergingTech2034Services } from '../../data/2034-emerging-tech-breakthroughs';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const UltraFuturisticServiceShowcase2034: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: '🚀 All Services', icon: Globe, count: ultimateFuturisticServices2034.length },
    { id: 'AI & Consciousness', name: '🧠 AI & Consciousness', icon: Brain, count: ultimateFuturisticServices2034.filter(s => s.category === 'AI & Consciousness').length },
    { id: 'Quantum & Emerging Tech', name: '⚛️ Quantum & Emerging Tech', icon: Atom, count: ultimateFuturisticServices2034.filter(s => s.category === 'Quantum & Emerging Tech').length },
    { id: 'Space & Metaverse', name: '🌌 Space & Metaverse', icon: Rocket, count: ultimateFuturisticServices2034.filter(s => s.category === 'Space & Metaverse').length },
    { id: 'Enterprise IT', name: '🏙️ Enterprise IT', icon: Shield, count: ultimateFuturisticServices2034.filter(s => s.category === 'Enterprise IT').length },
    { id: 'Micro SaaS', name: '🎯 Micro SaaS', icon: Target, count: ultimateFuturisticServices2034.filter(s => s.category === 'Micro SaaS').length },
    { id: 'Research & Development', name: '🔬 Research & Development', icon: Microscope, count: ultimateFuturisticServices2034.filter(s => s.category === 'Research & Development').length }
  ];

  const filteredServices = ultimateFuturisticServices2034.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Consciousness':
        return <Brain className="w-6 h-6 text-pink-400" />;
      case 'Quantum & Emerging Tech':
        return <Atom className="w-6 h-6 text-cyan-400" />;
      case 'Space & Metaverse':
        return <Rocket className="w-6 h-6 text-purple-400" />;
      case 'Enterprise IT':
        return <Shield className="w-6 h-6 text-green-400" />;
      case 'Micro SaaS':
        return <Target className="w-6 h-6 text-yellow-400" />;
      case 'Research & Development':
        return <Microscope className="w-6 h-6 text-blue-400" />;
      default:
        return <Zap className="w-6 h-6 text-orange-400" />;
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'AI & Consciousness':
        return 'from-pink-500/20 to-rose-500/20';
      case 'Quantum & Emerging Tech':
        return 'from-cyan-500/20 to-blue-500/20';
      case 'Space & Metaverse':
        return 'from-purple-500/20 to-indigo-500/20';
      case 'Enterprise IT':
        return 'from-green-500/20 to-emerald-500/20';
      case 'Micro SaaS':
        return 'from-yellow-500/20 to-orange-500/20';
      case 'Research & Development':
        return 'from-blue-500/20 to-cyan-500/20';
      default:
        return 'from-gray-500/20 to-slate-500/20';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Consciousness':
        return 'border-pink-500/30 bg-pink-500/10';
      case 'Quantum & Emerging Tech':
        return 'border-cyan-500/30 bg-cyan-500/10';
      case 'Space & Metaverse':
        return 'border-purple-500/30 bg-purple-500/10';
      case 'Enterprise IT':
        return 'border-green-500/30 bg-green-500/10';
      case 'Micro SaaS':
        return 'border-yellow-500/30 bg-yellow-500/10';
      case 'Research & Development':
        return 'border-blue-500/30 bg-blue-500/10';
      default:
        return 'border-gray-500/30 bg-gray-500/10';
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-lg font-medium mb-6">
            <Star className="w-5 h-5 mr-2 text-cyan-400" />
            2034 Revolutionary Services
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Future Technology
            </span>
            <br />
            <span className="text-white">Showcase</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the cutting-edge technologies that will define the next decade. 
            From AI consciousness to quantum computing, discover revolutionary solutions 
            that transform industries and advance humanity.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search revolutionary services, technologies, and solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-white/5 border border-cyan-500/30 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-400'
                    : 'border-cyan-500/30 bg-white/5 text-gray-300 hover:border-cyan-500/50 hover:bg-cyan-500/10'
                }`}
              >
                <span className="text-2xl">{React.createElement(category.icon)}</span>
                <span className="font-medium">{category.name.split(' ').slice(1).join(' ')}</span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or category filters.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-105 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-br from-white/5 to-white/2 border-cyan-500/30'
                      : 'bg-white/5 border-cyan-500/30'
                  } ${getCategoryColor(service.category)}`}
                >
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getCategoryIcon(service.category)}
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-400">{service.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-400">2034</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-gray-500 text-center py-2">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Starting From</h4>
                      <div className="text-2xl font-bold text-white">
                        {service.pricing.monthly}
                      </div>
                      <p className="text-sm text-gray-400">
                        {service.pricing.yearly} • {service.pricing.enterprise}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3">
                      <a
                        href={service.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                      >
                        <span>View Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      
                      <a
                        href={`mailto:${service.contact}?subject=Inquiry about ${service.name}`}
                        className="flex items-center justify-center w-12 h-12 bg-white/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution and discover how our cutting-edge technologies can 
              accelerate your business growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-2 px-8 py-4 bg-white/10 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call {contactInfo.mobile}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFuturisticServiceShowcase2034;
