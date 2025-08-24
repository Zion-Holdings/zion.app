import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Menu, X, ChevronDown, Sparkles, 
  Brain, Atom, Rocket, Target, Shield, Cpu,
  Database, Cloud, Lock, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp,
  Phone, Mail, MapPin, Globe, Zap, Handshake,
  Linkedin, Github, Twitter, Youtube, Instagram,
  Home
} from 'lucide-react';

const UltraFuturisticNavigation2034: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Rocket, description: 'Comprehensive IT & AI solutions' },
    { name: '2024 Services', href: '/services-2024', icon: Sparkles, description: 'Latest revolutionary services for 2024' },
    { name: 'Solutions', href: '/solutions', icon: Target, description: 'Industry-specific solutions' },
    { name: 'Pricing', href: '/pricing-2033', icon: TrendingUp, description: 'Transparent pricing plans' },
    { name: 'About', href: '/about', icon: Users, description: 'Our story and team' },
    { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch with us' }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent automation and AI solutions',
      services: [
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: '$299/month' },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', price: '$199/month' },
        { name: 'AI-Powered SEO Automation Pro', href: '/ai-powered-seo-automation-pro', price: '$179/month' },
        { name: 'AI-Powered Social Media Manager', href: '/ai-powered-social-media-manager', price: '$149/month' },
        { name: 'AI-Powered Email Marketing Automation', href: '/ai-powered-email-marketing-automation', price: '$129/month' },
        { name: 'AI-Powered Customer Support Automation', href: '/ai-powered-customer-support-automation', price: '$129/month' },
        { name: 'AI-Powered Project Management Pro', href: '/ai-powered-project-management-pro', price: '$199/month' }
      ]
    },
    {
      name: 'Quantum & Security',
      icon: Atom,
      description: 'Next-generation security and quantum solutions',
      services: [
        { name: 'Quantum-Secure Communication Platform', href: '/quantum-secure-communication', price: '$499/month' },
        { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', price: '$399/month' },
        { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', price: '$799/month' },
        { name: 'Quantum-Secure Database Platform', href: '/quantum-secure-database-platform', price: '$899/month' },
        { name: 'AI-Powered Network Security', href: '/ai-powered-network-security', price: '$549/month' }
      ]
    },
    {
      name: 'Enterprise IT',
      icon: Cpu,
      description: 'Enterprise-grade IT infrastructure and operations',
      services: [
        { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', price: '$599/month' },
        { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', price: '$449/month' },
        { name: 'AI-Powered IT Operations Center', href: '/ai-powered-it-operations-center', price: '$699/month' },
        { name: 'AI-Powered API Management', href: '/ai-powered-api-management', price: '$349/month' },
        { name: 'Intelligent Cloud Cost Optimization', href: '/intelligent-cloud-cost-optimization', price: '$299/month' }
      ]
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-cyan-400' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-black/90 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-gray-300">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-cyan-500/30 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400">Innovation • Intelligence • Impact</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.name === 'Services' ? (
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2 group"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      {item.description && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 border border-cyan-500/30 rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <p className="text-sm text-gray-300">{item.description}</p>
                        </div>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search and CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200"
                />
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                <Handshake className="w-4 h-4" />
                <span>Get Started</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Services Dropdown */}
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-black/95 border-b border-cyan-500/30 backdrop-blur-md"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {serviceCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                          <p className="text-sm text-gray-400">{category.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                                {service.name}
                              </span>
                              <span className="text-sm text-cyan-400 font-medium">
                                {service.price}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-cyan-500/20">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Ready to transform your business?</p>
                    <Link
                      href="/services-2024"
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      <span>View All 2024 Services</span>
                      <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 border-l border-cyan-500/30 p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200"
                />
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-4">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-cyan-500/10"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-cyan-500/20">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 w-full"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraFuturisticNavigation2034;