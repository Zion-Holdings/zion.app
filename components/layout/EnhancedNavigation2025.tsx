import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Globe,
  Shield,
  Brain,
  Rocket,
  BarChart3,
  Cpu
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface DropdownItem {
  label: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/', icon: Globe },
  { label: 'Solutions', href: '/solutions', icon: Shield },
  { label: 'Services', href: '/services', icon: Brain },
  { label: 'About', href: '/about', icon: Rocket },
  { label: 'Contact', href: '/contact', icon: Mail }
];

const solutionsDropdown: DropdownItem[] = [
  { label: 'AI & Machine Learning', href: '/solutions/ai-ml', description: 'Intelligent automation and predictive analytics', icon: Brain },
  { label: 'Cybersecurity', href: '/solutions/cybersecurity', description: 'Advanced threat protection and compliance', icon: Shield },
  { label: 'Cloud Infrastructure', href: '/solutions/cloud', description: 'Scalable and secure cloud solutions', icon: Cpu },
  { label: 'Data Analytics', href: '/solutions/data-analytics', description: 'Transform data into actionable insights', icon: BarChart3 }
];

const servicesDropdown: DropdownItem[] = [
  { label: 'Consulting', href: '/services/consulting', description: 'Strategic technology advisory and planning', icon: Brain },
  { label: 'Development', href: '/services/development', description: 'Custom software and application development', icon: Rocket },
  { label: 'Training', href: '/services/training', description: 'Professional development and skill enhancement', icon: Cpu },
  { label: 'Support', href: '/services/support', description: '24/7 technical support and maintenance', icon: Shield }
];

const EnhancedNavigation2025: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // Removed unused isScrolled state and duplicate scroll handler

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get('search') as string;
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Dynamic background based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 50) {
          nav.style.background = 'rgba(0, 0, 0, 0.95)';
          nav.style.backdropFilter = 'blur(20px)';
        } else {
          nav.style.background = 'rgba(0, 0, 0, 0.8)';
          nav.style.backdropFilter = 'blur(10px)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-md">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>info@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.label === 'Solutions' || item.label === 'Services' ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-3 py-2"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-3 py-2"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown for Solutions */}
                {item.label === 'Solutions' && activeDropdown === 'Solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10">
                    <div className="p-4">
                      <h3 className="text-white font-semibold mb-3 text-lg">Our Solutions</h3>
                      <div className="space-y-3">
                        {solutionsDropdown.map((solution) => (
                          <Link
                            key={solution.label}
                            href={solution.href}
                            onClick={closeDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                          >
                            <solution.icon className="w-5 h-5 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors duration-200" />
                            <div>
                              <div className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">
                                {solution.label}
                              </div>
                              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
                                {solution.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for Services */}
                {item.label === 'Services' && activeDropdown === 'Services' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10">
                    <div className="p-4">
                      <h3 className="text-white font-semibold mb-3 text-lg">Our Services</h3>
                      <div className="space-y-3">
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            onClick={closeDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                          >
                            <service.icon className="w-5 h-5 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors duration-200" />
                            <div>
                              <div className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">
                                {service.label}
                              </div>
                              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
                            <div className="ml-4 mt-2 space-y-2">
                              {item.label === 'Solutions' && solutionsDropdown.map((solution) => (
                                <Link
                                  key={solution.label}
                                  href={solution.href}
                                  onClick={closeMobileMenu}
                                  className="block text-gray-400 hover:text-cyan-300 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-500/10"
                                >
                                  {solution.label}
                                </Link>
                              ))}
                              {item.label === 'Services' && servicesDropdown.map((service) => (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  onClick={closeMobileMenu}
                                  className="block text-gray-400 hover:text-cyan-300 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-500/10"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          )}
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
                  ))}
                </nav>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-cyan-500/20">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">info@ziontechgroup.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation2025;