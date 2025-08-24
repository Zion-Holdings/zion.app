import React from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Zion Tech Group
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
<<<<<<< HEAD
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Products
            </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
              Solutions
=======
            <Link href="/">
              <a className="text-gray-600 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-600 hover:text-gray-900">Services</a>
            </Link>
            <Link href="/products">
              <a className="text-gray-600 hover:text-gray-900">Products</a>
            </Link>
            <Link href="/talent">
              <a className="text-gray-600 hover:text-gray-900">Talent</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-600 hover:text-gray-900">Blog</a>
            </Link>
            <Link href="/automation">
              <a className="text-gray-600 hover:text-gray-900">Automation</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-600 hover:text-gray-900">About</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-600 hover:text-gray-900">Contact</a>
>>>>>>> 3c1dda747d3aa200ea8a4e49d78b84af83a4d328
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
