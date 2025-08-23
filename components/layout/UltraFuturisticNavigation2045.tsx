import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, Lock, 
  Phone, Mail, MapPin, ArrowRight, Star, Users, Award,
  Brain, Atom, Rocket, Shield, Cloud, Database, Code, BarChart3, Settings,
  Sparkles, Infinity, Layers, Network, Smartphone, Monitor,
  Camera, Mic, Speaker, Wifi, Bluetooth, Satellite,
  Telescope, Plane, Moon, Sun, Heart, FileText, Handshake, TrendingUp, Book, GraduationCap,
  ShoppingCart, Car, Building, Music, Trees, Leaf, DollarSign, Factory, Battery, Newspaper,
  Palette, Cpu, Server, Target, CheckCircle, Play, ChevronRight, ChevronLeft
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
        label: 'AI & Machine Learning',
        href: '/ai-services',
        icon: <Brain className="w-4 h-4" />,
        description: 'Cutting-edge AI solutions',
        featured: true,
        badge: 'BREAKTHROUGH',
        color: 'from-purple-500 to-pink-500'
      },
      {
        label: 'Micro SAAS Solutions',
        href: '/micro-saas',
        icon: <Code className="w-4 h-4" />,
        description: 'Innovative micro SAAS services',
        featured: true,
        badge: 'INNOVATIVE',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        label: 'IT Infrastructure',
        href: '/it-infrastructure',
        icon: <Server className="w-4 h-4" />,
        description: 'Advanced IT infrastructure services',
        featured: true,
        badge: 'ADVANCED',
        color: 'from-green-500 to-emerald-500'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-computing',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        badge: 'QUANTUM',
        color: 'from-cyan-500 to-blue-500'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space solutions',
        featured: true,
        badge: 'FUTURE',
        color: 'from-pink-500 to-red-500'
      },
      {
        label: 'Metaverse & VR',
        href: '/metaverse-development',
        icon: <Globe className="w-4 h-4" />,
        description: 'Immersive virtual experiences',
        featured: true,
        badge: 'IMMERSIVE',
        color: 'from-green-500 to-emerald-500'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise security solutions',
        badge: 'SECURE',
        color: 'from-red-500 to-pink-500'
      },
      {
        label: 'Cloud & Infrastructure',
        href: '/cloud-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure',
        badge: 'SCALABLE',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        label: 'Data & Analytics',
        href: '/data-analytics',
        icon: <Database className="w-4 h-4" />,
        description: 'Advanced data solutions',
        badge: 'INSIGHTS',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        label: 'DevOps & Automation',
        href: '/devops-automation',
        icon: <Settings className="w-4 h-4" />,
        description: 'Automated development workflows',
        badge: 'AUTOMATED',
        color: 'from-orange-500 to-red-500'
      },
      {
        label: 'View All Services',
        href: '/services',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete service catalog',
        color: 'from-gray-500 to-slate-500'
      }
    ]
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/enterprise-solutions',
        icon: <Building className="w-4 h-4" />,
        description: 'Large-scale enterprise solutions',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        label: 'Small Business Solutions',
        href: '/small-business-solutions',
        icon: <Target className="w-4 h-4" />,
        description: 'Tailored for small businesses',
        color: 'from-green-500 to-emerald-500'
      },
      {
        label: 'Startup Solutions',
        href: '/startup-solutions',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Accelerate your startup growth',
        color: 'from-purple-500 to-pink-500'
      },
      {
        label: 'Industry Solutions',
        href: '/industry-solutions',
        icon: <Factory className="w-4 h-4" />,
        description: 'Industry-specific solutions',
        color: 'from-orange-500 to-red-500'
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
        color: 'from-red-500 to-pink-500'
      },
      {
        label: 'Financial Services',
        href: '/financial-solutions',
        icon: <DollarSign className="w-4 h-4" />,
        description: 'Fintech and banking solutions',
        color: 'from-green-500 to-emerald-500'
      },
      {
        label: 'Manufacturing',
        href: '/manufacturing-ai-solutions',
        icon: <Factory className="w-4 h-4" />,
        description: 'Smart manufacturing solutions',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        label: 'Retail & E-commerce',
        href: '/retail-technology-solutions',
        icon: <ShoppingCart className="w-4 h-4" />,
        description: 'Digital retail transformation',
        color: 'from-purple-500 to-pink-500'
      },
      {
        label: 'Education',
        href: '/education-technology-solutions',
        icon: <GraduationCap className="w-4 h-4" />,
        description: 'EdTech and learning solutions',
        color: 'from-cyan-500 to-blue-500'
      },
      {
        label: 'Government',
        href: '/government-technology-solutions',
        icon: <Building className="w-4 h-4" />,
        description: 'Public sector technology',
        color: 'from-gray-500 to-slate-500'
      },
      {
        label: 'Energy & Utilities',
        href: '/energy-utilities-solutions',
        icon: <Zap className="w-4 h-4" />,
        description: 'Smart energy solutions',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        label: 'Transportation',
        href: '/transportation-solutions',
        icon: <Car className="w-4 h-4" />,
        description: 'Mobility and logistics',
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Code className="w-4 h-4" />,
        description: 'Technical documentation',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        label: 'API Reference',
        href: '/api-docs',
        icon: <Server className="w-4 h-4" />,
        description: 'API documentation',
        color: 'from-green-500 to-emerald-500'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories',
        color: 'from-purple-500 to-pink-500'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <Globe className="w-4 h-4" />,
        description: 'Latest insights',
        color: 'from-cyan-500 to-blue-500'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Monitor className="w-4 h-4" />,
        description: 'Educational webinars',
        color: 'from-orange-500 to-red-500'
      },
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'In-depth research',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        label: 'Training',
        href: '/training',
        icon: <Users className="w-4 h-4" />,
        description: 'Professional training',
        color: 'from-green-500 to-emerald-500'
      },
      {
        label: 'Support',
        href: '/support',
        icon: <Award className="w-4 h-4" />,
        description: 'Technical support',
        color: 'from-blue-500 to-cyan-500'
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
        description: 'Learn about our company',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Award className="w-4 h-4" />,
        description: 'Join our team',
        color: 'from-green-500 to-emerald-500'
      },
      {
        label: 'Partners',
        href: '/partners',
        icon: <Handshake className="w-4 h-4" />,
        description: 'Partnership opportunities',
        color: 'from-purple-500 to-pink-500'
      },
      {
        label: 'Investors',
        href: '/investors',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Investment information',
        color: 'from-cyan-500 to-blue-500'
      },
      {
        label: 'News',
        href: '/news',
        icon: <Newspaper className="w-4 h-4" />,
        description: 'Company updates',
        color: 'from-orange-500 to-red-500'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Mail className="w-4 h-4" />,
        description: 'Get in touch',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        label: 'Privacy Policy',
        href: '/privacy',
        icon: <Lock className="w-4 h-4" />,
        description: 'Privacy information',
        color: 'from-gray-500 to-slate-500'
      },
      {
        label: 'Terms of Service',
        href: '/terms',
        icon: <FileText className="w-4 h-4" />,
        description: 'Terms and conditions',
        color: 'from-blue-500 to-cyan-500'
      }
    ]
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl"
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-cyan-300 font-medium">Innovation 2045</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group-hover:scale-105"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group-hover:scale-105"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    {...fadeInUp}
                    className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href || '#'}
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-200 hover:scale-105"
                          >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-slate-500'} flex items-center justify-center flex-shrink-0`}>
                              {child.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium text-gray-200 group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.label}
                                </span>
                                {child.badge && (
                                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                              {child.description && (
                                <p className="text-xs text-gray-400 mt-1">{child.description}</p>
                              )}
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

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {item.children && activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-6 mt-2 space-y-2"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || '#'}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-2"
                              >
                                {child.icon}
                                <span className="text-sm">{child.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2045;