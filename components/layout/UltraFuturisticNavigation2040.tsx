import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Search, User, ShoppingCart, 
  Brain, Atom, Shield, Rocket, Cpu, Database, Target, Sparkles,
  Home, Briefcase, Users, FileText, Phone, Mail, MapPin, Globe,
  Zap, Star, TrendingUp, Award, Clock, CheckCircle, ExternalLink,
  Building, GraduationCap, Heart, Palette, BarChart3, Cloud, Lock,
  Handshake, Video, BookOpen
} from 'lucide-react';

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      description: 'Welcome to the future of technology'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase,
      description: 'Explore our revolutionary solutions',
      dropdown: [
        {
          name: 'AI & Consciousness',
          href: '/services/ai-consciousness',
          icon: Brain,
          description: 'AI consciousness evolution and development',
          color: 'from-purple-500 to-pink-500',
          featured: true
        },
        {
          name: 'Quantum Technology',
          href: '/services/quantum-technology',
          icon: Atom,
          description: 'Quantum computing and hybrid systems',
          color: 'from-cyan-500 to-blue-500',
          featured: true
        },
        {
          name: 'Cybersecurity',
          href: '/services/cybersecurity',
          icon: Shield,
          description: 'Advanced security and protection',
          color: 'from-red-500 to-orange-500',
          featured: true
        },
        {
          name: 'Business Solutions',
          href: '/services/business-solutions',
          icon: Target,
          description: 'Micro SAAS and business automation',
          color: 'from-emerald-500 to-teal-500',
          featured: true
        },
        {
          name: 'IT Infrastructure',
          href: '/services/it-infrastructure',
          icon: Cpu,
          description: 'Cloud and infrastructure solutions',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          name: 'Space Technology',
          href: '/services/space-technology',
          icon: Rocket,
          description: 'Space exploration and resource management',
          color: 'from-pink-500 to-red-500'
        },
        {
          name: 'Data & Analytics',
          href: '/data-analytics',
          icon: BarChart3,
          description: 'Advanced data intelligence solutions',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          name: 'Automation & DevOps',
          href: '/automation',
          icon: Zap,
          description: 'Intelligent automation platforms',
          color: 'from-green-500 to-emerald-500'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Sparkles,
      description: 'Industry-specific technology solutions',
      dropdown: [
        {
          name: 'Healthcare & Biotech',
          href: '/solutions/healthcare',
          icon: Heart,
          description: 'AI-powered healthcare solutions',
          color: 'from-red-500 to-pink-500',
          featured: true
        },
        {
          name: 'Financial Services',
          href: '/solutions/financial',
          icon: TrendingUp,
          description: 'Fintech and banking solutions',
          color: 'from-green-500 to-emerald-500',
          featured: true
        },
        {
          name: 'Manufacturing',
          href: '/solutions/manufacturing',
          icon: Cpu,
          description: 'Smart manufacturing and automation',
          color: 'from-blue-500 to-indigo-500',
          featured: true
        },
        {
          name: 'Retail & E-commerce',
          href: '/solutions/retail',
          icon: ShoppingCart,
          description: 'Digital commerce solutions',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'Education',
          href: '/solutions/education',
          icon: GraduationCap,
          description: 'Edtech and learning platforms',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          name: 'Government',
          href: '/solutions/government',
          icon: Building,
          description: 'Public sector technology',
          color: 'from-gray-500 to-blue-500'
        },
        {
          name: 'Entertainment & Media',
          href: '/entertainment-media-solutions',
          icon: Palette,
          description: 'Creative technology solutions',
          color: 'from-pink-500 to-rose-500'
        },
        {
          name: 'Energy & Utilities',
          href: '/energy-utilities-solutions',
          icon: Zap,
          description: 'Smart energy management',
          color: 'from-yellow-500 to-orange-500'
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      description: 'Learn about our mission and team',
      dropdown: [
        {
          name: 'About Us',
          href: '/about',
          icon: Users,
          description: 'Our story and mission',
          color: 'from-blue-500 to-indigo-500'
        },
        {
          name: 'Our Team',
          href: '/team',
          icon: Users,
          description: 'Meet our experts',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Careers',
          href: '/careers',
          icon: Briefcase,
          description: 'Join our team',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'Partners',
          href: '/partners',
          icon: Handshake,
          description: 'Strategic partnerships',
          color: 'from-orange-500 to-red-500'
        },
        {
          name: 'News & Press',
          href: '/news',
          icon: FileText,
          description: 'Latest updates',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          name: 'Case Studies',
          href: '/case-studies',
          icon: Award,
          description: 'Success stories',
          color: 'from-emerald-500 to-teal-500'
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      description: 'Knowledge and tools',
      dropdown: [
        {
          name: 'Blog',
          href: '/blog',
          icon: FileText,
          description: 'Insights and trends',
          color: 'from-blue-500 to-indigo-500'
        },
        {
          name: 'Webinars',
          href: '/webinars',
          icon: Video,
          description: 'Educational sessions',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'White Papers',
          href: '/white-papers',
          icon: FileText,
          description: 'In-depth research',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Documentation',
          href: '/docs',
          icon: BookOpen,
          description: 'Technical guides',
          color: 'from-orange-500 to-red-500'
        },
        {
          name: 'Training',
          href: '/training',
          icon: GraduationCap,
          description: 'Skill development',
          color: 'from-indigo-500 to-purple-500'
        }
      ]
    },
    {
      name: 'Careers',
      href: '/careers',
      icon: Users,
      description: 'Join our revolutionary team'
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: FileText,
      description: 'Insights and thought leadership'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: TrendingUp,
      description: 'Client success stories'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      description: 'Get in touch with our experts'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </div>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-300 py-2"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 py-2 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-3">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                                  onClick={closeMobileMenu}
                                >
                                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${subItem.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <subItem.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2">
                                      <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                        {subItem.name}
                                      </p>
                                      {subItem.featured && (
                                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full">
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-white/60 mt-1 line-clamp-2">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Zion Tech</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-cyan-400 transition-colors duration-300"
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
              className="bg-black/95 border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                </div>

                {/* Navigation Items */}
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:text-cyan-400 transition-colors duration-300"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-90' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-white/80 hover:text-cyan-400 transition-colors duration-300"
                                onClick={closeMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-white hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Contact Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium text-center rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="pt-4 border-t border-white/10">
                  <div className="space-y-2 text-sm text-white/60">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default UltraFuturisticNavigation2040;