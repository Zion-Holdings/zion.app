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
  Award
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
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50'
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
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise-grade security solutions',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Enterprise IT',
        href: '/services?category=enterprise-it',
        icon: <Building className="w-4 h-4" />,
        description: 'Enterprise infrastructure solutions',
        neonColor: 'shadow-indigo-400/50'
      },
      {
        label: 'Cloud Solutions',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure',
        neonColor: 'shadow-cyan-400/50'
      },
      {
        label: 'AI Consciousness',
        href: '/services?category=ai-consciousness',
        icon: <Eye className="w-4 h-4" />,
        description: 'Revolutionary conscious AI development',
        featured: true,
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Metaverse Platform',
        href: '/services?category=metaverse',
        icon: <Layers className="w-4 h-4" />,
        description: 'AI-powered virtual experiences',
        neonColor: 'shadow-pink-400/50'
      }
    ]
  },
  {
    label: 'Innovations',
    href: '/innovations',
    icon: <Lightbulb className="w-4 h-4" />,
    description: 'Cutting-edge research and development',
    neonColor: 'shadow-yellow-400/50',
    children: [
      {
        label: 'AI Consciousness',
        href: '/ai-consciousness',
        icon: <Brain className="w-4 h-4" />,
        description: 'Conscious AI development',
        featured: true,
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Quantum AI',
        href: '/quantum-ai',
        icon: <Atom className="w-4 h-4" />,
        description: 'Quantum-enhanced AI systems',
        featured: true,
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Space Tech',
        href: '/space-technology',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Space exploration technology',
        neonColor: 'shadow-pink-400/50'
      },
      {
        label: 'Brain-Computer Interface',
        href: '/brain-computer-interface-2040',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Neural interface technology',
        neonColor: 'shadow-cyan-400/50'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions',
    neonColor: 'shadow-green-400/50',
    children: [
      {
        label: 'Healthcare',
        href: '/healthcare-solutions',
        icon: <Shield className="w-4 h-4" />,
        description: 'Medical technology solutions',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Finance',
        href: '/financial-solutions',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Fintech and banking solutions',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Manufacturing',
        href: '/manufacturing-ai-solutions',
        icon: <Settings className="w-4 h-4" />,
        description: 'Industry 4.0 solutions',
        neonColor: 'shadow-orange-400/50'
      },
      {
        label: 'Retail',
        href: '/retail-technology-solutions',
        icon: <ShoppingBag className="w-4 h-4" />,
        description: 'E-commerce technology',
        neonColor: 'shadow-purple-400/50'
      }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'About Zion Tech Group',
    neonColor: 'shadow-indigo-400/50',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Our mission and values',
        neonColor: 'shadow-cyan-400/50'
      },
      {
        label: 'Leadership',
        href: '/about#leadership',
        icon: <Crown className="w-4 h-4" />,
        description: 'Meet our team',
        neonColor: 'shadow-yellow-400/50'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our team',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'News',
        href: '/news',
        icon: <FileText className="w-4 h-4" />,
        description: 'Latest company news',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories',
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Partners',
        href: '/partners',
        icon: <Handshake className="w-4 h-4" />,
        description: 'Strategic partnerships',
        neonColor: 'shadow-orange-400/50'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge and support',
    neonColor: 'shadow-purple-400/50',
    children: [
      {
        label: 'Blog',
        href: '/blog',
        icon: <FileText className="w-4 h-4" />,
        description: 'Industry insights and updates',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Whitepapers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'In-depth research papers',
        neonColor: 'shadow-indigo-400/50'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Educational content',
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Code className="w-4 h-4" />,
        description: 'Technical guides',
        neonColor: 'shadow-cyan-400/50'
      },
      {
        label: 'API Reference',
        href: '/api-documentation',
        icon: <Code className="w-4 h-4" />,
        description: 'Developer resources',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Support',
        href: '/support',
        icon: <Phone className="w-4 h-4" />,
        description: 'Help and assistance',
        neonColor: 'shadow-orange-400/50'
      }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
    description: 'Get in touch with us',
    neonColor: 'shadow-green-400/50'
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-4 h-4" />, neonColor: 'shadow-blue-400/50' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-4 h-4" />, neonColor: 'shadow-cyan-400/50' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-4 h-4" />, neonColor: 'shadow-purple-400/50' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-4 h-4" />, neonColor: 'shadow-red-400/50' }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
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
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigationClick = (href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    router.push(href);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-b border-cyan-400/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-cyan-300">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
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
              <span className="text-cyan-200">Address: 364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-cyan-400/30 shadow-2xl shadow-cyan-400/20' 
            : 'bg-transparent'
        }`}
        ref={dropdownRef}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                  }}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-cyan-400 font-medium">Innovation 2040</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => item.children ? toggleDropdown(item.label) : handleNavigationClick(item.href)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-400/10 group"
                    style={{
                      boxShadow: item.neonColor ? `0 0 10px ${item.neonColor}` : 'none',
                    }}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
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
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-2xl shadow-cyan-400/20 overflow-hidden"
                      style={{
                        boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
                      }}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 gap-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-cyan-400/10 transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                              onClick={() => handleNavigationClick(child.href)}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                                child.featured ? 'ring-2 ring-cyan-400/50' : ''
                              }`}
                                style={{
                                  boxShadow: child.neonColor ? `0 0 15px ${child.neonColor}` : 'none',
                                }}>
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.label}
                                  </p>
                                  {child.featured && (
                                    <span className="px-2 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-bold rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                {child.description && (
                                  <p className="text-xs text-gray-400 mt-1">{child.description}</p>
                                )}
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-400/10"
                >
                  <Search className="w-5 h-5" />
                </button>

                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-2xl shadow-cyan-400/20 p-4"
                      style={{
                        boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
                      }}
                    >
                      <form onSubmit={handleSearch} className="space-y-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search services, solutions..."
                            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Search
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link href="/contact">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  <span className="flex items-center space-x-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-400/10"
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
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-400/30 overflow-hidden"
              style={{
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
              }}
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                {/* Mobile Navigation Items */}
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() => item.children ? toggleDropdown(item.label) : handleNavigationClick(item.href)}
                      className="w-full flex items-center justify-between p-4 text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-400/10"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                        {item.badge && (
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
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
                        className="ml-8 mt-2 space-y-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block p-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-400/10"
                            onClick={() => handleNavigationClick(child.href)}
                          >
                            <div className="flex items-center space-x-3">
                              {child.icon}
                              <span className="text-sm">{child.label}</span>
                              {child.featured && (
                                <span className="px-2 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-bold rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            {child.description && (
                              <p className="text-xs text-gray-500 mt-1 ml-7">{child.description}</p>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4">
                  <Link href="/contact">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
};

export default UltraFuturisticNavigation2040;