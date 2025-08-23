import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Atom, Shield, Target, Rocket,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2,
  Sparkles as SparklesIcon, Truck
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
    name: 'Revolutionary Services 2046',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2046',
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
        name: 'AI Consciousness Evolution 2046', 
        href: '/ai-consciousness-evolution-platform-2046', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum AI Neural Networks 2046', 
        href: '/quantum-ai-neural-network-platform-2046', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'AI Autonomous Business Intelligence 2046', 
        href: '/autonomous-ai-business-intelligence-platform-2046', 
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity Intelligence 2046', 
        href: '/quantum-cybersecurity-intelligence-platform-2046', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Autonomous Healthcare AI 2046', 
        href: '/autonomous-healthcare-ai-platform-2046', 
        description: 'AI-powered healthcare',
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
    badge: '2046',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'AI Consciousness Evolution 2046', 
        href: '/ai-consciousness-evolution-platform-2046', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Neural Networks 2046', 
        href: '/quantum-ai-neural-network-platform-2046', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Emotional Intelligence 2046', 
        href: '/ai-emotional-intelligence-platform-2046', 
        description: 'AI emotional intelligence',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
      },
      { 
        name: 'Quantum AI Creativity Studio 2046', 
        href: '/quantum-ai-creativity-studio-2046', 
        description: 'Quantum-powered AI creativity',
        icon: <Palette className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        name: 'Autonomous AI Research 2046', 
        href: '/autonomous-ai-research-platform-2046', 
        description: 'Autonomous AI research',
        icon: <Zap className="w-4 h-4" />,
        color: 'from-cyan-500 to-blue-500'
      },
      { 
        name: 'AI Ethics & Governance 2046', 
        href: '/ai-ethics-governance-platform-2046', 
        description: 'AI ethics and governance',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: '2046',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Cloud Infrastructure 2046', 
        href: '/quantum-cloud-infrastructure-platform-2046', 
        description: 'Quantum-powered cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Edge Computing 2046', 
        href: '/quantum-edge-computing-platform-2046', 
        description: 'Quantum-powered edge computing',
        icon: <Network className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'Quantum Storage Solutions 2046', 
        href: '/quantum-storage-solutions-platform-2046', 
        description: 'Quantum-powered storage',
        icon: <Database className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Quantum AI Metaverse 2046', 
        href: '/quantum-ai-metaverse-platform-2046', 
        description: 'Quantum-powered AI metaverse',
        icon: <Globe2 className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },
  {
    name: 'IT Infrastructure',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced IT infrastructure solutions',
    badge: '2046',
    category: 'it',
    color: 'from-yellow-500 to-orange-500',
    children: [
      { 
        name: 'Autonomous DevOps Intelligence 2046', 
        href: '/autonomous-devops-intelligence-platform-2046', 
        description: 'AI-powered DevOps optimization',
        icon: <Code className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous Data Center Management 2046', 
        href: '/autonomous-data-center-management-platform-2046', 
        description: 'AI-powered data center management',
        icon: <Server className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        name: 'Autonomous Network Management 2046', 
        href: '/autonomous-network-management-platform-2046', 
        description: 'AI-powered network management',
        icon: <Network className="w-4 h-4" />,
        color: 'from-cyan-500 to-blue-500'
      },
      { 
        name: 'Autonomous IT Service Management 2046', 
        href: '/autonomous-it-service-management-platform-2046', 
        description: 'AI-powered IT service management',
        icon: <Settings className="w-4 h-4" />,
        color: 'from-gray-500 to-slate-500'
      }
    ]
  },
  {
    name: 'Business Solutions',
    href: '/business-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'AI-powered business solutions',
    badge: '2046',
    category: 'business',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'AI Autonomous Business Intelligence 2046', 
        href: '/autonomous-ai-business-intelligence-platform-2046', 
        description: 'Autonomous business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Quantum Financial Intelligence 2046', 
        href: '/ai-quantum-financial-intelligence-platform-2046', 
        description: 'Quantum-powered financial intelligence',
        icon: <DollarSign className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Autonomous Supply Chain Intelligence 2046', 
        href: '/autonomous-supply-chain-intelligence-platform-2046', 
        description: 'AI-powered supply chain optimization',
        icon: <Truck className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        name: 'Autonomous Manufacturing Intelligence 2046', 
        href: '/autonomous-manufacturing-intelligence-platform-2046', 
        description: 'AI-powered manufacturing optimization',
        icon: <Cpu className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    description: 'Quantum-resistant security solutions',
    badge: '2046',
    category: 'security',
    color: 'from-red-500 to-orange-500',
    children: [
      { 
        name: 'Quantum Cybersecurity Intelligence 2046', 
        href: '/quantum-cybersecurity-intelligence-platform-2046', 
        description: 'Quantum-resistant cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Network Security 2046', 
        href: '/quantum-network-security-platform-2046', 
        description: 'Quantum network security',
        icon: <Network className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      }
    ]
  }
];

const UltraFuturisticNavigation2046: React.FC = () => {
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.3)]' 
        : 'bg-black/80 backdrop-blur-lg border-b border-cyan-500/20'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all duration-300">
                  <SparklesIcon className="w-7 h-7 text-white" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-xs text-cyan-400 font-medium">2046 Technology</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 group-hover:scale-105"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
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
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center space-x-2">
                              {item.icon}
                              <span>{item.name}</span>
                            </h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                          
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={normalizeHref(child.href)}
                                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group ${
                                  child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30' 
                                    : 'hover:bg-gray-800/50'
                                }`}
                                onClick={closeMenu}
                              >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                  child.color 
                                    ? `bg-gradient-to-br ${child.color}` 
                                    : 'bg-gradient-to-br from-gray-600 to-gray-700'
                                }`}>
                                  {child.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {child.name}
                                  </div>
                                  <div className="text-xs text-gray-400">{child.description}</div>
                                </div>
                                {child.featured && (
                                  <SparklesIcon className="w-4 h-4 text-cyan-400" />
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>
              
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
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
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
            >
              <div className="px-4 py-6 space-y-6">
                {navigationItems.map((item) => (
                  <div key={item.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-white">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    
                    <div className="pl-4 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          className="block p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                          onClick={closeMenu}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              child.color 
                                ? `bg-gradient-to-br ${child.color}` 
                                : 'bg-gradient-to-br from-gray-600 to-gray-700'
                            }`}>
                              {child.icon}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{child.name}</div>
                              <div className="text-xs text-gray-400">{child.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-6 border-t border-cyan-500/20">
                  <div className="space-y-4">
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center space-x-2 mb-2">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        <span>{contactInfo.mobile}</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span>{contactInfo.email}</span>
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      onClick={closeMenu}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default UltraFuturisticNavigation2046;