import React from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">Logo</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900">Services</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900">About</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
