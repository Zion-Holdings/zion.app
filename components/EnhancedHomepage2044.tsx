import React, { useEffect, useState, useCallback, Suspense, lazy, useMemo } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  CheckCircle, Users, Award, Clock
} from 'lucide-react';
import EnhancedSEO from './EnhancedSEO';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';

// Lazy load components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics'));
const InteractiveDemo = lazy(() => import('./InteractiveDemo'));
const PerformanceOptimizer = lazy(() => import('./PerformanceOptimizer'));
const TestimonialSection = lazy(() => import('./TestimonialSection'));

// Enhanced loading component with skeleton
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center p-8" role="status" aria-live="polite">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full animate-ping opacity-75"></div>
    </div>
    <span className="ml-3 text-lg font-medium text-gray-700">Loading revolutionary technology...</span>
  </div>
);

// Skeleton loading component
const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="w-16 h-16 bg-gray-300 rounded-2xl mb-6"></div>
    <div className="h-6 bg-gray-300 rounded mb-4"></div>
    <div className="h-4 bg-gray-300 rounded mb-6"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
  </div>
);

const EnhancedHomepage2044: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [userInteraction, setUserInteraction] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isIntersectionObserverSupported, setIsIntersectionObserverSupported] = useState(true);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    // Check for Intersection Observer support
    setIsIntersectionObserverSupported('IntersectionObserver' in window);
    
    // Auto-rotate featured services (only if no reduced motion)
    if (!mediaQuery.matches) {
      const interval = setInterval(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % 6);
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = useMemo(() => [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices
  ], []);

  // Get featured services for rotation
  const featuredServices = useMemo(() => 
    allRevolutionaryServices.slice(0, 6), [allRevolutionaryServices]
  );

  // Filter services by category
  const getFilteredServices = useCallback(() => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [allRevolutionaryServices, selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2044", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2044", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Neural Networks 2044", description: "Quantum-powered AI with consciousness integration", href: "/quantum-neural-network-platform-2044", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity 2044", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2044", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence 2044", description: "AI-powered space exploration with consciousness", href: "/space-resource-intelligence-2044", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Business Intelligence 2044", description: "Fully autonomous AI business intelligence", href: "/ai-autonomous-business-intelligence-2044", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Quantum Cloud Infrastructure 2044", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-2044", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "2000+", label: "Revolutionary Services", icon: Star, description: "Cutting-edge solutions" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, description: "Reliable performance" },
    { number: "24/7", label: "AI Support Available", icon: Brain, description: "Always here to help" },
    { number: "200+", label: "Countries Served", icon: Globe, description: "Global reach" }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2044-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: any) => {
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setUserInteraction(true);
  }, []);

  // Enhanced animations with reduced motion support
  const fadeInUp = {
    initial: isReducedMotion ? {} : { opacity: 0, y: 20 },
    animate: isReducedMotion ? {} : { opacity: 1, y: 0 },
    transition: isReducedMotion ? {} : { duration: 0.6, ease: "easeOut" as const }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: isReducedMotion ? 0 : 0.1
      }
    }
  };

  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Pioneering the future with revolutionary 2044 technology solutions including AI consciousness, quantum computing, and space technology.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ]
  };

  return (
    <>
      <EnhancedSEO />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Enhanced Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="alert" aria-live="polite">
          <EnhancedLoadingSpinner />
        </div>
      )}
      
      <Layout>
        {/* Main Content */}
        <main className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
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
              {!isReducedMotion && (
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
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Hero Content */}
            <div className="text-center max-w-6xl mx-auto relative z-10">
              <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
              >
                <h1 
                  id="hero-heading"
                  className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight"
                >
                  Zion Tech Group
                </h1>
                
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Pioneering the Future with Revolutionary 2044 Technology Solutions
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
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

          {/* Features Section */}
          <section className="py-24 px-4 relative" aria-labelledby="features-heading">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Revolutionary 2044 Technology
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Experience the cutting-edge solutions that are reshaping the future of technology
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
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
          <Suspense fallback={<EnhancedLoadingSpinner />}>
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
    </>
  );
};

export default EnhancedHomepage2044;