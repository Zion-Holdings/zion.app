import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles, 
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon,
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones, 
  Code, Database, Network, Server, Monitor, Smartphone,
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck,
  Building, MessageCircle, Sparkles as SparklesIcon, Zap as ZapIcon,
  Target as TargetIcon, Atom as AtomIcon, Brain as BrainIcon,
  Calendar
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
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

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

// Custom Handshake icon component
const Handshake = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Complete technology solutions',
    badge: 'Main',
    category: 'services',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Machine Learning', 
        href: '/ai-services', 
        description: 'Advanced AI solutions',
        icon: <BrainIcon className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <AtomIcon className="w-4 h-4" />
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'Specialized Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <TargetIcon className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/comprehensive-services-showcase-2025',
    icon: <Star className="w-5 h-5" />,
    description: 'Services portfolio & pricing',
    badge: 'Showcase',
    category: 'showcase',
    children: [
      { 
        name: '2025 Services', 
        href: '/comprehensive-services-showcase-2025', 
        description: 'Latest service offerings',
        icon: <Sparkles className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Pricing Plans', 
        href: '/pricing', 
        description: 'Transparent pricing',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories',
        icon: <FileText className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Our story and mission',
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: 'Leadership', 
        href: '/leadership', 
        description: 'Meet our team',
        icon: <Award className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'Partners', 
        href: '/partners', 
        description: 'Strategic partnerships',
        icon: <Handshake className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge & insights',
    category: 'resources',
    children: [
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Latest insights',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical guides',
        icon: <Code className="w-4 h-4" />
      },
      { 
        name: 'Webinars', 
        href: '/webinars', 
        description: 'Live sessions',
        icon: <Video className="w-4 h-4" />
      },
      { 
        name: 'Support', 
        href: '/support', 
        description: 'Help & resources',
        icon: <HelpCircle className="w-4 h-4" />
      }
    ]
  }
];

export default function UltraFuturisticNavigation2036() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <a href="tel:+1 302 464 0950" className="hover:text-cyan-400 transition-colors duration-200">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="hover:text-cyan-400 transition-colors duration-200">
                  364 E Main St STE 1008 Middletown DE 19709
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Globe className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>4.9/5 (200+ Reviews)</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <a href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Quote</span>
                </a>
                <a href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <Calendar className="w-4 h-4" />
                  <span>Book Demo</span>
                </a>
                <a href="/support" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat</span>
                </a>
              </div>
              <button className="flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                <span>More Info</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-black/40 backdrop-blur-lg border-b border-white/5'
      }`}>
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-cyan-500/25"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 rounded-xl animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    ZionTech Group
                  </span>
                  <span className="text-xs text-white/60">Future Technology Solutions</span>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-1">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <button
                      className="flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
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
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid gap-3">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.name}
                                  href={normalizeHref(child.href)}
                                  className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                                    child.featured 
                                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30' 
                                      : 'hover:bg-white/5'
                                  }`}
                                  onClick={closeMobileMenu}
                                >
                                  <div className={`flex-shrink-0 ${child.featured ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}>
                                    {child.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2">
                                      <p className={`text-sm font-medium ${
                                        child.featured ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
                                      }`}>
                                        {child.name}
                                      </p>
                                      {child.featured && (
                                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">{child.description}</p>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
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

              {/* CTA Button */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link 
                  href="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-2 space-y-2"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                              onClick={closeMobileMenu}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}