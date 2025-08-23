import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, 
  Phone, Mail, ArrowRight, Star, Users, Award,
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud,
  Heart, Target, BarChart3, Lightbulb, Code,
  Server, ShieldCheck, BrainCircuit, Satellite,
  Sparkles, TrendingUp, Layers, Command,
  ShoppingCart, FileText, Video, PenTool, Handshake,
  HelpCircle, Twitter, Linkedin, Youtube, Github
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
  description?: string;
  featured?: boolean;
  badge?: string;
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
        description: 'Advanced AI solutions for enterprise',
        featured: true,
        badge: 'Hot'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-services',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        badge: 'New'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Satellite className="w-4 h-4" />,
        description: 'Innovative space solutions',
        featured: true
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise security solutions',
        featured: true
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure',
        featured: true
      },
      {
        label: 'Micro SaaS',
        href: '/micro-saas',
        icon: <Layers className="w-4 h-4" />,
        description: 'Rapid deployment SaaS solutions',
        featured: true
      },
      {
        label: 'IT Infrastructure',
        href: '/it-services',
        icon: <Server className="w-4 h-4" />,
        description: 'Complete IT infrastructure solutions'
      },
      {
        label: 'Data Analytics',
        href: '/data-analytics',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Advanced analytics and insights'
      },
      {
        label: 'DevOps & Automation',
        href: '/devops-automation',
        icon: <Command className="w-4 h-4" />,
        description: 'Automated development and operations'
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
        label: 'Enterprise IT',
        href: '/enterprise-solutions-showcase',
        icon: <Globe className="w-4 h-4" />,
        description: 'Complete enterprise IT solutions',
        featured: true
      },
      {
        label: 'Healthcare',
        href: '/healthcare-solutions',
        icon: <Heart className="w-4 h-4" />,
        description: 'Healthcare technology solutions',
        featured: true
      },
      {
        label: 'Financial Services',
        href: '/financial-solutions',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Fintech and banking solutions',
        featured: true
      },
      {
        label: 'Manufacturing',
        href: '/manufacturing-ai-solutions',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Smart manufacturing solutions'
      },
      {
        label: 'Retail & E-commerce',
        href: '/retail-technology-solutions',
        icon: <ShoppingCart className="w-4 h-4" />,
        description: 'Digital retail transformation'
      },
      {
        label: 'Education',
        href: '/education-technology',
        icon: <Lightbulb className="w-4 h-4" />,
        description: 'EdTech and learning solutions'
      },
      {
        label: 'Government',
        href: '/government-technology-solutions',
        icon: <ShieldCheck className="w-4 h-4" />,
        description: 'Public sector technology'
      }
    ]
  },
  {
    label: 'Innovations',
    children: [
      {
        label: 'AI Consciousness',
        href: '/ai-consciousness-evolution-2040',
        icon: <BrainCircuit className="w-4 h-4" />,
        description: 'Revolutionary AI consciousness',
        featured: true,
        badge: 'Breakthrough'
      },
      {
        label: 'Quantum Neural',
        href: '/quantum-neural-ecosystem-2040',
        icon: <Atom className="w-4 h-4" />,
        description: 'Quantum neural networks',
        featured: true
      },
      {
        label: 'Space Resources',
        href: '/space-resource-intelligence-2040',
        icon: <Satellite className="w-4 h-4" />,
        description: 'Space resource intelligence',
        featured: true
      },
      {
        label: 'Brain Interface',
        href: '/brain-computer-interface-2040',
        icon: <Brain className="w-4 h-4" />,
        description: 'Neural interface technology'
      },
      {
        label: 'Holographic Workspace',
        href: '/holographic-quantum-workspace-2045',
        icon: <Layers className="w-4 h-4" />,
        description: '3D holographic collaboration'
      }
    ]
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Target className="w-4 h-4" />,
        description: 'Success stories and implementations'
      },
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'In-depth research and insights'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Expert presentations and demos'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <PenTool className="w-4 h-4" />,
        description: 'Latest insights and updates'
      },
      {
        label: 'API Documentation',
        href: '/api',
        icon: <Code className="w-4 h-4" />,
        description: 'Developer resources and guides'
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
        description: 'Learn about Zion Tech Group'
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
        description: 'Strategic partnerships'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Mail className="w-4 h-4" />,
        description: 'Get in touch with us'
      },
      {
        label: 'Support',
        href: '/support',
        icon: <HelpCircle className="w-4 h-4" />,
        description: 'Technical support and help'
      }
    ]
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-4 h-4" /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-4 h-4" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-4 h-4" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-4 h-4" /> }
];

export default function UltraFuturisticNavigation2040() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-200" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400">2045 Future Technology</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl z-50"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href || '#'}
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600' 
                                  : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <p className="text-sm font-medium text-gray-200 group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.label}
                                </p>
                                {child.badge && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                              {child.description && (
                                <p className="text-xs text-gray-400 mt-1">
                                  {child.description}
                                </p>
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            </form>

            {/* CTA Button */}
            <Link
              href="/get-started"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </form>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                            >
                              {child.icon}
                              <span>{child.label}</span>
                              {child.badge && (
                                <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                                  {child.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  href="/get-started"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-base font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}