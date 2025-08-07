import React from 'react';
import Link from 'next/link';

const InteractiveNavigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">Interactive Nav</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Home</span>
            </Link>
            <Link href="/services">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Services</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InteractiveNavigation;
