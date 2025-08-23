import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2
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
    name: 'Revolutionary Services 2045',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2045',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete revolutionary services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Real Enterprise Services 2025', 
        href: '/2025-real-services-showcase', 
        description: 'Professional, practical business solutions',
        icon: <Building className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500',
        featured: true
      },
      { 
        name: 'AI Consciousness Evolution 2045', 
        href: '/ai-consciousness-evolution-2045', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Neural Network 2045', 
        href: '/quantum-neural-network-platform-2045', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'AI Autonomous Business Intelligence 2045', 
        href: '/ai-autonomous-business-intelligence-2045', 
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity 2045', 
        href: '/quantum-cybersecurity-platform-2045', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Autonomous Customer Success 2045', 
        href: '/autonomous-customer-success-2045', 
        description: 'AI-powered customer success',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
      }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Advanced AI consciousness solutions',
    badge: '2045',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'AI Consciousness Evolution 2045', 
        href: '/ai-consciousness-evolution-2045', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Cognitive 2045', 
        href: '/quantum-ai-cognitive-2045', 
        description: 'Quantum-powered AI cognition',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous AI Research 2045', 
        href: '/autonomous-ai-research-2045', 
        description: 'Fully autonomous AI research',
        icon: <Eye className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Emotional AI Intelligence 2045', 
        href: '/emotional-ai-intelligence-2045', 
        description: 'Advanced emotional AI',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
      },
      { 
        name: 'Quantum AI Metaverse 2045', 
        href: '/quantum-ai-metaverse-2045', 
        description: 'Quantum-powered metaverse',
        icon: <Globe className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: '2045',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Cloud Infrastructure 2045', 
        href: '/quantum-cloud-infrastructure-2045', 
        description: 'Quantum-powered cloud',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Data Center Management 2045', 
        href: '/quantum-data-center-management-2045', 
        description: 'Quantum data center optimization',
        icon: <Database className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Neural Network 2045', 
        href: '/quantum-neural-network-platform-2045', 
        description: 'Quantum neural networks',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Quantum Cybersecurity 2045', 
        href: '/quantum-cybersecurity-platform-2045', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      }
    ]
  },
  {
    name: 'IT Services',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced IT infrastructure',
    badge: '2045',
    category: 'it',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'Autonomous DevOps Platform 2045', 
        href: '/autonomous-devops-platform-2045', 
        description: 'Fully autonomous DevOps',
        icon: <Settings className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous Network Management 2045', 
        href: '/autonomous-network-management-2045', 
        description: 'AI-powered network management',
        icon: <Network className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous IT Service Management 2045', 
        href: '/autonomous-it-service-management-2045', 
        description: 'Autonomous IT service management',
        icon: <Server className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        name: 'Autonomous Security Operations Center 2045', 
        href: '/autonomous-security-operations-center-2045', 
        description: 'AI-powered security operations',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration solutions',
    badge: '2045',
    category: 'space',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { 
        name: 'Space Resource Intelligence 2045', 
        href: '/space-resource-intelligence-2045', 
        description: 'AI-powered space exploration',
        icon: <Globe2 className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Space Mining Automation 2045', 
        href: '/space-mining-automation-2045', 
        description: 'Automated space mining',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-pink-500 to-red-500'
      }
    ]
  },
  {
    name: 'Business Solutions',
    href: '/business-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Enterprise transformation',
    badge: '2045',
    category: 'business',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'AI Autonomous Business Intelligence 2045', 
        href: '/ai-autonomous-business-intelligence-2045', 
        description: 'Autonomous business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous Customer Success 2045', 
        href: '/autonomous-customer-success-2045', 
        description: 'AI-powered customer success',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
      }
    ]
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
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

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-blue-900/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-cyan-400"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Enhanced Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
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
                              onClick={closeDropdown}
                              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30' 
                                  : 'hover:bg-gray-800/50'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                child.color 
                                  ? `bg-gradient-to-br ${child.color}` 
                                  : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-400">{child.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
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

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <a href="tel:+13024640950" className="text-sm font-medium">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <a href="mailto:kleber@ziontechgroup.com" className="text-sm font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={() => setIsOpen(false)}
                          className="block p-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-800">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href="tel:+13024640950" className="text-sm">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-sm">
                      kleber@ziontechgroup.com
                    </a>
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

export default UltraFuturisticNavigation2045;