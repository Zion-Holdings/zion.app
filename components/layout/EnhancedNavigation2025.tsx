import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Phone, Mail, 
  Globe, Shield, Cpu, Brain, Rocket, Zap, BarChart3,
  Home, Briefcase, Users, FileText, MessageCircle
} from 'lucide-react';
import SearchComponent from '../SearchComponent';
import ThemeToggle from '../ThemeToggle';

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
  color?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    description: 'Welcome to Zion Tech Group',
    featured: true
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Our comprehensive technology solutions',
    badge: 'Featured',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
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
        description: 'AI-powered solutions',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Cybersecurity', 
        href: '/cybersecurity', 
        description: 'Security and compliance',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Cloud & Infrastructure', 
        href: '/it-services', 
        description: 'Cloud and IT solutions',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'Business Intelligence', 
        href: '/data-analytics', 
        description: 'Data and analytics',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'DevOps & Automation', 
        href: '/devops-automation', 
        description: 'Automation solutions',
        icon: <Code className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        name: 'Space Technology', 
        href: '/space-tech', 
        description: 'Space and aerospace solutions',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-purple-500 to-indigo-500'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    children: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-4 h-4" /> },
      { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <Heart className="w-4 h-4" /> },
      { name: 'Financial Solutions', href: '/solutions/financial', icon: <DollarSign className="w-4 h-4" /> },
      { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: <Cog className="w-4 h-4" /> },
      { name: 'Retail Solutions', href: '/retail-technology-solutions', icon: <ShoppingCart className="w-4 h-4" /> },
      { name: 'Government Solutions', href: '/government-technology-solutions', icon: <ShieldCheck className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    children: [
      { name: 'About Us', href: '/about', icon: <Info className="w-4 h-4" /> },
      { name: 'Our Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
      { name: 'Leadership Team', href: '/leadership', icon: <Users className="w-4 h-4" /> },
      { name: 'Company Culture', href: '/culture', icon: <Heart className="w-4 h-4" /> },
      { name: 'Our Values', href: '/values', icon: <Star className="w-4 h-4" /> },
      { name: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
      { name: 'News & Press', href: '/press', icon: <FileText className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and resources',
    children: [
      { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
      { name: 'Blog & Articles', href: '/blog', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Case Studies', href: '/case-studies', icon: <BarChart className="w-4 h-4" /> },
      { name: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
      { name: 'Webinars', href: '/webinars', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Events', href: '/events-webinars', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Training', href: '/training', icon: <Lightbulb className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Support',
    href: '/support',
    icon: <MessageCircle className="w-5 h-5" />,
    description: 'Get help and support',
    children: [
      { name: 'Contact Us', href: '/contact', icon: <Mail className="w-4 h-4" /> },
      { name: 'Get Started', href: '/get-started', icon: <ArrowRight className="w-4 h-4" /> },
      { name: 'Support Center', href: '/support', icon: <MessageCircle className="w-4 h-4" /> },
      { name: 'Status Page', href: '/status', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Developer Resources', href: '/developer-resources', icon: <Code className="w-4 h-4" /> }
    ]
  }
];

const EnhancedNavigation2025: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // Removed unused isScrolled state and duplicate scroll handler

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };



  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-100">
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
              <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                Get Started
              </Link>
              <Link href="/support" className="hover:text-cyan-300 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-3 py-2"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-3 py-2"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl z-50"
                        onMouseLeave={closeDropdown}
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                              >
                                <div className="flex-shrink-0">
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                                    {child.name}
                                  </p>
                                  {child.description && (
                                    <p className="text-xs text-gray-400 mt-1">
                                      {child.description}
                                    </p>
                                  )}
                                </div>
                                {child.featured && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-cyan-500/20 text-cyan-300">
                                    Featured
                                  </span>
                                )}
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

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search Component */}
              <SearchComponent />

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  aria-label="Get a quote for our services"
                >
                  Get Quote
                </Link>
                <Link
                  href="/get-started"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Get started with Zion Tech Group"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Search solutions..."
                  className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  aria-label="Search solutions"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </form>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
                  <h2 className="text-white font-semibold text-lg">Menu</h2>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Search */}
                <div className="p-6 border-b border-cyan-500/20">
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search solutions..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        aria-label="Search solutions"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </form>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 p-6 space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      {item.label === 'Solutions' || item.label === 'Services' ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.label)}
                            className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-3 py-2"
                            aria-expanded={activeDropdown === item.label}
                            aria-haspopup="true"
                          >
                            <span>{item.label}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-8 mt-2 space-y-2"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={closeMobileMenu}
                                  className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                  {child.icon && <child.icon className="w-4 h-4" />}
                                  <span>{child.label}</span>
                                  {child.badge && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                                      {child.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-3 py-2"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 text-center text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation2025;