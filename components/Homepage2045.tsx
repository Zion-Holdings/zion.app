import React, { useEffect, useState, useCallback, Suspense, lazy, useMemo } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  CheckCircle, Users, Award, Clock
} from 'lucide-react';
import EnhancedSEO from './EnhancedSEO';

// Import our new revolutionary services
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';

// Lazy load components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics'));
const InteractiveDemo = lazy(() => import('./InteractiveDemo'));
const PerformanceOptimizer = lazy(() => import('./PerformanceOptimizer'));

// Enhanced loading component
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full animate-ping opacity-75"></div>
    </div>
    <span className="ml-3 text-lg font-medium text-gray-700">Loading revolutionary technology...</span>
  </div>
);

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userInteraction, setUserInteraction] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  
  useEffect(() => {
    setIsClient(true);
    setIsVisible(true);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
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
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices
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
      service.name.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [allRevolutionaryServices, selectedCategory]);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Services', icon: Star, count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI Services', icon: Brain, count: allRevolutionaryServices.filter(s => s.category.toLowerCase().includes('ai')).length },
    { id: 'it', name: 'IT Services', icon: Cpu, count: allRevolutionaryServices.filter(s => s.category.toLowerCase().includes('it')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, count: allRevolutionaryServices.filter(s => s.category.toLowerCase().includes('micro-saas')).length },
    { id: 'quantum', name: 'Quantum Tech', icon: Atom, count: allRevolutionaryServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'space', name: 'Space Tech', icon: Globe, count: allRevolutionaryServices.filter(s => s.category.toLowerCase().includes('space')).length }
  ], [allRevolutionaryServices]);

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Neural Networks 2045", description: "Quantum-powered AI with consciousness integration", href: "/quantum-neural-network-platform-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity 2045", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2045", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence 2045", description: "AI-powered space exploration with consciousness", href: "/space-resource-intelligence-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Business Intelligence 2045", description: "Fully autonomous AI business intelligence", href: "/ai-autonomous-business-intelligence-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Quantum Cloud Infrastructure 2045", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-2045", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "2000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2045-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setUserInteraction(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Loading component
  if (isLoading) {
    return <EnhancedLoadingSpinner />;
  }

  // Error component
  if (!isClient) {
    return <EnhancedLoadingSpinner />;
  }

  return (
    <Layout>
      <EnhancedSEO 
        title="Zion Tech Group - Revolutionary 2045 Technology Solutions"
        description="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide."
        keywords="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology"
      />
      <main className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
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
            {!isReducedMotion && (
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
            )}

            {/* Grid pattern with neon glow */}
            <div className="absolute inset-0 opacity-20" aria-hidden="true">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6,182,212,0.3) 1px, transparent 0)`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>

            {/* Floating geometric shapes */}
            {!isReducedMotion && (
              <motion.div
                className="absolute top-32 right-32 w-24 h-24 border border-cyan-400/30 rotate-45"
                animate={{
                  rotate: [45, 405],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity as never,
                  ease: "linear"
                }}
                aria-hidden="true"
              />
            )}
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 
                  id="hero-heading"
                  className="text-5xl md:text-7xl font-bold text-white leading-tight"
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Revolutionary
                  </span>
                  <br />
                  <span className="text-white">Technology 2045</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Pioneering the future with AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWatchDemo}
                  className="group bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                      <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the cutting-edge technology that's reshaping the future of business and innovation.
              </p>
            </motion.div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">
                        ${service.price}/month
                      </span>
                      <button
                        onClick={() => handleServiceClick(service)}
                        className="text-cyan-400 hover:text-white transition-colors duration-300"
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Explore by Category
              </h2>
              <p className="text-lg text-gray-300">
                Discover our revolutionary services organized by technology type
              </p>
            </motion.div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Filtered Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">
                        ${service.price}/month
                      </span>
                      <button
                        onClick={() => handleServiceClick(service)}
                        className="text-cyan-400 hover:text-white transition-colors duration-300"
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Join the revolution and experience the future of technology today. Our AI consciousness and quantum solutions are ready to elevate your business to new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                  className="bg-white text-cyan-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Start Your Transformation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWatchDemo}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-cyan-900 transition-all duration-300"
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;