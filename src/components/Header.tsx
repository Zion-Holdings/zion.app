
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', path: '/', icon: null },
    { name: 'About', path: '/about', icon: null },
    { name: 'Services', path: '/all-services', icon: ChevronDown, hasDropdown: true },
    { name: 'Contact', path: '/contact', icon: null },
  ];

  const serviceCategories = [
    { name: 'AI Services', path: '/all-services?category=AI Services' },
    { name: 'IT Services', path: '/all-services?category=IT Services' },
    { name: 'Micro SAAS', path: '/all-services?category=Micro SAAS' },
    { name: 'Development', path: '/all-services?category=Development' },
    { name: 'Analytics', path: '/all-services?category=Analytics' },
    { name: 'Security', path: '/all-services?category=Security' },
    { name: 'Automation', path: '/all-services?category=Automation' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg shadow-zion-cyan/10">
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
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 py-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <span className={isActive(item.path) ? 'text-zion-cyan' : ''}>
                      {item.name}
                    </span>
                    {item.icon && <item.icon className="h-4 w-4" />}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`py-2 transition-colors duration-300 ${
                      isActive(item.path)
                        ? 'text-zion-cyan border-b-2 border-zion-cyan'
                        : 'text-zion-slate-light hover:text-zion-cyan'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Services Dropdown */}
                {item.hasDropdown && isServicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-xl shadow-zion-cyan/20 p-4"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {serviceCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          {category.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                      <Link
                        to="/all-services"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300"
                      >
                        <Sparkles className="h-4 w-4" />
                        View All Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105 shadow-lg shadow-zion-cyan/25"
            >
              <Sparkles className="h-4 w-4" />
              Get Quote
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-zion-slate-light hover:text-zion-cyan p-2 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-zion-cyan/20">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-left py-2 px-4 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {serviceCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.path}
                              className="block py-2 px-4 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-2 px-4 transition-colors duration-300 ${
                        isActive(item.path)
                          ? 'text-zion-cyan bg-zion-cyan/10 rounded-lg'
                          : 'text-zion-slate-light hover:text-zion-cyan'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-zion-cyan/20">
                <Link
                  to="/contact"
                  className="block w-full text-center py-3 px-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Sparkles className="h-4 w-4 inline mr-2" />
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
