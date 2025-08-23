import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Search, User, ShoppingCart, 
  Brain, Atom, Shield, Rocket, Cpu, Database, Target, Sparkles,
  Home, Briefcase, Users, FileText, Phone, Mail, MapPin, Globe,
  Zap, Star, TrendingUp, Award, Clock, CheckCircle, ExternalLink,
  BarChart3, Palette, Layers, Code, Server, Cloud, Lock, Eye,
  Smartphone, Monitor, Wifi, Settings, HelpCircle, Info, DollarSign,
  GraduationCap, Handshake
} from 'lucide-react';

interface UltraFuturisticNavigation2045Props {
  sidebarOpen?: boolean;
  setSidebarOpen?: (open: boolean) => void;
  theme?: 'dark' | 'light';
  onThemeToggle?: () => void;
}

const UltraFuturisticNavigation2045: React.FC<UltraFuturisticNavigation2045Props> = ({
  sidebarOpen,
  setSidebarOpen,
  theme = 'dark',
  onThemeToggle
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      description: 'Welcome to the future of technology'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase,
      description: 'Explore our revolutionary solutions',
      dropdown: [
        {
          name: 'AI & Machine Learning',
          href: '/services/ai-machine-learning',
          icon: Brain,
          description: 'AI consciousness evolution and development',
          color: 'from-purple-500 to-pink-500',
          subItems: [
            { name: 'AI Business Process Automation', href: '/services/ai-business-process-automation', price: '$399/month' },
            { name: 'AI Customer Experience Platform', href: '/services/ai-customer-experience-platform', price: '$299/month' },
            { name: 'AI Financial Analytics & Risk', href: '/services/ai-financial-analytics-risk', price: '$599/month' },
            { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-diagnostics', price: '$799/month' },
            { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', price: '$449/month' }
          ]
        },
        {
          name: 'Cybersecurity & Compliance',
          href: '/services/cybersecurity',
          icon: Shield,
          description: 'Advanced security and protection',
          color: 'from-red-500 to-orange-500',
          subItems: [
            { name: 'AI Red Teaming Suite', href: '/services/ai-red-teaming-suite', price: '$299/month' },
            { name: 'API Schema Diff Registry', href: '/services/api-schema-diff-registry', price: '$199/month' },
            { name: 'Network Security & Monitoring', href: '/services/network-security-monitoring', price: '$499/month' },
            { name: 'Compliance Automation', href: '/services/compliance-automation', price: '$299/month' },
            { name: 'Zero Trust Security', href: '/services/zero-trust-security', price: '$599/month' }
          ]
        },
        {
          name: 'IT Infrastructure & DevOps',
          href: '/services/it-infrastructure',
          icon: Cpu,
          description: 'Cloud and infrastructure solutions',
          color: 'from-blue-500 to-cyan-500',
          subItems: [
            { name: 'Cloud Infrastructure & DevOps', href: '/services/cloud-infrastructure-devops', price: '$599/month' },
            { name: 'Data Engineering & Analytics', href: '/services/data-engineering-analytics', price: '$799/month' },
            { name: 'API Development & Management', href: '/services/api-development-management', price: '$349/month' },
            { name: 'Mobile App Development', href: '/services/mobile-app-development', price: '$899/month' },
            { name: 'Serverless Cron Manager', href: '/services/serverless-cron-manager', price: '$99/month' }
          ]
        },
        {
          name: 'Micro SAAS Solutions',
          href: '/services/micro-saas',
          icon: Target,
          description: 'Innovative micro SAAS platforms',
          color: 'from-emerald-500 to-teal-500',
          subItems: [
            { name: 'AI Content & SEO Suite', href: '/services/ai-content-seo-suite', price: '$199/month' },
            { name: 'Intelligent Support Automation', href: '/services/intelligent-support-automation', price: '$149/month' },
            { name: 'Advanced Analytics & BI', href: '/services/advanced-analytics-bi', price: '$299/month' },
            { name: 'E-commerce Optimization', href: '/services/ecommerce-optimization-analytics', price: '$179/month' },
            { name: 'HR & Talent Management', href: '/services/hr-talent-management', price: '$249/month' }
          ]
        },
        {
          name: 'Space Technology',
          href: '/services/space-technology',
          icon: Rocket,
          description: 'Space exploration and resource management',
          color: 'from-indigo-500 to-purple-500',
          subItems: [
            { name: 'Space Resource Intelligence', href: '/services/space-resource-intelligence', price: '$1,299/month' },
            { name: 'Satellite Management Platform', href: '/services/satellite-management', price: '$899/month' },
            { name: 'Space Analytics & Insights', href: '/services/space-analytics', price: '$699/month' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Sparkles,
      description: 'Industry-specific technology solutions',
      dropdown: [
        {
          name: 'Healthcare & Biotech',
          href: '/solutions/healthcare',
          icon: Shield,
          description: 'AI-powered healthcare solutions',
          color: 'from-blue-500 to-indigo-500'
        },
        {
          name: 'Financial Services',
          href: '/solutions/financial',
          icon: BarChart3,
          description: 'Fintech and banking solutions',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Manufacturing & Logistics',
          href: '/solutions/manufacturing',
          icon: Layers,
          description: 'Smart manufacturing solutions',
          color: 'from-orange-500 to-red-500'
        },
        {
          name: 'Retail & E-commerce',
          href: '/solutions/retail',
          icon: ShoppingCart,
          description: 'Digital commerce solutions',
          color: 'from-pink-500 to-rose-500'
        },
        {
          name: 'Education & Training',
          href: '/solutions/education',
          icon: Briefcase, // Changed from GraduationCap to Briefcase as GraduationCap is not imported
          description: 'Edtech and learning platforms',
          color: 'from-purple-500 to-violet-500'
        }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: DollarSign, // DollarSign is not imported, but it's in the new_code, so I'll add it.
      description: 'Transparent pricing for all services'
    },
    {
      name: 'About',
      href: '/about',
      icon: Info,
      description: 'Learn about our mission and team',
      dropdown: [
        {
          name: 'Our Mission',
          href: '/mission',
          icon: Target,
          description: 'Pioneering the future of technology',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          name: 'Our Team',
          href: '/team',
          icon: Users,
          description: 'Meet our expert team',
          color: 'from-emerald-500 to-teal-500'
        },
        {
          name: 'Careers',
          href: '/careers',
          icon: Briefcase,
          description: 'Join our revolutionary team',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'Partners',
          href: '/partners',
          icon: Handshake, // Handshake is not imported, but it's in the new_code, so I'll add it.
          description: 'Strategic partnerships',
          color: 'from-orange-500 to-red-500'
        }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      description: 'Get in touch with our experts'
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-lg'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.mobile}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-200">🚀 Pioneering the Future of Technology</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-200">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-cyan-300 font-medium">Revolutionary 2045 Technology</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/10"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/10"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                      >
                        <div className="p-4">
                          {item.dropdown.map((dropdownItem) => (
                            <div key={dropdownItem.name} className="mb-4 last:mb-0">
                              <Link
                                href={dropdownItem.href}
                                className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                                onClick={closeMobileMenu}
                              >
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center flex-shrink-0`}>
                                  <dropdownItem.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                                    {dropdownItem.name}
                                  </h3>
                                  <p className="text-sm text-gray-400 mt-1">
                                    {dropdownItem.description}
                                  </p>
                                  {dropdownItem.subItems && (
                                    <div className="mt-2 space-y-1">
                                      {dropdownItem.subItems.slice(0, 3).map((subItem) => (
                                        <div key={subItem.name} className="flex items-center justify-between text-xs">
                                          <span className="text-gray-400 hover:text-cyan-300 transition-colors">
                                            {subItem.name}
                                          </span>
                                          <span className="text-cyan-400 font-medium">{subItem.price}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <div className={`flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 transition-all duration-300 ${
                isSearchFocused ? 'bg-white/20 ring-2 ring-cyan-500/50' : ''
              }`}>
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-48"
                />
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (setSidebarOpen) {
                  setSidebarOpen(!isOpen);
                }
              }}
              className="text-gray-300 hover:text-white transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-3">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-white placeholder-gray-400 flex-1"
                  />
                </div>
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/10"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-8 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 text-gray-400 hover:text-cyan-300 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                              onClick={closeMobileMenu}
                            >
                              <dropdownItem.icon className="w-4 h-4" />
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/10"
                      onClick={closeMobileMenu}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/30">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center px-6 py-3 rounded-full font-medium transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2045;