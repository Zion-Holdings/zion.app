import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, MessageCircle,
  X, Menu, Linkedin, Twitter, Github
} from 'lucide-react';
import Head from 'next/head';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realPracticalMicroSaasServices2025 } from '../data/2025-real-practical-micro-saas-services';
import { advancedAIITSpecializedServices2025 } from '../data/2025-advanced-ai-it-specialized-services';

// Import new components
import AccessibilityEnhancer from './AccessibilityEnhancer';
import PerformanceMonitor from './PerformanceMonitor';
import LoadingContent, { HeroSkeleton, CategorySkeleton, ServiceCardSkeleton } from './LoadingStates';

const EnhancedHomepage2045: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      // Mouse tracking for future parallax effects
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading time for better UX
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(loadingTimer);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realPracticalMicroSaasServices2025,
    ...advancedAIITSpecializedServices2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allRevolutionaryServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-platform-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Hybrid Computing", description: "Quantum-powered AI with consciousness integration", href: "/quantum-ai-hybrid-computing-platform-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity Intelligence", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-intelligence-2045", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Autonomous Business Intelligence", description: "Fully autonomous AI business intelligence", href: "/autonomous-ai-business-intelligence-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Quantum Cloud Infrastructure", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-platform-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Autonomous DevOps Intelligence", description: "AI-powered DevOps optimization", href: "/autonomous-devops-intelligence-platform-2045", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "5000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: Star },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Error boundary fallback
  if (hasError) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
          <p className="text-gray-400 mb-6">We're experiencing technical difficulties. Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors focus-ring-cyan"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <AccessibilityEnhancer>
      <>
        <Head>
          <title>Zion Tech Group - Revolutionary AI & IT Services 2045</title>
          <meta name="description" content="Discover the future of technology with Zion Tech Group's revolutionary AI, quantum computing, and IT infrastructure services. Transform your business with cutting-edge solutions." />
          <meta name="keywords" content="AI services, quantum computing, IT infrastructure, cybersecurity, micro SAAS, business automation, Zion Tech Group" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://ziontechgroup.com" />
          
          {/* Enhanced SEO Meta Tags */}
          <meta property="og:title" content="Zion Tech Group - Revolutionary AI & IT Services 2045" />
          <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and next-generation IT infrastructure." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:site_name" content="Zion Tech Group" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & IT Services 2045" />
          <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and next-generation IT infrastructure." />
          
          {/* Performance and Accessibility Meta Tags */}
          <meta name="theme-color" content="#06b6d4" />
          <meta name="color-scheme" content="dark" />
          <meta name="prefers-color-scheme" content="dark" />
          
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Zion Tech Group",
                "url": "https://ziontechgroup.com",
                "logo": "https://ziontechgroup.com/logo.png",
                "description": "Revolutionary technology solutions for the future of business.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "364 E Main St STE 1008",
                  "addressLocality": "Middletown",
                  "addressRegion": "DE",
                  "postalCode": "19709",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-302-464-0950",
                  "contactType": "customer service",
                  "email": "kleber@ziontechgroup.com"
                },
                "sameAs": [
                  "https://linkedin.com/company/ziontechgroup",
                  "https://twitter.com/ziontechgroup",
                  "https://github.com/ziontechgroup"
                ]
              })
            }}
          />
        </Head>

        <div className="min-h-screen bg-black text-white overflow-hidden">
          {/* Animated Background */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.3),transparent_50%)]"></div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: 999999,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="relative z-50 bg-black/20 backdrop-blur-xl border-b border-cyan-500/20" role="navigation" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8" role="menubar">
                  {[
                    { name: 'Home', href: '/', 'aria-current': 'page' as const },
                    { name: 'Services', href: '/services' },
                    { name: 'Solutions', href: '/solutions' },
                    { name: 'About', href: '/about' },
                    { name: 'Contact', href: '/contact' }
                  ].map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group focus-ring-cyan"
                      whileHover={{ scale: 1.05 }}
                      role="menuitem"
                      aria-current={item['aria-current']}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="hidden md:block"
                >
                  <Link href="/contact">
                    <motion.button
                      className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 focus-ring-cyan"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Get started with Zion Tech Group"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-gray-300 hover:text-cyan-400 focus-ring-cyan"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  aria-label="Toggle mobile menu"
                  aria-expanded={showMobileMenu}
                  aria-controls="mobile-menu"
                >
                  {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {showMobileMenu && (
                <motion.div
                  id="mobile-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-black/90 backdrop-blur-xl border-t border-cyan-500/20"
                  role="menu"
                  aria-label="Mobile navigation menu"
                >
                  <div className="px-4 py-4 space-y-4">
                    {[
                      { name: 'Home', href: '/', 'aria-current': 'page' as const },
                      { name: 'Services', href: '/services' },
                      { name: 'Solutions', href: '/solutions' },
                      { name: 'About', href: '/about' },
                      { name: 'Contact', href: '/contact' }
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 focus-ring-cyan"
                        onClick={() => setShowMobileMenu(false)}
                        role="menuitem"
                        aria-current={item['aria-current']}
                      >
                        {item.name}
                      </a>
                    ))}
                    <Link href="/contact">
                      <button 
                        className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 focus-ring-cyan"
                        role="menuitem"
                      >
                        Get Started
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* Main Content */}
          <main id="main-content" role="main">
            {isLoading ? (
              <HeroSkeleton />
            ) : (
              <>
                {/* Hero Section */}
                <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
                  <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="mb-8"
                    >
                      <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                          Revolutionary
                        </span>
                        <br />
                        <span className="text-white">Technology Solutions</span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                          2045
                        </span>
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Transform your business with cutting-edge AI, quantum computing, and next-generation IT infrastructure. 
                        Experience the future of technology with Zion Tech Group.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                      <Link href="/services">
                        <motion.button
                          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 focus-ring-cyan"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Explore our services"
                        >
                          <span>Explore Services</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                      <Link href="/contact">
                        <motion.button
                          className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center space-x-2 focus-ring-cyan"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Contact us for more information"
                        >
                          <span>Contact Us</span>
                          <MessageCircle className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                      role="region"
                      aria-label="Company statistics"
                    >
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                            {stat.number}
                          </div>
                          <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </section>

                {/* Services Categories */}
                <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="categories-heading">
                  <div className="max-w-7xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="text-center mb-16"
                    >
                      <h2 id="categories-heading" className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          Service Categories
                        </span>
                      </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover our comprehensive range of revolutionary technology services designed to transform your business
                      </p>
                    </motion.div>

                    <motion.div
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      role="grid"
                      aria-label="Service categories"
                    >
                      {categories.map((category) => (
                        <motion.div
                          key={category.id}
                          variants={fadeInUp}
                          className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 focus-ring-cyan"
                          whileHover={{ y: -10, scale: 1.02 }}
                          role="gridcell"
                          tabIndex={0}
                          aria-label={`${category.name} - ${category.count} services available`}
                        >
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <category.icon className="w-8 h-8 text-white" aria-hidden="true" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                          <div className="text-cyan-400 font-semibold text-lg mb-4">{category.count} Services</div>
                          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowRight className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </section>

                {/* Featured Services */}
                <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="features-heading">
                  <div className="max-w-7xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="text-center mb-16"
                    >
                      <h2 id="features-heading" className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                          Featured Services
                        </span>
                      </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Experience the cutting-edge technology that's shaping the future of business
                      </p>
                    </motion.div>

                    <motion.div
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      role="grid"
                      aria-label="Featured services"
                    >
                      {features.map((feature) => (
                        <motion.div
                          key={feature.title}
                          variants={fadeInUp}
                          className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 focus-ring-cyan"
                          whileHover={{ y: -10, scale: 1.02 }}
                          role="gridcell"
                          tabIndex={0}
                          aria-label={`${feature.title} - ${feature.description}`}
                        >
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                          <p className="text-gray-400 mb-6">{feature.description}</p>
                          <Link href={feature.href}>
                            <motion.button
                              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 focus-ring-cyan"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              aria-label={`Learn more about ${feature.title}`}
                            >
                              Learn More
                            </motion.button>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
                  <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20"
                    >
                      <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          Ready to Transform
                        </span>
                        <br />
                        <span className="text-white">Your Business?</span>
                      </h2>
                      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of businesses already leveraging our revolutionary technology solutions. 
                        The future is now.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                          <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 focus-ring-cyan"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Get started today with Zion Tech Group"
                          >
                            Get Started Today
                          </motion.button>
                        </Link>
                        <Link href="/services">
                          <motion.button
                            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200 focus-ring-cyan"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="View all our services"
                          >
                            View All Services
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </section>
              </>
            )}
          </main>

          {/* Footer */}
          <footer className="relative z-10 bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 py-16 px-4 sm:px-6 lg:px-8" role="contentinfo">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Revolutionary technology solutions for the future of business.
                  </p>
                  <div className="flex space-x-4" role="list" aria-label="Social media links">
                    <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem" aria-label="Visit our LinkedIn page">
                      <Linkedin className="w-5 h-5" aria-hidden="true" />
                    </a>
                    <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem" aria-label="Visit our Twitter page">
                      <Twitter className="w-5 h-5" aria-hidden="true" />
                    </a>
                    <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem" aria-label="Visit our GitHub page">
                      <Github className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Services</h3>
                  <ul className="space-y-2" role="list">
                    <li><a href="/services?category=ai" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem">AI & Machine Learning</a></li>
                    <li><a href="/services?category=quantum" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem">Quantum Computing</a></li>
                    <li><a href="/services?category=cybersecurity" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem">Cybersecurity</a></li>
                    <li><a href="/services?category=it" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem">IT Infrastructure</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-2" role="list">
                    <li><a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem">About Us</a></li>
                    <li><a href="/team" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem">Our Team</a></li>
                    <li><a href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem">Careers</a></li>
                    <li><a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors focus-ring-cyan" role="listitem">Contact</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Contact</h3>
                  <div className="space-y-2 text-gray-400">
                    <p><a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors focus-ring-cyan">+1 302 464 0950</a></p>
                    <p><a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors focus-ring-cyan">kleber@ziontechgroup.com</a></p>
                    <address className="not-italic">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>

        {/* Performance Monitor */}
        <PerformanceMonitor />
      </>
    </AccessibilityEnhancer>
  );
};

export default EnhancedHomepage2045;