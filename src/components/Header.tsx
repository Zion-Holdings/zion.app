import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" onClick={closeMobileMenu}>
              <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 z-50 ${
                  isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <div className="py-2">
                  <div className="grid grid-cols-2 gap-1">
                    <Link 
                      to="/services" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      All Services
                    </Link>
                    <Link 
                      to="/micro-saas-services" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Micro SAAS Services
                    </Link>
                    <Link 
                      to="/ai-services" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      AI & Machine Learning
                    </Link>
                    <Link 
                      to="/cloud-devops-solutions" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Cloud & DevOps
                    </Link>
                    <Link 
                      to="/cybersecurity" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Cybersecurity
                    </Link>
                    <Link 
                      to="/digital-transformation" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Digital Transformation
                    </Link>
                    <Link 
                      to="/enterprise-solutions" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Enterprise Solutions
                    </Link>
                    <Link 
                      to="/it-onsite-services" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      IT Onsite Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            
            <Link 
              to="/careers" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Careers
            </Link>
            
            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-700 mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/services" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/micro-saas-services" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Micro SAAS Services
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    AI & Machine Learning
                  </Link>
                  <Link 
                    to="/cloud-devops-solutions" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Cloud & DevOps
                  </Link>
                  <Link 
                    to="/cybersecurity" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Cybersecurity
                  </Link>
                  <Link 
                    to="/digital-transformation" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Digital Transformation
                  </Link>
                  <Link 
                    to="/enterprise-solutions" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Enterprise Solutions
                  </Link>
                  <Link 
                    to="/it-onsite-services" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    IT Onsite Services
                  </Link>
                </div>
              </div>

              <Link 
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              
              <Link 
                to="/careers" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
              
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <Link to="/login" onClick={closeMobileMenu}>
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/contact" onClick={closeMobileMenu}>
                    <Button className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};