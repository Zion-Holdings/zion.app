import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, TrendingUp, Brain, Shield, Globe, Cpu, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Zap, Phone, Mail, MapPin
} from 'lucide-react';
import Head from 'next/head';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeAIAutonomousServices2025 } from '../data/2025-innovative-ai-autonomous-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';

// Import the new futuristic background
import UltraFuturisticAnimatedBackground from './backgrounds/UltraFuturisticAnimatedBackground';

const EnhancedHomepage2045: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  useEffect(() => {
    setIsClient(true);
    
    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realEnterpriseMicroSaas2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeAIAutonomousServices2025
  ];

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: revolutionary2045AdvancedAIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: revolutionary2045AdvancedITServices.length }
  ];

  const stats = [
    { number: "3000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const handleGetStarted = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  // Don't render until client-side
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
          <p className="text-gray-400">Preparing revolutionary technology</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title>
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Futuristic Animated Background */}
      <UltraFuturisticAnimatedBackground />

      <div className="relative min-h-screen text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Welcome to the Future of
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"> Technology 2045</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Experience the next generation of AI consciousness, quantum computing, and autonomous systems. 
              Transform your business with revolutionary technology that thinks, learns, and evolves.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-lg shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </button>
              <button
                onClick={handleWatchDemo}
                className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-300 font-bold rounded-xl hover:bg-cyan-500/10 transition-all duration-200 text-lg shadow-lg hover:shadow-cyan-500/25"
              >
                Watch Demo
              </button>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Bar */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm border-y border-cyan-500/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            >
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-sm text-gray-300">Mobile</span>
                <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-sm text-gray-300">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-pink-400" />
                <span className="text-sm text-gray-300">Address</span>
                <span className="text-pink-400 text-sm">
                  {contactInfo.address}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Explore Our Revolutionary Services
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().slice(0, 12).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => handleServiceClick(service)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  {/* Pricing */}
                  {service.pricing && (
                    <div className="mb-4 p-3 bg-gray-700/30 rounded-lg">
                      <span className="text-xs text-gray-400">Starting at</span>
                      <div className="text-lg font-bold text-cyan-400">
                        {service.pricing.starter || 'Contact for pricing'}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {getFilteredServices().length > 12 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12"
              >
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 text-lg shadow-lg hover:shadow-purple-500/25"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Join the future of technology with Zion Tech Group's revolutionary solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-lg shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 font-bold rounded-xl hover:bg-purple-500/10 transition-all duration-200 text-lg shadow-lg hover:shadow-purple-500/25"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnhancedHomepage2045;