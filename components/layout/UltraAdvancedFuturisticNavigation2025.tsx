import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Target, Atom, Shield, Zap, Infinity,
  DollarSign, BarChart3, Globe, Star, Sparkles, 
  Grid, List, TrendingUp, Cpu, Cloud, Settings, Monitor,
  Calendar, Calculator, GraduationCap, Palette, Network, 
  Layers, Code, Heart, ShoppingCart, Clock, MessageCircle, 
  HelpCircle, Building, Eye, Heart as HeartIcon, 
  Code as CodeIcon, Palette as PaletteIcon, Database,
  Smartphone, Laptop, Server, Lock, Key, Users, Briefcase,
  FileText, Video, Package, Zap as ZapIcon, Info
} from 'lucide-react';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
  color?: string;
}

function normalizeHref(href: string): string {
  if (!href) return href;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Micro SAAS Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Professional micro SAAS solutions for modern businesses',
    badge: 'New 2025',
    category: 'micro-saas',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'All Micro SAAS Services', 
        href: '/services', 
        description: 'Complete overview of all micro SAAS solutions',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Content Optimizer Pro', 
        href: '/ai-content-optimizer-pro', 
        description: 'AI-powered content optimization for maximum engagement',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Smart Inventory Manager', 
        href: '/smart-inventory-manager', 
        description: 'Intelligent inventory tracking and optimization',
        icon: <Package className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Customer Analytics Suite', 
        href: '/customer-analytics-suite', 
        description: 'Advanced customer behavior analysis and insights',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Automated Email Marketing', 
        href: '/automated-email-marketing', 
        description: 'AI-driven email campaigns and automation',
        icon: <Mail className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      }
    ]
  },
  {
    name: 'Enterprise IT Solutions',
    href: '/enterprise-it',
    icon: <Building className="w-5 h-5" />,
    description: 'Scalable enterprise IT infrastructure and automation',
    badge: 'Enterprise',
    category: 'enterprise-it',
    color: 'from-blue-500 to-indigo-500',
    children: [
      { 
        name: 'All Enterprise IT Solutions', 
        href: '/enterprise-it', 
        description: 'Complete enterprise IT portfolio',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Cybersecurity Compliance Automation', 
        href: '/cybersecurity-compliance-automation', 
        description: 'Automated compliance and security management',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Cloud Migration Automation', 
        href: '/cloud-migration-automation', 
        description: 'Seamless cloud migration and optimization',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'DevOps Automation Platform', 
        href: '/devops-automation-platform', 
        description: 'End-to-end DevOps automation and CI/CD',
        icon: <Cpu className="w-4 h-4" />,
        color: 'from-purple-500 to-indigo-500'
      }
    ]
  },
  {
    name: 'AI & Machine Learning',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Cutting-edge AI and machine learning solutions',
    badge: 'AI-Powered',
    category: 'ai-ml',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'All AI Services', 
        href: '/ai-services', 
        description: 'Complete AI and ML portfolio',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Content Generation Suite', 
        href: '/ai-content-generation-suite', 
        description: 'AI-powered content creation and optimization',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'AI Customer Service Automation', 
        href: '/ai-customer-service-automation', 
        description: 'Intelligent customer support automation',
        icon: <MessageCircle className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'AI Sales Intelligence Platform', 
        href: '/ai-sales-intelligence-platform', 
        description: 'AI-driven sales analytics and insights',
        icon: <TrendingUp className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Next-generation quantum computing solutions',
    badge: 'Quantum',
    category: 'quantum',
    color: 'from-cyan-500 to-blue-500',
    children: [
      { 
        name: 'All Quantum Services', 
        href: '/quantum-services', 
        description: 'Complete quantum technology portfolio',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Security Solutions', 
        href: '/quantum-security-solutions', 
        description: 'Quantum-resistant cryptography and security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500',
        featured: true
      },
      { 
        name: 'Quantum Computing APIs', 
        href: '/quantum-computing-apis', 
        description: 'Access to quantum computing resources',
        icon: <Code className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      }
    ]
  },
  {
    name: 'About',
    href: '/about',
    icon: <Info className="w-5 h-5" />,
    description: 'Learn about Zion Tech Group',
    category: 'company',
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w-5 h-5" />,
    description: 'Get in touch with our team',
    category: 'company',
    color: 'from-green-500 to-emerald-500'
  }
];

const UltraAdvancedFuturisticNavigation2025: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    closeDropdown();
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/90 to-blue-900/90 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+1 302 464 0950" 
                className="flex items-center text-cyan-300 hover:text-cyan-100 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center text-cyan-300 hover:text-cyan-100 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center text-cyan-300">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008 Middletown DE 19709
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://ziontechgroup.com" 
                className="text-cyan-300 hover:text-cyan-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Future-Ready Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 w-80 bg-black/95 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 p-6 z-50">
                      <div className="space-y-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={handleLinkClick}
                            className="block group/child"
                          >
                            <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group-hover/child:bg-cyan-500/10">
                              <div className={`w-10 h-10 bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="text-sm font-semibold text-white group-hover/child:text-cyan-400 transition-colors">
                                    {child.name}
                                  </h4>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                  {child.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {item.href !== '#' && (
                        <div className="mt-6 pt-4 border-t border-cyan-500/20">
                          <Link
                            href={item.href}
                            onClick={handleLinkClick}
                            className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 rounded-xl text-cyan-400 hover:text-cyan-300 transition-all duration-200 group"
                          >
                            <span className="font-medium">View All {item.name}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 border-l border-cyan-500/20">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">Zion Tech Group</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div className="space-y-2">
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                          >
                            <div className="flex items-center space-x-3">
                              {item.icon}
                              <span>{item.name}</span>
                              {item.badge && (
                                <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {activeDropdown === item.name && (
                            <div className="ml-6 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={handleLinkClick}
                                  className="block p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`w-8 h-8 bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} rounded-lg flex items-center justify-center`}>
                                      {child.icon}
                                    </div>
                                    <div>
                                      <div className="font-medium">{child.name}</div>
                                      <div className="text-xs text-gray-500">{child.description}</div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-cyan-500/20">
                  <Link href="/contact">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraAdvancedFuturisticNavigation2025;