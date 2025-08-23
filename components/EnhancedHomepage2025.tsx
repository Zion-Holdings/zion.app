import React, { Suspense, lazy, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Target, Users, Cpu, Sparkles, Eye,
  Layers, Infinity, Crown, Award, Lightbulb,
  ChevronRight, Play, Pause, Volume2, VolumeX
} from 'lucide-react';

// Import new services
import { cuttingEdgeInnovativeServices2025 } from '../data/2025-cutting-edge-innovative-services';

// Lazy load heavy components for better performance
const LazyServiceCard = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

const EnhancedHomepage2025: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Enhanced animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: 999999,
        ease: "easeInOut" as const
      }
    }
  };

  const neonGlowVariants = {
    glow: {
      boxShadow: [
        "0 0 5px #06b6d4",
        "0 0 20px #06b6d4",
        "0 0 40px #06b6d4",
        "0 0 5px #06b6d4"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const statsData = [
    {
      number: "50+",
      label: "AI Services",
      description: "Cutting-edge solutions",
      icon: Brain,
      color: "text-cyan-400",
      hoverColor: "group-hover:text-cyan-300",
      neonColor: "shadow-cyan-400/50"
    },
    {
      number: "100+",
      label: "Quantum Solutions",
      description: "Next-gen computing",
      icon: Atom,
      color: "text-blue-400",
      hoverColor: "group-hover:text-blue-300",
      neonColor: "shadow-blue-400/50"
    },
    {
      number: "24/7",
      label: "Autonomous Operations",
      description: "Always available",
      icon: Cpu,
      color: "text-purple-400",
      hoverColor: "group-hover:text-purple-300",
      neonColor: "shadow-purple-400/50"
    },
    {
      number: "∞",
      label: "Future Possibilities",
      description: "Unlimited potential",
      icon: Infinity,
      color: "text-green-400",
      hoverColor: "group-hover:text-green-300",
      neonColor: "shadow-green-400/50"
    }
  ];

  // Auto-rotate featured services
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentServiceIndex((prev) => 
          (prev + 1) % cuttingEdgeInnovativeServices2025.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const currentService = cuttingEdgeInnovativeServices2025[currentServiceIndex];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
        ></motion.div>
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '1s' }}
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
        ></motion.div>
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
        ></motion.div>
        
        {/* Particle Effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                x: [0, Math.random() * 1000],
                y: [0, Math.random() * 1000],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: 999999,
                ease: "linear" as const
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10" id="main">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative"
          aria-labelledby="hero-heading"
        >
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Company Badge with Neon Effect */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                  textShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
                }}
                role="banner"
                aria-label="Company recognition"
              >
                <Star className="w-5 h-5" aria-hidden="true" />
                <span>Innovation Leader 2025</span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </motion.div>
              
              {/* Main Heading with Enhanced Neon Effect */}
              <motion.h1 
                variants={itemVariants}
                id="hero-heading"
                className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.4)'
                }}
              >
                Zion Tech Group
              </motion.h1>
              
              {/* Enhanced Subtitle */}
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Pioneering the future of technology with <span className="text-cyan-400 font-semibold">innovative AI consciousness</span>, 
                <span className="text-blue-400 font-semibold"> quantum computing</span>, and 
                <span className="text-purple-400 font-semibold"> autonomous solutions</span> that transform businesses worldwide
              </motion.p>
              
              {/* Enhanced CTA Section */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <Link href="/get-started" aria-label="Get started with our services">
                  <button 
                    className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black relative overflow-hidden"
                    style={{
                      boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
                    }}
                  >
                    <span className="flex items-center gap-3">
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </Link>
                <Link href="/services" aria-label="Learn more about our services">
                  <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black backdrop-blur-sm"
                    style={{
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                    }}>
                    Learn More
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase" aria-label="View our 2025 services showcase">
                  <button className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black backdrop-blur-sm"
                    style={{
                      boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)',
                    }}>
                    2025 Services Showcase
                  </button>
                </Link>
              </motion.div>
              
              {/* Trust Indicators with Enhanced Design */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-8 items-center"
              >
                <div className="flex items-center space-x-2 text-gray-400">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Industry Leader</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>500+ Clients</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span>Global Reach</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Revolutionary
                </span> Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge solutions are transforming industries and driving innovation across the globe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                    style={{
                      boxShadow: `0 0 30px ${stat.neonColor}`,
                    }}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                    <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                    <div className="text-gray-400">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service Showcase */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Featured
                </span> Innovation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our most revolutionary service in action
              </p>
            </motion.div>

            {/* Service Showcase with Controls */}
            <div className="relative">
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                  style={{
                    boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-2xl">{currentService.icon || '🚀'}</span>
                        <span className="text-sm text-cyan-400 font-medium">{currentService.category}</span>
                        {currentService.popular && (
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{currentService.name}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{currentService.description}</p>
                      
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="text-3xl font-bold text-cyan-400">{currentService.price}</div>
                        <div className="text-gray-400">{currentService.period}</div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {currentService.features?.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Link href={`/services/${currentService.id}`}>
                        <button className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                          <span className="flex items-center space-x-2">
                            Learn More
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </button>
                      </Link>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🚀</div>
                          <h4 className="text-xl font-semibold text-white mb-2">Revolutionary Technology</h4>
                          <p className="text-gray-300 text-sm">
                            Experience the future of {currentService.category.toLowerCase()} with our cutting-edge platform
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Service Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {cuttingEdgeInnovativeServices2025.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentServiceIndex 
                        ? 'bg-cyan-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-12"
              style={{
                boxShadow: '0 0 50px rgba(6, 182, 212, 0.4)',
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary AI, quantum computing, and autonomous solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center space-x-2">
                      Get Started Today
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Explore Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EnhancedHomepage2025;