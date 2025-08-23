import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, Lock, 
  Phone, Mail, MapPin, ArrowRight, Star, Users, Award,
  Brain, Atom, Rocket, Shield, Cloud, Database, Palette,
  Cpu, Server, Code, BarChart3, Settings, Target,
  Sparkles, Infinity, Layers, Network, Smartphone, Monitor,
  Camera, Mic, Speaker, Wifi, Bluetooth, Satellite,
  Telescope, Plane, Moon, Sun, Heart, FileText, Handshake, TrendingUp, Book, GraduationCap,
  ShoppingCart, Car, Building, Music, Trees, Leaf, DollarSign, Factory, Battery, Newspaper
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
  description?: string;
  featured?: boolean;
  badge?: string;
  color?: string;
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
        label: 'AI & Autonomous Ecosystems',
        href: '/ai-autonomous-content-creation-2025',
        icon: <Brain className="w-4 h-4" />,
        description: 'Fully autonomous AI platforms',
        featured: true,
        badge: 'REVOLUTIONARY',
        color: 'from-purple-500 to-pink-500'
      },
      {
        label: 'Quantum Computing & Space Tech',
        href: '/quantum-computing-as-a-service-2025',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        badge: 'BREAKTHROUGH',
        color: 'from-cyan-500 to-blue-500'
      },
      {
        label: 'Space Resource Intelligence',
        href: '/space-resource-intelligence-2025',
        icon: <Rocket className="w-4 h-4" />,
        description: 'AI-powered space exploration',
        featured: true,
        badge: 'FUTURE',
        color: 'from-pink-500 to-red-500'
      },
      {
        label: 'Metaverse Development Studio',
        href: '/metaverse-development-studio-pro-2025',
        icon: <Globe className="w-4 h-4" />,
        description: 'Professional metaverse creation',
        featured: true,
        badge: 'IMMERSIVE',
        color: 'from-green-500 to-emerald-500'
      },
      {
        label: 'Quantum Cybersecurity',
        href: '/quantum-cybersecurity-platform-2025',
        icon: <Shield className="w-4 h-4" />,
        description: 'Quantum-resistant security',
        badge: 'SECURE',
        color: 'from-red-500 to-pink-500'
      },
      {
        label: 'Business Process Automation',
        href: '/ai-business-process-automation-suite-2025',
        icon: <Settings className="w-4 h-4" />,
        description: 'AI-powered automation suite',
        badge: 'AUTOMATED',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        label: 'Supply Chain Optimization',
        href: '/intelligent-supply-chain-optimization-2025',
        icon: <Database className="w-4 h-4" />,
        description: 'AI-powered supply chain solutions',
        badge: 'OPTIMIZED',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        label: 'Financial Planning & Analysis',
        href: '/ai-financial-planning-analysis-2025',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'AI-powered financial insights',
        badge: 'INTELLIGENT',
        color: 'from-emerald-500 to-teal-500'
      },
      {
        label: 'HR Analytics & Talent Management',
        href: '/intelligent-hr-analytics-talent-management-2025',
        icon: <Users className="w-4 h-4" />,
        description: 'AI-powered HR solutions',
        badge: 'SMART',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        label: 'Customer Experience Optimization',
        href: '/ai-customer-experience-optimization-2025',
        icon: <Target className="w-4 h-4" />,
        description: 'AI-powered CX optimization',
        badge: 'OPTIMIZED',
        color: 'from-purple-500 to-pink-500'
      },
      {
        label: 'View All Services',
        href: '/services',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete service catalog',
        badge: 'EXPLORE',
        color: 'from-gray-500 to-blue-500'
      }
    ]
  },
        badge: 'AUTOMATED',
        color: 'from-orange-500 to-red-500'
      },
      {
        label: 'Micro SAAS Solutions',
        href: '/comprehensive-2025-services-showcase',
        icon: <Code className="w-4 h-4" />,
        description: 'Innovative micro SAAS platforms',
        featured: true,
        badge: 'INNOVATIVE',
        color: 'from-teal-500 to-green-500'
      },
      {
        label: 'View All Services',
        href: '/services',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete service portfolio',
        badge: 'EXPLORE',
        color: 'from-gray-500 to-gray-600'
      }
    ]
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-2045',
        icon: <Brain className="w-4 h-4" />,
        description: 'Revolutionary AI consciousness platform',
        featured: true,
        badge: 'BREAKTHROUGH',
        color: 'from-purple-500 to-pink-500'
      },
      {
        label: 'Quantum Neural Ecosystem',
        href: '/quantum-neural-ecosystem-2045',
        icon: <Atom className="w-4 h-4" />,
        description: 'Hybrid quantum-AI computing',
        featured: true,
        badge: 'QUANTUM',
        color: 'from-cyan-500 to-blue-500'
      },
      {
        label: 'Space Resource Intelligence',
        href: '/space-resource-intelligence-2045',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Advanced space technology solutions',
        featured: true,
        badge: 'SPACE',
        color: 'from-pink-500 to-red-500'
      },
      {
        label: 'Metaverse Development Studio',
        href: '/metaverse-development-studio-pro-2045',
        icon: <Globe className="w-4 h-4" />,
        description: 'Complete metaverse creation platform',
        featured: true,
        badge: 'IMMERSIVE',
        color: 'from-green-500 to-emerald-500'
      },
      {
        label: 'Quantum Cybersecurity',
        href: '/quantum-cybersecurity-platform-2045',
        icon: <Shield className="w-4 h-4" />,
        description: 'Next-generation security solutions',
        featured: true,
        badge: 'SECURE',
        color: 'from-red-500 to-pink-500'
      }
    ]
  },
  {
    label: 'Industries',
    children: [
      {
        label: 'Healthcare & Biotech',
        href: '/healthcare-ai-solutions',
        icon: <Heart className="w-4 h-4" />,
        description: 'AI-powered healthcare solutions',
        badge: 'HEALTH',
        color: 'from-red-500 to-pink-500'
      },
      {
        label: 'Financial Services',
        href: '/financial-solutions',
        icon: <DollarSign className="w-4 h-4" />,
        description: 'Fintech and banking solutions',
        badge: 'FINANCE',
        color: 'from-green-500 to-emerald-500'
      },
      {
        label: 'Manufacturing',
        href: '/manufacturing-ai-solutions',
        icon: <Factory className="w-4 h-4" />,
        description: 'Smart manufacturing solutions',
        badge: 'MANUFACTURING',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        label: 'Retail & E-commerce',
        href: '/retail-technology-solutions',
        icon: <ShoppingCart className="w-4 h-4" />,
        description: 'Digital retail transformation',
        badge: 'RETAIL',
        color: 'from-purple-500 to-pink-500'
      },
      {
        label: 'Education',
        href: '/education-technology-solutions',
        icon: <GraduationCap className="w-4 h-4" />,
        description: 'EdTech and learning platforms',
        badge: 'EDUCATION',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        label: 'Government',
        href: '/government-technology-solutions',
        icon: <Building className="w-4 h-4" />,
        description: 'Public sector technology',
        badge: 'GOVERNMENT',
        color: 'from-gray-500 to-blue-500'
      },
      {
        label: 'Energy & Utilities',
        href: '/energy-utilities-solutions',
        icon: <Battery className="w-4 h-4" />,
        description: 'Sustainable energy solutions',
        badge: 'ENERGY',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        label: 'Transportation',
        href: '/transportation-solutions',
        icon: <Car className="w-4 h-4" />,
        description: 'Smart mobility solutions',
        badge: 'MOBILITY',
        color: 'from-blue-500 to-cyan-500'
      }
    ]
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Book className="w-4 h-4" />,
        description: 'Technical documentation and guides'
      },
      {
        label: 'API Reference',
        href: '/api-docs',
        icon: <Code className="w-4 h-4" />,
        description: 'API documentation and examples'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and implementations'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <Globe className="w-4 h-4" />,
        description: 'Latest insights and updates'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Monitor className="w-4 h-4" />,
        description: 'Educational webinars and demos'
      },
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'In-depth research and analysis'
      }
    ]
  },
  {
    label: 'Company',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Learn about our mission and team'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Award className="w-4 h-4" />,
        description: 'Join our innovative team'
      },
      {
        label: 'Partners',
        href: '/partners',
        icon: <Handshake className="w-4 h-4" />,
        description: 'Strategic partnerships and alliances'
      },
      {
        label: 'Investors',
        href: '/investors',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Investment opportunities and growth'
      },
      {
        label: 'News',
        href: '/news',
        icon: <Newspaper className="w-4 h-4" />,
        description: 'Company news and announcements'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Mail className="w-4 h-4" />,
        description: 'Get in touch with our team'
      }
    ]
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <nav className="relative bg-black/80 backdrop-blur-xl border-b border-cyan-500/30 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/status" className="text-gray-400 hover:text-cyan-400 transition-colors">
                System Status
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Future Technology Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative" ref={dropdownRef}>
                {item.children ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
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
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl z-50"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href || '#'}
                            className="group p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-200"
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} text-white`}>
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.label}
                                  </span>
                                  {child.badge && (
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} text-white`}>
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-400">{child.description}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors"
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
                        <div className="ml-6 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="block px-4 py-2 text-gray-400 hover:text-cyan-400 transition-colors"
                              onClick={() => setIsOpen(false)}
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
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl text-center font-medium"
                  onClick={() => setIsOpen(false)}
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