import React, { useEffect, useState, useCallback, useMemo, Suspense } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, Users, TrendingUp, Brain, Shield, Rocket, Globe, Lock, Cpu, Database, Cloud, BarChart3,
  Atom, Target, Zap, Infinity, Sparkles, Star, Eye, Heart, Code, Palette, Layers
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2040FuturisticServices } from '../data/revolutionary-2040-futuristic-services';
import { revolutionary2041AdvancedServices } from '../data/revolutionary-2041-advanced-services';

// Lazy load heavy components
const LazyServiceCard = React.lazy(() => import('./ServiceCard'));
const LazyStatsSection = React.lazy(() => import('./StatsSection'));
const LazyFeaturesGrid = React.lazy(() => import('./FeaturesGrid'));

const Homepage2040: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services with better performance
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Use intersection observer for better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const heroSection = document.querySelector('#hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, []);

  // Memoize expensive computations
  const allRevolutionaryServices = useMemo(() => 
    [...revolutionary2040FuturisticServices, ...revolutionary2041AdvancedServices], 
    []
  );

  const featuredServices = useMemo(() => 
    allRevolutionaryServices.slice(0, 6), 
    [allRevolutionaryServices]
  );

  const features = useMemo(() => [
    { icon: Brain, title: "AI Consciousness Evolution", description: "Next-generation AI consciousness and emotional intelligence", href: "/ai-consciousness-evolution-2040", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Computing", description: "Revolutionary quantum computing with consciousness integration", href: "/quantum-neural-ecosystem-2040", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Future Cybersecurity", description: "Quantum-resistant security with consciousness-based protection", href: "/quantum-cybersecurity-future-2040", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Technology", description: "AI-powered space resource intelligence and management", href: "/space-resource-intelligence-2040", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Systems", description: "Fully autonomous AI systems with consciousness", href: "/ai-autonomous-research-2041", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Business Intelligence", description: "Autonomous business intelligence with consciousness insights", href: "/autonomous-business-intelligence-2040", color: "from-yellow-500 to-orange-500" }
  ], []);

  const stats = useMemo(() => [
    { number: "1000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "100+", label: "Countries Served", icon: Globe }
  ], []);

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2040-2041-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  // Optimized animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          id="hero-section"
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Animated Background with better performance */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs with reduced motion support */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 motion-reduce:animate-none"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500 motion-reduce:animate-none"></div>
            
            {/* Animated particles with reduced motion support */}
            <div className="absolute inset-0 motion-reduce:hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 6 + i * 0.5,
                    repeat: Infinity as any,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                🚀 Revolutionary 2040-2041 Technology
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button 
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-base sm:text-lg"
                onClick={handleGetStarted}
                aria-label="Get started with Zion Tech Group revolutionary services"
              >
                Experience the Future
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 inline" />
              </button>
              <button 
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-base sm:text-lg"
                onClick={handleWatchDemo}
                aria-label="Explore our revolutionary services"
              >
                Explore Services
                <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 inline" />
              </button>
            </motion.div>

            {/* Featured Service Showcase */}
            <motion.div
              className="max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Featured Revolutionary Service</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Experience the cutting edge of technology</p>
                </div>
                
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 sm:p-4">
                    <Brain className="w-full h-full text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {featuredServices[currentServiceIndex]?.name}
                  </h4>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    {featuredServices[currentServiceIndex]?.tagline}
                  </p>
                  <button 
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm"
                    onClick={() => window.location.href = `/services`}
                    aria-label={`Learn more about ${featuredServices[currentServiceIndex]?.name}`}
                  >
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 id="features-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge solutions designed for the next decade.
              </p>
            </motion.div>

            <Suspense fallback={<div className="text-center text-gray-400">Loading features...</div>}>
              <LazyFeaturesGrid features={features} />
            </Suspense>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-white/5 to-white/10" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 id="stats-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Our Impact
              </h2>
            </motion.div>

            <Suspense fallback={<div className="text-center text-gray-400">Loading statistics...</div>}>
              <LazyStatsSection stats={stats} />
            </Suspense>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 id="cta-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of companies already using our revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-lg"
                  onClick={handleGetStarted}
                  aria-label="Get started with Zion Tech Group"
                >
                  Start Your Journey
                  <ArrowRight className="w-6 h-6 ml-3 inline" />
                </button>
                <button 
                  className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                  onClick={handleWatchDemo}
                  aria-label="Schedule a consultation"
                >
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2040;