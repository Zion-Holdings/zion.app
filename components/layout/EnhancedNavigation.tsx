import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors"
                onClick={toggleServices}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="/services/ai-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AI Development
                  </Link>
                  <Link href="/services/cloud-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Cloud Services
                  </Link>
                  <Link href="/services/blockchain-solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Blockchain Solutions
                  </Link>
                  <Link href="/services/data-analytics" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Data Analytics
                  </Link>
                  <Link href="/services/web-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Web Development
                  </Link>
                  <Link href="/services/mobile-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Mobile Development
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Products
            </Link>
            
            <Link href="/solutions" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Solutions
            </Link>
            
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Blog
            </Link>
            
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/services" className="block py-2 text-gray-600 hover:text-blue-600">
                Services
              </Link>
              <Link href="/products" className="block py-2 text-gray-600 hover:text-blue-600">
                Products
              </Link>
              <Link href="/solutions" className="block py-2 text-gray-600 hover:text-blue-600">
                Solutions
              </Link>
              <Link href="/blog" className="block py-2 text-gray-600 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600">
                Contact
              </Link>
              <div className="pt-2">
                <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
