import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI & Machine Learning', path: '/ai-services' },
        { name: 'Micro SAAS Solutions', path: '/micro-saas-services' },
        { name: 'Cloud & DevOps', path: '/cloud-devops-solutions' },
        { name: 'Cybersecurity', path: '/advanced-cybersecurity-suite' },
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions' },
        { name: 'IT Onsite Services', path: '/it-onsite-services' }
      ]
    },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServicesDropdown = () => setIsServicesOpen(!isServicesOpen);

  return (
    <header className="bg-white/10 backdrop-blur-sm shadow-sm border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button 
                      className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                        isActive(item.path) 
                          ? 'text-zion-cyan' 
                          : 'text-zion-slate-light hover:text-white'
                      }`}
                      onClick={toggleServicesDropdown}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg transition-all duration-200 ${
                      isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                      <div className="py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.path) 
                        ? 'text-zion-cyan' 
                        : 'text-zion-slate-light hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="bg-zion-cyan hover:bg-zion-cyan-light text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-zion-cyan transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={toggleServicesDropdown}
                      className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                        isActive(item.path) 
                          ? 'text-zion-cyan' 
                          : 'text-zion-slate-light hover:text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-3 py-2 text-sm text-zion-slate-light hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.path) 
                        ? 'text-zion-cyan' 
                        : 'text-zion-slate-light hover:text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-2">
              <Link to="/login" className="block">
                <Button variant="outline" size="sm" className="w-full border-white/30 text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
              <Link to="/contact" className="block">
                <Button size="sm" className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};