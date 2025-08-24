import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, ChevronRight, 
  Briefcase, Users, BookOpen, Phone, 
  Zap, Shield, Brain, Rocket, Cpu, Atom
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  featured?: boolean;
  color?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Professional technology solutions for modern businesses',
    badge: '2025',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'AI & Machine Learning', 
        href: '/ai-services', 
        description: 'AI-powered solutions for business transformation',
        icon: <Brain className="w-4 h-4" />,
        featured: true,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Quantum Computing', 
        href: '/quantum-computing', 
        description: 'Next-generation quantum solutions',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Cybersecurity', 
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise-grade security solutions'
      },
      {
        name: 'Cloud Platform',
        href: '/cloud-platform',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure'
      },
      {
        name: 'Space Technology',
        href: '/space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Briefcase className="w-5 h-5" />,
    children: [
      { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
      { name: 'SMB Solutions', href: '/smb-solutions' },
      { name: 'Digital Transformation', href: '/digital-transformation' },
      { name: 'Custom Development', href: '/custom-development' }
    ]
  },
  {
    name: 'About',
    href: '/about',
    icon: <Users className="w-5 h-5" />,
    children: [
      { name: 'Our Story', href: '/about/story' },
      { name: 'Team', href: '/about/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    children: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Training', href: '/training' }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w-5 h-5" />
  }
];

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative" ref={dropdownRef}>
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                        >
                          {child.icon && (
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${child.color || 'from-gray-500 to-gray-600'} p-2 flex-shrink-0`}>
                              {child.icon}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-200">
                                {child.name}
                              </p>
                              {child.featured && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                                  Featured
                                </span>
                              )}
                            </div>
                            {child.description && (
                              <p className="mt-1 text-xs text-white/60 group-hover:text-white/80 transition-colors duration-200">
                                {child.description}
                              </p>
                            )}
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors duration-200 flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white transition-colors duration-200"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left text-white/80 hover:text-white transition-colors duration-200 py-2"
                      >
                        <span className="flex items-center">
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.name}
                        </span>
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
                              className="block text-white/60 hover:text-white transition-colors duration-200 py-1"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center text-white/80 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full text-white font-medium text-center transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation;