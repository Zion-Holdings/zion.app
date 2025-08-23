import React, { useEffect, useState, useCallback, useMemo, Suspense } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, Users, TrendingUp, Brain, Shield, Rocket, Globe, Lock, Cpu, Database, Cloud, BarChart3,
  Atom, Target, Zap, Infinity, Sparkles, Star, Eye, Heart, Code, Palette, Layers, Loader2
} from 'lucide-react';

// Enhanced types for better TypeScript support
interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  link: string;
  bgImage?: string;
}

// Loading fallback component with better performance
const LoadingFallback = React.memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="relative">
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      <p className="text-xl text-gray-300 mb-2 font-medium">Loading Zion Tech Group 2040...</p>
      <p className="text-sm text-gray-500">Preparing your futuristic digital transformation journey</p>
    </motion.div>
  </div>
));

LoadingFallback.displayName = 'LoadingFallback';

// Lazy load heavy components for better performance
const LazyPerformanceMonitor = lazy(() => import('./PerformanceMonitor'));
const LazyAccessibilityEnhancer = lazy(() => import('./AccessibilityEnhancer'));

// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-700"></div>
    <div className="h-6 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-10 bg-gray-700 rounded"></div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="text-center p-8">
    <div className="text-red-400 text-6xl mb-4">⚠️</div>
    <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
    <p className="text-gray-400 mb-6">{error.message}</p>
    <button
      onClick={resetErrorBoundary}
      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
    >
      Try again
    </button>
  </div>
);

// Lazy load heavy components
const LazyServiceCard = React.lazy(() => import('./ServiceCard'));
const LazyStatsSection = React.lazy(() => import('./StatsSection'));
const LazyFeaturesGrid = React.lazy(() => import('./FeaturesGrid'));

const Homepage2040: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);
    }, 100);
    
    // Auto-rotate featured services with better performance
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
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
    try {
      window.location.href = '/revolutionary-2040-2041-pricing-showcase';
    } catch (err) {
      setError('Navigation failed');
    }
  }, []);

  const handleWatchDemo = useCallback(() => {
    try {
      window.location.href = '/services';
    } catch (err) {
      setError('Navigation failed');
    }
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
      <main className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
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
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 8 + i * 0.5,
                    repeat: Infinity as any,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

                  {/* Enhanced CTA Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Link 
                      href="/innovative-2040-futuristic-services-showcase"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25"
                    >
                      <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Explore Services
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    <Link 
                      href="/contact"
                      className="group inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transform hover:scale-105"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Get Started
                    </Link>
                  </motion.div>

                  {/* Contact Information */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>Middletown, DE</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
                <p className="text-xs text-gray-500 mt-2">Scroll to explore</p>
              </motion.div>
            </section>

            {/* Enhanced Services Section */}
            <section id="services" className="py-20 px-4 bg-gray-900">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Target className="w-4 h-4" />
                    Our Services
                  </motion.div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">2040 Technology</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Experience the future with our cutting-edge AI, quantum computing, and autonomous systems
                  </p>
                </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/40 backdrop-blur-xl border-t border-cyan-500/30"
            >
              <div className="px-4 py-4 space-y-4">
                <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  Services
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  About
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  Contact
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  Blog
                </Link>
                
                {/* Mobile Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full px-4 py-2 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Elements with reduced animation for better performance */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
        </div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Company Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
              role="banner"
              aria-label="Company recognition"
            >
              <Star className="w-5 h-5" aria-hidden="true" />
              <span>Innovation Leader 2025</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              id="hero-heading"
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide
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
          </div>

            {/* Featured Service Showcase with Suspense */}
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
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                      <Brain className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {featuredServices[currentServiceIndex]?.name || 'AI Consciousness Evolution'}
                    </h4>
                    <p className="text-gray-300 mb-4">
                      {featuredServices[currentServiceIndex]?.tagline || 'Next-generation AI consciousness and emotional intelligence'}
                    </p>
                    <button 
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                      onClick={() => {
                        try {
                          window.location.href = featuredServices[currentServiceIndex]?.slug || '/services';
                        } catch (err) {
                          setError('Navigation failed');
                        }
                      }}
                      aria-label={`Learn more about ${featuredServices[currentServiceIndex]?.name || 'AI Consciousness Evolution'}`}
                    >
                      Learn More
                    </button>
                  </motion.div>
                </Suspense>
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
      
      {/* Lazy load performance components */}
      <Suspense fallback={<div className="hidden">Loading...</div>}>
        <LazyPerformanceMonitor showUI={true} />
      </Suspense>
    </Layout>
  );
};

export default Homepage2040;