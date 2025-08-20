import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Case Studies
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Blog
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Services
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Case Studies
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Blog
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Contact
              </Link>
              <div className="pt-4">
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}