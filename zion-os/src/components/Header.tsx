'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Home
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    <Link href="/ai-solutions" className="px-4 py-3 hover:bg-gray-50 transition-colors duration-200">
                      <div className="font-medium text-gray-900">AI Solutions</div>
                      <div className="text-sm text-gray-500">Advanced AI-powered business solutions</div>
                    </Link>
                    <Link href="/ai-autonomous-systems" className="px-4 py-3 hover:bg-gray-50 transition-colors duration-200">
                      <div className="font-medium text-gray-900">Autonomous Systems</div>
                      <div className="text-sm text-gray-500">Self-operating AI systems and automation</div>
                    </Link>
                    <Link href="/quantum-computing" className="px-4 py-3 hover:bg-gray-50 transition-colors duration-200">
                      <div className="font-medium text-gray-900">Quantum Computing</div>
                      <div className="text-sm text-gray-500">Next-generation quantum solutions</div>
                    </Link>
                    <Link href="/research-development" className="px-4 py-3 hover:bg-gray-50 transition-colors duration-200">
                      <div className="font-medium text-gray-900">Research & Development</div>
                      <div className="text-sm text-gray-500">Innovation and cutting-edge research</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Case Studies
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Team
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Careers
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Blog
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:block w-80">
            <SearchBar />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Home
            </Link>
            <Link href="/ai-solutions" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              AI Solutions
            </Link>
            <Link href="/ai-autonomous-systems" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Autonomous Systems
            </Link>
            <Link href="/quantum-computing" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Quantum Computing
            </Link>
            <Link href="/research-development" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Research & Development
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              About
            </Link>
            <Link href="/case-studies" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Case Studies
            </Link>
            <Link href="/team" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Team
            </Link>
            <Link href="/careers" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Careers
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Blog
            </Link>
            <Link href="/resources" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Resources
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}