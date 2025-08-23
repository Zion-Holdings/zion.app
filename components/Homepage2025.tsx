import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Atom, Shield, Zap, Search, MessageCircle, Phone, Mail,
  ChevronDown, Star, Clock, Users, TrendingUp
} from 'lucide-react';

// Performance optimization: Memoized stats data
const STATS_DATA = [
  { value: '500+', label: 'Projects Delivered', icon: Star, color: 'text-cyan-400' },
  { value: '50+', label: 'AI Solutions', icon: Brain, color: 'text-purple-400' },
  { value: '25+', label: 'Quantum Services', icon: Atom, color: 'text-blue-400' },
  { value: '99.9%', label: 'Uptime SLA', icon: Shield, color: 'text-green-400' }
];

// Performance optimization: Memoized features data
const FEATURES_DATA = [
  {
    icon: Brain,
    title: 'AI-First Approach',
    description: 'Leading-edge AI consciousness and emotional intelligence that adapts to your business needs.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Atom,
    title: 'Quantum Innovation',
    description: 'Breakthrough quantum computing solutions that solve previously impossible problems.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Zero-trust architecture and quantum-secured infrastructure for maximum protection.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Micro SAAS solutions that deploy in minutes, not months, with instant ROI.',
    gradient: 'from-orange-500 to-red-500'
  }
];

// Performance optimization: Memoized industry solutions
const INDUSTRY_SOLUTIONS = [
  {
    icon: 'heart',
    title: 'Healthcare & Life Sciences',
    description: 'AI-powered diagnostics, drug discovery, and patient care optimization',
    features: ['Medical AI Diagnostics', 'Drug Discovery Platform', 'Patient Care Analytics'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: 'dollar-sign',
    title: 'Financial Services',
    description: 'Quantum-enhanced trading, risk assessment, and financial intelligence',
    features: ['Quantum Trading Platform', 'AI Risk Assessment', 'Financial Analytics'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: 'factory',
    title: 'Manufacturing & Industry 4.0',
    description: 'Smart manufacturing, predictive maintenance, and supply chain optimization',
    features: ['Predictive Maintenance AI', 'Supply Chain Optimization', 'Quality Control AI'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: 'palette',
    title: 'Creative & Media',
    description: 'AI-powered content creation, video editing, and creative automation',
    features: ['AI Content Generation', 'Video Editing AI', 'Creative Analytics'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: 'graduation-cap',
    title: 'Education & Training',
    description: 'Personalized learning, skill assessment, and educational AI platforms',
    features: ['AI Learning Platform', 'Skill Assessment AI', 'Personalized Education'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: 'scale',
    title: 'Legal & Compliance',
    description: 'Document analysis, contract review, and regulatory compliance automation',
    features: ['Legal Document AI', 'Contract Analysis', 'Compliance Automation'],
    gradient: 'from-teal-500 to-cyan-500'
  }
];

const Homepage2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showFloatingActions, setShowFloatingActions] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Performance optimization: Debounced search
  const debouncedSearch = useCallback(
    useMemo(() => {
      let timeoutId: NodeJS.Timeout;
      return (query: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setSearchQuery(query);
        }, 300);
      };
    }, []),
    []
  );

  // Performance optimization: Intersection Observer with useCallback
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-10% 0px -10% 0px' }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Performance optimization: Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Performance optimization: Throttled scroll handler
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowFloatingActions(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Performance optimization: Memoized search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    // This would integrate with your actual search functionality
    return [];
  }, [searchQuery]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
            role="status"
            aria-live="polite"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6 animate-pulse"></div>
            <h2 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h2>
            <p className="text-gray-400">Preparing the future of technology...</p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-section="hero"
        aria-labelledby="hero-heading"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-1/3 w-28 h-28 border border-green-500/20 rounded-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The Future of
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technology
            </span>
            is Here
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Zion Tech Group delivers cutting-edge AI, quantum computing, and space technology solutions that transform businesses and drive innovation.
          </motion.p>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search our services, solutions, or expertise..."
                defaultValue={searchQuery}
                onChange={(e) => debouncedSearch(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                aria-label="Search services and solutions"
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                aria-label="Search"
              >
                Search
              </button>
            </div>
            
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl z-50">
                {searchResults.map((result, index) => (
                  <div key={index} className="p-3 hover:bg-gray-800/50 cursor-pointer border-b border-gray-700 last:border-b-0">
                    {result}
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Get started with Zion Tech Group"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/demo"
              className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Request a demo of our services"
            >
              Request Demo
            </Link>
          </motion.div>

          {/* Enhanced Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            role="region"
            aria-label="Company Statistics"
          >
            {STATS_DATA.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section 
        className="py-20 px-4 bg-gradient-to-b from-black to-gray-900"
        data-section="services"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="services-heading" className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another tech company. We're the architects of tomorrow's digital landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES_DATA.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
                whileHover={{ y: -5 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Industry Solutions */}
      <section 
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
        data-section="industries"
        aria-labelledby="industries-heading"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="industries-heading" className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Industry Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI and quantum solutions for every industry, designed to solve your most complex challenges and drive unprecedented growth and efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRY_SOLUTIONS.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {/* Icon mapping would go here */}
                    <div className="w-8 h-8 bg-current rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 text-cyan-400 flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section 
        className="py-16 bg-gradient-to-b from-black to-gray-900"
        data-section="contact"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 id="contact-heading" className="sr-only">Contact Information</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
              <a 
                href="tel:+13024640950" 
                className="flex items-center hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2"
                aria-label="Call us at +1 302 464 0950"
              >
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2"
                aria-label="Email us at kleber@ziontechgroup.com"
              >
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-current rounded-full"></div>
                364 E Main St STE 1008 Middletown DE 19709
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Floating Actions */}
      <AnimatePresence>
        {showFloatingActions && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-50 space-y-4"
            role="complementary"
            aria-label="Quick Actions"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center text-white transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              <ChevronDown className="w-6 h-6 transform rotate-180" aria-hidden="true" />
            </motion.button>
            <motion.a
              href="tel:+13024640950"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/25 flex items-center justify-center text-white transition-all duration-300"
              aria-label="Call us now"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Homepage2025;