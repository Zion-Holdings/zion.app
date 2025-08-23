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
  Zap, Infinity, Eye, Heart as HeartIcon, Code as CodeIcon, Palette as PaletteIcon,
  Search, User, Bell, Menu as MenuIcon, Car
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
    description: 'Future-defining technology solutions',
    badge: 'New 2043',
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
        name: 'AI Consciousness Evolution', 
        href: '/quantum-neural-consciousness-platform', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Neural Ecosystem', 
        href: '/quantum-bio-computing-platform', 
        description: 'Quantum-powered AI systems',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Space Resource Intelligence', 
        href: '/autonomous-space-mining-ai', 
        description: 'AI-powered space exploration',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'Autonomous Business Intelligence', 
        href: '/autonomous-business-ecosystem-ai', 
        description: 'Consciousness-driven insights',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity Future', 
        href: '/quantum-internet-security-gateway', 
        description: 'Future-proof security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness platforms',
    badge: 'Featured',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      {
        name: 'Quantum Neural Consciousness',
        href: '/quantum-neural-consciousness-platform',
        description: 'World\'s first quantum-powered AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Neural Holographic Interface',
        href: '/neural-holographic-interface-platform',
        description: 'Direct brain-to-hologram interface',
        icon: <Eye className="w-4 h-4" />
      },
      {
        name: 'Consciousness Transfer Platform',
        href: '/quantum-consciousness-transfer-platform',
        description: 'Transfer consciousness between systems',
        icon: <CodeIcon className="w-4 h-4" />
      },
      {
        name: 'Autonomous Healthcare AI',
        href: '/autonomous-healthcare-ai-ecosystem',
        description: 'Fully autonomous healthcare management',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'AI Ethics & Governance',
        href: '/ai-ethics-governance',
        description: 'Comprehensive AI ethics framework',
        icon: <Shield className="w-4 h-4" />
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
        name: 'Quantum Bio-Computing',
        href: '/quantum-bio-computing-platform',
        description: 'Quantum-bio hybrid computing',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Time Manipulation',
        href: '/quantum-time-manipulation-ai',
        description: 'AI that manipulates quantum time states',
        icon: <Clock className="w-4 h-4" />
      },
      {
        name: 'Quantum Materials Discovery',
        href: '/quantum-materials-discovery-ai',
        description: 'Quantum-powered materials research',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'Quantum Financial Intelligence',
        href: '/quantum-financial-intelligence-platform',
        description: 'Quantum-powered financial analysis',
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        name: 'Quantum Neural Evolution',
        href: '/quantum-neural-network-evolution-platform',
        description: 'Evolving quantum neural networks',
        icon: <Brain className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Enterprise Solutions',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure',
    badge: 'Enterprise',
    category: 'it',
    color: 'from-orange-500 to-red-500',
    children: [
      {
        name: 'Autonomous Business Ecosystem',
        href: '/autonomous-business-ecosystem-ai',
        description: 'Fully autonomous business management',
        icon: <BarChart3 className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Autonomous Manufacturing AI',
        href: '/autonomous-manufacturing-ecosystem-ai',
        description: 'Complete manufacturing automation',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'Autonomous Energy Grid AI',
        href: '/autonomous-energy-grid-ai',
        description: 'Global energy grid management',
        icon: <Zap className="w-4 h-4" />
      },
      {
        name: 'Autonomous Transportation AI',
        href: '/autonomous-transportation-network-ai',
        description: 'Global transportation optimization',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'AI Predictive Maintenance',
        href: '/ai-predictive-maintenance-platform',
        description: 'Consciousness-based maintenance',
        icon: <Monitor className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Emerging Technology',
    href: '/emerging-tech',
    icon: <Zap className="w-5 h-5" />,
    description: 'Cutting-edge emerging technologies',
    badge: 'Emerging',
    category: 'emerging',
    color: 'from-yellow-500 to-orange-500',
    children: [
      {
        name: 'Autonomous Space Mining AI',
        href: '/autonomous-space-mining-ai',
        description: 'AI-powered space resource extraction',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Autonomous Climate Control AI',
        href: '/autonomous-climate-control-ai',
        description: 'Global climate management',
        icon: <Globe className="w-4 h-4" />
      },
      {
        name: 'Autonomous Vehicle Consciousness',
        href: '/autonomous-vehicle-consciousness-ai',
        description: 'Human-like driving AI',
        icon: <Car className="w-4 h-4" />
      },
      {
        name: 'Quantum Financial Manipulation',
        href: '/quantum-financial-market-manipulation-ai',
        description: 'Quantum-powered market manipulation',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'Autonomous Education AI',
        href: '/autonomous-education-ai-platform',
        description: 'Personalized learning optimization',
        icon: <GraduationCap className="w-4 h-4" />
      }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const UltraFuturisticNavigation2043: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-cyan-300">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-300">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-300">
                <MapPin className="w-3 h-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-cyan-300">
                <Star className="w-3 h-3" />
                <span>Revolutionary 2043 Technology</span>
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
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Zion Tech Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-300 transition-colors duration-300 group-hover:scale-105"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
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
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
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
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                            >
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-300 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
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
                        transition={{ duration: 0.2 }}
                        className="ml-6 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            onClick={() => {
                              setIsOpen(false);
                              closeDropdown();
                            }}
                            className="block p-3 text-gray-300 hover:text-cyan-300 transition-colors duration-300"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} flex items-center justify-center`}>
                                {child.icon}
                              </div>
                              <div>
                                <div className="font-medium">{child.name}</div>
                                <div className="text-sm text-gray-500">{child.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/20">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
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

export default UltraFuturisticNavigation2043;