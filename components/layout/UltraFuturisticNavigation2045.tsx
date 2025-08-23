import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2,
  Search, User, Bell
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
        name: 'AI Consciousness Evolution', 
        href: '/ai-consciousness-evolution-platform-2045', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Hybrid Computing', 
        href: '/quantum-ai-hybrid-computing-platform-2045', 
        description: 'Quantum-powered AI with consciousness',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous AI Systems', 
        href: '/ai-autonomous-systems', 
        description: 'Fully autonomous AI solutions',
        icon: <Zap className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and technology',
    badge: '2045',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Computing Platform', 
        href: '/quantum-computing-platform-2045', 
        description: 'Advanced quantum computing solutions',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Cybersecurity', 
        href: '/quantum-cybersecurity-platform-2045', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Cloud Infrastructure', 
        href: '/quantum-cloud-infrastructure-platform-2045', 
        description: 'Quantum-powered cloud solutions',
        icon: <Cloud className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    category: 'solutions',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'Enterprise Solutions', 
        href: '/enterprise-solutions', 
        description: 'Large-scale enterprise solutions',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'Startup Solutions', 
        href: '/startup-solutions', 
        description: 'Scalable startup solutions',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'Government Solutions', 
        href: '/government-solutions', 
        description: 'Secure government solutions',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <Database className="w-5 h-5" />,
    description: 'Knowledge and resources',
    category: 'resources',
    color: 'from-yellow-500 to-orange-500',
    children: [
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation',
        icon: <Code className="w-4 h-4" />
      },
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Latest insights and updates',
        icon: <Eye className="w-4 h-4" />
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories and examples',
        icon: <BarChart3 className="w-4 h-4" />
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

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-purple-300"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold rounded-full">
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
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-4">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            onClick={closeAllDropdowns}
                            className={`block p-3 rounded-xl transition-all duration-200 ${
                              child.featured 
                                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30' 
                                : 'hover:bg-gray-800/50'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                child.color 
                                  ? `bg-gradient-to-br ${child.color}` 
                                  : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-white mb-1">{child.name}</div>
                                <div className="text-sm text-gray-400">{child.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-8 mt-2 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            onClick={closeAllDropdowns}
                            className="block px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-800">
                <Link
                  href="/contact"
                  onClick={closeAllDropdowns}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full text-center hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
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