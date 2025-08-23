import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';

const Homepage2044: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Performance optimization: Use requestIdleCallback for non-critical animations
    const handleVisibility = () => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => setIsVisible(true));
      } else {
        setTimeout(() => setIsVisible(true), 100);
      }
    };

    handleVisibility();
    
    // Auto-rotate featured services with performance optimization
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    
    // Simulate loading completion
    const loadingTimer = setTimeout(() => setIsLoading(false), 500);
    
    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimer);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2044-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);

  // Loading skeleton component
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500 mx-auto mb-8"></div>
            <h2 className="text-2xl text-gray-300">Loading Zion Tech Group...</h2>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2044 Technology Solutions | AI Consciousness & Quantum Computing</title>
        <meta name="description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Experience the future with Zion Tech Group." />
        <meta name="keywords" content="AI consciousness, quantum computing, space technology, cybersecurity, autonomous solutions, business intelligence, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2044 Technology Solutions" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions." />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziontechgroup.com/" />
        <meta property="twitter:title" content="Zion Tech Group - Revolutionary 2044 Technology Solutions" />
        <meta property="twitter:description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions." />
        <meta property="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "sameAs": [
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://github.com/ziontechgroup"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            })
          }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      </Head>

      <Layout>
        {/* Main Content */}
        <main className="relative z-10" role="main" aria-labelledby="hero-heading">
          {/* Hero Section */}
          <section 
            className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
            aria-labelledby="hero-heading"
          >
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              {/* Floating orbs with neon effects */}
              <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse shadow-[0_0_100px_rgba(6,182,212,0.5)]"></div>
              <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 shadow-[0_0_100px_rgba(168,85,247,0.5)]"></div>
              <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500 shadow-[0_0_100px_rgba(16,185,129,0.5)]"></div>
              
              {/* Animated particles with neon trails */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400/40 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                    animate={{
                      x: [0, 150, 0],
                      y: [0, -150, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 8 + i * 0.3,
                      repeat: Infinity as any,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Grid pattern with neon glow */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6,182,212,0.3) 1px, transparent 0)`,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>

              {/* Floating geometric shapes */}
              <motion.div
                className="absolute top-32 right-32 w-24 h-24 border border-cyan-400/30 rotate-45"
                animate={{
                  rotate: [45, 405],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity as any,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-32 left-32 w-16 h-16 border border-purple-400/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity as any,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Hero Content */}
            <div className="text-center max-w-7xl mx-auto relative z-10">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full text-purple-300 text-lg font-medium mb-8 shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-sm">
                  🚀 Revolutionary 2044 Technology
                </span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-10 leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  Zion Tech Group
                </span>
              </motion.h1>
              
              <motion.p
                className="text-3xl md:text-4xl text-gray-300 mb-16 max-w-6xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <button 
                  className="group px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-3xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-xl relative overflow-hidden"
                  onClick={handleGetStarted}
                  aria-label="Get started with Zion Tech Group revolutionary services"
                >
                  <span className="relative z-10 flex items-center">
                    Experience the Future
                    <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </button>
                <button 
                  className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-sm"
                  onClick={handleWatchDemo}
                  aria-label="Explore our revolutionary services"
                >
                  <span className="flex items-center">
                    Explore Services
                    <Play className="w-7 h-7 ml-4" />
                  </span>
                </button>
              </motion.div>

              {/* Featured Service Showcase */}
              <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Featured Revolutionary Services
                  </h2>
                  <p className="text-xl text-gray-400">
                    Experience the future of technology with our cutting-edge solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      className={`relative group cursor-pointer ${
                        index === currentServiceIndex ? 'scale-105' : 'scale-100'
                      } transition-transform duration-500`}
                      onClick={() => handleServiceClick(service)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleServiceClick(service);
                        }
                      }}
                      aria-label={`Learn more about ${service.name}`}
                    >
                      <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:border-cyan-500/50">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                              <Brain className="w-8 h-8 text-white" />
                            </div>
                            <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                              {service.type}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </h3>
                          
                          <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {service.description.substring(0, 120)}...
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-cyan-400">
                              {service.pricing.starter}
                            </span>
                            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold text-white mb-6">
                  Revolutionary Technology Solutions
                </h2>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                  Experience the future of technology with our cutting-edge solutions that transform businesses and drive innovation
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Brain, title: "AI Consciousness Evolution", description: "Next-generation AI with emotional intelligence and consciousness", color: "from-purple-500 to-pink-500" },
                  { icon: Atom, title: "Quantum Neural Networks", description: "Quantum-powered AI with consciousness integration", color: "from-blue-500 to-cyan-500" },
                  { icon: Shield, title: "Quantum Cybersecurity", description: "Quantum-resistant security with AI consciousness", color: "from-red-500 to-orange-500" },
                  { icon: Rocket, title: "Space Resource Intelligence", description: "AI-powered space exploration with consciousness", color: "from-indigo-500 to-purple-500" },
                  { icon: Cpu, title: "Autonomous Business Intelligence", description: "Fully autonomous AI business intelligence", color: "from-emerald-500 to-teal-500" },
                  { icon: Database, title: "Quantum Cloud Infrastructure", description: "Quantum-powered cloud with consciousness", color: "from-yellow-500 to-orange-500" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:border-cyan-500/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-6">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "2000+", label: "Revolutionary Services", icon: Star },
                  { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
                  { number: "24/7", label: "AI Support Available", icon: Brain },
                  { number: "200+", label: "Countries Served", icon: Globe }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Homepage2044;