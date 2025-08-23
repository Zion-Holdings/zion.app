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
  Zap, Eye, Users, Award, Loader2
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
    name: 'Revolutionary Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Cutting-edge technology solutions',
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
        name: 'Quantum AI & Consciousness', 
        href: '/quantum-ai-consciousness', 
        description: 'Revolutionary AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Autonomous Systems', 
        href: '/autonomous-systems', 
        description: 'Self-managing intelligent systems',
        icon: <Settings className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Micro SAAS Solutions', 
        href: '/micro-saas-solutions', 
        description: 'Innovative business solutions',
        icon: <Target className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI platforms',
    badge: 'Featured',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      {
        name: 'Quantum AI Consciousness',
        href: '/quantum-ai-consciousness-platform',
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Autonomous Business Intelligence',
        href: '/autonomous-business-intelligence',
        description: 'AI-driven business insights',
        icon: <BarChart3 className="w-4 h-4" />
      },
      {
        name: 'Quantum Predictive Analytics',
        href: '/quantum-predictive-analytics',
        description: 'Quantum-powered forecasting',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'Autonomous Customer Service AI',
        href: '/autonomous-customer-service-ai',
        description: 'Intelligent customer support',
        icon: <MessageCircle className="w-4 h-4" />
      },
      {
        name: 'Quantum Computer Vision',
        href: '/quantum-computer-vision-suite',
        description: 'Revolutionary image analysis',
        icon: <Eye className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT & Infrastructure',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Enterprise infrastructure',
    badge: 'Enterprise',
    category: 'it',
    color: 'from-orange-500 to-red-500',
    children: [
      {
        name: 'Quantum Edge Computing',
        href: '/quantum-edge-computing-platform',
        description: 'Distributed quantum processing',
        icon: <Network className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Autonomous Cloud Orchestrator',
        href: '/autonomous-cloud-orchestrator',
        description: 'Self-managing multi-cloud',
        icon: <Cloud className="w-4 h-4" />
      },
      {
        name: 'Quantum Database Platform',
        href: '/quantum-database-platform',
        description: 'Next-generation databases',
        icon: <Layers className="w-4 h-4" />
      },
      {
        name: 'Autonomous Network Security',
        href: '/autonomous-network-security',
        description: 'Self-defending networks',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'Quantum IoT Platform',
        href: '/quantum-iot-platform',
        description: 'Quantum-powered IoT',
        icon: <Globe className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Target className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'Popular',
    category: 'saas',
    color: 'from-green-500 to-emerald-500',
    children: [
      {
        name: 'Quantum AI Content Factory',
        href: '/quantum-ai-content-factory',
        description: 'Unlimited content generation',
        icon: <Code className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Autonomous Customer Success',
        href: '/autonomous-customer-success-platform',
        description: 'AI-driven customer success',
        icon: <Users className="w-4 h-4" />
      },
      {
        name: 'Quantum Financial Forecasting',
        href: '/quantum-financial-forecasting-engine',
        description: 'Market prediction engine',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'Autonomous DevOps',
        href: '/autonomous-devops-orchestrator',
        description: 'Self-managing infrastructure',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'Autonomous Marketing AI',
        href: '/autonomous-marketing-ai',
        description: 'Self-optimizing marketing',
        icon: <Target className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: 'Quantum',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {
        name: 'Quantum Cybersecurity',
        href: '/quantum-cybersecurity-monitor',
        description: 'Future-proof security',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Edge Computing',
        href: '/quantum-edge-computing-platform',
        description: 'Distributed quantum processing',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'Quantum Database Platform',
        href: '/quantum-database-platform',
        description: 'Quantum-accelerated databases',
        icon: <Layers className="w-4 h-4" />
      },
      {
        name: 'Quantum IoT Platform',
        href: '/quantum-iot-platform',
        description: 'Quantum-powered IoT',
        icon: <Globe className="w-4 h-4" />
      },
      {
        name: 'Quantum Computer Vision',
        href: '/quantum-computer-vision-suite',
        description: 'Quantum image processing',
        icon: <Eye className="w-4 h-4" />
      }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const UltraFuturisticNavigation2038: React.FC = () => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/90 to-purple-900/90 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-cyan-300">Leading the Quantum Revolution</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400 font-medium">2038 Quantum Revolution</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
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
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeAllDropdowns}
                              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30' 
                                  : 'hover:bg-gray-800/50'
                              }`}
                            >
                              <div className={`p-2 rounded-lg ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600' 
                                  : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className={`font-medium ${
                                    child.featured ? 'text-white' : 'text-gray-300'
                                  }`}>
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className={`text-sm ${
                                  child.featured ? 'text-cyan-300' : 'text-gray-500'
                                }`}>
                                  {child.description}
                                </p>
                              </div>
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
              href="/contact"
              className="px-6 py-3 text-cyan-400 border-2 border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg shadow-cyan-500/25"
            >
              Explore Services
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={closeAllDropdowns}
                          className="block p-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                        >
                          <div className="flex items-center space-x-3">
                            {child.icon}
                            <div>
                              <div className="font-medium">{child.name}</div>
                              <div className="text-sm text-gray-500">{child.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                <div className="space-y-3">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2038;