<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Rocket, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { aiAutonomousServices2026 } from '../../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../../data/2026-metaverse-digital-reality-services';

export default function Revolutionary2026ServicesShowcase() {
  // Get featured services from each category
  const featuredAIServices = aiAutonomousServices2026.slice(0, 3);
  const featuredQuantumServices = quantumSpaceTechServices2026.slice(0, 3);
  const featuredMetaverseServices = metaverseDigitalRealityServices2026.slice(0, 3);
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Globe,
  Cpu,
  Atom,
  Microscope,
  Satellite
} from 'lucide-react';

const Revolutionary2026ServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-blue-500 to-purple-600' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-blue-500 to-cyan-600' },
    { id: 'emerging', name: 'Emerging Tech', icon: Zap, color: 'from-green-500 to-blue-600' },
    { id: 'enterprise', name: 'Enterprise IT', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Cloud, color: 'from-indigo-500 to-purple-600' }
  ];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1c57

  const featuredServices = [
    {
      id: 'ai-quantum-financial-trading',
      name: 'AI Quantum Financial Trading',
      tagline: 'Revolutionary AI-powered quantum computing for financial markets',
      price: '$5,999',
      period: '/month',
      description: 'Next-generation AI platform combining quantum computing algorithms with machine learning for ultra-fast, intelligent financial trading decisions.',
      icon: '⚛️💹',
      color: 'from-purple-600 to-blue-600',
      category: 'ai',
      popular: true,
      features: ['Quantum-enhanced AI algorithms', 'Real-time market analysis', '99.7% accuracy', 'Automated trading execution']
    },
    {
      id: 'ai-metaverse-development',
      name: 'AI Metaverse Development Platform',
      tagline: 'Create immersive metaverse experiences with AI-powered tools',
      price: '$1,299',
      period: '/month',
      description: 'Comprehensive AI-powered platform for building, deploying, and managing metaverse experiences with advanced 3D modeling and AI NPCs.',
      icon: '🌐🎮',
      color: 'from-green-500 to-blue-600',
      category: 'ai',
      popular: true,
      features: ['AI-powered 3D generation', 'Intelligent NPC systems', 'Real-time optimization', 'Cross-platform compatibility']
    },
    {
      id: 'quantum-computing-as-a-service',
      name: 'Quantum Computing as a Service',
      tagline: 'Access quantum computing power through the cloud',
      price: '$2,999',
      period: '/month',
      description: 'Enterprise-grade quantum computing platform providing access to quantum processors, algorithms, and development tools.',
      icon: '⚛️☁️',
      color: 'from-purple-600 to-indigo-700',
      category: 'quantum',
      popular: false,
      features: ['50-1000+ qubit access', 'Quantum algorithm library', 'Real-time execution', 'Expert consulting']
    },
    {
      id: 'advanced-robotics-platform',
      name: 'Advanced Robotics Platform',
      tagline: 'Next-generation robotics with AI and computer vision',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive robotics platform combining advanced AI, computer vision, and machine learning for autonomous robots.',
      icon: '🤖👁️',
      color: 'from-blue-500 to-green-600',
      category: 'emerging',
      popular: true,
      features: ['AI-powered vision', 'Autonomous navigation', 'Advanced motion planning', 'Safety monitoring']
    },
    {
      id: 'zero-trust-network-architecture',
      name: 'Zero Trust Network Architecture',
      tagline: 'Next-generation security with zero trust principles',
      price: '$4,999',
      period: '/month',
      description: 'Comprehensive zero trust network architecture implementation providing advanced security and continuous monitoring.',
      icon: '🛡️🔒',
      color: 'from-red-600 to-orange-600',
      category: 'enterprise',
      popular: true,
      features: ['Identity-based access', 'Continuous authentication', 'Real-time monitoring', 'Automated response']
    },
    {
      id: 'ai-content-creation-suite',
      name: 'AI Content Creation Suite',
      tagline: 'Create engaging content with AI-powered tools',
      price: '$299',
      period: '/month',
      description: 'Comprehensive AI-powered content creation platform that generates high-quality articles, social media posts, and marketing copy.',
      icon: '✍️🤖',
      color: 'from-blue-500 to-purple-600',
      category: 'micro-saas',
      popular: true,
      features: ['AI article generation', 'Social media content', 'SEO optimization', 'Multi-language support']
    }
  ];

<<<<<<< HEAD
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
=======
  const filteredServices = activeCategory === 'all' 
    ? featuredServices 
    : featuredServices.filter(service => service.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1c57
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
<<<<<<< HEAD
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">2026 Revolutionary Innovations</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              The Future is Now
            </span>
          </h2>
          
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI, quantum computing, and metaverse technologies ever created. 
            <span className="text-purple-400 font-semibold"> 1000% ROI guaranteed</span> with our revolutionary solutions.
=======
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>2026 Revolutionary Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next-Generation
            </span>
            <br />
            <span className="text-white">Technology Solutions</span>
          </h2>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the future with our revolutionary AI, quantum computing, and emerging technology services designed to transform industries and redefine possibilities.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1c57
          </p>

          {/* Service Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{aiAutonomousServices2026.length}</div>
              <div className="text-gray-400 text-sm">AI Autonomous Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{quantumSpaceTechServices2026.length}</div>
              <div className="text-gray-400 text-sm">Quantum Space Tech</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">{metaverseDigitalRealityServices2026.length}</div>
              <div className="text-gray-400 text-sm">Metaverse Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">∞</div>
              <div className="text-gray-400 text-sm">Possibilities</div>
            </div>
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* AI Autonomous Services Section */}
=======
        {/* Category Filter */}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1c57
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">AI Autonomous Services</h3>
              <p className="text-blue-300">Fully autonomous AI systems that run your business</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAIServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{service.name}</h4>
                      <p className="text-blue-300 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>

                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/services?category=ai-autonomous"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              View All AI Autonomous Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Quantum Space Tech Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Quantum Space Technology</h3>
              <p className="text-indigo-300">Revolutionary quantum-powered space exploration and technology</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredQuantumServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{service.name}</h4>
                      <p className="text-indigo-300 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-indigo-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>

                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/services?category=quantum-space"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Quantum Space Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Metaverse & Digital Reality Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Metaverse & Digital Reality</h3>
              <p className="text-pink-300">Immersive virtual worlds and consciousness interfaces</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMetaverseServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{service.name}</h4>
                      <p className="text-pink-300 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-pink-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>

                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/services?category=metaverse"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Metaverse Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Call to Action Section */}
=======
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20 group-hover:opacity-30`} />
                
                {/* Card Content */}
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </div>
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400">{service.period}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Starting at</div>
                      </div>
                    </div>
                    
                    <Link
                      href={`/services/${service.id}`}
                      className="group inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1c57
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of companies already achieving unprecedented success with our revolutionary 2026 technologies. 
              <span className="text-purple-400 font-semibold"> Contact us today</span> to start your transformation.
=======
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our revolutionary technology solutions to achieve unprecedented growth and innovation.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1c57
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
<<<<<<< HEAD
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              
              <Link 
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm mb-2">Contact Information</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                <span className="text-purple-300">📱 +1 302 464 0950</span>
                <span className="text-purple-300">✉️ kleber@ziontechgroup.com</span>
                <span className="text-purple-300">🌐 ziontechgroup.com</span>
              </div>
=======
              <Link
                href="/services"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Schedule Consultation</span>
              </Link>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1c57
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}