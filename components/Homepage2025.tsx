import React, { useEffect, useState, useCallback, memo } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Rocket, Shield,
  ChevronRight, TrendingUp, Globe, Cpu
} from 'lucide-react';
import PerformanceOptimizer from './PerformanceOptimizer';
import SEOEnhancer from './SEOEnhancer';

// Unified service interface
interface UnifiedService {
  id: string;
  name: string;
  description?: string;
  tagline?: string;
  category?: string;
  technology?: string[];
  price?: string;
  period?: string;
  icon?: string;
  popular?: boolean;
}

// Lazy load components for better performance
const UltraFuturisticServiceCard2026 = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

// Memoized feature components for better performance
const FeatureCard = memo(({ feature, index }: { feature: any; index: number }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -10, scale: 1.02 }}
    onClick={() => window.location.href = feature.href}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.location.href = feature.href;
      }
    }}
    aria-label={`Learn more about ${feature.title}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 mb-6">
        <feature.icon className="w-full h-full text-white" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
      <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
        <span className="text-sm font-medium">Learn More</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
));

FeatureCard.displayName = 'FeatureCard';

// Memoized service card component
const ServiceCard = memo(({ service, index }: { service: any; index: number }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -5, scale: 1.02 }}
    onClick={() => window.location.href = service.href}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.location.href = service.href;
      }
    }}
    aria-label={`Learn more about ${service.title}`}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    <div className="relative p-6">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4`}>
        <service.icon className="w-full h-full text-white" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
      <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
        <span className="text-sm font-medium">Learn More</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
));

ServiceCard.displayName = 'ServiceCard';

// Memoized stats component
const StatsCard = memo(({ stat, index }: { stat: any; index: number }) => (
  <motion.div
    className="text-center group"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -5 }}
  >
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <stat.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
    </div>
    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
    <div className="text-gray-400">{stat.label}</div>
  </motion.div>
));

