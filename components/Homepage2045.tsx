import React, { useState, useEffect, useCallback, Suspense, lazy, useMemo } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Infinity,
  Loader2, X, Phone
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';

// Lazy load components for better performance with improved loading states
const ServiceCard = lazy(() => import('./ServiceCard'));
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics'));
const InteractiveDemo = lazy(() => import('./InteractiveDemo'));
const PerformanceOptimizer = lazy(() => import('./PerformanceOptimizer'));

// Enhanced loading component with better accessibility
const EnhancedLoadingSpinner = () => (
  <div 
    className="flex items-center justify-center p-8"
    role="status"
    aria-label="Loading revolutionary technology"
  >
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full animate-ping opacity-75"></div>
    </div>
    <span className="ml-3 text-lg font-medium text-gray-700 sr-only">Loading revolutionary technology...</span>
    <span className="ml-3 text-lg font-medium text-gray-700" aria-hidden="true">Loading revolutionary technology...</span>
  </div>
);



const Homepage2045: React.FC = () => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {

    

    
    // Track mouse movement for parallax effects with throttling
    let timeoutId: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 16); // 60fps throttling
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading completion
    const loadingTimer = setTimeout(() => setIsLoading(false), 1000);
    
    return () => {

      clearTimeout(timeoutId);
      clearTimeout(loadingTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Combine all revolutionary services with memoization for performance
  const allRevolutionaryServices = useMemo(() => [
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices
  ], []);

  // Get featured services for rotation
  const featuredServices = useMemo(() => allRevolutionaryServices.slice(0, 6), [allRevolutionaryServices]);

  // Filter services by category with memoization
  const getFilteredServices = useCallback(() => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory, allRevolutionaryServices]);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: revolutionary2045AdvancedAIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: revolutionary2045AdvancedITServices.length }
  ], [allRevolutionaryServices, revolutionary2045AdvancedAIServices, revolutionary2045AdvancedITServices]);

  const features = useMemo(() => [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-platform-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Hybrid Computing", description: "Quantum-powered AI with consciousness integration", href: "/quantum-ai-hybrid-computing-platform-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity Intelligence", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-intelligence-2045", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Autonomous Business Intelligence", description: "Fully autonomous AI business intelligence", href: "/autonomous-ai-business-intelligence-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Quantum Cloud Infrastructure", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-platform-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Autonomous DevOps Intelligence", description: "AI-powered DevOps optimization", href: "/autonomous-devops-intelligence-platform-2045", color: "from-yellow-500 to-orange-500" }
  ], []);

  const stats = useMemo(() => [
    { number: "3000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Consciousness Support", icon: Brain },
    { number: "∞", label: "Scalability Potential", icon: Infinity }
  ], []);

  const handleGetStarted = useCallback(() => {
    // Scroll to services section with smooth behavior
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    try {
      window.location.href = service.slug;
    } catch (error) {
      setError('Failed to navigate to service. Please try again.');
      // Navigation error logged
    }
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    // Reset to first page when changing categories
    setCurrentServiceIndex(0);
  }, []);

  // Show loading state
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-16 h-16 animate-spin mx-auto mb-4 text-cyan-400" />
            <h2 className="text-2xl font-semibold mb-2">Loading Zion Tech Group 2045</h2>
            <p className="text-gray-400">Preparing revolutionary technology...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Show error state
  if (error) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
            <p className="text-gray-400 mb-4">{error}</p>
            <button
              onClick={() => setError(null)}
              className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white relative overflow-hidden">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
          }}
          aria-label="Hero section"
        >
          <div className="max-w-7xl mx-auto text-center relative z-10">
            {/* Animated Background Elements */}
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              aria-hidden="true"
            >
              <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-40 w-3 h-3 bg-purple-400/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-40 left-40 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce"></div>
            </motion.div>

            {/* Main Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Zion Tech Group 2045
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 focus:ring-4 focus:ring-cyan-500/30 focus:outline-none"
                  aria-label="Get started with our services"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button 
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2 focus:ring-4 focus:ring-cyan-500/30 focus:outline-none"
                  aria-label="Watch our demo video"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Featured Services Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                Revolutionary Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredServices.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group cursor-pointer"
                    onClick={() => handleServiceClick(service)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleServiceClick(service);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${service.name} service`}
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-gray-800/70">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <div>
                                                     <h3 className="font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors">
                             {service.name}
                           </h3>
                          <p className="text-sm text-gray-400">{service.category}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-medium">
                          {service.type}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4" aria-label="Services section">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Explore Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover cutting-edge solutions across AI, quantum computing, cybersecurity, and more
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                  }`}
                  aria-pressed={selectedCategory === category.id}
                  aria-label={`Filter services by ${category.name}`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <Suspense fallback={<EnhancedLoadingSpinner />}>
                {getFilteredServices().slice(0, 9).map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <ServiceCard
                      service={service}
                      onClick={() => handleServiceClick(service)}
                      onHover={() => setHoveredService(service.slug)}
                      isHovered={hoveredService === service.slug}
                    />
                  </motion.div>
                ))}
              </Suspense>
            </motion.div>

            {/* Load More Button */}
            {getFilteredServices().length > 9 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg focus:ring-4 focus:ring-purple-500/30 focus:outline-none">
                  Load More Services
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gray-900/50" aria-label="Features section">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge features
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => window.location.href = feature.href}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      window.location.href = feature.href;
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:bg-gray-800/70">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4" aria-label="Statistics section">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
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

        {/* Performance Metrics Section */}
        <section className="py-20 px-4 bg-gray-900/50" aria-label="Performance metrics">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
                Performance Excellence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor and optimize your application performance in real-time
              </p>
            </motion.div>

            <Suspense fallback={<EnhancedLoadingSpinner />}>
              <PerformanceMetrics />
            </Suspense>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20 px-4" aria-label="Interactive demo">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
                Interactive Experience
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our technology firsthand with interactive demonstrations
              </p>
            </motion.div>

            <Suspense fallback={<EnhancedLoadingSpinner />}>
              <InteractiveDemo />
            </Suspense>
          </div>
        </section>

        {/* Performance Optimizer Section */}
        <section className="py-20 px-4 bg-gray-900/50" aria-label="Performance optimization">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                Smart Optimization
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered performance optimization for your applications
              </p>
            </motion.div>

            <Suspense fallback={<EnhancedLoadingSpinner />}>
              <PerformanceOptimizer />
            </Suspense>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4" aria-label="Call to action">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something revolutionary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 focus:ring-4 focus:ring-cyan-500/30 focus:outline-none"
                  aria-label="Get started with our services"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 focus:ring-4 focus:ring-cyan-500/30 focus:outline-none"
                  aria-label="Contact our team"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;