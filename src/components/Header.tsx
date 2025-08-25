import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Marketplace
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Blog
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};