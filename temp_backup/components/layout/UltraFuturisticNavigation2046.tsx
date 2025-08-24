import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, Lock, 
  Phone, Mail, MapPin, ArrowRight, Star, Users, Award,
  Brain, Rocket, Shield, Cpu, Database, Cloud, Palette,
  Sparkles, Target, BarChart3, Lightbulb, Code, Server,
  Network, ShieldCheck, BrainCircuit, Atom, Satellite,
  Heart, Clock, Briefcase, FileText, Video
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
  description?: string;
  badge?: string;
  featured?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Zap className="w-4 h-4" />
  },
  {
    label: 'AI & Machine Learning',
    children: [
      {
        label: 'Quantum Neural Interfaces',
        href: '/quantum-neural-interface-platform-2046',
        icon: <Brain className="w-4 h-4" />,
        description: 'Revolutionary brain-computer interfaces',
        badge: 'Revolutionary',
        featured: true
      },
      {
        label: 'Autonomous AI Enterprise',
        href: '/autonomous-ai-enterprise-orchestrator-2046',
        icon: <Brain className="w-4 h-4" />,
        description: 'Fully autonomous business management',
        badge: 'Hot',
        featured: true
      },
      {
        label: 'Quantum Emotion Intelligence',
        href: '/quantum-emotion-intelligence-platform-2046',
        icon: <Heart className="w-4 h-4" />,
        description: 'Advanced emotion recognition and response',
        badge: 'New'
      },
      {
        label: 'Autonomous AI Research',
        href: '/autonomous-ai-research-assistant-2046',
        icon: <Lightbulb className="w-4 h-4" />,
        description: 'Fully autonomous scientific research',
        badge: 'Trending'
      },
      {
        label: 'Quantum Creative AI',
        href: '/quantum-creative-ai-platform-2046',
        icon: <Palette className="w-4 h-4" />,
        description: 'Revolutionary creative content generation',
        badge: 'Innovative'
      },
      {
        label: 'View All AI Services',
        href: '/ai-services',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete AI service portfolio'
      }
    ]
  },
  {
    label: 'IT & Infrastructure',
    children: [
      {
        label: 'Quantum Space Computing',
        href: '/quantum-space-computing-infrastructure-2046',
        icon: <Satellite className="w-4 h-4" />,
        description: 'Space-based quantum computing infrastructure',
        badge: 'Revolutionary',
        featured: true
      },
      {
        label: 'Autonomous Cybersecurity',
        href: '/autonomous-cybersecurity-orchestrator-2046',
        icon: <Shield className="w-4 h-4" />,
        description: 'Fully autonomous security management',
        badge: 'Hot',
        featured: true
      },
      {
        label: 'Quantum Cloud Hybrid',
        href: '/quantum-cloud-hybrid-platform-2046',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Quantum-enhanced hybrid cloud platform',
        badge: 'New'
      },
      {
        label: 'Autonomous DevOps',
        href: '/autonomous-devops-intelligence-platform-2046',
        icon: <Code className="w-4 h-4" />,
        description: 'Fully autonomous DevOps management',
        badge: 'Trending'
      },
      {
        label: 'Quantum Data Center',
        href: '/quantum-data-center-optimization-2046',
        icon: <Server className="w-4 h-4" />,
        description: 'Quantum data center optimization',
        badge: 'Innovative'
      },
      {
        label: 'View All IT Services',
        href: '/it-services',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete IT service portfolio'
      }
    ]
  },
  {
    label: 'Micro SAAS Solutions',
    children: [
      {
        label: 'Quantum Sustainability',
        href: '/quantum-sustainability-optimizer-2046',
        icon: <Globe className="w-4 h-4" />,
        description: 'Quantum sustainability optimization',
        badge: 'Revolutionary',
        featured: true
      },
      {
        label: 'Autonomous HR Intelligence',
        href: '/autonomous-hr-intelligence-suite-2046',
        icon: <Users className="w-4 h-4" />,
        description: 'Fully autonomous HR management',
        badge: 'Hot',
        featured: true
      },
      {
        label: 'Quantum Financial Intelligence',
        href: '/quantum-financial-intelligence-platform-2046',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Quantum financial management',
        badge: 'New'
      },
      {
        label: 'Autonomous Supply Chain',
        href: '/autonomous-supply-chain-orchestrator-2046',
        icon: <Network className="w-4 h-4" />,
        description: 'Fully autonomous supply chain management',
        badge: 'Trending'
      },
      {
        label: 'Quantum Customer Experience',
        href: '/quantum-customer-experience-optimizer-2046',
        icon: <Target className="w-4 h-4" />,
        description: 'Quantum customer experience optimization',
        badge: 'Innovative'
      },
      {
        label: 'View All Micro SAAS',
        href: '/micro-saas',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete micro SAAS portfolio'
      }
    ]
  },
  {
    label: 'Innovative 2046 Services',
    href: '/innovative-2046-futuristic-services-showcase',
    icon: <Rocket className="w-4 h-4" />,
    badge: 'Revolutionary'
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/enterprise-solutions',
        icon: <Server className="w-4 h-4" />,
        description: 'Large-scale enterprise solutions'
      },
      {
        label: 'Startup Solutions',
        href: '/startup-solutions',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative startup solutions'
      },
      {
        label: 'Government Solutions',
        href: '/government-solutions',
        icon: <Shield className="w-4 h-4" />,
        description: 'Secure government solutions'
      },
      {
        label: 'Healthcare Solutions',
        href: '/healthcare-solutions',
        icon: <Heart className="w-4 h-4" />,
        description: 'Advanced healthcare solutions'
      }
    ]
  },
  {
    label: 'About',
    children: [
      {
        label: 'Our Mission',
        href: '/mission',
        icon: <Target className="w-4 h-4" />,
        description: 'Learn about our mission and vision'
      },
      {
        label: 'Leadership Team',
        href: '/team',
        icon: <Users className="w-4 h-4" />,
        description: 'Meet our leadership team'
      },
      {
        label: 'Company History',
        href: '/history',
        icon: <Clock className="w-4 h-4" />,
        description: 'Our journey and milestones'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our revolutionary team'
      }
    ]
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Blog & Insights',
        href: '/blog',
        icon: <Lightbulb className="w-4 h-4" />,
        description: 'Latest insights and trends'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and results'
      },
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'In-depth research and analysis'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Educational webinars and events'
      }
    ]
  }
];

const UltraFuturisticNavigation2046: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const renderDropdown = (items: NavigationItem[], isMobile: boolean = false) => (
    <AnimatePresence>
      {items.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={item.href || '#'}
            className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              isMobile
                ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            {item.icon && (
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                item.featured 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
              }`}>
                {item.icon}
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.featured
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              )}
            </div>
            {item.children && (
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            )}
          </Link>
        </motion.div>
      ))}
    </AnimatePresence>
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-400/30"
    >
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-cyan-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="text-cyan-300 hover:text-white transition-colors">
                Get Started
              </Link>
              <Link href="/demo" className="text-purple-300 hover:text-white transition-colors">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
                      <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center"
          >
            <Brain className="w-7 h-7 text-white" />
          </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">2046 • Quantum AI • Neural Interfaces</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    {item.icon && item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item.icon && item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 z-50"
                  >
                    {renderDropdown(item.children)}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-400/30"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
                />
              </div>

              {/* Mobile navigation items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                      >
                        <div className="flex items-center gap-3">
                          {item.icon && item.icon}
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="ml-8 mt-2 space-y-2">
                          {renderDropdown(item.children, true)}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                    >
                      {item.icon && item.icon}
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-400/30">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2046;