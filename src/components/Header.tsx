import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronDown, Search, Phone, Mail, MapPin } from 'lucide-react';

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
      icon: '🤖'
    },
    {
      name: 'IT Services',
      description: 'Comprehensive IT infrastructure',
      href: '/micro-saas-services?category=IT Services',
      icon: '🔧'
    },
    {
      name: 'Micro SAAS',
      description: 'Scalable software solutions',
      href: '/micro-saas-services?category=Micro SAAS',
      icon: '💼'
    },
    {
      name: 'Development',
      description: 'Custom software development',
      href: '/micro-saas-services?category=Development',
      icon: '💻'
    },
    {
      name: 'Analytics',
      description: 'Data-driven insights',
      href: '/micro-saas-services?category=Analytics',
      icon: '📊'
    },
    {
      name: 'Security',
      description: 'Cybersecurity solutions',
      href: '/micro-saas-services?category=Security',
      icon: '🛡️'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg shadow-zion-cyan/10' 
        : 'bg-zion-blue-dark/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Services' ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 py-2"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <span className={item.current ? 'text-zion-cyan' : ''}>
                      {item.name}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`py-2 transition-colors duration-300 ${
                      item.current
                        ? 'text-zion-cyan border-b-2 border-zion-cyan'
                        : 'text-zion-slate-light hover:text-zion-cyan'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="h-4 w-4" />
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Services Dropdown */}
        {isServicesDropdownOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="group p-4 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-cyan/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-zion-slate-light">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block py-3 px-4 rounded-lg transition-colors duration-300 ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Service Categories */}
              <div className="pt-4 border-t border-zion-cyan/20">
                <h3 className="text-sm font-medium text-zion-cyan/60 mb-3">Service Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-3 rounded-lg bg-zion-cyan/5 hover:bg-zion-cyan/10 border border-zion-cyan/20 transition-all duration-300"
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
              <div className="pt-4 border-t border-zion-cyan/20 space-y-3">
                <div className="flex items-center space-x-3 text-zion-cyan/80">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-cyan/80">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-cyan/80">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 mt-4"
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
