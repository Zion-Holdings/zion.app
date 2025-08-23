import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2, Truck,
  Home, Briefcase, BookOpen, FileText, Video, GraduationCap, Award, Newspaper, MessageCircle
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  featured?: boolean;
  category?: string;
  neonColor?: string;
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

// Enhanced navigation items with better organization
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
    description: 'Explore our comprehensive technology solutions',
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    category: 'main',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/ai-services',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        featured: true,
        neonColor: 'shadow-purple-400/50',
        category: 'ai'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-services',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50',
        category: 'quantum'
      },
      {
        label: 'Space Technology',
        href: '/space-technology',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        neonColor: 'shadow-pink-400/50',
        category: 'space'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        neonColor: 'shadow-red-400/50',
        category: 'security'
      },
      {
        label: 'Cloud Infrastructure',
        href: '/cloud-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        neonColor: 'shadow-indigo-400/50',
        category: 'cloud'
      },
      {
        label: 'Edge Computing',
        href: '/edge-computing-orchestration',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Next-generation edge solutions',
        neonColor: 'shadow-green-400/50',
        category: 'edge'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions and use cases',
    neonColor: 'shadow-emerald-400/50',
    category: 'main',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/enterprise-solutions-showcase',
        icon: <Building className="w-4 h-4" />,
        description: 'Large-scale enterprise implementations',
        neonColor: 'shadow-blue-400/50',
        category: 'enterprise'
      },
      {
        label: 'Healthcare Solutions',
        href: '/healthcare-ai-solutions',
        icon: <Heart className="w-4 h-4" />,
        description: 'AI-powered healthcare solutions',
        neonColor: 'shadow-red-400/50',
        category: 'healthcare'
      },
      {
        label: 'Financial Solutions',
        href: '/financial-solutions',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Fintech and financial services',
        neonColor: 'shadow-yellow-400/50',
        category: 'financial'
      },
      {
        label: 'Manufacturing Solutions',
        href: '/manufacturing-ai-solutions',
        icon: <Settings className="w-4 h-4" />,
        description: 'AI-powered manufacturing optimization',
        neonColor: 'shadow-orange-400/50',
        category: 'manufacturing'
      },
      {
        label: 'Government Solutions',
        href: '/government-technology-solutions',
        icon: <Shield className="w-4 h-4" />,
        description: 'Secure government implementations',
        neonColor: 'shadow-purple-400/50',
        category: 'government'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge base and learning resources',
    neonColor: 'shadow-orange-400/50',
    category: 'main',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation and guides',
        neonColor: 'shadow-blue-400/50',
        category: 'docs'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Live and recorded webinars',
        neonColor: 'shadow-purple-400/50',
        category: 'webinars'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and implementations',
        neonColor: 'shadow-green-400/50',
        category: 'case-studies'
      },
      {
        label: 'API Reference',
        href: '/api-docs',
        icon: <Code className="w-4 h-4" />,
        description: 'Developer API documentation',
        neonColor: 'shadow-indigo-400/50',
        category: 'api'
      },
      {
        label: 'Training',
        href: '/training',
        icon: <GraduationCap className="w-4 h-4" />,
        description: 'Training programs and certifications',
        neonColor: 'shadow-yellow-400/50',
        category: 'training'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <FileText className="w-4 h-4" />,
        description: 'Latest insights and updates',
        neonColor: 'shadow-cyan-400/50',
        category: 'blog'
      }
    ]
  },
  {
    label: 'Company',
    href: '/company',
    icon: <Building className="w-4 h-4" />,
    description: 'About Zion Tech Group',
    neonColor: 'shadow-cyan-400/50',
    category: 'main',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-blue-400/50',
        category: 'about'
      },
      {
        label: 'Mission',
        href: '/mission',
        icon: <Target className="w-4 h-4" />,
        description: 'Our vision and goals',
        neonColor: 'shadow-green-400/50',
        category: 'mission'
      },
      {
        label: 'Team',
        href: '/team',
        icon: <Users className="w-4 h-4" />,
        description: 'Meet our experts',
        neonColor: 'shadow-green-400/50',
        category: 'team'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our innovative team',
        neonColor: 'shadow-orange-400/50',
        category: 'careers'
      },
      {
        label: 'News & Press',
        href: '/news',
        icon: <Newspaper className="w-4 h-4" />,
        description: 'Latest company news and press releases',
        neonColor: 'shadow-yellow-400/50',
        category: 'news'
      },
      {
        label: 'Contact Us',
        href: '/contact',
        icon: <MessageCircle className="w-4 h-4" />,
        description: 'Get in touch with our team',
        neonColor: 'shadow-red-400/50',
        category: 'contact'
      }
    ]
  },
  {
    label: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-4 h-4" />,
    neonColor: 'shadow-green-400/50',
    category: 'main'
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
    neonColor: 'shadow-red-400/50',
    category: 'main'
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-blue-900/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label || '')}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={normalizeHref(item.href)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}

                {/* Enhanced Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={normalizeHref(child.href)}
                              onClick={closeDropdown}
                              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30' 
                                  : 'hover:bg-gray-800/50'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                child.neonColor 
                                  ? `bg-gradient-to-br ${child.neonColor.replace('shadow-', 'from-').replace('/50', ' to-').replace('-400', '-500')}` 
                                  : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {child.label}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
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
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <a href="tel:+13024640950" className="text-sm font-medium">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <a href="mailto:kleber@ziontechgroup.com" className="text-sm font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="ml-4 mt-2 space-y-2 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={normalizeHref(child.href)}
                                onClick={() => { closeDropdown(); setIsOpen(false); }}
                                className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                    child.neonColor 
                                      ? `bg-gradient-to-br ${child.neonColor.replace('shadow-', 'from-').replace('/50', ' to-').replace('-400', '-500')}` 
                                      : 'bg-gray-700'
                                  }`}>
                                    {child.icon}
                                  </div>
                                  <span className="font-medium">{child.label}</span>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={normalizeHref(item.href)}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-gray-800">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="text-sm">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-sm">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2045;