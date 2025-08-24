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
  Eye,
  Car,
  TestTube,
  Globe as PlanetIcon,
  Lock,
  Palette,
  Heart,
  Truck,
  Sparkles,
  Infinity,
  Zap as Lightning,
  ShieldCheck,
  TrendingUp,
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
  color?: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    badge: '100+ Services',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        featured: true,
        color: 'from-pink-500 to-rose-600'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        color: 'from-blue-500 to-cyan-600'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        color: 'from-purple-500 to-indigo-600'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise-grade security solutions',
        color: 'from-green-500 to-emerald-600'
      },
      {
        label: 'Enterprise IT',
        href: '/services?category=enterprise-it',
        icon: <Building className="w-4 h-4" />,
        description: 'Enterprise infrastructure solutions',
        color: 'from-orange-500 to-red-600'
      },
      {
        label: 'Emerging Tech',
        href: '/services?category=emerging-tech',
        icon: <Lightbulb className="w-4 h-4" />,
        description: 'Cutting-edge emerging technologies',
        color: 'from-yellow-500 to-orange-600'
      },
      {
        label: 'Holographic & VR',
        href: '/services?category=holographic',
        icon: <Eye className="w-4 h-4" />,
        description: 'Immersive technology solutions',
        color: 'from-purple-500 to-pink-600'
      },
      {
        label: 'Autonomous Systems',
        href: '/services?category=autonomous',
        icon: <Car className="w-4 h-4" />,
        description: 'Self-driving and automation solutions',
        color: 'from-cyan-500 to-blue-600'
      },
      {
        label: 'Synthetic Biology',
        href: '/services?category=synthetic-biology',
        icon: <TestTube className="w-4 h-4" />,
        description: 'Bio-engineering and automation',
        color: 'from-green-500 to-teal-600'
      },
      {
        label: 'Brain-Computer Interface',
        href: '/services?category=bci',
        icon: <Brain className="w-4 h-4" />,
        description: 'Neural technology solutions',
        color: 'from-pink-500 to-purple-600'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions',
    children: [
      {
        label: 'Healthcare',
        href: '/solutions/healthcare',
        icon: <Heart className="w-4 h-4" />,
        description: 'AI-powered healthcare solutions',
        color: 'from-red-500 to-pink-600'
      },
      {
        label: 'Finance',
        href: '/solutions/finance',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Quantum financial technology',
        color: 'from-green-500 to-emerald-600'
      },
      {
        label: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <Settings className="w-4 h-4" />,
        description: 'Smart manufacturing solutions',
        color: 'from-blue-500 to-indigo-600'
      },
      {
        label: 'Logistics',
        href: '/solutions/logistics',
        icon: <Truck className="w-4 h-4" />,
        description: 'Autonomous logistics systems',
        color: 'from-orange-500 to-red-600'
      },
      {
        label: 'Education',
        href: '/solutions/education',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'AI-powered learning platforms',
        color: 'from-purple-500 to-pink-600'
      }
    ]
  },
  {
    label: 'Pricing',
    href: '/pricing',
    icon: <ShoppingBag className="w-4 h-4" />,
    description: 'Transparent pricing plans'
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <FileText className="w-4 h-4" />,
    description: 'Knowledge and insights',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation and guides'
      },
      {
        label: 'API Reference',
        href: '/api',
        icon: <Code className="w-4 h-4" />,
        description: 'Developer API documentation'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and implementations'
      },
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'Research and insights'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Educational webinars and demos'
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
        description: 'Our mission and vision'
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
        label: 'News',
        href: '/news',
        icon: <FileText className="w-4 h-4" />,
        description: 'Company news and updates'
      },
      {
        label: 'Partners',
        href: '/partners',
        icon: <Handshake className="w-4 h-4" />,
        description: 'Strategic partnerships'
      }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
    description: 'Get in touch with us'
  }
];

const UltraAdvancedFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleNavigation = (href: string) => {
    closeMobileMenu();
    router.push(href);
  };

  return (
    <>
      {/* Enhanced Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 via-blue-900/80 to-purple-900/80 backdrop-blur-sm border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-cyan-300">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        ref={dropdownRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-cyan-400/20' 
            : 'bg-black/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400 font-medium">Innovation 2040</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-bold">
                          {item.badge}
                        </span>
                      )}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-bold">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}

                  {/* Enhanced Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/25 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                            >
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-600 to-gray-700'} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {child.label}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full font-bold">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                  {child.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200 flex-shrink-0" />
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
              {/* Search Button */}
              <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>
              
              {/* CTA Buttons */}
              <Link href="/demo">
                <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 font-medium">
                  Request Demo
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-medium">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMobileMenu} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-400/20 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">Zion Tech Group</div>
                      <div className="text-xs text-cyan-400">Innovation 2040</div>
                    </div>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.label)}
                            className="w-full flex items-center justify-between p-4 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                          >
                            <div className="flex items-center space-x-3">
                              {item.icon}
                              <span className="font-medium">{item.label}</span>
                              {item.badge && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-bold">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-6 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={closeMobileMenu}
                                  className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                                >
                                  {child.icon}
                                  <span className="font-medium">{child.label}</span>
                                  {child.featured && (
                                    <span className="ml-auto px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full font-bold">
                                      Featured
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="flex items-center space-x-3 p-4 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                        >
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                          {item.badge && (
                            <span className="ml-auto px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-bold">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <Link href="/demo" onClick={closeMobileMenu}>
                    <button className="w-full px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 font-medium">
                      Request Demo
                    </button>
                  </Link>
                  <Link href="/contact" onClick={closeMobileMenu}>
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-medium">
                      Get Started
                    </button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-4 h-4 text-blue-400" />
                      <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
};

export default UltraAdvancedFuturisticNavigation2040;