StatsCard.displayName = 'StatsCard';

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFloatingActions, setShowFloatingActions] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => {
      // This interval was for currentServiceIndex, which is removed.
      // Keeping it for now as it might be re-introduced or removed later.
      // setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const staggerContainer = useMemo(() => ({
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }), []);

  // Convert services to unified format
  const allServices: UnifiedService[] = [
    ...innovativeRealMicroSaasServices2025.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    })),
    ...innovativeAIServicesEnhanced2025.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    })),
    ...innovativeITServicesEnhanced2025.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    })),
    ...emergingTechServicesEnhanced2025.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    })),
    ...advancedAIAutomationServices.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    })),
    ...quantumCybersecurityServices.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    }))
  ];

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

  // Enhanced search and filtering
  const filteredServices = useMemo(() => {
    let filtered = allServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        service.technology?.some(tech => tech.toLowerCase().includes(selectedCategory.toLowerCase()))
      );
    }
    
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tagline?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.technology?.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filtered.slice(0, 12);
  }, [allServices, searchQuery, selectedCategory]);

  const categories = [
    { id: 'all', label: 'All Services', icon: '🚀' },
    { id: 'ai', label: 'AI & ML', icon: '🧠' },
    { id: 'quantum', label: 'Quantum', icon: '🔐' },
    { id: 'space', label: 'Space Tech', icon: '🌟' },
    { id: 'cybersecurity', label: 'Security', icon: '🛡️' },
    { id: 'automation', label: 'Automation', icon: '⚡' },
    { id: 'cloud', label: 'Cloud', icon: '☁️' },
    { id: 'fintech', label: 'FinTech', icon: '💰' }
  ];

  const navigationSections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Micro SAAS', icon: '🚀' },
    { id: 'ai', label: 'AI Services', icon: '🧠' },
    { id: 'automation', label: 'AI Automation', icon: '⚡' },
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' },
    { id: 'it', label: 'IT Solutions', icon: '💻' },
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  const services = [
    { icon: Brain, title: "AI & Machine Learning", description: "Advanced AI solutions for enterprise automation", gradient: "from-purple-500 to-pink-500", href: "/ai-services" },
    { icon: Cpu, title: "Quantum Computing", description: "Next-generation computational power", gradient: "from-cyan-500 to-blue-500", href: "/quantum-computing" },
    { icon: Shield, title: "Cybersecurity", description: "Military-grade protection for digital assets", gradient: "from-red-500 to-orange-500", href: "/cybersecurity" },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable cloud solutions for growth", gradient: "from-emerald-500 to-teal-500", href: "/cloud-platform" },
    { icon: BarChart3, title: "Data Analytics", description: "Transform data into actionable insights", gradient: "from-indigo-500 to-purple-500", href: "/data-analytics" },
    { icon: Lock, title: "Blockchain Solutions", description: "Secure, transparent digital infrastructure", gradient: "from-yellow-500 to-orange-500", href: "/blockchain" }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <button 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
                onClick={handleGetStarted}
                aria-label="Get started with Zion Tech Group services"
              >
                Get Started Today
              </button>
              <button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50"
                onClick={handleWatchDemo}
                aria-label="Watch a demo of our services"
              >
                Zion Tech Group
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock infinite possibilities
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/get-started" aria-label="Get started with Zion Tech Group">
                    <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services" aria-label="Explore our services">
                    <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                      Explore Services
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>AI-Powered</span>
                </div>
              </motion.div>
            </motion.div>

        {/* Company Stats */}
        <section 
          className="py-20 px-4 bg-gradient-to-b from-black/30 to-black/50 relative"
          aria-labelledby="stats-heading"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our track record speaks for itself with proven results across multiple industries
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatsCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 px-4" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <motion.div 
                className="p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  50+
                </div>
                <div className="text-gray-300 font-medium">AI Services</div>
                <div className="text-sm text-gray-500 mt-1">Cutting-edge solutions</div>
              </motion.div>
              
              <motion.div 
                className="p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                  100+
                </div>
                <div className="text-gray-300 font-medium">Quantum Solutions</div>
                <div className="text-sm text-gray-500 mt-1">Future-ready technology</div>
              </motion.div>
              
              <motion.div 
                className="p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                  24/7
                </div>
                <div className="text-gray-300 font-medium">Autonomous Operations</div>
                <div className="text-sm text-gray-500 mt-1">Always available</div>
              </motion.div>
              
              <motion.div 
                className="p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                  ∞
                </div>
                <div className="text-gray-300 font-medium">Future Possibilities</div>
                <div className="text-sm text-gray-500 mt-1">Unlimited potential</div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section 
          className="py-20 px-4 relative"
          aria-labelledby="services-heading"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Our Revolutionary Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto"
            >
              Discover cutting-edge AI, quantum computing, and autonomous solutions that transform businesses and industries
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <h2 
                id="services-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive range of cutting-edge technology solutions designed to transform your business and accelerate your digital transformation journey
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
            
            {/* View All Services CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link href="/services" aria-label="View all our services">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 mx-auto">
                  View All Services
                  <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Innovation Showcase */}
        <section 
          className="py-20 px-4 bg-gradient-to-b from-black/50 to-black/30 relative"
          aria-labelledby="innovation-heading"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 
                id="innovation-heading"
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
              >
                Innovation at Every Level
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From autonomous operations to quantum breakthroughs, we're redefining what's possible in technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
                  onClick={() => window.location.href = '/get-started'}
                  aria-label="Start your journey with Zion Tech Group"
                >
                  Start Your Journey
                </button>
                <button 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50"
                  onClick={() => window.location.href = '/demo'}
                  aria-label="Schedule a demo of our services"
                >
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">
                  <Brain className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Autonomous AI</h3>
                <p className="text-gray-300 leading-relaxed">
                  Self-learning systems that continuously improve and adapt to your business needs
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-xl backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">
                  <Atom className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Harness the power of quantum mechanics for unprecedented computational capabilities
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-xl backdrop-blur-sm hover:border-green-400/40 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">
                  <Rocket className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Space Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pioneering solutions for space exploration, mining, and interplanetary technology
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;