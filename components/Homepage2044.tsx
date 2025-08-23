import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Star, Loader2
} from 'lucide-react';
import Head from 'next/head';

// Lazy load components for better performance
const TestimonialSection = lazy(() => import('./TestimonialSection'));

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
    <span className="ml-2 text-cyan-400">Loading...</span>
  </div>
);

const Homepage2044: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const initializePage = async () => {
      try {
        setIsVisible(true);
        setIsLoading(false);
        
        // Auto-rotate featured services
        const interval = setInterval(() => {
          setCurrentServiceIndex((prev) => (prev + 1) % 6);
        }, 6000);
        
        return () => {
          clearInterval(interval);
        };
      } catch {
        setError('Failed to initialize page');
        setIsLoading(false);
      }
    };

    initializePage();
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2044", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2044", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Neural Networks 2044", description: "Quantum-powered AI with consciousness integration", href: "/quantum-neural-network-platform-2044", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity 2044", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2044", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence 2044", description: "AI-powered space exploration with consciousness", href: "/space-resource-intelligence-2044", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Business Intelligence 2044", description: "Fully autonomous AI business intelligence", href: "/ai-autonomous-business-intelligence-2044", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Quantum Cloud Infrastructure 2044", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-2044", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "2000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2044-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);


        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs with neon effects */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse shadow-[0_0_100px_rgba(6,182,212,0.5)]" aria-hidden="true"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 shadow-[0_0_100px_rgba(168,85,247,0.5)]" aria-hidden="true"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500 shadow-[0_0_100px_rgba(16,185,129,0.5)]" aria-hidden="true"></div>
            
            {/* Animated particles with neon trails */}
            <div className="absolute inset-0" aria-hidden="true">
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
                    repeat: Infinity as never,
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
            <div className="absolute inset-0 opacity-20" aria-hidden="true">
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
                repeat: Infinity as never,
                ease: "linear"
              }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute bottom-32 left-32 w-16 h-16 border border-purple-400/30 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity as never,
                ease: "easeInOut"
              }}
              aria-hidden="true"
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
        <section className="py-24 px-4 relative" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="features-heading" className="text-5xl font-bold text-white mb-6">
                Revolutionary Technology Features
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Discover the cutting-edge features that make our 2044 technology revolutionary
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      
                      <a
                        href={feature.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group-hover:translate-x-2"
                        aria-label={`Learn more about ${feature.title}`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-4 relative" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all duration-300">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Lazy Loaded */}
        <Suspense fallback={<LoadingSpinner />}>
          <TestimonialSection />
        </Suspense>

        {/* CTA Section */}
        <section className="py-24 px-4 relative" aria-labelledby="cta-heading">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="cta-heading" className="text-5xl font-bold text-white mb-8">
                Ready to Experience the Future?
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
                Join thousands of businesses already transforming their operations with our revolutionary 2044 technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-3xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-xl"
                  onClick={handleGetStarted}
                  aria-label="Get started with Zion Tech Group services"
                >
                  Get Started Today
                  <ArrowRight className="w-6 h-6 ml-3 inline" />
                </button>
                
                <button 
                  className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-xl"
                  onClick={handleWatchDemo}
                  aria-label="Schedule a demo of our services"
                >
                  Schedule Demo
                  <Play className="w-6 h-6 ml-3 inline" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2044;