import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles
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
    name: 'Revolutionary Services 2044',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2044',
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
        name: 'AI Consciousness Evolution 2044', 
        href: '/ai-consciousness-evolution-2044', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Neural Network 2044', 
        href: '/quantum-neural-network-platform-2044', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'AI Autonomous Business Intelligence 2044', 
        href: '/ai-autonomous-business-intelligence-2044', 
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity 2044', 
        href: '/quantum-cybersecurity-platform-2044', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Autonomous Customer Success 2044', 
        href: '/autonomous-customer-success-2044', 
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
    badge: '2044',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'AI Consciousness Evolution 2044', 
        href: '/ai-consciousness-evolution-2044', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Cognitive 2044', 
        href: '/quantum-ai-cognitive-2044', 
        description: 'Quantum-powered AI cognition',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous AI Research 2044', 
        href: '/autonomous-ai-research-2044', 
        description: 'Fully autonomous AI research',
        icon: <Eye className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Emotional AI Intelligence 2044', 
        href: '/emotional-ai-intelligence-2044', 
        description: 'Advanced emotional AI',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
      },
      { 
        name: 'Quantum AI Metaverse 2044', 
        href: '/quantum-ai-metaverse-2044', 
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
    badge: '2044',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Cloud Infrastructure 2044', 
        href: '/quantum-cloud-infrastructure-2044', 
        description: 'Quantum-powered cloud',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Data Center Management 2044', 
        href: '/quantum-data-center-management-2044', 
        description: 'Quantum data center optimization',
        icon: <Database className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Storage Solutions 2044', 
        href: '/quantum-storage-solutions-2044', 
        description: 'Quantum storage technology',
        icon: <Database className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Neural Network 2044', 
        href: '/quantum-neural-network-platform-2044', 
        description: 'Quantum neural networks',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },
  {
    name: 'IT Services',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced IT infrastructure',
    badge: '2044',
    category: 'it',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'Autonomous DevOps Platform 2044', 
        href: '/autonomous-devops-platform-2044', 
        description: 'Fully autonomous DevOps',
        icon: <Settings className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous Network Management 2044', 
        href: '/autonomous-network-management-2044', 
        description: 'AI-powered network management',
        icon: <Network className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous IT Service Management 2044', 
        href: '/autonomous-it-service-management-2044', 
        description: 'Autonomous IT services',
        icon: <Monitor className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Quantum Cloud Infrastructure 2044', 
        href: '/quantum-cloud-infrastructure-2044', 
        description: 'Quantum cloud solutions',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration solutions',
    badge: '2044',
    category: 'space',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { 
        name: 'Space Resource Intelligence 2044', 
        href: '/space-resource-intelligence-2044', 
        description: 'AI-powered space exploration',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Space Computing 2044', 
        href: '/quantum-space-computing-2044', 
        description: 'Quantum computing in space',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Transparent pricing plans',
    category: 'pricing',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Mail className="w-5 h-5" />,
    description: 'Get in touch with us',
    category: 'contact',
    color: 'from-green-500 to-emerald-500'
  }
];

const UltraFuturisticNavigation2044: React.FC = () => {
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
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-[0_0_50px_rgba(0,0,0,0.8)]' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+13024640950" 
                className="flex items-center text-cyan-300 hover:text-cyan-200 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center text-cyan-300 hover:text-cyan-200 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-cyan-300">
              364 E Main St STE 1008 Middletown DE 19709
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zion Tech Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-300 font-medium relative"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                      {item.badge}
                    </span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
                        onMouseLeave={closeDropdown}
                      >
                        <div className="p-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className={`block p-4 rounded-xl transition-all duration-300 group/item ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20' 
                                  : 'hover:bg-gray-800/50'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                  child.color 
                                    ? `bg-gradient-to-br ${child.color}` 
                                    : 'bg-gradient-to-br from-gray-600 to-gray-700'
                                } shadow-[0_0_20px_rgba(6,182,212,0.3)]`}>
                                  {child.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <h4 className="font-semibold text-white group-hover/item:text-cyan-400 transition-colors duration-300">
                                      {child.name}
                                    </h4>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-400 leading-relaxed">
                                    {child.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={normalizeHref(item.href)}
                    className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.children && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          className="block px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-800/50">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl text-center shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2044;