<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Zap, Globe, Shield } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Product', href: '#', hasDropdown: true },
    { name: 'Solutions', href: '/services' },
    { name: 'Micro SaaS', href: '/micro-saas-services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Company', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Compare', href: '/pricing-comparison' },
  ];

  const productDropdown = [
    { name: 'AI Code Assistant', href: '/ai-assistant', description: 'Intelligent code completion and suggestions' },
    { name: 'Cloud Platform', href: '/cloud-platform', description: 'Scalable cloud infrastructure' },
    { name: 'Automation Hub', href: '/automation', description: 'AI-powered workflow automation' },
    { name: 'Analytics', href: '/analytics', description: 'Real-time insights and reporting' },
    { name: 'Micro SaaS Services', href: '/micro-saas-services', description: 'Professional business solutions' },
  ];

  const isActive = (href: string) => router.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      {/* Futuristic Background Glow */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                Zion Tech
              </span>
              <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                Group
              </span>
=======
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: 'AI Development', href: '/services/ai-development', description: 'Custom AI solutions and ML models' },
    { name: 'Cloud Architecture', href: '/services/cloud-services', description: 'Scalable cloud infrastructure' },
    { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence & insights' },
    { name: 'Blockchain Solutions', href: '/services/blockchain', description: 'Decentralized applications' },
    { name: 'IoT Platforms', href: '/services/iot-platforms', description: 'Connected device solutions' },
    { name: 'Web Development', href: '/services/web-development', description: 'Modern web applications' },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" aria-label="Zion Tech Group - Homepage">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
            </div>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 mr-6">
              <a href="tel:+13024640950" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-neon-blue transition-colors duration-200">
                <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></span>
                <span>+1 302 464 0950</span>
              </a>
            </div>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Product') {
                          setIsProductDropdownOpen(!isProductDropdownOpen);
                          setIsSolutionsDropdownOpen(false);
                        } else if (item.name === 'Solutions') {
                          setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
                          setIsProductDropdownOpen(false);
                        }
                      }}
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        (item.name === 'Product' && isProductDropdownOpen) || 
                        (item.name === 'Solutions' && isSolutionsDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {item.name === 'Product' && isProductDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4">
                        <div className="grid gap-3">
                          {productDropdown.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 group hover:scale-105"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                                {product.icon}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                                  {product.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                  {product.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {isSaasToolsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4">
                        <div className="grid gap-3">
                          {saasToolsDropdown.map((tool) => (
                            <Link
                              key={tool.name}
                              href={tool.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                              onClick={() => setIsSaasToolsDropdownOpen(false)}
                            >
                              <div className="font-medium text-white mb-1">{tool.name}</div>
                              <div className="text-sm text-gray-400">{tool.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.name === 'Solutions' && isSolutionsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4">
                        <div className="grid gap-3">
                          {solutionsDropdown.map((solution) => (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                              onClick={() => setIsSolutionsDropdownOpen(false)}
                            >
                              <div className="font-medium text-white mb-1">{solution.name}</div>
                              <div className="text-sm text-gray-400">{solution.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-semibold rounded-lg hover:from-neon-cyan hover:to-neon-blue transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon-blue/25"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10"
            >
              Contact
            </Link>
            <Link
              href="/micro-saas"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-black/90 backdrop-blur-xl rounded-xl mt-2 border border-white/10 shadow-2xl">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="px-4 py-3 text-base font-medium text-white">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.name === 'Product' && productDropdown.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="font-medium">{product.name}</div>
                            <div className="text-xs text-gray-500">{product.description}</div>
                          </Link>
                        ))}
                        {item.name === 'Solutions' && solutionsDropdown.map((solution) => (
                          <Link
                            key={solution.name}
                            href={solution.href}
                            className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="font-medium">{solution.name}</div>
                            <div className="text-xs text-gray-500">{solution.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-white/20">
              <Link
                href="/contact"
                className="block px-4 py-3 text-center text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 mb-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/micro-saas"
                className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg text-center transition-all duration-300 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
=======
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link 
              href="/" 
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="Home page"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group" ref={servicesRef}>
              <button 
                className="flex items-center text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  }
                }}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                <span>Services</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 animate-in fade-in-0 zoom-in-95 duration-200"
                  role="menu"
                  aria-label="Services submenu"
                >
                  {services.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800"
                      role="menuitem"
                      tabIndex={isServicesOpen ? 0 : -1}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-400 mt-1">{service.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="About us page"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="Contact us page"
            >
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Get started with your project"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden bg-gray-900 border-t border-gray-700 py-4 animate-in slide-in-from-top-5 duration-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Home page"
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="px-4 py-2">
                <div className="text-white font-medium mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-gray-300 hover:text-white hover:bg-gray-800 px-2 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => setIsMenuOpen(false)}
                aria-label="About us page"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Contact us page"
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="px-4 pt-2">
                <Link 
                  href="/contact" 
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Get started with your project"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
