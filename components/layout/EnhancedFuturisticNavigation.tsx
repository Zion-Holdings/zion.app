import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Brain,
  Rocket,
  Shield,
  Cloud,
  Bot,
  RefreshCw,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

const EnhancedFuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/ai-assistant', icon: <Brain className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/security', icon: <Shield className="w-4 h-4" /> },
        { name: 'Cloud Platform', href: '/cloud-platform', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Automation', href: '/automation', icon: <RefreshCw className="w-4 h-4" /> },
        { name: 'Analytics', href: '/analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Micro SAAS', href: '/micro-saas', icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: <Rocket className="w-4 h-4" />,
      dropdown: [
        { name: 'Quantum AI', href: '/quantum-ai', icon: <Brain className="w-4 h-4" /> },
        { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing', icon: <RefreshCw className="w-4 h-4" /> },
        { name: 'Biomedical Research', href: '/biomedical-ai', icon: <Brain className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/space-technology', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Smart Energy', href: '/smart-energy', icon: <Zap className="w-4 h-4" /> },
        { name: 'Autonomous Vehicles', href: '/autonomous-vehicles', icon: <Rocket className="w-4 h-4" /> }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: <Star className="w-4 h-4" /> },
    { name: 'About', href: '/about', icon: <Star className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50' 
            : 'bg-transparent'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-purple-900/60 to-slate-900/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div variants={itemVariants} className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Zion Tech</div>
                  <div className="text-xs text-cyan-400 font-medium">Group</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div variants={itemVariants} className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 group"
                            >
                              <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                {dropdownItem.icon}
                              </div>
                              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                {dropdownItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Us</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Get Started
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              variants={itemVariants}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-white transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 overflow-y-auto">
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">Zion Tech</div>
                      <div className="text-xs text-cyan-400">Group</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-white transition-colors duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3 text-gray-300 font-medium py-2">
                            {item.icon}
                            <span>{item.name}</span>
                          </div>
                          <div className="ml-6 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 py-2"
                              >
                                {dropdownItem.icon}
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-slate-700/50">
                  <h3 className="text-white font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${contactInfo.mobile}`}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{contactInfo.mobile}</span>
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{contactInfo.email}</span>
                    </a>
                    <div className="flex items-start space-x-3 text-gray-400">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="mt-8">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Inquiry from Mobile Navigation`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedFuturisticNavigation;