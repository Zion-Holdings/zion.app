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
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Micro SAAS Services
                  </Link>
                  <Link to="/comprehensive-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Comprehensive Services
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AI & Machine Learning
                  </Link>
                  <Link to="/enterprise-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Enterprise Solutions
                  </Link>
                  <Link to="/advanced-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Advanced Services
                  </Link>
                  <Link to="/emerging-tech-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Emerging Tech Services
                  </Link>
                  <Link to="/industry-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Industry Solutions
                  </Link>
                  <Link to="/ai-business-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AI Business Solutions
                  </Link>
                  <Link to="/cloud-devops-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cloud & DevOps Solutions
                  </Link>
                  <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Digital Transformation
                  </Link>
                  <Link to="/it-onsite-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    IT Onsite Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                Solutions
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/marketplace" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Marketplace
                  </Link>
                  <Link to="/talent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Talent Directory
                  </Link>
                  <Link to="/equipment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Equipment
                  </Link>
                  <Link to="/categories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Categories
                  </Link>
                  <Link to="/green-it" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Green IT
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Blog
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
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