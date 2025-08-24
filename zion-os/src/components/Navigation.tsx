"use client";

import { useState } from "react";
import Link from "next/link";

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
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold gradient-text">Zion Tech Group</span>
            </Link>
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
                  <div className="p-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">AI Solutions</h4>
                      <ul className="space-y-1 text-sm">
                        <li><Link href="/ai-services" className="text-gray-400 hover:text-white transition-colors block py-1">AI Services Overview</Link></li>
                        <li><Link href="/ai-autonomous-business-operations" className="text-gray-400 hover:text-white transition-colors block py-1">Business Operations</Link></li>
                        <li><Link href="/ai-business-intelligence" className="text-gray-400 hover:text-white transition-colors block py-1">Business Intelligence</Link></li>
                        <li><Link href="/ai-content-generator" className="text-gray-400 hover:text-white transition-colors block py-1">Content Generation</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Enterprise</h4>
                      <ul className="space-y-1 text-sm">
                        <li><Link href="/enterprise-it" className="text-gray-400 hover:text-white transition-colors block py-1">IT Infrastructure</Link></li>
                        <li><Link href="/cybersecurity" className="text-gray-400 hover:text-white transition-colors block py-1">Cybersecurity</Link></li>
                        <li><Link href="/quantum-services" className="text-gray-400 hover:text-white transition-colors block py-1">Quantum Computing</Link></li>
                        <li><Link href="/space-tech" className="text-gray-400 hover:text-white transition-colors block py-1">Space Technology</Link></li>
                      </ul>
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
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors block py-1">About Us</Link></li>
                      <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors block py-1">Case Studies</Link></li>
                      <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors block py-1">News</Link></li>
                      <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors block py-1">Events</Link></li>
                      <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors block py-1">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/zion-os" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Zion OS
            </Link>
            <Link 
              href="/docs" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Docs
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link href="/multiverse/launch" className="btn-primary text-sm">
              Get Started
            </Link>
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
              <div className="border-b border-white/10 pb-2 mb-2">
                <h4 className="text-white font-semibold mb-2 px-3">Services</h4>
                <Link 
                  href="/ai-services" 
                  className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AI Solutions
                </Link>
                <Link 
                  href="/enterprise-it" 
                  className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Enterprise IT
                </Link>
                <Link 
                  href="/cybersecurity" 
                  className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cybersecurity
                </Link>
                <Link 
                  href="/quantum-services" 
                  className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Quantum Computing
                </Link>
              </div>
              
              <div className="border-b border-white/10 pb-2 mb-2">
                <h4 className="text-white font-semibold mb-2 px-3">Company</h4>
                <Link 
                  href="/about" 
                  className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/case-studies" 
                  className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  href="/news" 
                  className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  News
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <Link 
                href="/zion-os" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Zion OS
              </Link>
              <Link 
                href="/docs" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link 
                href="/multiverse/launch" 
                className="w-full mt-4 btn-primary text-sm block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}