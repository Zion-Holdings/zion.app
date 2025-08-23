import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  MessageCircle,
  Calculator,
  Play
} from 'lucide-react';
import Link from 'next/link';
import EnhancedSearch from '../EnhancedSearch';

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
    icon: <Play className="w-5 h-5" />,
    description: 'Complete technology solutions',
    badge: 'Main',
    category: 'services',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Calculator className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Machine Learning', 
        href: '/ai-services', 
        description: 'Advanced AI solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Specialized Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'AI Consciousness', 
        href: '/ai-consciousness-evolution', 
        description: 'Revolutionary AI consciousness',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Quantum Security', 
        href: '/quantum-internet-security', 
        description: 'Quantum-secured communications',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Brain-Computer Interface', 
        href: '/brain-computer-interface', 
        description: 'Neural interface technology',
        icon: <Play className="w-4 h-4" />
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
    featured: true,
    children: [
      { 
        name: 'Services Showcase', 
        href: '/comprehensive-services-showcase-2025', 
        description: 'Complete services overview',
        icon: <Calculator className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Pricing Plans', 
        href: '/pricing', 
        description: 'Service pricing information',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Market Pricing', 
        href: '/market-pricing', 
        description: 'Market price references',
        icon: <Play className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Play className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Company information',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Contact', 
        href: '/contact', 
        description: 'Get in touch',
        icon: <MessageCircle className="w-4 h-4" />
      },
      { 
        name: 'Partners', 
        href: '/partners', 
        description: 'Partnership opportunities',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Investors', 
        href: '/investors', 
        description: 'Investment information',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Play className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <Play className="w-5 h-5" />,
    description: 'Knowledge & support',
    category: 'resources',
    children: [
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Latest insights',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Support', 
        href: '/support', 
        description: 'Technical support',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Training', 
        href: '/training', 
        description: 'Learning resources',
        icon: <Play className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Play className="w-5 h-5" />,
    description: 'Industry solutions',
    category: 'solutions',
    children: [
      { 
        name: 'Healthcare', 
        href: '/healthcare-solutions', 
        description: 'Healthcare technology solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Finance', 
        href: '/financial-solutions', 
        description: 'Financial technology solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Manufacturing', 
        href: '/manufacturing-ai-solutions', 
        description: 'Manufacturing automation',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Retail', 
        href: '/retail-technology-solutions', 
        description: 'Retail technology solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Government', 
        href: '/government-technology-solutions', 
        description: 'Government technology solutions',
        icon: <Play className="w-4 h-4" />
      }
    ]
  }
];

export default function UltraFuturisticNavigation2036() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeAllDropdowns}
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-black/40 backdrop-blur-lg border-b border-white/5'
      }`}>
        {/* Top Contact Bar */}
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <a href="tel:+1 302 464 0950" className="hover:text-cyan-400 transition-colors duration-200">+1 302 464 0950</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <MapPin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hover:text-cyan-400 transition-colors duration-200">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <Play className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">ziontechgroup.com</a>
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
                    <Clock className="w-4 h-4" />
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
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, transform: 'translateX(-20px)' }}
                  animate={{ opacity: 1, transform: 'translateX(0)' }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-cyan-500/25"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 rounded-xl animate-pulse"></div>
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    ZionTech Group
                  </span>
                  <span className="text-xs text-white/60">Future Technology Solutions</span>
                </div>
              </div>

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
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-cyan-500/25 z-50"
                        >
                          <div className="p-4">
                            <div className="mb-4">
                              <h3 className="text-white font-semibold text-lg mb-2">{item.name}</h3>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                            <div className="space-y-2">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.name}
                                  href={normalizeHref(child.href)}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                                  onClick={closeAllDropdowns}
                                >
                                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {child.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                        {child.name}
                                      </span>
                                      {child.featured && (
                                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-gray-400 text-sm">{child.description}</p>
                                  </div>
                                  <Play className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
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

              {/* Right Side Actions */}
              <div className="hidden lg:flex items-center space-x-4">
                {/* Search Button */}
                <button
                  onClick={toggleSearch}
                  className="p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {/* CTA Button */}
                <Link href="/contact">
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-black/95 border-b border-white/10 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <EnhancedSearch />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"></div>
                  <span className="text-white font-bold text-lg">ZionTech Group</span>
                </div>
                <button
                  onClick={closeAllDropdowns}
                  className="p-2 text-white hover:text-cyan-400 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="mb-6">
                <EnhancedSearch />
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-2 overflow-hidden"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                              onClick={closeAllDropdowns}
                            >
                              {child.icon}
                              <span className="text-sm">{child.name}</span>
                              {child.featured && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                  Featured
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link href="/contact" onClick={closeAllDropdowns}>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}