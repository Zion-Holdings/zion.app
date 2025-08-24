import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services') || location.pathname.startsWith('/micro-saas-services') },
    { name: 'AI Matcher', href: '/match', current: location.pathname === '/match' },
    { name: 'Talent', href: '/talent', current: location.pathname.startsWith('/talent') },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const serviceCategories = [
    {
      name: 'AI Services',
      description: 'Advanced AI solutions and automation',
      href: '/micro-saas-services?category=AI Services',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'IT Services',
      description: 'Professional IT consulting and support',
      href: '/micro-saas-services?category=IT Services',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Micro SAAS',
      description: 'Scalable software solutions',
      href: '/micro-saas-services?category=Micro SAAS',
      icon: '🚀',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Development',
      description: 'Custom software development',
      href: '/micro-saas-services?category=Development',
      icon: '⚡',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Security',
      description: 'Cybersecurity and protection',
      href: '/micro-saas-services?category=Security',
      icon: '🔒',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Cloud & Analytics',
      description: 'Cloud solutions and data insights',
      href: '/micro-saas-services?category=Cloud',
      icon: '☁️',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/40 backdrop-blur-2xl border-b border-zion-cyan/30 shadow-2xl' 
        : 'bg-black/20 backdrop-blur-xl border-b border-white/10'
    }`}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zion-blue to-transparent animate-pulse delay-500"></div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                    Zion Tech Group
                  </div>
                  <div className="text-xs text-zion-cyan/80">Innovation • Intelligence • Impact</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    item.current
                      ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                      : 'text-white/80 hover:text-zion-cyan hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {item.current && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
                  )}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-zion-cyan hover:bg-white/5 rounded-md transition-all duration-300"
                >
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                </button>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-xl border border-zion-cyan/30 rounded-xl shadow-2xl p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {serviceCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="group p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white text-sm`}>
                              {category.icon}
                            </div>
                            <div>
                              <div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                                {category.name}
                              </div>
                              <div className="text-xs text-white/60">{category.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-white/80 hover:text-zion-cyan transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <Link
                to="/contact"
                className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                />
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                        : 'text-white/80 hover:text-zion-cyan hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Service Categories */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-medium text-white/60 mb-3">Service Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-sm text-white/80">{category.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}