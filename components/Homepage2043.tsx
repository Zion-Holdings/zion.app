import React, { useEffect, useState, useCallback, Suspense } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, CheckCircle, Users, Award, Zap,
  ChevronDown, ExternalLink, Clock, ShieldCheck, Zap as ZapIcon
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2043AdvancedMicroSaas } from '../data/revolutionary-2043-advanced-micro-saas';
import { revolutionary2043ITServices } from '../data/revolutionary-2043-it-services';
import { revolutionary2043AIServices } from '../data/revolutionary-2043-ai-services';

// Lazy load components for better performance
const ServiceCard = React.lazy(() => import('./ServiceCard'));
const TestimonialSection = React.lazy(() => import('./TestimonialSection'));

const Homepage2043: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    // Set initial viewport width
    setViewportWidth(window.innerWidth);
    
    // Handle resize
    const handleResize = () => setViewportWidth(window.innerWidth);
    
    // Handle scroll for parallax effects
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);
      setIsScrolled(scrolled > 50);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 7000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2043AdvancedMicroSaas,
    ...revolutionary2043ITServices,
    ...revolutionary2043AIServices
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution", description: "Next-generation AI consciousness and emotional intelligence", href: "/ai-consciousness-evolution-2043", color: "from-purple-500 to-pink-500", badge: "New 2043" },
    { icon: Atom, title: "Quantum Computing", description: "Revolutionary quantum computing with consciousness integration", href: "/quantum-neural-ecosystem-2043", color: "from-blue-500 to-cyan-500", badge: "Featured" },
    { icon: Shield, title: "Future Cybersecurity", description: "Quantum-resistant security with consciousness-based protection", href: "/quantum-cybersecurity-2043", color: "from-red-500 to-orange-500", badge: "Hot" },
    { icon: Rocket, title: "Space Technology", description: "AI-powered space resource intelligence and management", href: "/space-resource-intelligence-2043", color: "from-indigo-500 to-purple-500", badge: "Trending" },
    { icon: Cpu, title: "Autonomous Systems", description: "Fully autonomous AI systems with consciousness", href: "/ai-autonomous-research-2043", color: "from-emerald-500 to-teal-500", badge: "Popular" },
    { icon: Database, title: "Business Intelligence", description: "Autonomous business intelligence with consciousness insights", href: "/ai-business-intelligence-2043", color: "from-yellow-500 to-orange-500", badge: "Top Rated" }
  ];

  const stats = [
    { number: "1500+", label: "Revolutionary Services", icon: Star, description: "Cutting-edge solutions", trend: "+15% this month" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, description: "Reliable performance", trend: "SLA maintained" },
    { number: "24/7", label: "AI Support Available", icon: Brain, description: "Always here to help", trend: "Instant response" },
    { number: "150+", label: "Countries Served", icon: Globe, description: "Global reach", trend: "Expanding rapidly" }
  ];

  const benefits = [
    { icon: CheckCircle, title: "Future-Proof Technology", description: "Stay ahead with cutting-edge innovations", highlight: "Quantum-ready" },
    { icon: Users, title: "Expert Team", description: "World-class engineers and scientists", highlight: "PhD-level" },
    { icon: Award, title: "Proven Results", description: "Trusted by Fortune 500 companies", highlight: "99.9% success" },
    { icon: Zap, title: "Lightning Fast", description: "Optimized for maximum performance", highlight: "10x faster" }
  ];

  const handleGetStarted = useCallback(() => {
    // Enhanced conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'conversion',
        event_label: 'hero_get_started',
        value: 1
      });
    }
    window.location.href = '/revolutionary-2043-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    // Enhanced conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'conversion',
        event_label: 'hero_explore_services',
        value: 1
      });
    }
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: any) => {
    // Enhanced conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'service_view',
        event_label: service.id,
        value: 1
      });
    }
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    // Enhanced analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'category_filter',
        event_label: categoryId,
        value: 1
      });
    }
  }, []);

  // Enhanced loading state with progress indicator
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="text-center">
            <div className="relative">
              <div className="w-32 h-32 border-4 border-gray-700 rounded-full">
                <div className="absolute inset-0 w-32 h-32 border-4 border-cyan-500 rounded-full animate-spin border-t-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <motion.h2 
              className="text-3xl font-bold text-white mt-8 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Loading the Future...
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Preparing revolutionary technology solutions for tomorrow's challenges
            </motion.p>
            <motion.div 
              className="mt-6 flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Animated Background with Parallax */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs with parallax effect */}
            <motion.div 
              className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ y: scrollY * 0.1 }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{ 
                y: [0, 20, 0],
                scale: [1, 0.9, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ y: scrollY * -0.05 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
              animate={{ 
                x: [0, 10, 0],
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.35, 0.2]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              style={{ x: scrollY * 0.08 }}
            />
            
            {/* Enhanced animated particles */}
            <div className="absolute inset-0">
              {[...Array(viewportWidth > 768 ? 20 : 12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg"
                  animate={{
                    x: [0, 150, 0],
                    y: [0, -150, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.5, 0],
                    rotate: [0, 360, 0],
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
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              {/* Enhanced Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <SparklesIcon className="w-4 h-4 mr-2" />
                Revolutionary Technology 2043
                <ChevronDown className="w-4 h-4 ml-2 animate-bounce" />
              </motion.div>

              <motion.h1
                id="hero-heading"
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  The Future of
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Technology
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Is Here
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience revolutionary AI consciousness, quantum computing, and space technology solutions 
                that redefine what's possible. Join the future today.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.button
                  onClick={handleGetStarted}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Get started with revolutionary technology solutions"
                >
                  <span className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                </motion.button>

                <motion.button
                  onClick={handleWatchDemo}
                  className="group relative px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Watch demo of our revolutionary technology"
                >
                  <span className="flex items-center">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </span>
                </motion.button>
              </motion.div>

              {/* Enhanced Trust Indicators */}
              <motion.div
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
                  SOC2 Compliant
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  99.99% Uptime
                </div>
                <div className="flex items-center">
                  <ZapIcon className="w-4 h-4 mr-2 text-yellow-400" />
                  Lightning Fast
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-cyan-500 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the cutting-edge technologies that will transform your business and propel you into the future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                    {/* Badge */}
                    {feature.badge && (
                      <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                        {feature.badge}
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <motion.a
                        href={feature.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 px-4 relative bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-700/20 border border-gray-600/30 hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-500/20">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-white mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {stat.description}
                    </p>
                    <div className="text-xs text-cyan-400 font-medium">
                      {stat.trend}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're not just another tech company. We're your partners in building the future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
                    {/* Highlight Badge */}
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                      {benefit.highlight}
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Showcase */}
        <section className="py-20 px-4 relative bg-gradient-to-br from-black/50 to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Revolutionary Services 2043
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Explore our cutting-edge services that are shaping the future of technology
              </p>

              {/* Enhanced Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50 hover:border-cyan-500/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Filter services by ${category.name}`}
                  >
                    <span className="flex items-center">
                      <category.icon className="w-5 h-5 mr-2" />
                      {category.name}
                    </span>
                    {selectedCategory === category.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl -z-10 blur-sm"
                        layoutId="activeCategory"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Suspense fallback={
                    <div className="p-6 rounded-2xl bg-gray-800/30 border border-gray-600/30 animate-pulse">
                      <div className="h-48 bg-gray-700/50 rounded-xl mb-4"></div>
                      <div className="h-4 bg-gray-700/50 rounded mb-2"></div>
                      <div className="h-3 bg-gray-700/50 rounded"></div>
                    </div>
                  }>
                    <ServiceCard
                      service={service}
                      onClick={() => handleServiceClick(service)}
                      className="h-full"
                    />
                  </Suspense>
                </motion.div>
              ))}
            </div>

            {/* View All Services Button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={handleWatchDemo}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View all revolutionary services"
              >
                <span className="flex items-center">
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders are saying about our revolutionary technology.
              </p>
            </motion.div>

            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-gray-800/30 border border-gray-600/30 animate-pulse">
                    <div className="h-4 bg-gray-700/50 rounded mb-4"></div>
                    <div className="h-3 bg-gray-700/50 rounded mb-2"></div>
                    <div className="h-3 bg-gray-700/50 rounded"></div>
                  </div>
                ))}
              </div>
            }>
              <TestimonialSection />
            </Suspense>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 relative bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of forward-thinking companies already leveraging our revolutionary technology. 
                The future is waiting - are you ready to seize it?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={handleGetStarted}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start your transformation journey today"
                >
                  <span className="flex items-center">
                    Start Your Journey
                    <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                </motion.button>

                <motion.button
                  onClick={handleWatchDemo}
                  className="group relative px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Schedule a personalized demo"
                >
                  <span className="flex items-center">
                    <Play className="mr-2 w-5 h-5" />
                    Schedule Demo
                  </span>
                </motion.button>
              </div>

              <motion.p
                className="text-sm text-gray-500 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                No credit card required • Free consultation • 24/7 support
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2043;