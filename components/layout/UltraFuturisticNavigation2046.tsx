import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Phone, Linkedin, Twitter, Github, Youtube,
  Home, Briefcase, Brain, Atom, Rocket, Shield, Cloud, Target, Building,
  Users, BookOpen, FileText, Video, Code, Zap, Star, Sparkles, Globe,
  Cpu, Database, Eye, Heart, Infinity, TrendingUp, Palette, Layers,
  Grid, BarChart3, Settings, HelpCircle, MessageCircle, Calendar,
  Award, Lightbulb, Play, DollarSign, GraduationCap, Globe2, Shield2,
  Cpu2, Database2, Brain2, Atom2, Rocket2, Target2, Building2
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  featured?: boolean;
  neonColor?: string;
  category?: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
    neonColor: 'shadow-cyan-400/50',
    category: 'main'
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Comprehensive technology solutions',
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    category: 'main',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain2 className="w-4 h-4" />,
        description: 'Advanced AI solutions',
        featured: true,
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Atom2 className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield2 className="w-4 h-4" />,
        description: 'Advanced security solutions',
        neonColor: 'shadow-red-400/50'
      },
      {
        label: 'Cloud Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        neonColor: 'shadow-indigo-400/50'
      },
      {
        label: 'Micro SAAS Solutions',
        href: '/services?category=micro-saas',
        icon: <Target2 className="w-4 h-4" />,
        description: 'Innovative business solutions',
        neonColor: 'shadow-emerald-400/50'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions',
    neonColor: 'shadow-emerald-400/50',
    category: 'main',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/solutions/enterprise',
        icon: <Building2 className="w-4 h-4" />,
        description: 'Large-scale implementations'
      },
      {
        label: 'Startup Solutions',
        href: '/solutions/startup',
        icon: <Rocket2 className="w-4 h-4" />,
        description: 'Scalable startup solutions'
      },
      {
        label: 'Government Solutions',
        href: '/solutions/government',
        icon: <Shield2 className="w-4 h-4" />,
        description: 'Secure government implementations'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge and learning',
    neonColor: 'shadow-orange-400/50',
    category: 'main',
    children: [
      {
        label: 'Documentation',
        href: '/resources/documentation',
        icon: <FileText className="w-4 h-4" />
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="w-4 h-4" />
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />,
    description: 'Learn about our company',
    neonColor: 'shadow-pink-400/50',
    category: 'main',
    children: [
      {
        label: 'Our Team',
        href: '/team',
        icon: <Users className="w-4 h-4" />
      },
      {
        label: 'Leadership',
        href: '/leadership',
        icon: <Award className="w-4 h-4" />
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />
      }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <MessageCircle className="w-4 h-4" />,
    neonColor: 'shadow-yellow-400/50',
    category: 'main'
  }
];

const UltraFuturisticNavigation2046: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const handleNavigation = (href: string) => {
    closeDropdowns();
    router.push(href);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Revolutionary 2046 Technology</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => item.children ? handleDropdownToggle(item.label) : handleNavigation(item.href)}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-200 group"
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10"
                      >
                        <div className="p-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeDropdowns}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                            >
                              <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                                {child.icon}
                              </div>
                              <div>
                                <div className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-200">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-sm text-gray-400">
                                    {child.description}
                                  </div>
                                )}
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

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-200"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => item.children ? handleDropdownToggle(item.label) : handleNavigation(item.href)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {item.children && activeDropdown === item.label && (
                    <div className="ml-8 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeDropdowns}
                          className="block p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  href="/contact"
                  onClick={closeDropdowns}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
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

export default UltraFuturisticNavigation2046;