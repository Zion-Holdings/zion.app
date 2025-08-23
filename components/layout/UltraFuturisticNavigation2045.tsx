import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown,
  Globe,
  Building,
  Users,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Home,
  Briefcase,
  BookOpen,
  Phone,
  Star,
  Atom,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Settings,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  ShoppingBag,
  FileText,
  Video,
  Handshake,
  Cpu,
  Sparkles,
  Zap,
  Eye,
  Layers,
  Crown,
  Award,
  ChevronRight,
  ExternalLink,
  Lock,
  Key,
  Database,
  Server,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  featured?: boolean;
  neonColor?: string;
  external?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
    neonColor: 'shadow-cyan-400/50'
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        featured: true,
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'AI Automation',
        href: '/services?category=ai-automation',
        icon: <Zap className="w-4 h-4" />,
        description: 'Intelligent workflow automation',
        featured: true,
        neonColor: 'shadow-yellow-400/50'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum-tech',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'IT Infrastructure',
        href: '/services?category=it-infrastructure',
        icon: <Network className="w-4 h-4" />,
        description: 'Advanced infrastructure solutions',
        featured: true,
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Business Automation',
        href: '/services?category=business-automation',
        icon: <Target className="w-4 h-4" />,
        description: 'Business process automation',
        featured: true,
        neonColor: 'shadow-orange-400/50'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        neonColor: 'shadow-pink-400/50'
      },
      {
        label: 'Micro SAAS',
        href: '/services?category=micro-saas',
        icon: <Code className="w-4 h-4" />,
        description: 'Innovative business solutions',
        neonColor: 'shadow-indigo-400/50'
      },
      {
        label: 'Enterprise IT',
        href: '/services?category=enterprise-it',
        icon: <Building className="w-4 h-4" />,
        description: 'Enterprise solutions and infrastructure',
        neonColor: 'shadow-cyan-400/50'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Lightbulb className="w-4 h-4" />,
    description: 'Industry-specific solutions',
    children: [
      {
        label: 'Financial Services',
        href: '/solutions/financial-services',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'AI-powered financial solutions'
      },
      {
        label: 'Healthcare',
        href: '/solutions/healthcare',
        icon: <Shield className="w-4 h-4" />,
        description: 'Healthcare technology solutions'
      },
      {
        label: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Smart manufacturing solutions'
      },
      {
        label: 'Retail & E-commerce',
        href: '/solutions/retail-ecommerce',
        icon: <ShoppingBag className="w-4 h-4" />,
        description: 'Digital commerce solutions'
      },
      {
        label: 'Education',
        href: '/solutions/education',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Educational technology platforms'
      },
      {
        label: 'Government',
        href: '/solutions/government',
        icon: <Building className="w-4 h-4" />,
        description: 'Government technology solutions'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <FileText className="w-4 h-4" />,
    description: 'Knowledge and insights',
    children: [
      {
        label: 'Blog',
        href: '/blog',
        icon: <FileText className="w-4 h-4" />,
        description: 'Latest insights and updates'
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
      },
      {
        label: 'Documentation',
        href: '/docs',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Technical documentation and guides'
      },
      {
        label: 'API Reference',
        href: '/api',
        icon: <Code className="w-4 h-4" />,
        description: 'API documentation and examples'
      }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'About Zion Tech Group',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Building className="w-4 h-4" />,
        description: 'Our story and mission'
      },
      {
        label: 'Leadership',
        href: '/leadership',
        icon: <Users className="w-4 h-4" />,
        description: 'Meet our leadership team'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our team'
      },
      {
        label: 'Partners',
        href: '/partners',
        icon: <Handshake className="w-4 h-4" />,
        description: 'Strategic partnerships'
      },
      {
        label: 'News',
        href: '/news',
        icon: <FileText className="w-4 h-4" />,
        description: 'Company news and updates'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Phone className="w-4 h-4" />,
        description: 'Get in touch with us'
      }
    ]
  },
  {
    label: 'Support',
    href: '/support',
    icon: <Shield className="w-4 h-4" />,
    description: 'Customer support and help',
    children: [
      {
        label: 'Help Center',
        href: '/support/help-center',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Self-service support'
      },
      {
        label: 'Contact Support',
        href: '/support/contact',
        icon: <Phone className="w-4 h-4" />,
        description: 'Get help from our team'
      },
      {
        label: 'Status Page',
        href: '/status',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Service status and uptime'
      },
      {
        label: 'Training',
        href: '/training',
        icon: <GraduationCap className="w-4 h-4" />,
        description: 'Training and certification'
      },
      {
        label: 'Community',
        href: '/community',
        icon: <Users className="w-4 h-4" />,
        description: 'User community and forums'
      }
    ]
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<Node>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  return (
    <nav 
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-black/50' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology 2025</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.label)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 group-hover:bg-gray-800/50 ${
                    isActive(item.href) 
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                            {item.description}
                          </div>
                          <div className="space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group/item ${
                                  isActive(child.href)
                                    ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                                }`}
                              >
                                <div className={`p-2 rounded-lg ${
                                  isActive(child.href)
                                    ? 'bg-cyan-500/20 text-cyan-400'
                                    : 'bg-gray-700/50 text-gray-400 group-hover/item:bg-cyan-500/20 group-hover/item:text-cyan-400'
                                } transition-all duration-300`}>
                                  {child.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <span className="font-medium">{child.label}</span>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-black rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  {child.description && (
                                    <div className="text-sm text-gray-400 mt-1">
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                                {child.external ? (
                                  <ExternalLink className="w-4 h-4 text-gray-500" />
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-cyan-400 transition-colors duration-300" />
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-800/80 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>

            {/* CTA Button */}
            <Link href="/contact">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started
              </button>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-800/80 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </form>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 mt-2 space-y-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block p-3 rounded-xl transition-all duration-300 ${
                            isActive(child.href)
                              ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                              : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            {child.icon}
                            <div>
                              <div className="font-medium">{child.label}</div>
                              {child.description && (
                                <div className="text-sm text-gray-500 mt-1">
                                  {child.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700/50">
                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
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