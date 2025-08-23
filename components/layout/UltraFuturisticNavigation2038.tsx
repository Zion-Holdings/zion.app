import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Star, Sparkles, 
  Grid, List, TrendingUp, 
  Calendar, Calculator, GraduationCap,
  Cpu, Cloud, Settings, Monitor, Palette, Network, Layers, Code, Heart, ShoppingCart, Clock, MessageCircle, HelpCircle, Building,
  Zap, Users, FileText, ShieldCheck, Database, Server, Lock, Key, Eye, Search, Bell, User, Cog
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
    description: 'Innovative business solutions',
    badge: 'New',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Consciousness', 
        href: '/ai-services', 
        description: 'Advanced AI solutions',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Cpu className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      },
      { 
        name: 'Specialized Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <Target className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    name: 'AI Services',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI platforms',
    badge: 'Featured',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      {
        name: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-2037',
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Emotional Intelligence',
        href: '/ai-emotional-intelligence-coach',
        description: 'Personalized EI coaching',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'AI Autonomous Research',
        href: '/ai-autonomous-research-assistant',
        description: 'Fully autonomous research',
        icon: <Search className="w-4 h-4" />
      },
      {
        name: 'AI Predictive Maintenance',
        href: '/ai-predictive-maintenance-platform',
        description: 'Intelligent asset management',
        icon: <Monitor className="w-4 h-4" />
      },
      {
        name: 'AI Content Personalization',
        href: '/ai-content-personalization-engine',
        description: 'Dynamic content optimization',
        icon: <Palette className="w-4 h-4" />
      },
      {
        name: 'AI Autonomous Ecosystem',
        href: '/ai-autonomous-ecosystem-manager',
        description: 'Complex ecosystem management',
        icon: <Globe className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT Solutions',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Enterprise infrastructure',
    badge: 'Enterprise',
    category: 'it',
    color: 'from-orange-500 to-red-500',
    children: [
      {
        name: 'Quantum-Secure Cloud',
        href: '/quantum-secure-cloud-infrastructure',
        description: 'Future-proof cloud security',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Autonomous IT Operations',
        href: '/autonomous-it-operations-center',
        description: 'Self-managing infrastructure',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'Edge Computing Platform',
        href: '/edge-computing-orchestration-platform',
        description: 'Distributed edge management',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'Blockchain Infrastructure',
        href: '/blockchain-infrastructure-platform',
        description: 'Enterprise blockchain solutions',
        icon: <Layers className="w-4 h-4" />
      },
      {
        name: 'AI-Powered DevOps',
        href: '/ai-powered-devops-platform',
        description: 'Intelligent development operations',
        icon: <Code className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Services',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: 'Quantum',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {
        name: 'Quantum Neural Networks',
        href: '/quantum-neural-network-platform',
        description: 'Quantum-powered AI systems',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Financial Trading',
        href: '/quantum-financial-trading-platform',
        description: 'Quantum-powered trading',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'Quantum Materials Discovery',
        href: '/quantum-materials-discovery-platform',
        description: 'Advanced materials research',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'Quantum Bio-Computing',
        href: '/quantum-bio-computing-platform',
        description: 'Biological quantum computing',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'Quantum Internet Security',
        href: '/quantum-internet-security-platform',
        description: 'Future-proof internet security',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration solutions',
    badge: 'Space',
    category: 'space',
    color: 'from-indigo-500 to-purple-500',
    children: [
      {
        name: 'Space Resource Mining',
        href: '/space-resource-mining-platform',
        description: 'Asteroid mining technology',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI-Powered Space Tech',
        href: '/ai-powered-space-technology',
        description: 'Intelligent space systems',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Space Colony Management',
        href: '/space-colony-management-platform',
        description: 'Off-world settlement systems',
        icon: <Building className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Enterprise Solutions',
    href: '/solutions',
    icon: <Building className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    badge: 'Enterprise',
    category: 'enterprise',
    color: 'from-green-500 to-emerald-500',
    children: [
      {
        name: 'Financial Services',
        href: '/financial-services-solutions',
        description: 'Banking and fintech solutions',
        icon: <DollarSign className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Healthcare Technology',
        href: '/healthcare-technology-solutions',
        description: 'Medical and health tech',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'Manufacturing AI',
        href: '/manufacturing-ai-solutions',
        description: 'Smart manufacturing',
        icon: <Cog className="w-4 h-4" />
      },
      {
        name: 'Retail Technology',
        href: '/retail-technology-solutions',
        description: 'E-commerce and retail',
        icon: <ShoppingCart className="w-4 h-4" />
      }
    ]
  }
];

const quickLinks = [
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/api-documentation', icon: <FileText className="w-4 h-4" /> },
  { name: 'Status', href: '/status', icon: <Monitor className="w-4 h-4" /> }
];

export default function UltraFuturisticNavigation2038() {
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

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+13024640950" 
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://ziontechgroup.com" 
                className="text-white/80 hover:text-white transition-colors"
              >
                ziontechgroup.com
              </a>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-white/60">Future Technology Today</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5 group"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-white/60">{item.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeAllDropdowns}
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20' 
                                  : 'hover:bg-white/5'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                child.color ? `bg-gradient-to-r ${child.color}` : 'bg-white/10'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-white font-medium">{child.name}</span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-white/60">{child.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Quick Links */}
            <div className="flex items-center space-x-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                  title={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="px-4 py-2 text-white/80 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="ml-6 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={closeAllDropdowns}
                          className="flex items-center space-x-3 p-3 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {child.icon}
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeAllDropdowns}
                      className="flex items-center space-x-2 p-3 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={closeAllDropdowns}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}