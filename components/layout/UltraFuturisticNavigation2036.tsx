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
  Target as TargetIcon, Atom as AtomIcon, Brain as BrainIcon
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

interface UltraFuturisticNavigation2036Props {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
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
    children: [
      { 
        name: '2025 Services Showcase', 
        href: '/comprehensive-services-showcase-2025', 
        description: 'Complete 2025 services overview',
        icon: <Star className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Pricing Plans', 
        href: '/revolutionary-2025-pricing', 
        description: 'Transparent pricing structure',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Micro SAAS Solutions', 
        href: '/ultimate-2025-micro-saas-showcase', 
        description: 'Micro SAAS portfolio',
        icon: <Rocket className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge & documentation',
    children: [
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'White Papers', 
        href: '/white-papers', 
        description: 'Industry insights',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'Webinars', 
        href: '/webinars', 
        description: 'Educational content',
        icon: <Video className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Support',
    href: '/support',
    icon: <HelpCircle className="w-5 h-5" />,
    description: 'Help & assistance',
    children: [
      { 
        name: 'Contact Us', 
        href: '/contact', 
        description: 'Get in touch',
        icon: <MessageCircle className="w-4 h-4" />
      },
      { 
        name: 'Live Chat', 
        href: '/chat', 
        description: 'Instant support',
        icon: <MessageCircle className="w-4 h-4" />
      },
      { 
        name: 'Knowledge Base', 
        href: '/support', 
        description: 'Self-service help',
        icon: <BookOpen className="w-4 h-4" />
      }
    ]
  }
];

export default function UltraFuturisticNavigation2036({ onMenuToggle, isMenuOpen }: UltraFuturisticNavigation2036Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (onMenuToggle) {
      onMenuToggle();
    }
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
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
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        aria-label="Primary" 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="absolute inset-0">
          <div className={`absolute inset-0 transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-xs text-gray-400">Revolutionary Technology</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                      onClick={() => handleDropdownToggle(item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                          {item.badge}
                        </span>
                      )}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl p-4 z-50"
                        >
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={normalizeHref(child.href)}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                                onClick={closeAllDropdowns}
                              >
                                {child.icon}
                                <div className="flex-1">
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {child.name}
                                  </div>
                                  {child.description && (
                                    <div className="text-sm text-gray-400">{child.description}</div>
                                  )}
                                </div>
                                {child.featured && (
                                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                    Featured
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
                <Link
                  href="/quote"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>Get Quote</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 rounded-lg"
                onClick={handleMobileMenuToggle}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeAllDropdowns} />
            <div className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button
                    onClick={closeAllDropdowns}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                        onClick={() => handleDropdownToggle(item.name)}
                        aria-expanded={activeDropdown === item.name}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span>{item.name}</span>
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
                            className="ml-6 mt-2 space-y-2 overflow-hidden"
                          >
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={normalizeHref(child.href)}
                                className="block p-3 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                                onClick={closeAllDropdowns}
                              >
                                <div className="flex items-center gap-3">
                                  {child.icon}
                                  <div>
                                    <div className="font-medium">{child.name}</div>
                                    {child.description && (
                                      <div className="text-sm text-gray-500">{child.description}</div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                    onClick={closeAllDropdowns}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/quote"
                    className="block w-full text-center px-4 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
                    onClick={closeAllDropdowns}
                  >
                    Get Quote
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-700/50">
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href="tel:+1 302 464 0950" className="hover:text-cyan-400 transition-colors duration-200">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}