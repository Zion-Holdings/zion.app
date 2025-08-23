import React, { useState, useEffect, useCallback, useMemo, Suspense, lazy } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Brain,
  Atom,
  Cpu,
  Star
} from 'lucide-react';
import { cuttingEdgeInnovativeServices2025 } from '../data/2025-cutting-edge-innovative-services';

// Lazy load heavy components for better performance
const LazyServiceCard = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));
const LazyServiceCardErrorBoundary = lazy(() => import('./ui/ServiceCardErrorBoundary'));



const EnhancedHomepage2025: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Memoized animation variants for better performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }), []);

  const floatingVariants = useMemo(() => ({
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }), []);



  // Memoized stats data
  const statsData = useMemo(() => [
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
      icon: Sparkles,
      color: "text-green-400",
      hoverColor: "group-hover:text-green-300",
      neonColor: "shadow-green-400/50"
    }
  ], []);

  // Optimized auto-rotate with useCallback
  const rotateServices = useCallback(() => {
    if (isPlaying) {
      setCurrentServiceIndex((prev) => 
        (prev + 1) % cuttingEdgeInnovativeServices2025.length
      );
    }
  }, [isPlaying]);

  // Auto-rotate featured services with better performance
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(rotateServices, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, rotateServices]);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const currentService = cuttingEdgeInnovativeServices2025[currentServiceIndex];

  // Accessibility improvements
  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  
  const handleMuteToggle = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Futuristic Animated Background - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Simplified Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Optimized Floating Geometric Shapes */}
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          aria-hidden="true"
        ></motion.div>
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '1s' }}
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          aria-hidden="true"
        ></motion.div>
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
          aria-hidden="true"
        ></motion.div>
        
        {/* Reduced Particle Effects for Performance */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
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
                repeat: Infinity,
                ease: "linear" as const
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              aria-hidden="true"
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
                aria-label="Company status badge"
              >
                <Star className="w-4 h-4" />
                <span>Leading AI & Quantum Technology 2025</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                id="hero-heading"
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                style={{
                  textShadow: '0 0 30px rgba(6, 182, 212, 0.8)'
                }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <br />
                <span className="text-3xl md:text-5xl text-gray-200">
                  Revolutionary AI & Quantum Solutions
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                Pioneering the future of technology with innovative AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="/services">
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Explore our services"
                  >
                    <span className="relative z-10">Explore Services</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </Link>
                
                <Link href="/contact">
                  <motion.button
                    className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Contact us for consultation"
                  >
                    <span className="relative z-10">Get Consultation</span>
                    <div className="absolute inset-0 bg-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Media Controls */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center space-x-4 mt-8"
                role="group"
                aria-label="Media controls"
              >
                <button
                  onClick={handlePlayPause}
                  className="p-3 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  aria-label={isPlaying ? "Pause service rotation" : "Play service rotation"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                
                <button
                  onClick={handleMuteToggle}
                  className="p-3 rounded-full bg-purple-500/20 border border-purple-400/50 text-purple-400 hover:bg-purple-500/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          className="py-20 px-4 relative"
          aria-labelledby="stats-heading"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              id="stats-heading"
              className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.neonColor}`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  
                  <div className={`text-4xl font-bold mb-2 ${stat.color} ${stat.hoverColor}`}>
                    {stat.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section 
          className="py-20 px-4 relative"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                id="services-heading"
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge AI and quantum technology solutions
              </p>
            </motion.div>

            {/* Featured Service Showcase */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{currentService.icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{currentService.name}</h3>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                    {currentService.description}
                  </p>
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <span className="text-3xl font-bold text-cyan-400">{currentService.price}</span>
                    <span className="text-gray-400">{currentService.period}</span>
                  </div>
                  <Link href={`/services/${currentService.id}`}>
                    <motion.button
                      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Learn more about ${currentService.name}`}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cuttingEdgeInnovativeServices2025.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Suspense fallback={
                    <div className="p-6 bg-gray-800/50 border border-gray-700/50 rounded-lg animate-pulse">
                      <div className="h-4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    </div>
                  }>
                    <LazyServiceCardErrorBoundary>
                      <LazyServiceCard service={service} />
                    </LazyServiceCardErrorBoundary>
                  </Suspense>
                </motion.div>
              ))}
            </div>

            {/* View All Services Button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/services">
                <motion.button
                  className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View all our services"
                >
                  <span className="relative z-10">View All Services</span>
                  <div className="absolute inset-0 bg-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section 
          className="py-20 px-4 relative"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                id="cta-heading"
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of technology with Zion Tech Group's revolutionary AI and quantum solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Get started with Zion Tech Group"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
                <Link href="/demo">
                  <motion.button
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Request a demo of our services"
                  >
                    Request Demo
                  </motion.button>
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