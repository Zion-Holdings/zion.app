import React from 'react';

export default function EnhancedNavigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">Zion Tech</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/services" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}