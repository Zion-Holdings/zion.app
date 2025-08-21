import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Users,
  FileText,
  BarChart3,
  Cpu,
  Database,
  Shield,
  Zap,
  Brain,
  Atom,
  Eye,
  Lock,
  TrendingUp,
  Star,
  Award,
  Rocket,
  Target,
  Building,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
  Calendar,
  CreditCard,
  Code,
  BookOpen,
  Activity,
  Cloud,
  Bot,
  Settings
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  subItems?: NavigationItem[];
}

const NeoFuturisticNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as any;
    if (target && typeof target.closest === 'function' && !target.closest('.dropdown-container')) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      href: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      label: 'Services',
      href: '/services',
      icon: <Zap className="w-4 h-4" />,
      subItems: [
        { label: 'AI Services', href: '/services?category=ai', icon: <Brain className="w-4 h-4" /> },
        { label: 'Quantum Computing', href: '/services?category=quantum', icon: <Atom className="w-4 h-4" /> },
        { label: 'Cloud Solutions', href: '/services?category=cloud', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Cybersecurity', href: '/services?category=security', icon: <Shield className="w-4 h-4" /> },
        { label: 'Data Analytics', href: '/services?category=analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'Automation', href: '/services?category=automation', icon: <Bot className="w-4 h-4" /> }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      label: 'Case Studies',
      href: '/case-studies',
      icon: <FileText className="w-4 h-4" />
    },
    {
      label: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: <MessageSquare className="w-4 h-4" />
    }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-cyan-400/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative dropdown-container">
                  {item.subItems ? (
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      {item.icon && <span className="group-hover:scale-110 transition-transform duration-200">{item.icon}</span>}
                      <span>{item.label}</span>
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {item.subItems && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-200 group"
                          >
                            {subItem.icon && (
                              <span className="group-hover:scale-110 transition-transform duration-200">
                                {subItem.icon}
                              </span>
                            )}
                            <span>{subItem.label}</span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                onClick={() => window.open('/contact', '_self')}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-t border-cyan-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-center lg:justify-end space-x-6 text-sm text-cyan-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-32 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-cyan-400/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                      >
                        <span className="flex items-center space-x-2">
                          {item.icon && <span>{item.icon}</span>}
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-2 border-l border-cyan-400/20 pl-4"
                        >
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-1"
                            >
                              {subItem.icon && <span>{subItem.icon}</span>}
                              <span>{subItem.label}</span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon && <span>{item.icon}</span>}
                      <span>{item.label}</span>
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-400/20">
                <button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  onClick={() => {
                    window.open('/contact', '_self');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NeoFuturisticNavigation;