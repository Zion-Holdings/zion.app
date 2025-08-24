"use client";

import { useState } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold gradient-text">Zion Tech Group</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-blue-400 mb-2">AI & Autonomous</h3>
                        <ul className="space-y-1">
                          <li><a href="/ai-autonomous-business-manager" className="text-sm text-gray-300 hover:text-white block py-1">Business Manager</a></li>
                          <li><a href="/ai-autonomous-business-operations" className="text-sm text-gray-300 hover:text-white block py-1">Business Operations</a></li>
                          <li><a href="/ai-autonomous-code-review" className="text-sm text-gray-300 hover:text-white block py-1">Code Review</a></li>
                          <li><a href="/ai-autonomous-research-assistant" className="text-sm text-gray-300 hover:text-white block py-1">Research Assistant</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-purple-400 mb-2">Technology</h3>
                        <ul className="space-y-1">
                          <li><a href="/quantum-services" className="text-sm text-gray-300 hover:text-white block py-1">Quantum Computing</a></li>
                          <li><a href="/cybersecurity" className="text-sm text-gray-300 hover:text-white block py-1">Cybersecurity</a></li>
                          <li><a href="/enterprise-it" className="text-sm text-gray-300 hover:text-white block py-1">Enterprise IT</a></li>
                          <li><a href="/services" className="text-sm text-gray-300 hover:text-white block py-1">View All Services</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                Company
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCompanyOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl"
                  onMouseEnter={() => setIsCompanyOpen(true)}
                  onMouseLeave={() => setIsCompanyOpen(false)}
                >
                  <div className="p-4">
                    <ul className="space-y-1">
                      <li><a href="/about" className="text-sm text-gray-300 hover:text-white block py-1">About Us</a></li>
                      <li><a href="/case-studies" className="text-sm text-gray-300 hover:text-white block py-1">Case Studies</a></li>
                      <li><a href="/news" className="text-sm text-gray-300 hover:text-white block py-1">News</a></li>
                      <li><a href="/events" className="text-sm text-gray-300 hover:text-white block py-1">Events</a></li>
                      <li><a href="/contact" className="text-sm text-gray-300 hover:text-white block py-1">Contact</a></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="/docs" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Documentation
            </a>

            <a 
              href="/multiverse/launch" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Launch
            </a>

            <button className="btn-primary text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2 mb-4">
              {/* Services Section */}
              <div className="border-b border-white/10 pb-2">
                <h3 className="text-sm font-semibold text-blue-400 mb-2 px-3">Services</h3>
                <a 
                  href="/ai-autonomous-business-manager" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AI Business Manager
                </a>
                <a 
                  href="/ai-autonomous-business-operations" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Business Operations
                </a>
                <a 
                  href="/quantum-services" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Quantum Computing
                </a>
                <a 
                  href="/services" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Services
                </a>
              </div>

              {/* Company Section */}
              <div className="border-b border-white/10 pb-2">
                <h3 className="text-sm font-semibold text-purple-400 mb-2 px-3">Company</h3>
                <a 
                  href="/about" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a 
                  href="/contact" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>

              {/* Other Links */}
              <a 
                href="/docs" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </a>
              <a 
                href="/multiverse/launch" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Launch
              </a>
              <button className="w-full mt-4 btn-primary text-sm">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}