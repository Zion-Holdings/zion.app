import React, { useEffect, useState, useCallback, Suspense } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, CheckCircle, Users, Award, Zap
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
  
  useEffect(() => {
    // Set initial viewport width
    setViewportWidth(window.innerWidth);
    
    // Handle resize
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 500);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
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
    { icon: Brain, title: "AI Consciousness Evolution", description: "Next-generation AI consciousness and emotional intelligence", href: "/ai-consciousness-evolution-2043", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Computing", description: "Revolutionary quantum computing with consciousness integration", href: "/quantum-neural-ecosystem-2043", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Future Cybersecurity", description: "Quantum-resistant security with consciousness-based protection", href: "/quantum-cybersecurity-2043", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Technology", description: "AI-powered space resource intelligence and management", href: "/space-resource-intelligence-2043", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Systems", description: "Fully autonomous AI systems with consciousness", href: "/ai-autonomous-research-2043", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Business Intelligence", description: "Autonomous business intelligence with consciousness insights", href: "/ai-business-intelligence-2043", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "1500+", label: "Revolutionary Services", icon: Star, description: "Cutting-edge solutions" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, description: "Reliable performance" },
    { number: "24/7", label: "AI Support Available", icon: Brain, description: "Always here to help" },
    { number: "150+", label: "Countries Served", icon: Globe, description: "Global reach" }
  ];

  const benefits = [
    { icon: CheckCircle, title: "Future-Proof Technology", description: "Stay ahead with cutting-edge innovations" },
    { icon: Users, title: "Expert Team", description: "World-class engineers and scientists" },
    { icon: Award, title: "Proven Results", description: "Trusted by Fortune 500 companies" },
    { icon: Zap, title: "Lightning Fast", description: "Optimized for maximum performance" }
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

  // Loading state
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <h2 className="text-2xl font-semibold text-gray-300">Loading the Future...</h2>
            <p className="text-gray-500 mt-2">Preparing revolutionary technology solutions</p>
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
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(viewportWidth > 768 ? 15 : 8)].map((_, i) => (
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
                🚀 Revolutionary 2043 Technology
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button 
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-lg overflow-hidden"
                onClick={handleGetStarted}
                aria-label="Get started with Zion Tech Group revolutionary services"
              >
                <span className="relative z-10 flex items-center">
                  Experience the Future
                  <ArrowRight className="w-6 h-6 ml-3 inline group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg group"
                onClick={handleWatchDemo}
                aria-label="Explore our revolutionary services"
              >
                <span className="flex items-center">
                  Explore Services
                  <Play className="w-6 h-6 ml-3 inline group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of technology with our revolutionary solutions designed for tomorrow's challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Technology Solutions</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our cutting-edge services that are reshaping the future of technology and business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => window.location.href = feature.href}
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Showcase */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Revolutionary Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Filter through our comprehensive catalog of cutting-edge technology solutions.
              </p>
            </motion.div>

            {/* Enhanced Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-full border-2 transition-all duration-300 flex items-center gap-2 group ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                      : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Suspense fallback={
                <div className="col-span-full text-center py-20">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading revolutionary services...</p>
                </div>
              }>
                {getFilteredServices().slice(0, 9).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ServiceCard
                      service={service}
                    />
                  </motion.div>
                ))}
              </Suspense>
            </div>

            {/* View All Services CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => window.location.href = '/services'}
                className="px-12 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 text-lg group"
              >
                <span className="flex items-center justify-center">
                  View All 1500+ Services
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="max-w-6xl mx-auto">
            <Suspense fallback={
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
                <p className="text-gray-400">Loading testimonials...</p>
              </div>
            }>
              <TestimonialSection />
            </Suspense>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Future</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Join thousands of forward-thinking companies already transforming their business with our revolutionary technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={handleGetStarted}
                  className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-lg group"
                >
                  <span className="flex items-center">
                    Start Your Journey
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                <button
                  onClick={handleWatchDemo}
                  className="px-12 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg group"
                >
                  <span className="flex items-center">
                    Schedule a Demo
                    <Play className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2043;