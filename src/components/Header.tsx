import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail, MapPin } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services') },
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
    },
    {
      name: 'IT Services',
      description: 'Comprehensive IT solutions',
      href: '/micro-saas-services?category=IT Services',
    },
    {
      name: 'Micro SAAS',
      description: 'Specialized software solutions',
      href: '/micro-saas-services?category=Micro SAAS',
    },
    {
      name: 'Development',
      description: 'Custom development services',
      href: '/micro-saas-services?category=Development',
    },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Services' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        item.current
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {item.name}
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="absolute z-10 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        <div className="grid grid-cols-2 gap-4 p-4">
                          {serviceCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.href}
                              className="group p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                {category.name}
                              </div>
                              <div className="text-sm text-gray-500 group-hover:text-gray-700">
                                {category.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-200 pt-2">
                          <Link
                            to="/services"
                            className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 font-medium"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.current
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    item.current
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="px-3 py-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
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
          </div>
        )}
      </div>
    </header>
  );
}
