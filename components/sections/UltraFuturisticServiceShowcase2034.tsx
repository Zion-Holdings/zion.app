import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Shield, Target, Microscope, 
  Star, CheckCircle, ArrowRight, Zap, Sparkles,
  TrendingUp, Users, Award, Globe, Cpu, Database,
  Cloud, Lock, ShieldCheck, Earth, Factory, Car,
  Building, GraduationCap, Scale, Palette, Camera,
  Video, Music, Gamepad2, Heart, Leaf, Sun, Moon,
  Wind, Droplets, Mountain, Code, Wrench, Smartphone,
  BarChart3, Eye, Network, Server, HardDrive, Monitor,
  Laptop, Watch, Headphones, Speaker, Mic, Keyboard,
  Mouse, CircuitBoard, Satellite, Dna, Microchip,
  Telescope, Beaker, TestTube, Syringe, Pill, Stethoscope,
  HeartPulse, Activity, Lightbulb, Flame, Battery, Power,
  Wifi, Bluetooth, Radio, Antenna, Signal, Compass,
  Navigation, Map, Globe2, Phone, Mail, MapPin
} from 'lucide-react';
import { cuttingEdge2034Services } from '../../data/2034-cutting-edge-innovations';
import { emergingTech2034Services } from '../../data/2034-emerging-tech-breakthroughs';

// Custom RefreshCw icon component
const RefreshCw = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-consciousness',
    title: '🧠 AI Consciousness & Evolution',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    icon: Brain,
    color: 'from-violet-600 to-purple-700',
    services: cuttingEdge2034Services.filter(s => s.category.includes('AI')),
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-indigo-600 to-blue-700',
    services: [...cuttingEdge2034Services.filter(s => s.category.includes('Quantum')), ...emergingTech2034Services.filter(s => s.category.includes('Quantum'))],
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    id: 'space-tech',
    title: '🌌 Space & Advanced Tech',
    description: 'Space mining, metaverse development, and more',
    icon: Rocket,
    color: 'from-teal-600 to-emerald-700',
    services: [...cuttingEdge2034Services.filter(s => s.category.includes('Space')), ...cuttingEdge2034Services.filter(s => s.category.includes('Metaverse'))],
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT & Security',
    description: 'Autonomous operations and zero-trust security',
    icon: Shield,
    color: 'from-blue-600 to-cyan-600',
    services: [...cuttingEdge2034Services.filter(s => s.category.includes('Enterprise')), ...cuttingEdge2034Services.filter(s => s.category.includes('DevOps')), ...cuttingEdge2034Services.filter(s => s.category.includes('Zero Trust'))],
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'biotech-neural',
    title: '🧬 Biotech & Neural Interfaces',
    description: 'Breakthrough biotechnology and neural interface platforms',
    icon: Dna,
    color: 'from-green-600 to-emerald-600',
    services: [...emergingTech2034Services.filter(s => s.category.includes('Biotech')), ...emergingTech2034Services.filter(s => s.category.includes('Neural'))],
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'robotics-automation',
    title: '🤖 Robotics & Automation',
    description: 'Swarm robotics and autonomous systems',
    icon: Cpu,
    color: 'from-orange-600 to-red-600',
    services: emergingTech2034Services.filter(s => s.category.includes('Robotics')),
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 'energy-materials',
    title: '⚡ Energy & Advanced Materials',
    description: 'Fusion energy and nanotechnology breakthroughs',
    icon: Battery,
    color: 'from-yellow-600 to-orange-600',
    services: [...emergingTech2034Services.filter(s => s.category.includes('Energy')), ...emergingTech2034Services.filter(s => s.category.includes('Nanotechnology'))],
    gradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    id: 'digital-simulation',
    title: '🔄 Digital Twins & Simulation',
    description: 'Digital twins and advanced simulation platforms',
    icon: RefreshCw,
    color: 'from-teal-600 to-cyan-600',
    services: emergingTech2034Services.filter(s => s.category.includes('Digital Twin')),
    gradient: 'from-teal-500/20 to-cyan-500/20'
  }
];

export default function UltraFuturisticServiceShowcase2034() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const allServices = [
    ...cuttingEdge2034Services,
    ...emergingTech2034Services
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : serviceCategories.find(cat => cat.id === selectedCategory)?.services || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      rotateX: -15,
      y: 20
    },
    visible: { 
      opacity: 1, 
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      rotateX: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,73,153,0.1),transparent_50%)] animate-pulse delay-2000"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            2034 Cutting-Edge Innovations
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future with our revolutionary micro SAAS services, IT solutions, and AI platforms. 
            From AI consciousness to space mining automation, we're building tomorrow's technology today.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
            }`}
          >
            🌟 All Innovations
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className="group"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden group cursor-pointer transition-all duration-500"
                  style={{
                    boxShadow: hoveredService === service.id 
                      ? '0 20px 40px rgba(0, 255, 255, 0.3), 0 0 100px rgba(0, 255, 255, 0.1)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {/* Service Icon */}
                  <div className="absolute top-4 right-4 text-4xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {service.icon}
                  </div>

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 pt-16">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {service.tagline}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">
                        {service.price}
                        <span className="text-lg text-gray-400 font-normal">{service.period}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.trialDays} day trial
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Market Info */}
                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-cyan-400 font-medium">{service.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Growth Rate:</span>
                        <span className="text-green-400 font-medium">{service.growthRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Customers:</span>
                        <span className="text-purple-400 font-medium">{service.customers.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-400">
                          {service.rating} ({service.reviews})
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss how our cutting-edge innovations can transform your business and accelerate your growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
            >
              <span>Start Your Innovation Journey</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}