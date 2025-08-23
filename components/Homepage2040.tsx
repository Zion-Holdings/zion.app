import React, { useState, useEffect, Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Search, Grid, List, CheckCircle
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

// Lazy load heavy components
const ServiceCard = lazy(() => import('./ServiceCard'));
const StatsSection = lazy(() => import('./StatsSection'));

// Enhanced loading fallback component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
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
      
      {/* Skeleton loading animation */}
      <div className="mt-8 space-y-4">
        <div className="h-4 bg-gray-700 rounded animate-pulse w-64 mx-auto"></div>
        <div className="h-4 bg-gray-700 rounded animate-pulse w-48 mx-auto"></div>
        <div className="h-4 bg-gray-700 rounded animate-pulse w-56 mx-auto"></div>
      </div>
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

// Skeleton component for service cards
const ServiceCardSkeleton = () => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 animate-pulse">
    <div className="w-16 h-16 bg-gray-700 rounded-xl mb-6"></div>
    <div className="h-6 bg-gray-700 rounded mb-3"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-6 w-3/4"></div>
    <div className="h-8 bg-gray-700 rounded"></div>
  </div>
);

const Homepage2040: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isIntersectionObserverSupported, setIsIntersectionObserverSupported] = useState(false);

  useEffect(() => {
    // Check if Intersection Observer is supported
    setIsIntersectionObserverSupported('IntersectionObserver' in window);
    
    // Simulate content loading with better timing
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

  // Enhanced Intersection Observer for better performance
  useEffect(() => {
    if (isIntersectionObserverSupported) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { 
          threshold: 0.3, 
          rootMargin: '-100px'
        }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, [isIntersectionObserverSupported]);

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
      <AnimatePresence>
        {isVisible && (
          <main className="relative z-10">
            {/* Hero Section */}
            <section 
              id="hero"
              className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
              aria-labelledby="hero-heading"
            >
              {/* Enhanced Animated Background */}
              <motion.div 
                className="absolute inset-0 -z-10"
                variants={backgroundVariants}
                initial="initial"
                animate="animate"
              >
                {/* Floating orbs with reduced motion support */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
                
                {/* Animated particles with reduced motion support */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
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
                        repeat: Infinity,
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

                {/* SVG Pattern Background */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
              </motion.div>

              {/* Hero Content */}
              <div className="relative z-10 max-w-7xl mx-auto text-center">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  className="space-y-8"
                >
                  {/* Main Heading */}
                  <div className="space-y-6">
                    <motion.h1 
                      id="hero-heading"
                      className="text-5xl md:text-7xl font-bold"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Zion Tech Group
                      </span>
                      <br />
                      <span className="text-white">2040</span>
                    </motion.h1>
                    
                    <motion.p 
                      className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Pioneering the future of technology with innovative AI, quantum computing, 
                      and cutting-edge micro SaaS solutions that transform businesses and unlock human potential.
                    </motion.p>
                  </div>

                  {/* Enhanced CTA Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div className="flex items-center space-x-3 text-cyan-400">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-400">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-purple-400">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                      <span>364 E Main St STE 1008 Middletown DE 19709</span>
                    </div>
                  </motion.div>

                  {/* Contact Information */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <button 
                      className="px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg shadow-2xl hover:shadow-cyan-400/25"
                      onClick={() => window.location.href = '/innovative-2040-futuristic-services-showcase'}
                      aria-label="Explore our innovative 2040 services"
                    >
                      Explore 2040 Services
                      <ArrowRight className="w-6 h-6 ml-3 inline" aria-hidden="true" />
                    </button>
                    
                    <button 
                      className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                      onClick={() => window.location.href = '/services'}
                      aria-label="Explore our revolutionary services"
                    >
                      Explore Services
                      <Play className="w-6 h-6 ml-3 inline" aria-hidden="true" />
                    </button>
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
                  aria-label="Scroll down to explore more content"
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

                {/* Services Grid with Lazy Loading */}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {innovative2040FuturisticServices.slice(0, 6).map((service, index) => (
                    <Suspense key={service.id} fallback={<ServiceCardSkeleton />}>
                      <motion.div
                        variants={fadeInUp}
                        className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/25"
                      >
                        {/* Service Icon */}
                        <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(index)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Rocket className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>

                        {/* Service Content */}
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Service Features */}
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Service Price */}
                        <div className="mb-6">
                          <span className="text-2xl font-bold text-cyan-400">
                            {service.price}
                          </span>
                        </div>

                        {/* CTA Button */}
                        <Link 
                          href={service.link}
                          className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-400/25"
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                        </Link>
                      </motion.div>
                    </Suspense>
                  ))}
                </motion.div>

                {/* View All Services Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center mt-12"
                >
                  <Link 
                    href="/innovative-2040-futuristic-services-showcase"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                  >
                    View All 2040 Services
                    <ArrowRight className="w-6 h-6 ml-3" aria-hidden="true" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
        aria-labelledby="hero-heading"
        role="banner"
      >
        {/* Enhanced Background with Performance Optimization */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Enhanced Badge with Accessibility */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
              }}
              role="status"
              aria-label="Latest innovation showcase"
            >
              <Star className="w-4 h-4" aria-hidden="true" />
              <span>2025 Innovation Showcase</span>
              <Star className="w-4 h-4 text-yellow-400" aria-hidden="true" />
            </motion.div>

            {/* Enhanced Main Heading with Better Typography */}
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
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide
            </motion.p>

                {/* Features Grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {[
                    {
                      icon: Brain,
                      title: "AI-First Approach",
                      description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation"
                    },
                    {
                      icon: Shield,
                      title: "Enterprise Security",
                      description: "Bank-grade security protocols and compliance standards protect your business and data"
                    },
                    {
                      icon: Zap,
                      title: "Lightning Fast",
                      description: "Optimized performance and rapid deployment ensure your solutions are always ahead of the curve"
                    },
                    {
                      icon: Users,
                      title: "Expert Team",
                      description: "Our specialists bring decades of combined experience in cutting-edge technology implementation"
                    },
                    {
                      icon: Globe,
                      title: "Global Reach",
                      description: "24/7 support and worldwide deployment capabilities to serve your business anywhere"
                    },
                    {
                      icon: Heart,
                      title: "Customer Success",
                      description: "We're committed to your success with ongoing support, training, and optimization"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="text-center group"
                    >
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-10 h-10 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Stats Section - Lazy Loaded */}
            <Suspense fallback={
              <section className="py-20 px-4 bg-gray-900/50">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="text-center animate-pulse">
                        <div className="h-12 bg-gray-700 rounded mb-4"></div>
                        <div className="h-6 bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            }>
              <StatsSection />
            </Suspense>
          </main>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Homepage2040;