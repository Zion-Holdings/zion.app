import React, { useState } from 'react';
import Link from 'next/link';

interface InteractiveNavigationProps {
  className?: string;
}

const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({ className = '' }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-white/80 backdrop-blur-md border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">Bolt.new</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default InteractiveNavigation;
