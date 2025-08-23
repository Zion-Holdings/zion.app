import React, { useEffect, useState, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Globe, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, CheckCircle, Users, Award, Zap,
  Heart, Code, Network, Phone, Mail, MapPin, Rocket as RocketIcon, Target
} from 'lucide-react';

// Import our new revolutionary services
import { ultimate2025InnovativeServicesExpanded } from '../data/2025-ultimate-innovative-services-expanded';

// Lazy load components for better performance
const ServiceCard = React.lazy(() => import('./ServiceCard'));
const TestimonialSection = React.lazy(() => import('./TestimonialSection'));

const Homepage2045: React.FC = () => {
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

  // Get featured services for rotation
  const featuredServices = ultimate2025InnovativeServicesExpanded.slice(0, 6);

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return ultimate2025InnovativeServicesExpanded;
    return ultimate2025InnovativeServicesExpanded.filter(service => 
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
    { icon: Brain, title: "AI Business Intelligence 2025", description: "Transform data into actionable insights with AI-powered analytics", href: "/ai-business-intelligence-platform-2025", color: "from-purple-500 to-pink-500" },
    { icon: Heart, title: "AI Customer Success 2025", description: "Automate customer success with AI-driven insights", href: "/ai-customer-success-automation-2025", color: "from-pink-500 to-purple-500" },
    { icon: Shield, title: "Quantum-Secure Cloud 2025", description: "Future-proof cloud infrastructure with quantum-resistant security", href: "/quantum-secure-cloud-infrastructure-2025", color: "from-red-500 to-orange-500" },
    { icon: Code, title: "AI DevOps Automation 2025", description: "Revolutionize DevOps with AI-driven automation", href: "/ai-powered-devops-automation-2025", color: "from-emerald-500 to-teal-500" },
    { icon: Network, title: "Supply Chain Optimization 2025", description: "Optimize supply chains with AI-driven insights", href: "/intelligent-supply-chain-optimization-2025", color: "from-blue-500 to-cyan-500" },
    { icon: Globe, title: "Space Resource Intelligence 2025", description: "Unlock space resources with AI-powered intelligence", href: "/space-resource-intelligence-platform-2025", color: "from-indigo-500 to-purple-500" }
  ];

  const stats = [
    { number: "2000+", label: "Innovative Services", icon: Star, description: "Cutting-edge solutions" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, description: "Reliable performance" },
    { number: "24/7", label: "AI Support Available", icon: Brain, description: "Always here to help" },
    { number: "200+", label: "Countries Served", icon: Globe, description: "Global reach" }
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
    window.location.href = '/contact';
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-300">Loading the Future...</h2>
          <p className="text-gray-500 mt-2">Preparing revolutionary technology solutions</p>
        </div>
      </div>
    );
  }

  return (
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
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 
              id="hero-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                for 2025 & Beyond
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI services, quantum computing, and space technology. 
              Leading the future of innovation with 2000+ revolutionary solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={handleGetStarted}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:scale-105 hover:shadow-cyan-500/40"
            >
              <span className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
            
            <button
              onClick={handleWatchDemo}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Explore Services</span>
              </span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Services <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">2025</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge AI, quantum computing, and space technology solutions that are transforming industries worldwide.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getFilteredServices().slice(0, 9).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center`}>
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full">
                      {service.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">
                      {service.pricing?.starter || 'Contact for pricing'}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">ZionTech Group</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of technology with our revolutionary solutions and unmatched expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={feature.href}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 font-medium group-hover:translate-x-2 transition-transform duration-200">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock unprecedented growth and efficiency with our revolutionary technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how our revolutionary technology solutions can drive your success in 2025 and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
              <a href="tel:+1 302 464 0950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
              <p className="text-gray-400">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Suspense fallback={<div>Loading testimonials...</div>}>
        <TestimonialSection />
      </Suspense>
    </main>
  );
};

export default Homepage2045;