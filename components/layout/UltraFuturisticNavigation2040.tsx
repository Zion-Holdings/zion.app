import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  BarChart3, 
  Heart as HeartIcon, Code as CodeIcon, Palette as PaletteIcon,
  FileText, Workflow,
  Network, Cloud, Cpu, Heart, TrendingUp, Monitor, ShoppingCart, Building, MessageCircle, HelpCircle, GraduationCap, Star, Zap,
  Code, Server, Database, Settings, Users, Search, Palette
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
  description?: string;
  featured?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Zap className="w-4 h-4" />
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Micro SAAS Solutions',
        href: '/comprehensive-2025-services-showcase',
        icon: <Code className="w-4 h-4" />,
        description: 'Innovative micro SAAS platforms',
        featured: true
      },
      {
        label: 'Enterprise IT Services',
        href: '/enterprise-it-solutions',
        icon: <Server className="w-4 h-4" />,
        description: 'Advanced enterprise IT solutions'
      },
      {
        label: 'AI & Machine Learning',
        href: '/ai-services',
        icon: <Brain className="w-4 h-4" />,
        description: 'Cutting-edge AI solutions'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-computing',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space solutions'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise security solutions'
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure'
      },
      {
        label: 'Data & Analytics',
        href: '/data-analytics',
        icon: <Database className="w-4 h-4" />,
        description: 'Advanced data solutions'
      },
      {
        label: 'DevOps & Automation',
        href: '/devops-automation',
        icon: <Settings className="w-4 h-4" />,
        description: 'Automated development workflows'
      },
      {
        label: 'View All Services',
        href: '/services',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete service portfolio'
      }
    ]
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-2040',
        icon: <Brain className="w-4 h-4" />,
        description: 'Revolutionary AI consciousness platform'
      },
      {
        name: 'AI Emotional Intelligence 2040',
        href: '/ai-emotional-intelligence-2040',
        description: 'Advanced emotional AI with consciousness',
        icon: <HeartIcon className="w-4 h-4" />
      },
      {
        name: 'AI Autonomous Research 2041',
        href: '/ai-autonomous-research-2041',
        description: 'Fully autonomous AI research',
        icon: <CodeIcon className="w-4 h-4" />
      },
      {
        name: 'AI Content Personalization 2041',
        href: '/ai-content-personalization-2041',
        description: 'Consciousness-based content AI',
        icon: <PaletteIcon className="w-4 h-4" />
      },
      {
        name: 'AI Ethics & Governance 2041',
        href: '/ai-ethics-governance-2041',
        description: 'Comprehensive AI ethics framework',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution',
        description: 'AI consciousness research and development',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'AI Autonomous Ecosystem',
        href: '/ai-autonomous-ecosystem',
        description: 'Self-organizing AI agent networks',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'AI Autonomous Robotics Platform',
        href: '/ai-autonomous-robotics-platform',
        description: 'Intelligent robotics automation',
        icon: <Rocket className="w-4 h-4" />
      },
      {
        name: 'AI Content Factory Pro',
        href: '/ai-content-factory-pro',
        description: 'Enterprise content creation platform',
        icon: <FileText className="w-4 h-4" />
      },
      {
        name: 'AI Autonomous Business Process Automation',
        href: '/ai-autonomous-business-process-automation',
        description: 'Intelligent process automation',
        icon: <Workflow className="w-4 h-4" />
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
        name: 'Quantum Neural Ecosystem 2040',
        href: '/quantum-neural-ecosystem-2040',
        icon: <Atom className="w-4 h-4" />,
        description: 'Hybrid quantum-AI computing'
      },
      {
        label: 'Space Resource Intelligence',
        href: '/space-resource-intelligence-2040',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Advanced space technology solutions'
      },
      {
        label: 'Zero Trust Security',
        href: '/zero-trust-network-architecture',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise-grade security architecture'
      },
      {
        label: 'Multi-Cloud Orchestration',
        href: '/multi-cloud-orchestration-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Unified cloud management platform'
      }
    ]
  },
  {
    label: 'Industries',
    children: [
      {
        label: 'Financial Services',
        href: '/financial-solutions',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Quantum financial trading and risk management'
      },
      {
        label: 'Healthcare',
        href: '/healthcare-solutions',
        icon: <Target className="w-4 h-4" />,
        description: 'AI-powered healthcare diagnostics'
      },
      {
        label: 'Manufacturing',
        href: '/manufacturing-ai-solutions',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Intelligent manufacturing optimization'
      },
      {
        label: 'Retail',
        href: '/retail-technology-solutions',
        icon: <Palette className="w-4 h-4" />,
        description: 'Next-generation retail technology'
      },
      {
        label: 'Government',
        href: '/government-technology-solutions',
        icon: <Shield className="w-4 h-4" />,
        description: 'Secure government technology solutions'
      }
    ]
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Market Pricing',
        href: '/market-pricing',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Transparent pricing and competitor analysis'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Target className="w-4 h-4" />,
        description: 'Real-world implementation success stories'
      },
      {
        label: 'Blog & Insights',
        href: '/blog',
        icon: <Code className="w-4 h-4" />,
        description: 'Latest technology insights and trends'
      },
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Database className="w-4 h-4" />,
        description: 'Technical documentation and guides'
      },
      {
        label: 'Support',
        href: '/support',
        icon: <Users className="w-4 h-4" />,
        description: '24/7 technical support and assistance'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />
  }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle dropdown toggle
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">2040 Future Technology</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-4">
                          {item.children.map((child, index) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className={`block p-3 rounded-xl transition-all duration-200 hover:bg-cyan-500/10 hover:border-cyan-500/30 ${
                                child.featured ? 'border border-cyan-500/30 bg-cyan-500/5' : ''
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 mt-1">
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-white">
                                      {child.label}
                                    </span>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  {child.description && (
                                    <p className="text-xs text-gray-400 mt-1">
                                      {child.description}
                                    </p>
                                  )}
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

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Get Started</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            ref={searchRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 p-4"
          >
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search services, solutions, or resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  autoFocus
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="ml-8 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
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

export default UltraFuturisticNavigation2040;