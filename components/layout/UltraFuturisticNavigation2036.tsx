import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Target, Atom, BookOpen,
  DollarSign, BarChart3, Users, Star, Sparkles, 
  Cpu, Building, MessageCircle, Play, Calculator,
  Grid, FileText, Code, Video
} from 'lucide-react';
import Link from 'next/link';

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
        name: 'AI & Consciousness', 
        href: '/ai-services', 
        description: 'Advanced AI consciousness solutions',
        icon: <Brain className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />
      },
      { 
        name: 'Autonomous Systems', 
        href: '/autonomous-systems', 
        description: 'Self-operating intelligent systems',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'Micro SAAS', 
        href: '/micro-saas', 
        description: 'Specialized business solutions',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'Enterprise IT', 
        href: '/enterprise-it', 
        description: 'Corporate infrastructure solutions',
        icon: <Building className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/showcase',
    icon: <Star className="w-5 h-5" />,
    description: 'Service demonstrations and pricing',
    category: 'showcase',
    children: [
      { 
        name: '2025 Services Showcase', 
        href: '/services', 
        description: 'Current service portfolio',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: '2037 Innovative Services', 
        href: '/2037-innovative-services-showcase', 
        description: 'Future technology preview',
        icon: <Sparkles className="w-4 h-4" />
      },
      { 
        name: '2038 Innovative Services', 
        href: '/2038-innovative-services-showcase', 
        description: 'Latest revolutionary technology',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'Pricing Plans', 
        href: '/pricing', 
        description: 'Service pricing and packages',
        icon: <DollarSign className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'About',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'Company information and team',
    category: 'about',
    children: [
      { 
        name: 'Our Story', 
        href: '/about', 
        description: 'Company history and mission',
        icon: <BookOpen className="w-4 h-4" />
      },
      { 
        name: 'Leadership Team', 
        href: '/team', 
        description: 'Meet our executives',
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Target className="w-4 h-4" />
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
    description: 'Educational content and tools',
    category: 'resources',
    children: [
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Latest insights and news',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories and results',
        icon: <BarChart3 className="w-4 h-4" />
      },
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical guides and APIs',
        icon: <Code className="w-4 h-4" />
      },
      { 
        name: 'Webinars', 
        href: '/webinars', 
        description: 'Live educational sessions',
        icon: <Video className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <MessageCircle className="w-5 h-5" />,
    description: 'Get in touch with us',
    category: 'contact',
    children: [
      { 
        name: 'Contact Form', 
        href: '/contact', 
        description: 'Send us a message',
        icon: <MessageCircle className="w-4 h-4" />
      },
      { 
        name: 'Phone Support', 
        href: 'tel:+1 302 464 0950', 
        description: 'Call us directly',
        icon: <Phone className="w-4 h-4" />
      },
      { 
        name: 'Email Support', 
        href: 'mailto:kleber@ziontechgroup.com', 
        description: 'Email our team',
        icon: <Mail className="w-4 h-4" />
      },
      { 
        name: 'Office Location', 
        href: '/contact#location', 
        description: 'Visit our office',
        icon: <MapPin className="w-4 h-4" />
      }
    ]
  }
];

const UltraFuturisticNavigation2036: React.FC = () => {
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

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.open(href, '_blank');
    } else {
      window.location.href = normalizeHref(href);
    }
    setIsOpen(false);
    closeDropdown();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-white/80">
            <div className="flex items-center space-x-6">
              <a href="tel:+1 302 464 0950" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <span className="text-white font-bold text-xl">ZionTech Group</span>
              <p className="text-cyan-400 text-xs">Future Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 text-white/80 hover:text-cyan-400 transition-colors duration-200 py-2"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
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
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                      onMouseLeave={closeDropdown}
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-white font-semibold text-lg">{item.title || item.name}</h3>
                          <p className="text-white/60 text-sm">{item.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <button
                              key={child.name}
                              onClick={() => handleLinkClick(child.href)}
                              className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                            >
                              <div className="flex items-center space-x-3">
                                {child.icon}
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-white group-hover:text-cyan-400 transition-colors">
                                      {child.name}
                                    </span>
                                    {child.featured && (
                                      <span className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-white/60 text-sm">{child.description}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <button className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Get Started
              </button>
            </Link>
            <Link href="/demo">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Request Demo
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full text-left flex items-center justify-between text-white/80 hover:text-cyan-400 transition-colors py-3"
                  >
                    <div className="flex items-center space-x-3">
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
                        className="ml-6 mt-2 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => handleLinkClick(child.href)}
                            className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-all duration-200 text-white/70 hover:text-cyan-400"
                          >
                            <div className="flex items-center space-x-3">
                              {child.icon}
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span>{child.name}</span>
                                  {child.featured && (
                                    <span className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-white/50 text-sm">{child.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Link href="/contact" className="block">
                  <button className="w-full px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    Get Started
                  </button>
                </Link>
                <Link href="/demo" className="block">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Request Demo
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

export default UltraFuturisticNavigation2036;