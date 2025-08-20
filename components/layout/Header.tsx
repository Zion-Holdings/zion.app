import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-semibold text-xl">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/resources" 
              className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Resources
            </Link>
            <Link 
              href="/contact" 
              className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all duration-200 text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/resources" 
                className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="block w-full px-3 py-2 bg-white text-black rounded-lg font-medium text-center text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;