import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, ChevronRight, ExternalLink
} from 'lucide-react';
import EnhancedSEO from './EnhancedSEO';

// Import service data
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';

// Optimized loading component with better accessibility
const OptimizedLoadingSpinner = () => (
  <div className="flex items-center justify-center p-8" role="status" aria-live="polite">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full animate-ping opacity-75" aria-hidden="true"></div>
    </div>
    <span className="ml-3 text-lg font-medium text-gray-700">Loading revolutionary technology...</span>
  </div>
);

// Performance-optimized animations
const optimizedAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  },
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }
};

// Animation variants for Framer Motion
const animationVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  },
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }
};

const OptimizedHomepage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
  }, []);

  // Memoized service data for better performance
  const allRevolutionaryServices = useMemo(() => [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices
  ], []);



  // Optimized filtering function
  const getFilteredServices = useCallback(() => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [allRevolutionaryServices, selectedCategory]);

  // Optimized categories with better accessibility
  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', description: 'View all available services' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', description: 'AI and consciousness services' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', description: 'Quantum computing solutions' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', description: 'Security and protection services' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500', description: 'Space exploration technology' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', description: 'Business optimization services' }
  ];

  // Optimized features with better descriptions
  const features = [
    { 
      icon: Brain, 
      title: "AI Consciousness Evolution 2044", 
      description: "Next-generation AI consciousness with emotional intelligence and self-awareness capabilities", 
      href: "/ai-consciousness-evolution-2044", 
      color: "from-purple-500 to-pink-500",
      badge: "Featured"
    },
    { 
      icon: Atom, 
      title: "Quantum Neural Networks 2044", 
      description: "Quantum-powered AI with consciousness integration and advanced cognitive processing", 
      href: "/quantum-neural-network-platform-2044", 
      color: "from-blue-500 to-cyan-500",
      badge: "New"
    },
    { 
      icon: Shield, 
      title: "Quantum Cybersecurity 2044", 
      description: "Quantum-resistant security with AI consciousness and advanced threat detection", 
      href: "/quantum-cybersecurity-platform-2044", 
      color: "from-red-500 to-orange-500",
      badge: "Popular"
    },
    { 
      icon: Rocket, 
      title: "Space Resource Intelligence 2044", 
      description: "AI-powered space exploration with consciousness and resource optimization", 
      href: "/space-resource-intelligence-2044", 
      color: "from-indigo-500 to-purple-500",
      badge: "Cutting Edge"
    },
    { 
      icon: Cpu, 
      title: "Autonomous Business Intelligence 2044", 
      description: "Fully autonomous AI business intelligence with predictive analytics", 
      href: "/ai-autonomous-business-intelligence-2044", 
      color: "from-emerald-500 to-teal-500",
      badge: "Enterprise"
    },
    { 
      icon: Database, 
      title: "Quantum Cloud Infrastructure 2044", 
      description: "Quantum-powered cloud with consciousness and quantum advantage", 
      href: "/quantum-cloud-infrastructure-2044", 
      color: "from-yellow-500 to-orange-500",
      badge: "Advanced"
    }
  ];

  // Optimized stats with better accessibility
  const stats = [
    { number: "2000+", label: "Revolutionary Services", icon: Star, description: "Cutting-edge solutions", color: "from-purple-500 to-pink-500" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, description: "Reliable performance", color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "AI Support Available", icon: Brain, description: "Always here to help", color: "from-blue-500 to-cyan-500" },
    { number: "200+", label: "Countries Served", icon: Globe, description: "Global reach", color: "from-indigo-500 to-purple-500" }
  ];

  // Optimized event handlers
  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2044-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  // Optimized animations based on user preference
  const getAnimationProps = (animationType: keyof typeof optimizedAnimations) => {
    if (isReducedMotion) {
      return { initial: {}, animate: {}, transition: {} };
    }
    return optimizedAnimations[animationType];
  };

  return (
    <>
      <EnhancedSEO />
      
      
      
      <Layout>
        {/* Main Content */}
        <main className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
          {/* Hero Section */}
          <section 
            className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
            aria-labelledby="hero-heading"
          >
            {/* Optimized Animated Background */}
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              {/* Simplified floating orbs for better performance */}
              <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Hero Content */}
            <div className="text-center max-w-6xl mx-auto relative z-10">
              <motion.div
                {...getAnimationProps('fadeInUp')}
              >
                <h1 
                  id="hero-heading"
                  className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight"
                >
                  Zion Tech Group
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses.
                </p>
                
                {/* Enhanced CTA Buttons with better accessibility */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <button
                    onClick={handleGetStarted}
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Get started with Zion Tech Group services"
                  >
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <button
                    onClick={handleWatchDemo}
                    className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Watch demo of our services"
                  >
                    <span className="flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      Watch Demo
                    </span>
                  </button>
                </div>
              </motion.div>

              {/* Enhanced Stats Section with better accessibility */}
              <motion.div
                variants={animationVariants.staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={getAnimationProps('fadeInUp')}
                    className="text-center group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="flex justify-center mb-3">
                        <stat.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-300 mb-1 font-medium">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-400">
                        {stat.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Enhanced Features Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900" aria-labelledby="features-heading">
            <div className="max-w-7xl mx-auto">
              <motion.div
                {...getAnimationProps('fadeInUp')}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Revolutionary 2044 Technology
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future with our cutting-edge AI consciousness, quantum computing, 
                  and autonomous solutions that redefine what's possible.
                </p>
              </motion.div>

              <motion.div
                variants={animationVariants.staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={getAnimationProps('fadeInUp')}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                      {/* Badge */}
                      {feature.badge && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {feature.badge}
                        </div>
                      )}
                      
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <a
                        href={feature.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:gap-2"
                        aria-label={`Learn more about ${feature.title}`}
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Enhanced Services Showcase */}
          <section className="py-20 px-4 bg-black" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto">
              <motion.div
                {...getAnimationProps('fadeInUp')}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Explore Our Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our comprehensive range of revolutionary technology solutions 
                  designed to transform your business operations.
                </p>
              </motion.div>

              {/* Enhanced Category Filter with better accessibility */}
              <motion.div
                {...getAnimationProps('fadeInUp')}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 mb-12"
                role="tablist"
                aria-label="Service categories"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                    role="tab"
                    aria-selected={selectedCategory === category.id}
                    aria-controls={`services-${category.id}`}
                    title={category.description}
                  >
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </button>
                ))}
              </motion.div>

              {/* Services Grid with better performance */}
              <motion.div
                variants={animationVariants.staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                role="tabpanel"
                aria-labelledby={`services-${selectedCategory}`}
              >
                {getFilteredServices().slice(0, 9).map((service) => (
                  <motion.div
                    key={service.slug}
                    variants={getAnimationProps('fadeInUp')}
                    className="group cursor-pointer"
                    onClick={() => handleServiceClick(service)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleServiceClick(service);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${service.name} service`}
                  >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Cpu className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                          {service.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-medium text-sm">
                          Learn More
                        </span>
                        <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* View All Services Button */}
              <motion.div
                {...getAnimationProps('fadeInUp')}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="View all services"
                >
                  <span className="flex items-center gap-2">
                    View All Services
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </a>
              </motion.div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                {...getAnimationProps('fadeInUp')}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of forward-thinking companies already leveraging our 
                  revolutionary 2044 technology solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={handleGetStarted}
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Start your transformation journey"
                  >
                    <span className="flex items-center gap-2">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <a
                    href="/contact"
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Contact our team"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default OptimizedHomepage;