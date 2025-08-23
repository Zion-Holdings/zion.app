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
  Zap, Users, Award, Lightbulb, Briefcase, BookOpen, ShieldCheck, CpuIcon, Database, Server, Lock, Key, Eye, EyeOff
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
  isNew?: boolean;
  isHot?: boolean;
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
    badge: 'New 2038',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
    isNew: true,
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI-Powered Customer Success', 
        href: '/services/ai-powered-customer-success-automation', 
        description: 'Intelligent customer success automation',
        icon: <Users className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        isHot: true
      },
      { 
        name: 'Quantum-Secure Blockchain', 
        href: '/services/quantum-secure-blockchain-platform', 
        description: 'Future-proof blockchain security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        isNew: true
      },
      { 
        name: 'Autonomous DevOps', 
        href: '/services/autonomous-devops-intelligence-platform', 
        description: 'Self-healing DevOps platform',
        icon: <Settings className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      },
      { 
        name: 'AI Legal Automation', 
        href: '/services/ai-powered-legal-document-automation', 
        description: 'Intelligent legal document automation',
        icon: <BookOpen className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Quantum Financial Risk', 
        href: '/services/quantum-financial-risk-management', 
        description: 'Quantum-powered risk management',
        icon: <DollarSign className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500',
        isHot: true
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
    isHot: true,
    children: [
      {
        name: 'Quantum AI Consciousness',
        href: '/services/quantum-ai-consciousness-evolution-2038',
        description: 'Quantum-powered AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true,
        isNew: true
      },
      {
        name: 'Autonomous AI Research',
        href: '/services/autonomous-ai-research-assistant-2038',
        description: 'Self-directed AI research',
        icon: <Lightbulb className="w-4 h-4" />,
        isHot: true
      },
      {
        name: 'Quantum AI Predictive Maintenance',
        href: '/services/quantum-ai-predictive-maintenance-2038',
        description: 'Quantum-powered maintenance',
        icon: <Monitor className="w-4 h-4" />
      },
      {
        name: 'AI Content Personalization',
        href: '/services/ai-powered-content-personalization-engine-2038',
        description: 'Intelligent content personalization',
        icon: <Palette className="w-4 h-4" />
      },
      {
        name: 'Quantum AI Ecosystem Manager',
        href: '/services/quantum-ai-autonomous-ecosystem-manager-2038',
        description: 'Quantum ecosystem management',
        icon: <Globe className="w-4 h-4" />,
        isNew: true
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
        name: 'Quantum Edge Computing',
        href: '/services/quantum-edge-computing-orchestrator',
        description: 'Quantum-powered edge computing',
        icon: <Network className="w-4 h-4" />,
        featured: true,
        isNew: true
      },
      {
        name: 'Autonomous Cloud FinOps',
        href: '/services/autonomous-cloud-finops-platform',
        description: 'AI-driven cloud cost optimization',
        icon: <DollarSign className="w-4 h-4" />,
        isHot: true
      },
      {
        name: 'Quantum-Secure Zero Trust',
        href: '/services/quantum-secure-zero-trust-platform',
        description: 'Future-proof zero trust security',
        icon: <ShieldCheck className="w-4 h-4" />,
        isNew: true
      },
      {
        name: 'AI IT Asset Management',
        href: '/services/ai-powered-it-asset-lifecycle-manager',
        description: 'Intelligent asset management',
        icon: <Briefcase className="w-4 h-4" />
      },
      {
        name: 'Quantum Hybrid Cloud',
        href: '/services/quantum-hybrid-cloud-orchestrator',
        description: 'Quantum hybrid cloud optimization',
        icon: <Cloud className="w-4 h-4" />,
        isNew: true
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
        name: 'Quantum Cybersecurity',
        href: '/services/quantum-cybersecurity-monitoring',
        description: 'Future-proof security',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Financial Trading',
        href: '/services/quantum-financial-trading-platform',
        description: 'Quantum-powered trading',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'Quantum Materials Discovery',
        href: '/services/quantum-materials-discovery-platform',
        description: 'Quantum materials research',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'Quantum Bio-Computing',
        href: '/services/quantum-bio-computing-platform',
        description: 'Quantum biological computing',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'Quantum Internet Security',
        href: '/services/quantum-internet-security-platform',
        description: 'Quantum internet protection',
        icon: <Lock className="w-4 h-4" />
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
        href: '/services/space-resource-mining-platform',
        description: 'Space mining operations',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI-Powered Space Technology',
        href: '/services/ai-powered-space-technology',
        description: 'AI space solutions',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Satellite Systems',
        href: '/services/satellite-systems',
        description: 'Advanced satellite technology',
        icon: <Globe className="w-4 h-4" />
      },
      {
        name: 'Space Communication',
        href: '/services/space-communication-systems',
        description: 'Interplanetary communication',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'Quantum Space Resource Optimization',
        href: '/services/quantum-space-resource-optimization',
        description: 'Quantum space optimization',
        icon: <Atom className="w-4 h-4" />,
        isNew: true
      }
    ]
  },
  {
    name: 'Specialized Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    badge: 'Industry',
    category: 'solutions',
    color: 'from-green-500 to-emerald-500',
    children: [
      {
        name: 'Healthcare AI Solutions',
        href: '/services/ai-powered-healthcare-diagnostic-platform',
        description: 'AI healthcare diagnostics',
        icon: <Heart className="w-4 h-4" />,
        featured: true,
        isNew: true
      },
      {
        name: 'Financial Technology',
        href: '/services/financial-technology-solutions',
        description: 'Fintech innovations',
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        name: 'Manufacturing AI',
        href: '/services/manufacturing-ai-solutions',
        description: 'AI manufacturing',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'Retail Technology',
        href: '/services/retail-technology-solutions',
        description: 'Retail tech solutions',
        icon: <ShoppingCart className="w-4 h-4" />
      },
      {
        name: 'Government Technology',
        href: '/services/government-technology-solutions',
        description: 'GovTech solutions',
        icon: <Building className="w-4 h-4" />
      }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

export default function UltraFuturisticNavigation2038() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Quote
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-30 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400 font-medium">2038 Edition</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <motion.button
                  whileHover={{ y: -2 }}
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.isNew ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      item.isHot ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeAllDropdowns}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-600 to-gray-700'} flex items-center justify-center`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <Star className="w-4 h-4 text-yellow-400" />
                                  )}
                                  {child.isNew && (
                                    <span className="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full">
                                      New
                                    </span>
                                  )}
                                  {child.isHot && (
                                    <span className="px-2 py-1 text-xs font-medium bg-red-500/20 text-red-400 rounded-full">
                                      Hot
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-400">{child.description}</p>
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border border-cyan-400 text-cyan-400 font-medium rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="pl-8 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={closeAllDropdowns}
                          className="block p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Contact Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}