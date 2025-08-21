import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  Settings, 
  LogOut,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Zap,
  Star,
  Globe,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface UltraAdvancedNavigation2026Props {
  className?: string;
}

const UltraAdvancedNavigation2026: React.FC<UltraAdvancedNavigation2026Props> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Rocket,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai', icon: Brain, color: 'from-blue-500 to-purple-600' },
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: Zap, color: 'from-purple-500 to-pink-600' },
        { name: 'Enterprise IT', href: '/services?category=enterprise', icon: Shield, color: 'from-green-500 to-blue-600' },
        { name: 'Micro SaaS', href: '/services?category=micro-saas', icon: Cloud, color: 'from-orange-500 to-red-600' },
        { name: 'Emerging Tech', href: '/services?category=emerging', icon: Star, color: 'from-indigo-500 to-purple-600' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Shield,
      dropdown: [
        { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Zap, color: 'from-purple-500 to-pink-600' },
        { name: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure', icon: Cloud, color: 'from-blue-500 to-indigo-600' },
        { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
        { name: 'Data Analytics', href: '/solutions/data-analytics', icon: Brain, color: 'from-green-500 to-blue-600' }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: Star
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: Globe,
      dropdown: [
        { name: 'Blog', href: '/blog', icon: Brain, color: 'from-blue-500 to-purple-600' },
        { name: 'Case Studies', href: '/case-studies', icon: Star, color: 'from-green-500 to-blue-600' },
        { name: 'Documentation', href: '/docs', icon: Shield, color: 'from-red-500 to-orange-600' },
        { name: 'API Reference', href: '/api', icon: Zap, color: 'from-purple-500 to-pink-600' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: User,
      dropdown: [
        { name: 'About Us', href: '/about', icon: User, color: 'from-blue-500 to-purple-600' },
        { name: 'Careers', href: '/careers', icon: Star, color: 'from-green-500 to-blue-600' },
        { name: 'Contact', href: '/contact', icon: Phone, color: 'from-red-500 to-orange-600' },
        { name: 'News', href: '/news', icon: Globe, color: 'from-indigo-500 to-purple-600' }
      ]
    }
  ];

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/services?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      } ${className}`}
    >
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech
                </span>
                <div className="text-xs text-gray-400 -mt-1">Innovation Group</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                          >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                              <dropdownItem.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                              {dropdownItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pb-4"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions, and resources..."
                  className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
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
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
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
                            className="ml-4 mt-2 space-y-1"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                              >
                                <dropdownItem.icon className="w-4 h-4" />
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraAdvancedNavigation2026;