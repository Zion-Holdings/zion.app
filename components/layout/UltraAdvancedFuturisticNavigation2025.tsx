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
  FileText, Video
} from 'lucide-react';

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
        description: 'Intelligent inventory management with AI forecasting',
        icon: <ShoppingCart className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Customer Success Automation', 
        href: '/customer-success-automation', 
        description: 'Automate customer success workflows and boost retention',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Financial Analytics Dashboard', 
        href: '/financial-analytics-dashboard', 
        description: 'Real-time financial insights and automated reporting',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        name: 'HR Automation Suite', 
        href: '/hr-automation-suite', 
        description: 'Streamline HR processes with AI-powered automation',
        icon: <Users className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  },
  {
    name: 'Enterprise IT Services',
    href: '/enterprise-it',
    icon: <Server className="w-5 h-5" />,
    description: 'Advanced enterprise IT solutions and automation',
    badge: 'Featured',
    category: 'enterprise-it',
    color: 'from-blue-500 to-indigo-500',
    children: [
      { 
        name: 'All Enterprise IT Services', 
        href: '/enterprise-it', 
        description: 'Complete enterprise IT solutions overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Cybersecurity Compliance Automation', 
        href: '/cybersecurity-compliance-automation', 
        description: 'Automate cybersecurity compliance with AI monitoring',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500',
        featured: true
      },
      { 
        name: 'Cloud Migration Automation', 
        href: '/cloud-migration-automation', 
        description: 'Automate cloud migration with intelligent planning',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'DevOps Automation Platform', 
        href: '/devops-automation-platform', 
        description: 'Comprehensive DevOps automation with CI/CD',
        icon: <Code className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Data Analytics Automation', 
        href: '/data-analytics-automation', 
        description: 'Automate data analytics with AI-powered insights',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Network Automation Suite', 
        href: '/network-automation-suite', 
        description: 'Automate network management with intelligent monitoring',
        icon: <Network className="w-4 h-4" />,
        color: 'from-indigo-500 to-blue-500'
      }
    ]
  },
  {
    name: 'AI & Machine Learning',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Advanced AI and machine learning solutions',
    badge: 'Hot',
    category: 'ai-ml',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'All AI Services', 
        href: '/ai-services', 
        description: 'Complete AI and ML solutions overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Content Generation Suite', 
        href: '/ai-content-generation-suite', 
        description: 'Professional AI content generation with brand consistency',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'AI Customer Service Automation', 
        href: '/ai-customer-service-automation', 
        description: 'Intelligent customer service with human-like interactions',
        icon: <MessageCircle className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'AI Sales Intelligence Platform', 
        href: '/ai-sales-intelligence-platform', 
        description: 'AI-powered sales intelligence with predictive analytics',
        icon: <TrendingUp className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'AI Marketing Automation Suite', 
        href: '/ai-marketing-automation-suite', 
        description: 'Intelligent marketing automation with AI personalization',
        icon: <Target className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      },
      { 
        name: 'AI Predictive Analytics Engine', 
        href: '/ai-predictive-analytics-engine', 
        description: 'Advanced predictive analytics with machine learning',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  },
  {
    name: 'Revolutionary 2040+',
    href: '/revolutionary-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: '2040+',
    category: 'revolutionary',
    color: 'from-cyan-500 to-blue-500',
    children: [
      { 
        name: 'All Revolutionary Services', 
        href: '/revolutionary-services', 
        description: 'Complete revolutionary services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Consciousness Evolution 2040', 
        href: '/ai-consciousness-evolution-2040', 
        description: 'Next-generation AI consciousness and emotional intelligence',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Neural Ecosystem 2040', 
        href: '/quantum-neural-ecosystem-2040', 
        description: 'Quantum-powered neural network ecosystem',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Space Resource Intelligence 2040', 
        href: '/space-resource-intelligence-2040', 
        description: 'AI-powered space exploration and resource management',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'Autonomous Business Intelligence 2040', 
        href: '/autonomous-business-intelligence-2040', 
        description: 'Consciousness-driven business insights',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity Future 2040', 
        href: '/quantum-cybersecurity-future-2040', 
        description: 'Future-proof quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions and consulting',
    category: 'solutions',
    color: 'from-orange-500 to-red-500',
    children: [
      { 
        name: 'All Solutions', 
        href: '/solutions', 
        description: 'Complete solutions overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'E-commerce Solutions', 
        href: '/ecommerce-solutions', 
        description: 'Complete e-commerce automation and optimization',
        icon: <ShoppingCart className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Healthcare Technology', 
        href: '/healthcare-technology', 
        description: 'AI-powered healthcare solutions and automation',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-red-500 to-pink-500'
      },
      { 
        name: 'Financial Services', 
        href: '/financial-services', 
        description: 'Advanced financial technology and automation',
        icon: <DollarSign className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        name: 'Manufacturing Automation', 
        href: '/manufacturing-automation', 
        description: 'Smart manufacturing and Industry 4.0 solutions',
        icon: <Cpu className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <GraduationCap className="w-5 h-5" />,
    description: 'Educational content and industry insights',
    category: 'resources',
    color: 'from-teal-500 to-cyan-500',
    children: [
      { 
        name: 'All Resources', 
        href: '/resources', 
        description: 'Complete resources overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'White Papers', 
        href: '/white-papers', 
        description: 'In-depth industry research and insights',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        name: 'Webinars', 
        href: '/webinars', 
        description: 'Expert-led educational sessions',
        icon: <Video className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Training Programs', 
        href: '/training', 
        description: 'Professional development and certification',
        icon: <GraduationCap className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Real-world implementation success stories',
        icon: <Briefcase className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function UltraAdvancedFuturisticNavigation2025() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-4">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-cyan-100 transition-colors">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 hover:text-cyan-100 transition-colors">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-cyan-400">Zion Tech Group</span>
              <span className="text-cyan-500">|</span>
              <span className="text-cyan-400">Innovation First</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400">Future Technology Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.category || '')}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.category && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl z-50"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-400 mt-1">{child.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/pricing"
              className="px-4 py-2 text-sm font-medium text-cyan-400 hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.category || '')}
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.category ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.category && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={closeMobileMenu}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  href="/pricing"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-sm font-medium text-cyan-400 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 mt-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
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
}