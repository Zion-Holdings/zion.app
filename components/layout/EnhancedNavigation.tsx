import React from 'react';

const EnhancedNavigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              Zion Tech
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
