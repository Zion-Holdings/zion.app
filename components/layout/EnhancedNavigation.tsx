import React from 'react';
import Link from 'next/link';

export default function EnhancedNavigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-bold text-gray-800">Zion Tech</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <span className="text-gray-600 hover:text-gray-900">Home</span>
            </Link>
            <Link href="/services">
              <span className="text-gray-600 hover:text-gray-900">Services</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-600 hover:text-gray-900">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-600 hover:text-gray-900">Contact</span>
            </Link>
            <Link href="/auth/login">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
